import React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
];

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
];

export default function FilterSidebar({
  selectedCategory,
  selectedPriceRange,
  selectedMaterial,
  onCategoryChange,
  onPriceRangeChange,
  onMaterialChange,
  onClearAll,
  onClose,
}) {
  const hasFilters = selectedCategory || selectedPriceRange || selectedMaterial;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-medium text-brand-charcoal">Filters</h3>
        <div className="flex items-center gap-3">
          {hasFilters && (
            <button
              onClick={onClearAll}
              className="text-xs text-brand-gold hover:text-brand-gold-hover transition-colors uppercase tracking-wider"
            >
              Clear All
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 text-brand-warm-gray hover:text-brand-charcoal"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-sm font-medium text-brand-charcoal uppercase tracking-wider mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(selectedCategory === cat.id ? null : cat.id)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors duration-300',
                selectedCategory === cat.id
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-sm font-medium text-brand-charcoal uppercase tracking-wider mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => onPriceRangeChange(selectedPriceRange === range.id ? null : range.id)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors duration-300',
                selectedPriceRange === range.id
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-sm font-medium text-brand-charcoal uppercase tracking-wider mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => onMaterialChange(selectedMaterial === mat.id ? null : mat.id)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors duration-300',
                selectedMaterial === mat.id
                  ? 'text-brand-gold font-medium'
                  : 'text-brand-warm-gray hover:text-brand-charcoal'
              )}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
