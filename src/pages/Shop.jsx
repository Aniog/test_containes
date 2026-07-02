import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60to100', label: '$60 – $100', min: 60, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrice !== 'all') {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
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
  }, [selectedCategories, selectedPrice, sortBy]);

  const activeFilterCount =
    selectedCategories.length + (selectedPrice !== 'all' ? 1 : 0);

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="section-padding py-8 md:py-12 border-b border-velmora-border">
        <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-2">Shop All</h1>
        <p className="text-velmora-stone text-sm">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="section-padding py-6 flex items-center justify-between border-b border-velmora-border">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase"
        >
          <SlidersHorizontal size={14} />
          Filters
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 bg-velmora-dark text-white text-[10px] rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="hidden md:flex items-center gap-6">
          <span className="font-sans text-xs tracking-widest uppercase text-velmora-stone">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs tracking-wider bg-transparent border border-velmora-border px-3 py-2 focus:outline-none focus:border-velmora-gold"
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:hidden">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs tracking-wider bg-transparent border border-velmora-border px-3 py-2 focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="section-padding py-8 md:py-12 flex gap-10">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="mb-8">
            <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-dark font-medium mb-4">
              Category
            </h3>
            <div className="flex flex-col gap-2.5">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                      selectedCategories.includes(cat.id)
                        ? 'bg-velmora-dark border-velmora-dark'
                        : 'border-velmora-border group-hover:border-velmora-dark'
                    }`}
                  >
                    {selectedCategories.includes(cat.id) && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span className="text-sm text-velmora-stone group-hover:text-velmora-dark transition-colors">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-dark font-medium mb-4">
              Price
            </h3>
            <div className="flex flex-col gap-2.5">
              {priceRanges.map((range) => (
                <label
                  key={range.id}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      selectedPrice === range.id
                        ? 'border-velmora-dark'
                        : 'border-velmora-border group-hover:border-velmora-dark'
                    }`}
                  >
                    {selectedPrice === range.id && (
                      <div className="w-2 h-2 rounded-full bg-velmora-dark" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="price"
                    className="sr-only"
                    checked={selectedPrice === range.id}
                    onChange={() => setSelectedPrice(range.id)}
                  />
                  <span className="text-sm text-velmora-stone group-hover:text-velmora-dark transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {activeFilterCount > 0 && (
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedPrice('all');
              }}
              className="font-sans text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-velmora-stone mb-4">
                No pieces match your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedPrice('all');
                }}
                className="btn-outline"
              >
                Clear Filters
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

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileFiltersOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-velmora-cream shadow-xl transition-transform duration-300 flex flex-col ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wide">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-dark font-medium mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="w-4 h-4 accent-velmora-dark"
                    />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-dark font-medium mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-3">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={selectedPrice === range.id}
                      onChange={() => setSelectedPrice(range.id)}
                      className="w-4 h-4 accent-velmora-dark"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="p-5 border-t border-velmora-border flex gap-3">
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedPrice('all');
              }}
              className="flex-1 btn-outline py-3"
            >
              Clear
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="flex-1 btn-primary py-3"
            >
              Show {filtered.length}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
