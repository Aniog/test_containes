import { cn } from '@/lib/utils';
import { CATEGORIES, MATERIALS, getCategoryLabel } from '@/data/products';

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: 9999 },
];

export function FilterSidebar({ filters, onChange, className }) {
  const toggleCategory = (category) => {
    const next = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];
    onChange({ ...filters, category: next });
  };

  const toggleMaterial = (material) => {
    const next = filters.material.includes(material)
      ? filters.material.filter((m) => m !== material)
      : [...filters.material, material];
    onChange({ ...filters, material: next });
  };

  const togglePrice = (range) => {
    const exists = filters.price.find(
      (p) => p.min === range.min && p.max === range.max
    );
    const next = exists
      ? filters.price.filter((p) => !(p.min === range.min && p.max === range.max))
      : [...filters.price, range];
    onChange({ ...filters, price: next });
  };

  const clearFilters = () => {
    onChange({ category: [], material: [], price: [] });
  };

  const hasFilters =
    filters.category.length > 0 || filters.material.length > 0 || filters.price.length > 0;

  return (
    <aside className={cn('space-y-8', className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-2xl text-velmora-base">Filters</h3>
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="font-sans text-xs uppercase tracking-widest text-velmora-taupe hover:text-velmora-gold"
          >
            Clear
          </button>
        )}
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
          Category
        </h4>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-velmora-taupe hover:text-velmora-base"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => toggleCategory(category)}
                className="h-4 w-4 rounded border-velmora-base/30 text-velmora-gold focus:ring-velmora-gold"
              />
              {getCategoryLabel(category)}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
          Material
        </h4>
        <div className="space-y-2">
          {MATERIALS.map((material) => (
            <label
              key={material}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-velmora-taupe capitalize hover:text-velmora-base"
            >
              <input
                type="checkbox"
                checked={filters.material.includes(material)}
                onChange={() => toggleMaterial(material)}
                className="h-4 w-4 rounded border-velmora-base/30 text-velmora-gold focus:ring-velmora-gold"
              />
              {material}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
          Price
        </h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.label}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-velmora-taupe hover:text-velmora-base"
            >
              <input
                type="checkbox"
                checked={filters.price.some(
                  (p) => p.min === range.min && p.max === range.max
                )}
                onChange={() => togglePrice(range)}
                className="h-4 w-4 rounded border-velmora-base/30 text-velmora-gold focus:ring-velmora-gold"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
