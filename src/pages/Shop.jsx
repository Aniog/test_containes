import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const materials = [
  { value: '18k-gold-plated', label: '18K Gold Plated' },
  { value: 'sterling-silver', label: 'Sterling Silver' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 — $75' },
  { value: '75-plus', label: '$75+' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const activeFilters = {
    category: activeCategory,
    price: searchParams.get('price') || '',
    material: searchParams.get('material') || '',
  };

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeFilters.category) {
      result = result.filter((p) => p.category === activeFilters.category);
    }

    if (activeFilters.material) {
      result = result.filter((p) => p.material === activeFilters.material);
    }

    if (activeFilters.price) {
      result = result.filter((p) => {
        if (activeFilters.price === 'under-50') return p.price < 50;
        if (activeFilters.price === '50-75') return p.price >= 50 && p.price <= 75;
        if (activeFilters.price === '75-plus') return p.price > 75;
        return true;
      });
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeFilters, sort]);

  const FilterGroup = ({ title, options, active, onChange }) => (
    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-widest text-velmora-ink mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 text-sm text-velmora-taupe cursor-pointer hover:text-velmora-ink transition-colors"
          >
            <input
              type="checkbox"
              checked={active === opt.value}
              onChange={() =>
                onChange(active === opt.value ? '' : opt.value)
              }
              className="w-4 h-4 accent-velmora-accent border-velmora-border"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );

  const Sidebar = ({ mobile = false }) => (
    <div className={cn(mobile && 'p-6')}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif text-xl text-velmora-ink">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {(activeFilters.category || activeFilters.price || activeFilters.material) && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-dark mb-8 block"
        >
          Clear All
        </button>
      )}
      <FilterGroup
        title="Category"
        options={categories}
        active={activeFilters.category}
        onChange={(v) => updateFilter('category', v)}
      />
      <FilterGroup
        title="Price"
        options={priceRanges}
        active={activeFilters.price}
        onChange={(v) => updateFilter('price', v)}
      />
      <FilterGroup
        title="Material"
        options={materials}
        active={activeFilters.material}
        onChange={(v) => updateFilter('material', v)}
      />
    </div>
  );

  return (
    <div className="animate-fadeIn">
      <div className="bg-velmora-cream border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-12 md:py-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            {activeCategory
              ? categories.find((c) => c.value === activeCategory)?.label || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="mt-4 text-velmora-taupe max-w-xl mx-auto">
            Discover demi-fine gold jewelry designed to be worn, layered, and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-ink"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <p className="hidden md:block text-sm text-velmora-taupe">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-white border border-velmora-border pl-4 pr-10 py-2 text-xs uppercase tracking-widest text-velmora-ink focus:outline-none focus:border-velmora-accent"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-taupe pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          <aside className="hidden md:block w-60 flex-shrink-0">
            <Sidebar />
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-ink">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-dark"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 bg-velmora-ink/50 z-40 md:hidden transition-opacity',
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 md:hidden overflow-y-auto',
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Sidebar mobile />
      </aside>
    </div>
  );
}
