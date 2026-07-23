import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, formatPrice } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

const categories = [
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Gift Sets', value: 'sets' },
];

const materials = [
  { label: '18K Gold Plated', value: '18k-gold-plated' },
  { label: 'Gold Vermeil', value: 'gold-vermeil' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    setSelectedMaterials([]);
    setSelectedPrices([]);
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((r) => p.price >= r.min && p.price <= r.max)
      );
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, selectedMaterials, selectedPrices, sort]);

  const toggleMaterial = (value) => {
    setSelectedMaterials((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const togglePrice = (range) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const setCategory = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set('category', value);
    else next.delete('category');
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSelectedMaterials([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const activeFiltersCount = selectedMaterials.length + selectedPrices.length + (activeCategory ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-espresso mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(activeCategory === cat.value ? '' : cat.value)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.value ? 'text-gold font-medium' : 'text-warmstone hover:text-espresso'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-espresso mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {materials.map((mat) => (
            <label key={mat.value} className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.value)}
                onChange={() => toggleMaterial(mat.value)}
                className="h-4 w-4 rounded border-stoneborder text-gold focus:ring-gold"
              />
              <span className="text-sm text-warmstone">{mat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-espresso mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={selectedPrices.includes(range)}
                onChange={() => togglePrice(range)}
                className="h-4 w-4 rounded border-stoneborder text-gold focus:ring-gold"
              />
              <span className="text-sm text-warmstone">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-medium uppercase tracking-widest text-warmstone underline underline-offset-4 hover:text-gold transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-cream">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl text-espresso md:text-5xl">
            {activeCategory
              ? categories.find((c) => c.value === activeCategory)?.label || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="mt-3 text-warmstone">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 rounded-sm border border-stoneborder bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-espresso"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 h-5 w-5 rounded-full bg-gold text-white text-[10px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-sm border border-stoneborder bg-white px-4 py-2.5 pr-10 text-xs font-medium uppercase tracking-widest text-espresso"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <p className="text-sm text-warmstone">
                Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-sm border border-stoneborder bg-white px-4 py-2.5 pr-10 text-xs font-medium uppercase tracking-widest text-espresso"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm uppercase tracking-widest text-gold underline"
                >
                  Clear all filters
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
      </section>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
        <aside
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-cream p-6 shadow-2xl transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <FilterContent />
        </aside>
      </div>
    </div>
  );
}