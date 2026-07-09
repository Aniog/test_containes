import { X } from 'lucide-react';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver'];

export default function FilterSidebar({ filters, onChange, isOpen, onClose }) {
  const handleCategory = (cat) => {
    onChange({
      ...filters,
      category: filters.category === cat ? null : cat,
    });
  };

  const handlePrice = (range) => {
    onChange({
      ...filters,
      priceRange: filters.priceRange?.label === range.label ? null : range,
    });
  };

  const handleMaterial = (mat) => {
    onChange({
      ...filters,
      material: filters.material === mat ? null : mat,
    });
  };

  const clearAll = () => {
    onChange({ category: null, priceRange: null, material: null });
  };

  const hasFilters = filters.category || filters.priceRange || filters.material;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 h-full w-72 bg-cream z-40 lg:z-auto p-6 lg:p-0 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile close */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h3 className="font-serif text-lg tracking-wide text-text-primary">Filters</h3>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary" aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category */}
        <div className="mb-8">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-text-primary mb-4">Category</h4>
          <div className="space-y-2">
            {['earrings', 'necklaces', 'huggies'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                  filters.category === cat ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-text-primary mb-4">Price</h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => handlePrice(range)}
                className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                  filters.priceRange?.label === range.label ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div className="mb-8">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-text-primary mb-4">Material</h4>
          <div className="space-y-2">
            {materials.map((mat) => (
              <button
                key={mat}
                onClick={() => handleMaterial(mat)}
                className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                  filters.material === mat ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* Clear all */}
        {hasFilters && (
          <button
            onClick={clearAll}
            className="font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-dark transition-colors underline"
          >
            Clear All Filters
          </button>
        )}
      </aside>
    </>
  );
}
