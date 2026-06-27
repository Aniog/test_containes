import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const MATERIALS = ['18K Gold Plated'];

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label);
          return range && p.price >= range.min && p.price < range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterContent = () => (
    <div className="flex flex-col gap-7">
      {/* Category */}
      <div>
        <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-velmora-charcoal mb-3">
          Category
        </p>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border-dark group-hover:border-velmora-charcoal'
                }`}
                onClick={() => toggleCategory(cat)}
              >
                {selectedCategories.includes(cat) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
              <span className="font-sans text-[13px] text-velmora-warm-gray group-hover:text-velmora-charcoal transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-velmora-charcoal mb-3">
          Price
        </p>
        <div className="flex flex-col gap-2">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  selectedPrices.includes(range.label)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border-dark group-hover:border-velmora-charcoal'
                }`}
                onClick={() => togglePrice(range.label)}
              >
                {selectedPrices.includes(range.label) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
              <span className="font-sans text-[13px] text-velmora-warm-gray group-hover:text-velmora-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-velmora-charcoal mb-3">
          Material
        </p>
        <div className="flex flex-col gap-2">
          {MATERIALS.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  selectedMaterials.includes(mat)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border-dark group-hover:border-velmora-charcoal'
                }`}
                onClick={() => toggleMaterial(mat)}
              >
                {selectedMaterials.includes(mat) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
              <span className="font-sans text-[13px] text-velmora-warm-gray group-hover:text-velmora-charcoal transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="font-sans text-[12px] font-medium tracking-[0.08em] uppercase text-velmora-warm-gray hover:text-velmora-charcoal transition-colors text-left underline underline-offset-4"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-[72px] min-h-screen bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif text-[28px] md:text-[40px] font-light text-velmora-charcoal mb-2">
            Shop All
          </h1>
          <p className="font-sans text-[13px] text-velmora-warm-gray">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-velmora-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-[12px] font-medium tracking-[0.08em] uppercase text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-charcoal text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="hidden md:block" />

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 font-sans text-[12px] text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
            >
              Sort by: {SORT_OPTIONS.find((o) => o.value === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-44 bg-white shadow-lg rounded-sm border border-velmora-border z-50 py-1">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 font-sans text-[13px] hover:bg-velmora-cream-dark transition-colors ${
                        sortBy === opt.value ? 'text-velmora-charcoal font-medium' : 'text-velmora-warm-gray'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-[200px] flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-velmora-warm-gray mb-3">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-velmora-cream shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-border">
              <h3 className="font-sans text-[13px] font-semibold tracking-[0.1em] uppercase text-velmora-charcoal">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>
            <div className="px-5 py-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}