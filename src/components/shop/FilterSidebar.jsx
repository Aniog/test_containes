import { X } from 'lucide-react';

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75to100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, onClose }) {
  const toggleCategory = (catId) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(catId)
        ? prev.categories.filter((c) => c !== catId)
        : [...prev.categories, catId],
    }));
  };

  const togglePrice = (priceId) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === priceId ? null : priceId,
    }));
  };

  const toggleMaterial = (matId) => {
    setFilters((prev) => ({
      ...prev,
      materials: prev.materials.includes(matId)
        ? prev.materials.filter((m) => m !== matId)
        : [...prev.materials, matId],
    }));
  };

  const clearAll = () => {
    setFilters({ categories: [], priceRange: null, materials: [] });
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.priceRange || filters.materials.length > 0;

  const sidebarContent = (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between md:hidden">
        <h3 className="text-xs uppercase tracking-widest font-medium">Filters</h3>
        <button onClick={onClose} className="p-1">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-widest text-gold hover:text-warm-charcoal transition-colors"
        >
          Clear All
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium text-warm-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-3.5 h-3.5 border-beige text-gold focus:ring-gold/30 accent-gold"
              />
              <span className="text-sm text-warm-gray group-hover:text-warm-charcoal transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium text-warm-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === range.id}
                onChange={() => togglePrice(range.id)}
                className="w-3.5 h-3.5 border-beige text-gold focus:ring-gold/30 accent-gold"
              />
              <span className="text-sm text-warm-gray group-hover:text-warm-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest font-medium text-warm-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.materials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="w-3.5 h-3.5 border-beige text-gold focus:ring-gold/30 accent-gold"
              />
              <span className="text-sm text-warm-gray group-hover:text-warm-charcoal transition-colors">
                {mat.label}
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
      <aside className="hidden md:block w-56 flex-shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-cream p-6 shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  );
}