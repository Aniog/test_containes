import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
        <img
          data-strk-img-id={`shop-${product.images[0].id}`}
          data-strk-img={product.images[0].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <img
          data-strk-img-id={`shop-hover-${product.images[1].id}`}
          data-strk-img={product.images[1].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => onAddToCart(product)}
          className={`absolute bottom-3 left-3 right-3 bg-dark/90 text-dark-text py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        <h3 className="text-sm tracking-widest uppercase text-text-primary group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs text-text-secondary">{product.rating}</span>
          <span className="text-xs text-text-muted">({product.reviews})</span>
        </div>
        <p className="text-sm text-text-primary mt-1">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPrice = searchParams.get('price') || 'all';
  const selectedMaterial = searchParams.get('material') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, 'gold');
  };

  // Filter products
  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }
  if (selectedPrice !== 'all') {
    const [min, max] = selectedPrice.split('-').map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= (max || Infinity));
  }
  if (selectedMaterial !== 'all') {
    filtered = filtered.filter((p) => p.material === selectedMaterial);
  }

  // Sort
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all';

  return (
    <div ref={containerRef} className="bg-background min-h-screen">
      {/* Header */}
      <div className="pt-24 pb-8 lg:pt-32 lg:pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            {selectedCategory !== 'all'
              ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
              : 'All Jewelry'}
          </h1>
          <p className="text-text-secondary text-sm">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-text-primary mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm transition-colors capitalize ${
                        selectedCategory === cat.id ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-text-primary mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-999', label: 'Over $100' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('price', option.value)}
                      className={`block text-sm transition-colors ${
                        selectedPrice === option.value ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-text-primary mb-3">Material</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('material', 'all')}
                    className={`block text-sm transition-colors ${
                      selectedMaterial === 'all' ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => updateFilter('material', 'gold')}
                    className={`block text-sm transition-colors capitalize ${
                      selectedMaterial === 'gold' ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Gold Plated
                  </button>
                  <button
                    onClick={() => updateFilter('material', 'silver')}
                    className={`block text-sm transition-colors capitalize ${
                      selectedMaterial === 'silver' ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Silver Plated
                  </button>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button + sort */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm text-text-primary border border-border px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && <span className="w-2 h-2 bg-accent rounded-full" />}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-text-primary border border-border px-3 py-2 bg-surface"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-surface shadow-xl overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-text-primary">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-text-primary" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-text-primary mb-3">Category</h4>
                    <div className="space-y-2">
                      <button onClick={() => { updateFilter('category', 'all'); }} className={`block text-sm ${selectedCategory === 'all' ? 'text-accent' : 'text-text-secondary'}`}>All</button>
                      {categories.map((cat) => (
                        <button key={cat.id} onClick={() => updateFilter('category', cat.id)} className={`block text-sm capitalize ${selectedCategory === cat.id ? 'text-accent' : 'text-text-secondary'}`}>{cat.label}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-text-primary mb-3">Price</h4>
                    <div className="space-y-2">
                      {[{ value: 'all', label: 'All Prices' }, { value: '0-50', label: 'Under $50' }, { value: '50-100', label: '$50 - $100' }, { value: '100-999', label: 'Over $100' }].map((opt) => (
                        <button key={opt.value} onClick={() => updateFilter('price', opt.value)} className={`block text-sm ${selectedPrice === opt.value ? 'text-accent' : 'text-text-secondary'}`}>{opt.label}</button>
                      ))}
                    </div>
                  </div>
                  {hasActiveFilters && (
                    <button onClick={() => { clearFilters(); setFilterOpen(false); }} className="text-sm text-accent hover:underline">Clear all filters</button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-text-muted">
                Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-text-primary border border-border px-3 py-2 bg-surface"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-text-secondary mb-2">No pieces found</p>
                <p className="text-sm text-text-muted mb-4">Try adjusting your filters</p>
                <button onClick={clearFilters} className="text-accent text-sm tracking-widest uppercase hover:underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
