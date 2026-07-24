import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-stone-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-xs uppercase tracking-wider font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
};

const CheckboxItem = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      className={`w-4 h-4 border transition-colors ${
        checked
          ? 'bg-gold border-gold'
          : 'border-stone-300 group-hover:border-stone-500'
      }`}
    >
      {checked && (
        <svg viewBox="0 0 16 16" fill="white" className="w-4 h-4">
          <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
        </svg>
      )}
    </div>
    <span className="text-sm text-stone-600 group-hover:text-stone-800 transition-colors">
      {label}
    </span>
  </label>
);

export default function FilterSidebar({
  filters,
  onFilterChange,
  onClose,
  isMobile = false,
}) {
  const categories = [
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Gift Sets' },
  ];

  const priceRanges = [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
  ];

  const materials = [
    { id: 'gold', label: '18K Gold Plated' },
    { id: 'silver', label: 'Sterling Silver' },
  ];

  const handleCategoryChange = (categoryId) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handlePriceChange = (priceId) => {
    const newPrices = filters.prices.includes(priceId)
      ? filters.prices.filter((p) => p !== priceId)
      : [...filters.prices, priceId];
    onFilterChange({ ...filters, prices: newPrices });
  };

  const handleMaterialChange = (materialId) => {
    const newMaterials = filters.materials.includes(materialId)
      ? filters.materials.filter((m) => m !== materialId)
      : [...filters.materials, materialId];
    onFilterChange({ ...filters, materials: newMaterials });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.prices.length > 0 ||
    filters.materials.length > 0;

  const clearFilters = () => {
    onFilterChange({ categories: [], prices: [], materials: [] });
  };

  return (
    <div className={isMobile ? 'p-4' : ''}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl">Filters</h2>
          <button onClick={onClose} aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-4">
          <button
            onClick={clearFilters}
            className="text-xs text-gold hover:text-gold-dark transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Category Filter */}
      <FilterSection title="Category">
        {categories.map((category) => (
          <CheckboxItem
            key={category.id}
            label={category.label}
            checked={filters.categories.includes(category.id)}
            onChange={() => handleCategoryChange(category.id)}
          />
        ))}
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Price">
        {priceRanges.map((price) => (
          <CheckboxItem
            key={price.id}
            label={price.label}
            checked={filters.prices.includes(price.id)}
            onChange={() => handlePriceChange(price.id)}
          />
        ))}
      </FilterSection>

      {/* Material Filter */}
      <FilterSection title="Material">
        {materials.map((material) => (
          <CheckboxItem
            key={material.id}
            label={material.label}
            checked={filters.materials.includes(material.id)}
            onChange={() => handleMaterialChange(material.id)}
          />
        ))}
      </FilterSection>
    </div>
  );
}
