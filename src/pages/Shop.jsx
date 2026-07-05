import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  const setPriceRange = (range) => {
    const params = new URLSearchParams(searchParams);
    if (range === 'all') params.delete('price');
    else params.set('price', range);
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-brand-ivory py-12 md:py-16 px-5 md:px-10 text-center">
        <h1 className="font-serif text-3xl md:text-5xl text-brand-charcoal">
          {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <p className="font-sans text-sm text-brand-muted mt-3">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 bg-transparent border-none text-brand-charcoal font-sans text-xs uppercase tracking-wider p-0 rounded-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`font-sans text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors rounded-none ${
                activeCategory === 'all'
                  ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                  : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`font-sans text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors rounded-none ${
                  activeCategory === cat.id
                    ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                    : 'bg-transparent text-brand-charcoal border-brand-warm hover:border-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-charcoal rounded-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (desktop) */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs uppercase tracking-wider text-brand-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`block w-full text-left font-sans text-sm py-1 bg-transparent border-none p-0 rounded-none transition-colors ${
                      priceRange === opt.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-xs uppercase tracking-wider text-brand-charcoal mb-4 mt-8">
                Material
              </h3>
              <div className="space-y-2">
                {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-brand-gold" />
                    <span className="font-sans text-sm text-brand-muted">{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setFilterOpen(false)}>
              <div className="absolute bottom-0 left-0 right-0 bg-brand-cream p-6 animate-slide-up" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-sm font-medium text-brand-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="p-0 bg-transparent border-none">
                    <X className="w-5 h-5 text-brand-charcoal" />
                  </button>
                </div>

                <p className="font-sans text-xs uppercase tracking-wider text-brand-charcoal mb-3">Category</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setCategory('all')}
                    className={`font-sans text-xs px-3 py-1.5 border rounded-none ${activeCategory === 'all' ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal' : 'border-brand-warm text-brand-charcoal'}`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`font-sans text-xs px-3 py-1.5 border rounded-none ${activeCategory === cat.id ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal' : 'border-brand-warm text-brand-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                <p className="font-sans text-xs uppercase tracking-wider text-brand-charcoal mb-3">Price</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50–$80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`font-sans text-xs px-3 py-1.5 border rounded-none ${priceRange === opt.value ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal' : 'border-brand-warm text-brand-charcoal'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-sm text-brand-muted">No products match your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
