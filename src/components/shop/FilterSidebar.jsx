import { ChevronDown } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = true }) => {
  return (
    <div className="border-b border-cream-300 pb-5 mb-5 last:border-0 last:pb-0 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-medium tracking-widest-xl uppercase text-charcoal-700">
          {title}
        </h4>
        <ChevronDown className="w-3.5 h-3.5 text-charcoal-400" />
      </div>
      {children}
    </div>
  );
};

const CheckboxItem = ({ label, checked, onChange, count }) => (
  <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 border border-cream-400 rounded-sm accent-gold-500"
    />
    <span className="text-sm text-charcoal-600 group-hover:text-charcoal-800 transition-colors flex-1">
      {label}
    </span>
    {count !== undefined && (
      <span className="text-xs text-charcoal-400">({count})</span>
    )}
  </label>
);

export default function FilterSidebar({
  filters,
  onFilterChange,
  categories,
  priceRanges,
  materials,
  className = '',
}) {
  const handleCategoryChange = (categoryId) => {
    const current = filters.categories || [];
    const updated = current.includes(categoryId)
      ? current.filter(c => c !== categoryId)
      : [...current, categoryId];
    onFilterChange({ ...filters, categories: updated });
  };

  const handlePriceChange = (rangeId) => {
    const current = filters.priceRanges || [];
    const updated = current.includes(rangeId)
      ? current.filter(p => p !== rangeId)
      : [...current, rangeId];
    onFilterChange({ ...filters, priceRanges: updated });
  };

  const handleMaterialChange = (material) => {
    const current = filters.materials || [];
    const updated = current.includes(material)
      ? current.filter(m => m !== material)
      : [...current, material];
    onFilterChange({ ...filters, materials: updated });
  };

  return (
    <aside className={className}>
      <h3 className="text-xs font-medium tracking-widest-xl uppercase text-charcoal-800 mb-6">
        Filters
      </h3>

      <FilterSection title="Category">
        {categories.map(cat => (
          <CheckboxItem
            key={cat.id}
            label={cat.name}
            count={cat.count}
            checked={(filters.categories || []).includes(cat.id)}
            onChange={() => handleCategoryChange(cat.id)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {priceRanges.map(range => (
          <CheckboxItem
            key={range.id}
            label={range.label}
            checked={(filters.priceRanges || []).includes(range.id)}
            onChange={() => handlePriceChange(range.id)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Material">
        {materials.map(mat => (
          <CheckboxItem
            key={mat}
            label={mat}
            checked={(filters.materials || []).includes(mat)}
            onChange={() => handleMaterialChange(mat)}
          />
        ))}
      </FilterSection>
    </aside>
  );
}
