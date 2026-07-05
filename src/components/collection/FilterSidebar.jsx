import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export function FilterSidebar({ filters, setFilters, categories, isOpen, onClose }) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    material: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === categoryId ? null : categoryId,
    }));
  };

  const handlePriceChange = (priceRange) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === priceRange ? null : priceRange,
    }));
  };

  const handleMaterialChange = (material) => {
    setFilters((prev) => ({
      ...prev,
      material: prev.material === material ? null : material,
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: null,
      priceRange: null,
      material: null,
      sort: 'featured',
    });
  };

  const priceRanges = [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over-100', label: '$100+', min: 100, max: Infinity },
  ];

  const materials = [
    { id: 'gold', label: 'Gold Plated' },
    { id: 'silver', label: 'Silver Plated' },
    { id: 'rose-gold', label: 'Rose Gold' },
  ];

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Clear All */}
      {hasActiveFilters && (
        <button
          onClick={clearAllFilters}
          className="text-xs text-charcoal/50 hover:text-gold-600 underline transition-colors"
        >
          Clear all filters
        </button>
      )}

      {/* Categories */}
      <div className="border-b border-charcoal/10 pb-6">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="font-sans text-sm tracking-wide text-charcoal">Category</span>
          <ChevronDown
            size={16}
            className={`text-charcoal/50 transition-transform ${openSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {openSections.category && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.category === cat.id}
                  onChange={() => handleCategoryChange(cat.id)}
                  className="w-4 h-4 border-charcoal/30 text-gold-600 focus:ring-gold-500 rounded"
                />
                <span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b border-charcoal/10 pb-6">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="font-sans text-sm tracking-wide text-charcoal">Price</span>
          <ChevronDown
            size={16}
            className={`text-charcoal/50 transition-transform ${openSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {openSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.priceRange === range.id}
                  onChange={() => handlePriceChange(range.id)}
                  className="w-4 h-4 border-charcoal/30 text-gold-600 focus:ring-gold-500 rounded"
                />
                <span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material */}
      <div className="pb-6">
        <button
          onClick={() => toggleSection('material')}
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="font-sans text-sm tracking-wide text-charcoal">Material</span>
          <ChevronDown
            size={16}
            className={`text-charcoal/50 transition-transform ${openSections.material ? 'rotate-180' : ''}`}
          />
        </button>
        {openSections.material && (
          <div className="space-y-2">
            {materials.map((mat) => (
              <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.material === mat.id}
                  onChange={() => handleMaterialChange(mat.id)}
                  className="w-4 h-4 border-charcoal/30 text-gold-600 focus:ring-gold-500 rounded"
                />
                <span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                  {mat.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h3 className="font-serif text-lg text-charcoal mb-6">Filters</h3>
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filter Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
          onClick={onClose}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-cream shadow-2xl transform transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
            <h3 className="font-serif text-lg text-charcoal">Filters</h3>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-charcoal/50 hover:text-charcoal"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-full">
            <FilterContent />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-charcoal/10 bg-cream">
            <button
              onClick={onClose}
              className="w-full bg-charcoal text-warmWhite py-3 text-sm tracking-extra-wide uppercase font-medium"
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
