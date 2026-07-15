import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Filter products
  let filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (priceRange === 'under50' && p.price >= 50) return false;
    if (priceRange === '50to100' && (p.price < 50 || p.price > 100)) return false;
    if (priceRange === 'over100' && p.price <= 100) return false;
    return true;
  });

  // Sort products
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      quantity: 1,
      image: product.images[0],
    });
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-cream">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal text-center mb-4">
          The Collection
        </h1>
        <p className="text-taupe text-center text-sm">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm transition-colors ${
                        selectedCategory === 'all' ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'
                      }`}
                    >
                      All Pieces
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.id ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map(option => (
                    <li key={option.value}>
                      <button
                        onClick={() => setPriceRange(option.value)}
                        className={`text-sm transition-colors ${
                          priceRange === option.value ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'
                        }`}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden w-full">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-widest uppercase text-taupe pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
              </div>
            </div>

            {/* Mobile filters panel */}
            {showFilters && (
              <div className="bg-cream-dark p-6 mb-6 space-y-6">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-charcoal mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 text-xs tracking-wider transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-charcoal text-cream'
                          : 'bg-cream text-taupe border border-border'
                      }`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 text-xs tracking-wider transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-charcoal text-cream'
                            : 'bg-cream text-taupe border border-border'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-charcoal mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to100', label: '$50 - $100' },
                      { value: 'over100', label: 'Over $100' },
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => setPriceRange(option.value)}
                        className={`px-4 py-2 text-xs tracking-wider transition-colors ${
                          priceRange === option.value
                            ? 'bg-charcoal text-cream'
                            : 'bg-cream text-taupe border border-border'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-widest uppercase text-taupe pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4">
                    <img
                      alt={product.shortName}
                      data-strk-img-id={product.images[0].id}
                      data-strk-img={`[${product.images[0].id}-text]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="w-full bg-charcoal/90 hover:bg-charcoal text-cream text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xs tracking-widest uppercase text-charcoal mb-1 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`}
                      />
                    ))}
                    <span className="text-[10px] text-taupe ml-1">({product.reviews})</span>
                  </div>
                  <p className="text-sm text-charcoal font-medium">${product.price}</p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-taupe mb-4">No pieces match your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }}
                  className="text-gold text-xs tracking-widest uppercase border-b border-gold pb-1"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
