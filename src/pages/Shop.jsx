import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
];

const priceOptions = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function FilterSidebar({ filters, setFilters, onClose }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-xs tracking-wider uppercase text-stone-500 mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          {categoryOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilters(f => ({ ...f, category: opt.value }))}
              className={`text-left font-manrope text-sm transition-colors duration-200 ${
                filters.category === opt.value
                  ? 'text-obsidian font-medium'
                  : 'text-stone-500 hover:text-obsidian'
              }`}
            >
              {opt.label}
              {filters.category === opt.value && (
                <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-champagne align-middle" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-stone-200" />

      {/* Price */}
      <div>
        <h3 className="font-manrope text-xs tracking-wider uppercase text-stone-500 mb-4">Price</h3>
        <div className="flex flex-col gap-2">
          {priceOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilters(f => ({ ...f, price: opt.value }))}
              className={`text-left font-manrope text-sm transition-colors duration-200 ${
                filters.price === opt.value
                  ? 'text-obsidian font-medium'
                  : 'text-stone-500 hover:text-obsidian'
              }`}
            >
              {opt.label}
              {filters.price === opt.value && (
                <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-champagne align-middle" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-stone-200" />

      {/* Material */}
      <div>
        <h3 className="font-manrope text-xs tracking-wider uppercase text-stone-500 mb-4">Material</h3>
        <div className="flex flex-col gap-2">
          {['All', 'Gold Tone', 'Silver Tone'].map(mat => (
            <button
              key={mat}
              onClick={() => setFilters(f => ({ ...f, material: mat === 'All' ? '' : mat.toLowerCase().replace(' tone', '') }))}
              className={`text-left font-manrope text-sm transition-colors duration-200 ${
                (filters.material === '' && mat === 'All') || filters.material === mat.toLowerCase().replace(' tone', '')
                  ? 'text-obsidian font-medium'
                  : 'text-stone-500 hover:text-obsidian'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(filters.category || filters.price || filters.material) && (
        <button
          onClick={() => setFilters({ category: '', price: '', material: '' })}
          className="flex items-center gap-2 font-manrope text-xs tracking-wider uppercase text-stone-400 hover:text-obsidian transition-colors"
        >
          <X size={12} />
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [filters, setFilters] = useState({ category: initialCategory, price: '', material: '' });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setFilters(f => ({ ...f, category: cat }));
  }, [searchParams]);

  const filtered = products.filter(p => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }
    if (filters.material && p.material !== filters.material) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  const activeFilterCount = [filters.category, filters.price, filters.material].filter(Boolean).length;

  return (
    <div className="bg-ivory min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-champagne mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl lg:text-6xl font-light text-obsidian">
            {filters.category
              ? categoryOptions.find(c => c.value === filters.category)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="font-manrope text-sm text-stone-500 mt-2">{sorted.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-manrope text-xs tracking-wider uppercase text-obsidian border border-stone-300 px-4 py-2.5 hover:border-obsidian transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none font-manrope text-xs tracking-wider uppercase text-stone-600 border border-stone-300 px-4 py-2.5 pr-8 bg-ivory focus:outline-none focus:border-obsidian"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <h2 className="font-cormorant text-xl font-light text-obsidian mb-8">Filter</h2>
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="font-manrope text-xs text-stone-400">{sorted.length} results</p>
              <div className="flex items-center gap-3">
                <span className="font-manrope text-xs tracking-wider uppercase text-stone-400">Sort by</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="appearance-none font-manrope text-xs tracking-wider uppercase text-obsidian border border-stone-300 px-4 py-2 pr-8 bg-ivory focus:outline-none focus:border-obsidian"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-stone-400">No pieces found</p>
                <p className="font-manrope text-sm text-stone-400 mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => setFilters({ category: '', price: '', material: '' })}
                  className="mt-6 font-manrope text-xs tracking-wider uppercase border border-obsidian text-obsidian px-8 py-3 hover:bg-obsidian hover:text-ivory transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {sorted.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-cormorant text-2xl font-light text-obsidian">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} strokeWidth={1.5} className="text-stone-500" />
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setMobileFiltersOpen(false)} />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-obsidian text-ivory font-manrope text-xs tracking-wider uppercase py-4 hover:bg-stone-800 transition-colors"
            >
              View {sorted.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
