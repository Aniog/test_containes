import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products, { categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const containerRef = useRef(null);

  const activeCat = searchParams.get('cat') || '';

  const [filters, setFilters] = useState({
    category: activeCat,
    price: '',
    material: '',
  });

  useEffect(() => {
    setFilters(prev => ({ ...prev, category: activeCat }));
  }, [activeCat]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters, sortBy]);

  const filtered = products
    .filter(p => !filters.category || p.category === filters.category)
    .filter(p => {
      if (filters.price === 'under50') return p.price < 50;
      if (filters.price === '50to100') return p.price >= 50 && p.price <= 100;
      if (filters.price === 'over100') return p.price > 100;
      return true;
    })
    .filter(p => !filters.material || p.materials.toLowerCase().includes(filters.material.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const clearFilters = () => {
    setFilters({ category: '', price: '', material: '' });
    setSearchParams({});
  };

  const hasFilters = filters.category || filters.price || filters.material;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => {
                  setFilters(prev => ({ ...prev, category: cat }));
                  setSearchParams({ cat });
                }}
                className="w-3.5 h-3.5 accent-gold"
              />
              <span className="text-sm font-sans text-taupe group-hover:text-deepbrown transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown mb-4">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(opt => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.price === opt.value}
                onChange={() => setFilters(prev => ({ ...prev, price: opt.value }))}
                className="w-3.5 h-3.5 accent-gold"
              />
              <span className="text-sm font-sans text-taupe group-hover:text-deepbrown transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown mb-4">Material</h4>
        <div className="space-y-2">
          {['Gold', 'Crystal', 'Pearl'].map(mat => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat}
                onChange={() => setFilters(prev => ({ ...prev, material: mat }))}
                className="w-3.5 h-3.5 accent-gold"
              />
              <span className="text-sm font-sans text-taupe group-hover:text-deepbrown transition-colors">{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Shop All</p>
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">
            {filters.category || 'The Collection'}
          </h1>
        </div>

        <div className="flex gap-10 lg:gap-16">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-8 text-[10px] tracking-widest uppercase text-taupe hover:text-deepbrown transition-colors font-sans"
              >
                Clear All
              </button>
            )}
          </aside>

          {/* Product grid area */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileFilters(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-deepbrown"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {hasFilters && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                </button>
                <p className="text-xs text-taupe font-sans hidden md:block">{filtered.length} products</p>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-widest uppercase font-sans text-deepbrown pr-6 py-1 cursor-pointer hover:text-gold transition-colors focus:outline-none"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-deepbrown pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe font-sans text-sm mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-softblack/40" onClick={() => setMobileFilters(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-widest text-deepbrown">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="p-1.5 text-deepbrown hover:text-gold">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <div className="flex gap-3 mt-8">
              <button onClick={clearFilters} className="flex-1 py-2.5 text-[10px] tracking-widest uppercase font-sans border border-deepbrown/20 text-deepbrown hover:border-deepbrown/50 transition-colors">
                Clear
              </button>
              <button onClick={() => setMobileFilters(false)} className="flex-1 py-2.5 text-[10px] tracking-widest uppercase font-sans bg-deepbrown text-cream">
                Apply ({filtered.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
