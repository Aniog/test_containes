import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { Filter, X, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

export default function CollectionPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, priceFilter, materialFilter]);

  const handleQuickAdd = (product) => {
    toast.success(`${product.name} added to cart`);
  };

  // Filter products
  let filtered = products;

  if (categoryFilter !== 'all') {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }
  if (materialFilter !== 'all') {
    filtered = filtered.filter((p) => p.material === materialFilter);
  }
  if (priceFilter === 'under50') {
    filtered = filtered.filter((p) => p.price < 50);
  } else if (priceFilter === '50to75') {
    filtered = filtered.filter((p) => p.price >= 50 && p.price <= 75);
  } else if (priceFilter === 'over75') {
    filtered = filtered.filter((p) => p.price > 75);
  }

  // Sort
  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || materialFilter !== 'all';

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-[#FAF9F7]">
      <div className="container-velmora">
        {/* Header */}
        <div className="py-8 md:py-12">
          <nav className="text-xs text-[#6B6560] mb-4">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1A1A1A]">Shop</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl mb-2">
            {categoryFilter !== 'all'
              ? categories.find((c) => c.id === categoryFilter)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-[#6B6560]">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSearchParams((p) => { p.delete('category'); return p; })}
                      className={`text-sm ${categoryFilter === 'all' ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560] hover:text-[#1A1A1A]'} transition-colors`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSearchParams((p) => { p.set('category', cat.id); return p; })}
                        className={`text-sm ${categoryFilter === cat.id ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560] hover:text-[#1A1A1A]'} transition-colors`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 – $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map((opt) => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setSearchParams((p) => { p.set('price', opt.value); return p; })}
                        className={`text-sm ${priceFilter === opt.value ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560] hover:text-[#1A1A1A]'} transition-colors`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Material</h3>
                <ul className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold Tone' },
                    { value: 'silver', label: 'Silver Tone' },
                  ].map((opt) => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setSearchParams((p) => { p.set('material', opt.value); return p; })}
                        className={`text-sm ${materialFilter === opt.value ? 'text-[#1A1A1A] font-medium' : 'text-[#6B6560] hover:text-[#1A1A1A]'} transition-colors`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#1A1A1A] transition-colors flex items-center gap-1">
                  <X className="w-3 h-3" /> Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DF]">
              <button
                className="md:hidden flex items-center gap-2 text-sm"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="w-4 h-4" /> Filters
              </button>

              <div className="hidden md:block" />

              <div className="flex items-center gap-3">
                <span className="text-xs text-[#6B6560]">Sort by</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-sm pr-6 cursor-pointer focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B6560]" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden fixed inset-0 z-50 bg-[#FAF9F7] pt-20 px-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl">Filters</h2>
                  <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => { setSearchParams((p) => { p.delete('category'); return p; }); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs border ${categoryFilter === 'all' ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F7]' : 'border-[#E8E4DF]'}`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { setSearchParams((p) => { p.set('category', cat.id); return p; }); setFilterOpen(false); }}
                          className={`px-4 py-2 text-xs border ${categoryFilter === cat.id ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F7]' : 'border-[#E8E4DF]'}`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: 'all', label: 'All' },
                        { value: 'under50', label: 'Under $50' },
                        { value: '50to75', label: '$50 – $75' },
                        { value: 'over75', label: 'Over $75' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setSearchParams((p) => { p.set('price', opt.value); return p; }); setFilterOpen(false); }}
                          className={`px-4 py-2 text-xs border ${priceFilter === opt.value ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F7]' : 'border-[#E8E4DF]'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {hasActiveFilters && (
                  <button onClick={clearFilters} className="mt-6 text-xs tracking-widest uppercase text-[#6B6560]">
                    Clear All Filters
                  </button>
                )}
              </div>
            )}

            {/* Active filter tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {categoryFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-[#E8E4DF] px-3 py-1.5 text-xs">
                    {categories.find((c) => c.id === categoryFilter)?.name}
                    <button onClick={() => setSearchParams((p) => { p.delete('category'); return p; })}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-[#E8E4DF] px-3 py-1.5 text-xs">
                    {priceFilter === 'under50' ? 'Under $50' : priceFilter === '50to75' ? '$50 – $75' : 'Over $75'}
                    <button onClick={() => setSearchParams((p) => { p.delete('price'); return p; })}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[#6B6560] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
