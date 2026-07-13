import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceOptions = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory) {
      list = list.filter(p => p.category === activeCategory);
    }

    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      list = list.filter(p => p.price >= min && p.price <= max);
    }

    if (activeSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, activePrice, activeSort]);

  const hasFilters = activeCategory || activePrice;

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Category</h3>
        <ul className="space-y-2">
          {categoryOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter('category', opt.value)}
                className={`font-sans text-sm transition-colors duration-200 ${
                  activeCategory === opt.value
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-obsidian'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-blush" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Price</h3>
        <ul className="space-y-2">
          {priceOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter('price', opt.value)}
                className={`font-sans text-sm transition-colors duration-200 ${
                  activePrice === opt.value
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-obsidian'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-blush" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Material</h3>
        <ul className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Crystal Accent'].map(m => (
            <li key={m}>
              <button className="font-sans text-sm text-stone hover:text-obsidian transition-colors duration-200">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-obsidian py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl text-warm-white font-light tracking-wide">
            {activeCategory
              ? categoryOptions.find(c => c.value === activeCategory)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-warm-white/50 mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-blush">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
            {hasFilters && (
              <span className="w-4 h-4 bg-gold text-obsidian text-[9px] rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>

          {/* Active filters */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {hasFilters && (
              <>
                <span className="font-sans text-xs text-stone">Filters:</span>
                {activeCategory && (
                  <button
                    onClick={() => setFilter('category', '')}
                    className="flex items-center gap-1 font-sans text-xs bg-gold/10 text-gold px-2 py-1 hover:bg-gold/20 transition-colors"
                  >
                    {categoryOptions.find(c => c.value === activeCategory)?.label}
                    <X size={10} />
                  </button>
                )}
                {activePrice && (
                  <button
                    onClick={() => setFilter('price', '')}
                    className="flex items-center gap-1 font-sans text-xs bg-gold/10 text-gold px-2 py-1 hover:bg-gold/20 transition-colors"
                  >
                    {priceOptions.find(p => p.value === activePrice)?.label}
                    <X size={10} />
                  </button>
                )}
              </>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-sans text-xs text-stone hidden md:block">Sort by:</span>
            <div className="relative">
              <select
                value={activeSort}
                onChange={e => setFilter('sort', e.target.value)}
                className="appearance-none font-sans text-xs text-obsidian bg-transparent border border-blush px-3 py-2 pr-7 focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filters panel */}
        {mobileFiltersOpen && (
          <div className="md:hidden bg-ivory border border-blush p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest uppercase text-obsidian">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={16} className="text-stone" />
              </button>
            </div>
            <FilterPanel />
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone italic mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-sans text-xs tracking-widest uppercase border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-warm-white transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
