import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const filters = {
  category: [
    { label: 'Earrings', value: 'earrings' },
    { label: 'Necklaces', value: 'necklaces' },
    { label: 'Huggies', value: 'huggies' },
    { label: 'Gift Sets', value: 'sets' },
  ],
  price: [
    { label: 'Under $40', value: 'under-40' },
    { label: '$40 – $60', value: '40-60' },
    { label: '$60 – $80', value: '60-80' },
    { label: '$80+', value: 'over-80' },
  ],
  material: [
    { label: '18K Gold Plated', value: '18k-gold-plated' },
    { label: 'Sterling Silver', value: 'sterling-silver' },
  ],
};

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';

  const [selectedFilters, setSelectedFilters] = useState({
    category: activeCategory ? [activeCategory] : [],
    price: [],
    material: [],
  });

  const toggleFilter = (group, value) => {
    setSelectedFilters((prev) => {
      const current = prev[group];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({ category: [], price: [], material: [] });
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedFilters.category.length > 0) {
      result = result.filter((p) => selectedFilters.category.includes(p.category));
    }

    if (selectedFilters.price.length > 0) {
      result = result.filter((p) => {
        return selectedFilters.price.some((range) => {
          if (range === 'under-40') return p.price < 40;
          if (range === '40-60') return p.price >= 40 && p.price <= 60;
          if (range === '60-80') return p.price > 60 && p.price <= 80;
          if (range === 'over-80') return p.price > 80;
          return false;
        });
      });
    }

    if (selectedFilters.material.length > 0) {
      result = result.filter((p) => selectedFilters.material.includes(p.material));
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedFilters, sort]);

  const FilterGroup = ({ title, group, options }) => (
    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-widest text-brand-cream font-medium mb-4">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
            <div
              className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                selectedFilters[group].includes(opt.value)
                  ? 'bg-brand-gold border-brand-gold'
                  : 'border-white/20 group-hover:border-white/40'
              }`}
            >
              {selectedFilters[group].includes(opt.value) && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#0E0B0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={selectedFilters[group].includes(opt.value)}
              onChange={() => toggleFilter(group, opt.value)}
            />
            <span className="text-sm text-brand-soft group-hover:text-brand-cream transition-colors">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  const hasActiveFilters =
    selectedFilters.category.length > 0 ||
    selectedFilters.price.length > 0 ||
    selectedFilters.material.length > 0;

  return (
    <main className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-2">
              Collection
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-brand-cream">
              Shop All
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted border border-white/10 px-4 py-2"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs text-brand-muted uppercase tracking-widest hidden sm:inline">
                Sort by
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-brand-surface border border-white/10 text-sm text-brand-cream px-3 py-2 focus:outline-none focus:border-brand-gold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-28">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-brand-gold hover:text-brand-goldLight transition-colors mb-6 flex items-center gap-1"
                >
                  <X size={12} />
                  Clear All
                </button>
              )}
              <FilterGroup title="Category" group="category" options={filters.category} />
              <FilterGroup title="Price" group="price" options={filters.price} />
              <FilterGroup title="Material" group="material" options={filters.material} />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-xs text-brand-muted mb-6">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-brand-gold border-b border-brand-gold pb-1"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 bg-brand-base border-r border-white/10 z-50 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl uppercase tracking-widest text-brand-cream">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 hover:text-brand-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs uppercase tracking-widest text-brand-gold hover:text-brand-goldLight transition-colors mb-6 flex items-center gap-1"
              >
                <X size={12} />
                Clear All
              </button>
            )}
            <FilterGroup title="Category" group="category" options={filters.category} />
            <FilterGroup title="Price" group="price" options={filters.price} />
            <FilterGroup title="Material" group="material" options={filters.material} />
          </div>
        </>
      )}
    </main>
  );
}