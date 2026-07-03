import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Gift Sets', count: 1 },
];

const priceRanges = [
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', name: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', name: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { id: 'gold', name: '18K Gold Plated' },
  { id: 'silver', name: 'Silver Plated' },
];

export default function FilterSidebar({ 
  filters, 
  onFilterChange, 
  isOpen, 
  onClose,
  productCounts 
}) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    material: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (categoryId) => {
    onFilterChange({
      ...filters,
      category: filters.category === categoryId ? null : categoryId,
    });
  };

  const handlePriceChange = (priceId) => {
    onFilterChange({
      ...filters,
      priceRange: filters.priceRange === priceId ? null : priceId,
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
      material: null,
    });
  };

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-72 md:w-64 bg-white md:bg-transparent z-50 md:z-auto transform transition-transform duration-300 md:transform-none overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-[#E8E4DC]">
          <span className="font-serif text-lg">Filters</span>
          <button onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-0">
          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="w-full text-left text-sm text-[#C9A962] hover:text-[#A68B4B] mb-6 md:mb-4"
            >
              Clear All Filters
            </button>
          )}

          {/* Categories */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('category')}
              className="w-full flex items-center justify-between mb-4"
            >
              <span className="label-uppercase text-xs tracking-wider">Category</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.category ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSections.category && (
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.category === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                        filters.category === cat.id
                          ? 'bg-[#C9A962] border-[#C9A962]'
                          : 'border-[#E8E4DC] group-hover:border-[#C9A962]'
                      }`}
                    >
                      {filters.category === cat.id && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-[#6B6560] group-hover:text-[#2D2926]">
                      {cat.name}
                      <span className="text-[#9A9590] ml-1">
                        ({productCounts?.[cat.id] || cat.count})
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E8E4DC] my-6" />

          {/* Price */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('price')}
              className="w-full flex items-center justify-between mb-4"
            >
              <span className="label-uppercase text-xs tracking-wider">Price</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.price ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSections.price && (
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <label
                    key={range.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.priceRange === range.id}
                      onChange={() => handlePriceChange(range.id)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                        filters.priceRange === range.id
                          ? 'bg-[#C9A962] border-[#C9A962]'
                          : 'border-[#E8E4DC] group-hover:border-[#C9A962]'
                      }`}
                    >
                      {filters.priceRange === range.id && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-[#6B6560] group-hover:text-[#2D2926]">
                      {range.name}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E8E4DC] my-6" />

          {/* Material */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('material')}
              className="w-full flex items-center justify-between mb-4"
            >
              <span className="label-uppercase text-xs tracking-wider">Material</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openSections.material ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSections.material && (
              <div className="space-y-3">
                {materials.map((mat) => (
                  <label
                    key={mat.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.material === mat.id}
                      onChange={() => handleMaterialChange(mat.id)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                        filters.material === mat.id
                          ? 'bg-[#C9A962] border-[#C9A962]'
                          : 'border-[#E8E4DC] group-hover:border-[#C9A962]'
                      }`}
                    >
                      {filters.material === mat.id && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-[#6B6560] group-hover:text-[#2D2926]">
                      {mat.name}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
