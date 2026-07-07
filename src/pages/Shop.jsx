import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, materials } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 — $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const c = searchParams.get('category');
    return c ? [c] : [];
  });
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    const c = searchParams.get('category');
    if (c) setSelectedCategories([c]);
  }, [searchParams]);

  const toggle = (value, list, setList) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id);
          return p.price >= range.min && p.price <= range.max;
        })
      );
    }

    switch (sort) {
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
  }, [selectedCategories, selectedMaterials, selectedPrices, sort]);

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-taupe/20 py-5">
      <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-charcoal">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-center gap-2.5 text-sm text-warm-gray hover:text-charcoal transition-colors"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={() => onToggle(option.id)}
              className="h-4 w-4 rounded border-taupe/40 text-gold focus:ring-gold"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pb-20 pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-light text-charcoal md:text-4xl">
            Shop All Jewelry
          </h1>
          <p className="mt-2 text-sm text-warm-gray">
            Discover our collection of demi-fine gold jewelry, designed to be
            treasured.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-warm-gray hover:text-charcoal underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterGroup
                title="Category"
                options={categories}
                selected={selectedCategories}
                onToggle={(id) => toggle(id, selectedCategories, setSelectedCategories)}
              />
              <FilterGroup
                title="Material"
                options={materials}
                selected={selectedMaterials}
                onToggle={(id) => toggle(id, selectedMaterials, setSelectedMaterials)}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                selected={selectedPrices}
                onToggle={(id) => toggle(id, selectedPrices, setSelectedPrices)}
              />
            </div>
          </aside>

          {/* Mobile filter bar */}
          <div className="flex items-center justify-between lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-taupe/30 px-4 py-2 text-xs font-medium uppercase tracking-widest text-charcoal"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-taupe/30 bg-ivory px-4 py-2 pr-9 text-xs font-medium uppercase tracking-widest text-charcoal focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-warm-gray" />
            </div>
          </div>

          {/* Mobile filters drawer */}
          <div
            className={cn(
              'fixed inset-0 z-50 lg:hidden',
              mobileFiltersOpen ? 'visible' : 'invisible'
            )}
          >
            <div
              className={cn(
                'absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity',
                mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
              )}
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto bg-ivory p-6 transition-transform duration-500 ease-premium',
                mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-serif text-xl text-charcoal">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <FilterGroup
                title="Category"
                options={categories}
                selected={selectedCategories}
                onToggle={(id) => toggle(id, selectedCategories, setSelectedCategories)}
              />
              <FilterGroup
                title="Material"
                options={materials}
                selected={selectedMaterials}
                onToggle={(id) => toggle(id, selectedMaterials, setSelectedMaterials)}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                selected={selectedPrices}
                onToggle={(id) => toggle(id, selectedPrices, setSelectedPrices)}
              />
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="mt-4 w-full border border-charcoal py-3 text-xs font-medium uppercase tracking-widest text-charcoal"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-warm-gray">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-taupe/30 bg-ivory px-4 py-2 pr-9 text-xs font-medium uppercase tracking-widest text-charcoal focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-warm-gray" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-charcoal">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filtered.map((product) => (
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
