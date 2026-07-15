import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sort, setSort] = useState('featured');

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (idx) => {
    setSelectedPrices((prev) =>
      prev.includes(idx) ? prev.filter((p) => p !== idx) : [...prev, idx]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx];
          return p.price >= r.min && p.price < r.max;
        })
      );
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, sort]);

  const FilterContent = () => (
    <>
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-charcoal mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat.id)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className="text-sm text-velmora-warm group-hover:text-velmora-charcoal transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-charcoal mb-4">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((range, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedPrices.includes(idx)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedPrices.includes(idx) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(idx)}
                onChange={() => togglePrice(idx)}
              />
              <span className="text-sm text-velmora-warm group-hover:text-velmora-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium text-velmora-charcoal mb-4">Material</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <span className="w-4 h-4 border border-velmora-border flex items-center justify-center bg-velmora-charcoal border-velmora-charcoal">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="text-sm text-velmora-charcoal">18K Gold Plated</span>
        </label>
      </div>
    </>
  );

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center py-10 md:py-14 border-b border-velmora-border">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal tracking-wide">Shop All</h1>
          <p className="mt-2 text-sm text-velmora-muted">{filtered.length} pieces</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-charcoal border border-velmora-border px-4 py-2"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-velmora-muted hidden sm:inline">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs tracking-wide border border-velmora-border px-3 py-2 bg-transparent focus:outline-none focus:border-velmora-charcoal"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-velmora-muted text-sm">
                No products match your filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-velmora-cream z-[70] p-6 overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-widest">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
