import { X } from 'lucide-react';

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Bracelets', value: 'bracelets' },
  { label: 'Sets', value: 'sets' },
];

const materials = [
  { label: 'All', value: '' },
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

const priceRanges = [
  { label: 'All', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 – $100', value: '50-100' },
  { label: 'Over $100', value: '100-999' },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velvet-500 font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('category', cat.value)}
              className={`block text-sm transition-colors ${
                filters.category === cat.value
                  ? 'text-velvet-900 font-medium'
                  : 'text-velvet-500 hover:text-velvet-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velvet-500 font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => updateFilter('material', mat.value)}
              className={`block text-sm transition-colors ${
                filters.material === mat.value
                  ? 'text-velvet-900 font-medium'
                  : 'text-velvet-500 hover:text-velvet-700'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velvet-500 font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block text-sm transition-colors ${
                filters.price === range.value
                  ? 'text-velvet-900 font-medium'
                  : 'text-velvet-500 hover:text-velvet-700'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {(filters.category || filters.material || filters.price) && (
        <button
          onClick={() => setFilters({ category: '', material: '', price: '' })}
          className="text-xs tracking-wider uppercase text-velvet-400 hover:text-velvet-700 transition-colors underline underline-offset-4"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">
        <FilterContent />
      </aside>

      {/* Mobile filter drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div className="absolute left-0 top-0 bottom-0 w-72 bg-velvet-50 shadow-2xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-lg tracking-wide text-velvet-900">Filters</h2>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-velvet-500 hover:text-velvet-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </>
  );
}