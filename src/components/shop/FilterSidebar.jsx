import { useState } from 'react';

const ChevronDown = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FilterSidebar = ({ filters, onFilterChange, isOpen, onClose }) => {
  const [expanded, setExpanded] = useState({
    category: true,
    price: true,
    material: true,
  });

  const categories = [
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Gift Sets' },
  ];

  const priceRanges = [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
    { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
  ];

  const materials = [
    { id: 'gold', label: '18K Gold Plated' },
    { id: 'silver', label: 'Silver Tone' },
  ];

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (categoryId) => {
    const current = filters.category || [];
    const updated = current.includes(categoryId)
      ? current.filter((c) => c !== categoryId)
      : [...current, categoryId];
    onFilterChange({ ...filters, category: updated.length > 0 ? updated : undefined });
  };

  const handlePriceChange = (rangeId) => {
    const current = filters.priceRange || [];
    const updated = current.includes(rangeId)
      ? current.filter((r) => r !== rangeId)
      : [...current, rangeId];
    onFilterChange({ ...filters, priceRange: updated.length > 0 ? updated : undefined });
  };

  const handleMaterialChange = (materialId) => {
    const current = filters.material || [];
    const updated = current.includes(materialId)
      ? current.filter((m) => m !== materialId)
      : [...current, materialId];
    onFilterChange({ ...filters, material: updated.length > 0 ? updated : undefined });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  const FilterSection = ({ title, sectionKey, children }) => (
    <div className="border-b border-velmora-border last:border-b-0">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-black">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`text-velmora-stone transition-transform duration-300 ${
            expanded[sectionKey] ? 'rotate-180' : ''
          }`}
        />
      </button>
      {expanded[sectionKey] && <div className="pb-4">{children}</div>}
    </div>
  );

  const CheckboxItem = ({ id, label, checked, onChange }) => (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-4 h-4 border transition-all duration-200 ${
            checked
              ? 'bg-velmora-black border-velmora-black'
              : 'border-velmora-stone/50 group-hover:border-velmora-black'
          }`}
        >
          {checked && (
            <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-velmora-black/80 group-hover:text-velmora-black transition-colors">
        {label}
      </span>
    </label>
  );

  const sidebarContent = (
    <div className="bg-white p-6 border border-velmora-border rounded-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-black">
          Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-[11px] font-sans font-medium tracking-wider uppercase text-velmora-gold-dark hover:text-velmora-gold transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterSection title="Category" sectionKey="category">
        <div className="space-y-1">
          {categories.map((cat) => (
            <CheckboxItem
              key={cat.id}
              id={`cat-${cat.id}`}
              label={cat.label}
              checked={filters.category?.includes(cat.id) || false}
              onChange={() => handleCategoryChange(cat.id)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price" sectionKey="price">
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <CheckboxItem
              key={range.id}
              id={`price-${range.id}`}
              label={range.label}
              checked={filters.priceRange?.includes(range.id) || false}
              onChange={() => handlePriceChange(range.id)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Material" sectionKey="material">
        <div className="space-y-1">
          {materials.map((mat) => (
            <CheckboxItem
              key={mat.id}
              id={`mat-${mat.id}`}
              label={mat.label}
              checked={filters.material?.includes(mat.id) || false}
              onChange={() => handleMaterialChange(mat.id)}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile filter drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-velmora-black/40 backdrop-blur-sm" onClick={onClose} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-velmora-cream overflow-y-auto">
            <div className="p-4 border-b border-velmora-border flex items-center justify-between">
              <h3 className="text-sm font-sans font-semibold tracking-widest uppercase">Filters</h3>
              <button onClick={onClose} className="p-2 text-velmora-black/60 hover:text-velmora-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {sidebarContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
