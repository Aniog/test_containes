import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $70', min: 50, max: 70 },
  { label: '$70 - $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies'];
const MATERIALS = ['18K Gold Plated', 'Silver Tone'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function FilterCheckbox({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-1">
      <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${checked ? 'bg-velmora-text border-velmora-text' : 'border-velmora-border group-hover:border-velmora-text'}`}>
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      <span className="text-sm text-velmora-text group-hover:text-velmora-text transition-colors">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-velmora-text-muted ml-auto">{count}</span>
      )}
    </label>
  );
}

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-velmora-border py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text">{title}</span>
        <ChevronDown className={`w-4 h-4 text-velmora-text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-3 space-y-1">{children}</div>}
    </div>
  );
}

export default function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const urlCategory = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState(
    urlCategory ? [urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1)] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (urlCategory) {
      const formatted = urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1);
      setSelectedCategories(prev => (prev.includes(formatted) ? prev : [formatted]));
    }
  }, [urlCategory]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const toggleList = (list, setList, value) => {
    setList(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]));
  };

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter(p =>
        selectedPrices.some(range => {
          const r = PRICE_RANGES.find(pr => pr.label === range);
          return r && p.price >= r.min && p.price < r.max;
        })
      );
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, sortBy]);

  const activeSortLabel = SORT_OPTIONS.find(o => o.value === sortBy)?.label || 'Featured';

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
  };

  const filtersActive = selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterContent = () => (
    <>
      {filtersActive > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-accent underline underline-offset-2 mb-4 block"
        >
          Clear all filters ({filtersActive})
        </button>
      )}

      <FilterSection title="Category">
        {CATEGORIES.map(cat => (
          <FilterCheckbox
            key={cat}
            label={cat}
            checked={selectedCategories.includes(cat)}
            onChange={() => toggleList(selectedCategories, setSelectedCategories, cat)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {PRICE_RANGES.map(range => (
          <FilterCheckbox
            key={range.label}
            label={range.label}
            checked={selectedPrices.includes(range.label)}
            onChange={() => toggleList(selectedPrices, setSelectedPrices, range.label)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Material">
        {MATERIALS.map(mat => (
          <FilterCheckbox
            key={mat}
            label={mat}
            checked={selectedMaterials.includes(mat)}
            onChange={() => toggleList(selectedMaterials, setSelectedMaterials, mat)}
          />
        ))}
      </FilterSection>
    </>
  );

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
              Shop All
            </h1>
            <p className="text-sm text-velmora-text-muted mt-2">
              {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase font-medium text-velmora-text border border-velmora-border px-3 py-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
              {filtersActive > 0 && (
                <span className="w-4 h-4 bg-velmora-text text-white text-[10px] rounded-full flex items-center justify-center">
                  {filtersActive}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase font-medium text-velmora-text border border-velmora-border px-3 py-2"
              >
                Sort: {activeSortLabel}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 bg-white border border-velmora-border shadow-lg z-20 min-w-[180px]">
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-xs tracking-wide transition-colors ${
                          sortBy === opt.value ? 'bg-velmora-cream font-medium' : 'hover:bg-velmora-cream/50'
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
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-60 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text-muted">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-3 text-sm text-velmora-accent underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {PRODUCTS.map(product => {
                  const isVisible = filtered.some(f => f.id === product.id);
                  return (
                    <div key={product.id} className={`group ${isVisible ? '' : 'hidden'}`}>
                      <Link to={`/product/${product.id}`}>
                        <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
                          <img
                            data-strk-img-id={`shop-img-${product.id}`}
                            data-strk-img={`[shop-name-${product.id}]`}
                            data-strk-img-ratio="3x4"
                            data-strk-img-width="500"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={product.displayName}
                            className="w-full h-full object-cover img-zoom"
                          />
                        </div>
                      </Link>
                      <div className="space-y-1">
                        <p
                          id={`shop-name-${product.id}`}
                          className="font-serif text-[11px] md:text-xs tracking-[0.15em] uppercase text-velmora-text truncate"
                        >
                          {product.name}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-velmora-gold fill-velmora-gold'
                                    : 'text-velmora-border'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-serif text-sm text-velmora-text">${product.price}</p>
                          <button
                            onClick={() => addItem(product, product.defaultVariant, 1)}
                            className="text-[10px] tracking-[0.1em] uppercase text-velmora-text-muted hover:text-velmora-accent transition-colors border-b border-transparent hover:border-velmora-accent"
                          >
                            Quick Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[80%] max-w-xs bg-white shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between px-4 py-4 border-b border-velmora-border">
              <h2 className="font-serif text-lg tracking-wider">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2">
              <FilterContent />
            </div>
            <div className="border-t border-velmora-border px-4 py-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-velmora-base text-white text-xs tracking-[0.2em] uppercase font-medium py-3.5"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
