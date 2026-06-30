import React from 'react';

const FilterSidebar = ({ filters, onFilterChange, isOpen, onClose }) => {
  const categories = [
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Sets' },
  ];

  const priceRanges = [
    { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
    { id: '50-75', name: '$50 – $75', min: 50, max: 75 },
    { id: '75-100', name: '$75 – $100', min: 75, max: 100 },
    { id: 'over-100', name: 'Over $100', min: 100, max: Infinity },
  ];

  const materials = [
    { id: 'gold', name: '18K Gold' },
    { id: 'silver', name: 'Sterling Silver' },
  ];

  const handleCategoryChange = (categoryId) => {
    onFilterChange({
      ...filters,
      category: filters.category === categoryId ? null : categoryId,
    });
  };

  const handlePriceChange = (rangeId) => {
    const range = priceRanges.find((r) => r.id === rangeId);
    onFilterChange({
      ...filters,
      priceRange: filters.priceRange === rangeId ? null : rangeId,
      priceMin: range?.min,
      priceMax: range?.max,
    });
  };

  const handleMaterialChange = (materialId) => {
    onFilterChange({
      ...filters,
      material: filters.material === materialId ? null : materialId,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      category: null,
      priceRange: null,
      priceMin: null,
      priceMax: null,
      material: null,
      sort: 'featured',
    });
  };

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-base-charcoal/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-base-cream transform transition-transform duration-300 lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full overflow-y-auto p-6 lg:p-0">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="font-display text-xl font-medium">Filters</h3>
            <button
              onClick={onClose}
              className="p-2 hover:text-gold transition-colors duration-200"
              aria-label="Close filters"
            >
              ✕
            </button>
          </div>

          {/* Clear filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs font-medium tracking-wider uppercase text-gold hover:text-gold-dark transition-colors duration-200 mb-6"
            >
              Clear All Filters
            </button>
          )}

          {/* Categories */}
          <div className="mb-8">
            <h4 className="text-sm font-medium tracking-wider uppercase text-base-charcoal mb-4">
              Category
            </h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                    filters.category === category.id
                      ? 'bg-accent-soft text-gold font-medium'
                      : 'text-base-muted hover:text-base-charcoal hover:bg-base-paper'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h4 className="text-sm font-medium tracking-wider uppercase text-base-charcoal mb-4">
              Price
            </h4>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handlePriceChange(range.id)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                    filters.priceRange === range.id
                      ? 'bg-accent-soft text-gold font-medium'
                      : 'text-base-muted hover:text-base-charcoal hover:bg-base-paper'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="mb-8">
            <h4 className="text-sm font-medium tracking-wider uppercase text-base-charcoal mb-4">
              Material
            </h4>
            <div className="space-y-2">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => handleMaterialChange(material.id)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                    filters.material === material.id
                      ? 'bg-accent-soft text-gold font-medium'
                      : 'text-base-muted hover:text-base-charcoal hover:bg-base-paper'
                  }`}
                >
                  {material.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
