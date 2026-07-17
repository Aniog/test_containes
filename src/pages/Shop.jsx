import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductGrid from '@/components/shop/ProductGrid';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortValue, setSortValue] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'All') {
      list = list.filter(p => p.category === activeCategory.toLowerCase());
    }
    const range = PRICE_RANGES[activePriceIdx];
    list = list.filter(p => p.price >= range.min && p.price <= range.max);
    if (sortValue === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortValue === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, activePriceIdx, sortValue]);

  return (
    <div className="bg-velmora-linen min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-sand pt-28 pb-12 text-center">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">Velmora Collection</p>
        <h1 className="font-cormorant text-5xl md:text-6xl font-light text-velmora-obsidian tracking-wide">
          All Jewelry
        </h1>
        <p className="font-inter text-sm text-velmora-ash mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-velmora-obsidian border border-velmora-sand px-4 py-2.5 hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'font-inter text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-velmora-obsidian text-velmora-linen border-velmora-obsidian'
                    : 'border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-velmora-stone hover:text-velmora-gold transition-colors"
            >
              {SORT_OPTIONS.find(o => o.value === sortValue)?.label}
              <ChevronDown size={14} className={cn('transition-transform duration-200', sortOpen && 'rotate-180')} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-velmora-linen border border-velmora-sand shadow-lg z-20">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortValue(opt.value); setSortOpen(false); }}
                    className={cn(
                      'w-full text-left px-4 py-3 font-inter text-xs tracking-wide hover:bg-velmora-cream transition-colors',
                      sortValue === opt.value ? 'text-velmora-gold' : 'text-velmora-stone'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0 space-y-8">
            <FilterSection title="Category">
              {CATEGORIES.map(cat => (
                <FilterItem
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </FilterSection>

            <FilterSection title="Price">
              {PRICE_RANGES.map((range, i) => (
                <FilterItem
                  key={range.label}
                  label={range.label}
                  active={activePriceIdx === i}
                  onClick={() => setActivePriceIdx(i)}
                />
              ))}
            </FilterSection>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-obsidian/50" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-linen p-6 overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cormorant text-xl text-velmora-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X size={18} className="text-velmora-ash" /></button>
                </div>
                <FilterSection title="Category">
                  {CATEGORIES.map(cat => (
                    <FilterItem key={cat} label={cat} active={activeCategory === cat} onClick={() => { setActiveCategory(cat); setFilterOpen(false); }} />
                  ))}
                </FilterSection>
                <div className="mt-6">
                  <FilterSection title="Price">
                    {PRICE_RANGES.map((range, i) => (
                      <FilterItem key={range.label} label={range.label} active={activePriceIdx === i} onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }} />
                    ))}
                  </FilterSection>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-velmora-stone mb-3">No pieces found</p>
                <p className="font-inter text-sm text-velmora-ash">Try adjusting your filters</p>
              </div>
            ) : (
              <ProductGrid products={filtered} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }) {
  return (
    <div>
      <h3 className="font-inter text-[10px] tracking-widest uppercase text-velmora-obsidian mb-3 pb-2 border-b border-velmora-sand">
        {title}
      </h3>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function FilterItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'block w-full text-left font-inter text-xs py-1 transition-colors duration-150',
        active ? 'text-velmora-gold font-medium' : 'text-velmora-stone hover:text-velmora-gold'
      )}
    >
      {active && <span className="mr-1.5 text-velmora-gold">—</span>}
      {label}
    </button>
  );
}
