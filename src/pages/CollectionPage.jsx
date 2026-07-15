import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X, ChevronDown, Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-border/30 mb-4">
        <img
          data-strk-img-id={`shop-${product.images[0].id}`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-dark text-velmora-dark-text text-xs tracking-wider uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-dark/90 backdrop-blur-sm text-velmora-dark-text py-3 text-xs tracking-widest uppercase hover:bg-velmora-accent transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-base tracking-wider uppercase text-velmora-text group-hover:text-velmora-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-accent text-velmora-accent" />
            <span className="text-xs text-velmora-secondary">{product.rating}</span>
          </div>
          <span className="text-xs text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-velmora-text font-medium mt-1">${product.price}</p>
      </Link>
    </div>
  );
};

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, sortBy]);

  const filteredProducts = products
    .filter(p => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (selectedMaterial !== 'all' && !p.material.toLowerCase().includes(selectedMaterial.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return b.reviews - a.reviews;
        default: return 0;
      }
    });

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-velmora-surface py-12 md:py-16 border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="shop-page-title" className="font-serif text-4xl md:text-5xl text-velmora-text mb-3">
            The Collection
          </h1>
          <p className="text-velmora-secondary text-base md:text-lg max-w-xl mx-auto">
            Discover demi-fine jewelry designed for everyday luxury.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-velmora-text text-sm"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-velmora-accent text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-velmora-text pr-6 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-velmora-secondary pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className={`hidden md:block w-64 flex-shrink-0`}>
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm tracking-wider uppercase text-velmora-text mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-velmora-accent' : 'text-velmora-secondary hover:text-velmora-text'
                    }`}
                  >
                    All ({products.length})
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id ? 'text-velmora-accent' : 'text-velmora-secondary hover:text-velmora-text'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="text-sm tracking-wider uppercase text-velmora-text mb-4">Material</h3>
                <div className="space-y-2">
                  {['all', 'gold', 'silver'].map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block text-sm capitalize transition-colors ${
                        selectedMaterial === mat ? 'text-velmora-accent' : 'text-velmora-secondary hover:text-velmora-text'
                      }`}
                    >
                      {mat === 'all' ? 'All Materials' : `${mat} Tone`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm tracking-wider uppercase text-velmora-text mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'All Prices', range: [0, 150] },
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $75', range: [50, 75] },
                    { label: '$75+', range: [75, 150] },
                  ].map(option => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className={`block text-sm transition-colors ${
                        priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                          ? 'text-velmora-accent'
                          : 'text-velmora-secondary hover:text-velmora-text'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedMaterial('all');
                    setPriceRange([0, 150]);
                  }}
                  className="flex items-center gap-2 text-sm text-velmora-accent hover:text-velmora-accent-hover transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-velmora-dark/50" onClick={() => setShowFilters(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-velmora-bg p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-velmora-text">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5 text-velmora-text" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-velmora-text mb-3">Category</h3>
                    <div className="space-y-2">
                      <button onClick={() => { setSelectedCategory('all'); setShowFilters(false); }} className={`block text-sm ${selectedCategory === 'all' ? 'text-velmora-accent' : 'text-velmora-secondary'}`}>All</button>
                      {categories.map(cat => (
                        <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }} className={`block text-sm ${selectedCategory === cat.id ? 'text-velmora-accent' : 'text-velmora-secondary'}`}>{cat.name}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider uppercase text-velmora-text mb-3">Price</h3>
                    <div className="space-y-2">
                      {[
                        { label: 'All', range: [0, 150] },
                        { label: 'Under $50', range: [0, 50] },
                        { label: '$50 - $75', range: [50, 75] },
                        { label: '$75+', range: [75, 150] },
                      ].map(opt => (
                        <button key={opt.label} onClick={() => { setPriceRange(opt.range); setShowFilters(false); }} className={`block text-sm ${priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1] ? 'text-velmora-accent' : 'text-velmora-secondary'}`}>{opt.label}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Count - Desktop */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-secondary">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-velmora-text pr-6 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-velmora-secondary pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-text mb-2">No pieces found</p>
                <p className="text-velmora-secondary text-sm">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
