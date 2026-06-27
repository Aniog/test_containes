import React from 'react';
import { Check } from 'lucide-react';

export default function FilterSidebar({ filters, setFilters, categories, priceRanges }) {
  const handleCategoryChange = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === categoryId ? null : categoryId,
    }));
  };

  const handlePriceChange = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? null : range,
    }));
  };

  const handleMaterialChange = (material) => {
    setFilters((prev) => ({
      ...prev,
      material: prev.material === material ? null : material,
    }));
  };

  const clearFilters = () => {
    setFilters({ category: null, priceRange: null, material: null, sort: 'featured' });
  };

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xs tracking-[0.2em] uppercase text-charcoal font-medium">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-[11px] text-muted hover:text-gold transition-colors tracking-wider uppercase"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-8 pb-8 border-b border-border">
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-3 text-sm transition-colors w-full text-left ${
                filters.category === cat.id ? 'text-gold' : 'text-muted hover:text-charcoal'
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.category === cat.id ? 'border-gold bg-gold' : 'border-border'
                }`}
              >
                {filters.category === cat.id && <Check className="w-3 h-3 text-white" />}
              </span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8 pb-8 border-b border-border">
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => handlePriceChange(range.label)}
              className={`flex items-center gap-3 text-sm transition-colors w-full text-left ${
                filters.priceRange === range.label ? 'text-gold' : 'text-muted hover:text-charcoal'
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.priceRange === range.label ? 'border-gold bg-gold' : 'border-border'
                }`}
              >
                {filters.priceRange === range.label && <Check className="w-3 h-3 text-white" />}
              </span>
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium mb-4">Material</h3>
        <div className="space-y-3">
          {['18K Gold Plated', 'Sterling Silver'].map((material) => (
            <button
              key={material}
              onClick={() => handleMaterialChange(material)}
              className={`flex items-center gap-3 text-sm transition-colors w-full text-left ${
                filters.material === material ? 'text-gold' : 'text-muted hover:text-charcoal'
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  filters.material === material ? 'border-gold bg-gold' : 'border-border'
                }`}
              >
                {filters.material === material && <Check className="w-3 h-3 text-white" />}
              </span>
              {material}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
