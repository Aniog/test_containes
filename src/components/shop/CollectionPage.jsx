import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, sortBy, priceRange]);

  let filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    return true;
  });

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 id="shop-title" className="serif-heading text-3xl md:text-4xl text-stone-800 mb-2">All Jewelry</h1>
          <p className="text-stone-500 text-sm">{filtered.length} pieces</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-800 mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === 'all' ? 'text-primary font-medium' : 'text-stone-600 hover:text-stone-800'
                    }`}
                  >
                    All ({products.length})
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id ? 'text-primary font-medium' : 'text-stone-600 hover:text-stone-800'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-800 mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 - $75', min: 50, max: 75 },
                    { label: '$75 - $100', min: 75, max: 100 },
                    { label: 'Over $100', min: 100, max: 150 },
                  ].map(range => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange([range.min, range.max])}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'text-primary font-medium'
                          : 'text-stone-600 hover:text-stone-800'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-stone-700 border border-stone-300 px-4 py-2 rounded"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-stone-300 text-sm text-stone-700 px-4 py-2 pr-8 rounded"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 text-stone-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden bg-white border border-stone-200 rounded p-4 mb-4 space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-800 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      selectedCategory === 'all'
                        ? 'border-primary bg-primary/10 text-stone-800'
                        : 'border-stone-300 text-stone-600'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                        selectedCategory === cat.id
                          ? 'border-primary bg-primary/10 text-stone-800'
                          : 'border-stone-300 text-stone-600'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-stone-800 mb-2">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 - $75', min: 50, max: 75 },
                    { label: '$75 - $100', min: 75, max: 100 },
                    { label: 'Over $100', min: 100, max: 150 },
                  ].map(range => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange([range.min, range.max])}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'border-primary bg-primary/10 text-stone-800'
                          : 'border-stone-300 text-stone-600'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-stone-300 text-sm text-stone-700 px-4 py-2 pr-8 rounded"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 text-stone-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl text-stone-600 mb-2">No pieces found</p>
                <p className="text-sm text-stone-400">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-stone-200 rounded overflow-hidden mb-3">
                        <div
                          className="absolute inset-0"
                          data-strk-bg-id={`shop-${product.id}-1`}
                          data-strk-bg={`[${product.id}-desc] [${product.id}-title] [shop-title]`}
                          data-strk-bg-ratio="3x4"
                          data-strk-bg-width="500"
                        />
                        <button
                          className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm py-2.5 text-xs uppercase tracking-wider text-stone-800 transition-all duration-300 hover:bg-primary hover:text-white ${
                            hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, product.variants[0]);
                          }}
                        >
                          Add to Bag
                        </button>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 id={`${product.id}-title`} className="product-name text-sm text-stone-800 mb-1">{product.name}</h3>
                      <p id={`${product.id}-desc`} className="text-xs text-stone-500 mb-1.5">{product.description}</p>
                      <div className="flex items-center gap-1 mb-1.5">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-xs text-stone-600">{product.rating}</span>
                        <span className="text-xs text-stone-400">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-medium text-stone-800">${product.price}</p>
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
