import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    material: [],
  });

  const categories = ['earrings', 'necklaces', 'huggies', 'sets'];
  const priceRanges = [
    { label: 'Under $40', min: 0, max: 40 },
    { label: '$40 – $60', min: 40, max: 60 },
    { label: '$60 – $80', min: 60, max: 80 },
    { label: '$80+', min: 80, max: Infinity },
  ];
  const materials = ['gold-plated'];

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const arr = prev[type];
      const exists = arr.includes(value);
      return {
        ...prev,
        [type]: exists ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.price.length > 0) {
      result = result.filter((p) =>
        filters.price.some((rangeLabel) => {
          const range = priceRanges.find((r) => r.label === rangeLabel);
          return range && p.price >= range.min && p.price <= range.max;
        })
      );
    }

    if (filters.material.length > 0) {
      result = result.filter((p) => filters.material.includes(p.material));
    }

    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [filters, sort]);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-semibold text-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.category.includes(cat) ? 'bg-gold border-gold' : 'border-warmgray-muted group-hover:border-gold'
                }`}
              >
                {filters.category.includes(cat) && <span className="text-white text-[10px]">✓</span>}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={filters.category.includes(cat)}
                onChange={() => toggleFilter('category', cat)}
              />
              <span className="text-sm text-warmgray capitalize group-hover:text-charcoal transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-semibold text-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.price.includes(range.label) ? 'bg-gold border-gold' : 'border-warmgray-muted group-hover:border-gold'
                }`}
              >
                {filters.price.includes(range.label) && <span className="text-white text-[10px]">✓</span>}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={filters.price.includes(range.label)}
                onChange={() => toggleFilter('price', range.label)}
              />
              <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-semibold text-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.material.includes(mat) ? 'bg-gold border-gold' : 'border-warmgray-muted group-hover:border-gold'
                }`}
              >
                {filters.material.includes(mat) && <span className="text-white text-[10px]">✓</span>}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={filters.material.includes(mat)}
                onChange={() => toggleFilter('material', mat)}
              />
              <span className="text-sm text-warmgray capitalize group-hover:text-charcoal transition-colors">{mat.replace('-', ' ')}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear */}
      {(filters.category.length > 0 || filters.price.length > 0 || filters.material.length > 0) && (
        <button
          onClick={() => setFilters({ category: [], price: [], material: [] })}
          className="text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shop All</h1>
          <p className="mt-2 text-warmgray text-sm">{filtered.length} products</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-warmgray-muted">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:block">
            <span className="text-sm text-warmgray">{filtered.length} products</span>
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-sm text-charcoal pr-8 py-1 cursor-pointer focus:outline-none border-b border-transparent hover:border-warmgray-muted transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warmgray" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 z-50 bg-charcoal/40 md:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 z-50 w-72 bg-cream p-6 shadow-2xl md:hidden overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warmgray">No products match your filters.</p>
                <button
                  onClick={() => setFilters({ category: [], price: [], material: [] })}
                  className="mt-3 text-gold text-sm hover:text-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
