import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products, categories } from '../../data/products';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-accent)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
            Bestseller
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 velmora-btn-primary py-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Bag
        </button>
      </div>
      <div className="text-center">
        <h3 className="velmora-product-name text-sm mb-1.5 group-hover:text-[var(--velmora-gold)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-[var(--velmora-gold)] fill-[var(--velmora-gold)]'
                  : 'text-[var(--velmora-border)]'
              }`}
            />
          ))}
          <span className="text-xs text-muted ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  return (
    <div className="pt-20 sm:pt-24">
      {/* Page Header */}
      <div className="bg-[var(--velmora-bg-secondary)] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-3">
            {selectedCategory !== 'all'
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-muted text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden flex items-center gap-2 mb-6 text-sm"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar Filters */}
          <aside
            className={`w-64 flex-shrink-0 ${
              filtersOpen ? 'block' : 'hidden'
            } lg:block`}
          >
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm ${
                        selectedCategory === 'all'
                          ? 'text-[var(--velmora-gold)] font-medium'
                          : 'text-muted hover:text-[var(--velmora-text)]'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm ${
                          selectedCategory === cat.id
                            ? 'text-[var(--velmora-gold)] font-medium'
                            : 'text-muted hover:text-[var(--velmora-text)]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Material</h3>
                <ul className="space-y-2">
                  {['all', 'gold', 'silver'].map((mat) => (
                    <li key={mat}>
                      <button
                        onClick={() => setSelectedMaterial(mat)}
                        className={`text-sm capitalize ${
                          selectedMaterial === mat
                            ? 'text-[var(--velmora-gold)] font-medium'
                            : 'text-muted hover:text-[var(--velmora-text)]'
                        }`}
                      >
                        {mat === 'all' ? 'All' : `${mat} Tone`}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Price</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' },
                  ].map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`text-sm ${
                          priceRange === range.value
                            ? 'text-[var(--velmora-gold)] font-medium'
                            : 'text-muted hover:text-[var(--velmora-text)]'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-[var(--velmora-border)] px-4 py-2 pr-10 text-sm focus:outline-none focus:border-[var(--velmora-gold)] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl mb-2">No pieces found</p>
                <p className="text-muted text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
