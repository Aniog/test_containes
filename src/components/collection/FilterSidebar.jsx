import { X } from 'lucide-react';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const categories = [
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
];

const materials = [
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

export default function FilterSidebar({
  filters,
  setFilters,
  mobileOpen,
  setMobileOpen,
}) {
  const toggleCategory = (value) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(value)
        ? prev.categories.filter((c) => c !== value)
        : [...prev.categories, value],
    }));
  };

  const toggleMaterial = (value) => {
    setFilters((prev) => ({
      ...prev,
      materials: prev.materials.includes(value)
        ? prev.materials.filter((m) => m !== value)
        : [...prev.materials, value],
    }));
  };

  const setPriceRange = (min, max) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange?.[0] === min && prev.priceRange?.[1] === max ? null : [min, max],
    }));
  };

  const clearAll = () => {
    setFilters({ categories: [], materials: [], priceRange: null });
  };

  const hasFilters =
    filters.categories.length > 0 ||
    filters.materials.length > 0 ||
    filters.priceRange !== null;

  const content = (
    <div className="space-y-8">
      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors"
        >
          Clear All
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-espresso font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(c.value)}
                onChange={() => toggleCategory(c.value)}
                className="w-4 h-4 border-clay checked:bg-espresso accent-espresso cursor-pointer"
              />
              <span className="text-sm text-umber group-hover:text-espresso transition-colors">
                {c.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-espresso font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((r) => (
            <label key={r.label} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={
                  filters.priceRange?.[0] === r.min && filters.priceRange?.[1] === r.max
                }
                onChange={() => setPriceRange(r.min, r.max)}
                className="w-4 h-4 border-clay accent-espresso cursor-pointer"
              />
              <span className="text-sm text-umber group-hover:text-espresso transition-colors">
                {r.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-espresso font-medium mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((m) => (
            <label key={m.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.materials.includes(m.value)}
                onChange={() => toggleMaterial(m.value)}
                className="w-4 h-4 border-clay accent-espresso cursor-pointer"
              />
              <span className="text-sm text-umber group-hover:text-espresso transition-colors">
                {m.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0">{content}</aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs tracking-widest uppercase text-espresso font-medium">
                Filters
              </h3>
              <button onClick={() => setMobileOpen(false)} className="text-umber">
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
