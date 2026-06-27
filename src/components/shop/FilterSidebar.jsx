import { useState } from 'react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', name: '$75+', min: 75, max: Infinity },
];

const materials = [
  { id: 'all', name: 'All Materials' },
  { id: 'gold', name: '18K Gold Plated' },
  { id: 'silver', name: 'Sterling Silver' },
  { id: 'crystal', name: 'With Crystals' },
];

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const [expanded, setExpanded] = useState({
    category: true,
    price: true,
    material: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (id) => {
    setFilters((prev) => ({ ...prev, category: id }));
  };

  const handlePriceChange = (id) => {
    setFilters((prev) => ({ ...prev, price: id }));
  };

  const handleMaterialChange = (id) => {
    setFilters((prev) => ({ ...prev, material: id }));
  };

  const clearFilters = () => {
    setFilters({ category: 'all', price: 'all', material: 'all', sort: 'featured' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.price !== 'all' || filters.material !== 'all';

  const sidebarContent = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]">
            Category
          </span>
          <span className="text-[#78716C] text-xs">
            {expanded.category ? '−' : '+'}
          </span>
        </button>
        {expanded.category && (
          <div className="space-y-3">
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors duration-200 ${
                    filters.category === cat.id
                      ? 'bg-[#B8860B] border-[#B8860B]'
                      : 'border-[#D6D3D1] group-hover:border-[#B8860B]'
                  }`}
                >
                  {filters.category === cat.id && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-sm transition-colors duration-200 ${
                    filters.category === cat.id
                      ? 'text-[#1A1A1A] font-medium'
                      : 'text-[#78716C] group-hover:text-[#1A1A1A]'
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]">
            Price
          </span>
          <span className="text-[#78716C] text-xs">
            {expanded.price ? '−' : '+'}
          </span>
        </button>
        {expanded.price && (
          <div className="space-y-3">
            {priceRanges.map((range) => (
              <label
                key={range.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors duration-200 ${
                    filters.price === range.id
                      ? 'bg-[#B8860B] border-[#B8860B]'
                      : 'border-[#D6D3D1] group-hover:border-[#B8860B]'
                  }`}
                >
                  {filters.price === range.id && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-sm transition-colors duration-200 ${
                    filters.price === range.id
                      ? 'text-[#1A1A1A] font-medium'
                      : 'text-[#78716C] group-hover:text-[#1A1A1A]'
                  }`}
                  onClick={() => handlePriceChange(range.id)}
                >
                  {range.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material */}
      <div>
        <button
          onClick={() => toggleSection('material')}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]">
            Material
          </span>
          <span className="text-[#78716C] text-xs">
            {expanded.material ? '−' : '+'}
          </span>
        </button>
        {expanded.material && (
          <div className="space-y-3">
            {materials.map((mat) => (
              <label
                key={mat.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors duration-200 ${
                    filters.material === mat.id
                      ? 'bg-[#B8860B] border-[#B8860B]'
                      : 'border-[#D6D3D1] group-hover:border-[#B8860B]'
                  }`}
                >
                  {filters.material === mat.id && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-sm transition-colors duration-200 ${
                    filters.material === mat.id
                      ? 'text-[#1A1A1A] font-medium'
                      : 'text-[#78716C] group-hover:text-[#1A1A1A]'
                  }`}
                  onClick={() => handleMaterialChange(mat.id)}
                >
                  {mat.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-[#B8860B] hover:text-[#9A7209] transition-colors duration-300 tracking-wide underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm text-[#1A1A1A] font-medium tracking-wide"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block">{sidebarContent}</div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#FBF9F6]">
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#E8E4DF]">
            <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1A1A1A]">
              Filters
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:text-[#B8860B] transition-colors duration-300"
              aria-label="Close filters"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 py-6 overflow-y-auto h-[calc(100vh-65px)]">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
