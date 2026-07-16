import { X } from 'lucide-react';

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
];

const materialOptions = [
  { value: '', label: 'All' },
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

const priceRanges = [
  { value: '', label: 'All' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 – $100' },
  { value: '100-200', label: '$100 – $200' },
];

export default function FilterSidebar({
  filters,
  onFilterChange,
  mobileOpen,
  onMobileClose,
}) {
  const content = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-espresso mb-3 font-medium">Category</h4>
        <div className="space-y-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFilterChange('category', opt.value)}
              className={`block text-sm transition-colors ${
                filters.category === opt.value
                  ? 'text-accent font-medium'
                  : 'text-taupe hover:text-espresso'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-espresso mb-3 font-medium">Material</h4>
        <div className="space-y-2">
          {materialOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFilterChange('material', opt.value)}
              className={`block text-sm transition-colors ${
                filters.material === opt.value
                  ? 'text-accent font-medium'
                  : 'text-taupe hover:text-espresso'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase text-espresso mb-3 font-medium">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFilterChange('price', opt.value)}
              className={`block text-sm transition-colors ${
                filters.price === opt.value
                  ? 'text-accent font-medium'
                  : 'text-taupe hover:text-espresso'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {(filters.category || filters.material || filters.price) && (
        <button
          onClick={() => onFilterChange('clear')}
          className="text-xs tracking-[0.1em] uppercase text-taupe hover:text-espresso transition-colors underline"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-52 flex-shrink-0">
        {content}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-espresso/30 backdrop-blur-sm transition-opacity duration-300"
            onClick={onMobileClose}
          />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-surface border-r border-warm-sand p-5 overflow-y-auto transition-transform duration-300 ease-out translate-x-0">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs tracking-[0.15em] uppercase text-espresso font-medium">Filters</span>
              <button onClick={onMobileClose} className="text-espresso hover:text-accent transition-colors">
                <X size={18} />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
