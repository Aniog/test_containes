import { X } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const materials = [
  { id: 'all', label: 'All' },
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-40', label: 'Under $40' },
  { id: '40-60', label: '$40 - $60' },
  { id: '60-80', label: '$60 - $80' },
  { id: 'over-80', label: 'Over $80' },
];

export default function FilterSidebar({ filters, setFilters, mobileOpen, onClose }) {
  const handleCategoryChange = (value) => {
    setFilters((prev) => ({ ...prev, category: value }));
  };

  const handleMaterialChange = (value) => {
    setFilters((prev) => ({ ...prev, material: value }));
  };

  const handlePriceChange = (value) => {
    setFilters((prev) => ({ ...prev, price: value }));
  };

  const clearFilters = () => {
    setFilters({ category: 'all', material: 'all', price: 'all' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.material !== 'all' || filters.price !== 'all';

  const content = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-sm uppercase tracking-widest text-warm-900 font-sans">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-[11px] text-gold-300 hover:text-gold-400 uppercase tracking-wider font-sans"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-warm-500 mb-3 font-sans">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                filters.category === cat.id
                  ? 'text-gold-300 font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-warm-500 mb-3 font-sans">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => handleMaterialChange(mat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                filters.material === mat.id
                  ? 'text-gold-300 font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-warm-500 mb-3 font-sans">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => handlePriceChange(range.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                filters.price === range.id
                  ? 'text-gold-300 font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-56 flex-shrink-0">
        {content}
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 shadow-xl overflow-y-auto">
            <div className="flex justify-end mb-6">
              <button onClick={onClose} className="text-warm-500 hover:text-warm-900">
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