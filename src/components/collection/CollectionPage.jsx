import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products, categories } from '../../data/products';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

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

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="section-title mb-2">Shop All</h1>
          <p className="text-sm text-[var(--color-soft-gray)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-[var(--color-gold)]"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-[var(--color-gold)]"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {['gold', 'silver'].map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-[var(--color-gold)]"
                      />
                      <span className="text-sm capitalize">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs tracking-wider uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-', label: 'Over $100' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === option.value}
                        onChange={() => setPriceRange(option.value)}
                        className="accent-[var(--color-gold)]"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm border border-[var(--color-border)] px-4 py-2 hover:border-[var(--color-gold)] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[var(--color-border)] px-4 py-2 pr-8 text-sm focus:outline-none focus:border-[var(--color-gold)]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-soft-gray)]" />
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-[var(--color-cream)] p-6 overflow-y-auto animate-slide-in-right">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif-display text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2">
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-wider uppercase mb-4">Category</h3>
                  <div className="space-y-3">
                    <button onClick={() => { setSelectedCategory('all'); setIsFilterOpen(false); }} className={`block text-sm ${selectedCategory === 'all' ? 'text-[var(--color-gold)]' : ''}`}>All</button>
                    {categories.map(cat => (
                      <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setIsFilterOpen(false); }} className={`block text-sm ${selectedCategory === cat.id ? 'text-[var(--color-gold)]' : ''}`}>{cat.name}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-wider uppercase mb-4">Price</h3>
                  <div className="space-y-3">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: '0-50', label: 'Under $50' },
                      { value: '50-100', label: '$50 - $100' },
                      { value: '100-', label: 'Over $100' }
                    ].map(option => (
                      <button key={option.value} onClick={() => { setPriceRange(option.value); setIsFilterOpen(false); }} className={`block text-sm ${priceRange === option.value ? 'text-[var(--color-gold)]' : ''}`}>{option.label}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown - Desktop */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-[var(--color-border)] px-4 py-2 pr-8 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-soft-gray)]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif-display text-xl text-[var(--color-soft-gray)]">No products found</p>
                <p className="text-sm text-[var(--color-soft-gray)] mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-4">
                        <img
                          src={hoveredId === product.id ? product.images[1] : product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`} />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, product.variants[0]);
                          }}
                          className={`absolute bottom-4 left-4 right-4 bg-white text-[var(--color-charcoal)] py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                            hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="product-name text-sm text-center">{product.name}</h3>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-3 h-3 fill-[var(--color-star)] text-[var(--color-star)]" />
                        <span className="text-xs text-[var(--color-soft-gray)]">{product.rating}</span>
                      </div>
                      <p className="text-center text-sm font-medium mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
