import React from 'react';
import { X } from 'lucide-react';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Silver' },
];

export default function FilterSidebar({ 
  selectedCategory, 
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedMaterial,
  onMaterialChange,
  onClearAll,
  isOpen,
  onClose
}) {
  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Gift Sets' },
  ];

  const hasFilters = selectedCategory !== 'all' || selectedPriceRange || selectedMaterial;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 lg:top-24 left-0 h-full lg:h-auto w-80 lg:w-64 
        bg-cream lg:bg-transparent z-40 lg:z-auto
        transform transition-transform duration-300 lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto lg:overflow-visible
        p-6 lg:p-0
      `}>
        {/* Mobile close */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h3 className="font-serif text-xl">Filters</h3>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {/* Clear filters */}
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-xs underline text-charcoal/50 hover:text-charcoal mb-6"
          >
            Clear all filters
          </button>
        )}

        {/* Category */}
        <div className="mb-8">
          <h4 
            className="text-xs uppercase tracking-widest text-charcoal mb-4"
            style={{ letterSpacing: '0.15em' }}
          >
            Category
          </h4>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  selectedCategory === cat.id
                    ? 'text-charcoal font-medium'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <h4 
            className="text-xs uppercase tracking-widest text-charcoal mb-4"
            style={{ letterSpacing: '0.15em' }}
          >
            Price
          </h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => onPriceRangeChange(selectedPriceRange === range.id ? null : range.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  selectedPriceRange === range.id
                    ? 'text-charcoal font-medium'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div className="mb-8">
          <h4 
            className="text-xs uppercase tracking-widest text-charcoal mb-4"
            style={{ letterSpacing: '0.15em' }}
          >
            Material
          </h4>
          <div className="space-y-2">
            {materials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => onMaterialChange(selectedMaterial === mat.id ? null : mat.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  selectedMaterial === mat.id
                    ? 'text-charcoal font-medium'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {mat.label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
