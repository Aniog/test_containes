import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  const togglePrice = (index) => {
    setSelectedPrices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((i) => {
          const range = priceRanges[i];
          return p.price >= range.min && p.price < range.max;
        })
      );
    }

    switch (selectedSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrices, selectedSort]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  selectedCategories.includes(cat.slug)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-stone-light group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedCategories.includes(cat.slug) && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
              />
              <span className="text-sm text-velmora-charcoal">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-2.5">
          {priceRanges.map((range, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  selectedPrices.includes(i)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-stone-light group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedPrices.includes(i) && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(i)}
                onChange={() => togglePrice(i)}
              />
              <span className="text-sm text-velmora-charcoal">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-charcoal mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 border border-velmora-stone-light group-hover:border-velmora-charcoal transition-colors" />
              <input type="checkbox" className="sr-only" />
              <span className="text-sm text-velmora-charcoal">{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedPrices([]);
          }}
          className="text-xs font-medium uppercase tracking-widest text-velmora-stone hover:text-velmora-charcoal border-b border-velmora-stone hover:border-velmora-charcoal transition-colors pb-0.5"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      {/* Header */}
      <div className="border-b border-velmora-border">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
            Shop All Jewelry
          </h1>
          <p className="mt-3 text-sm text-velmora-stone max-w-lg">
            Discover our curated collection of demi-fine jewelry — designed for everyday wear and special moments alike.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 md:py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-medium text-velmora-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <p className="hidden md:block text-sm text-velmora-stone">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm font-medium text-velmora-charcoal"
            >
              Sort by: {sortOptions.find((o) => o.value === selectedSort)?.label}
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-velmora-border shadow-lg z-50 py-2">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSelectedSort(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        selectedSort === opt.value
                          ? 'bg-velmora-cream-dark text-velmora-charcoal font-medium'
                          : 'text-velmora-stone hover:text-velmora-charcoal hover:bg-velmora-cream'
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
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPrices([]);
                  }}
                  className="mt-4 text-sm text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[70] bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-[80] w-[85%] max-w-sm bg-velmora-cream shadow-2xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-velmora-stone" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
