import { filters } from '@/data/products';

export default function FilterSidebar({
  selectedCategory,
  selectedPrice,
  selectedMaterial,
  onCategoryChange,
  onPriceChange,
  onMaterialChange,
}) {
  const handleCategoryClick = (cat) => {
    onCategoryChange(cat === 'All' ? null : cat.toLowerCase());
  };

  return (
    <aside className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-800 mb-4">
          Category
        </h3>
        <ul className="space-y-2">
          {filters.categories.map((cat) => {
            const isActive = cat === 'All'
              ? !selectedCategory
              : selectedCategory === cat.toLowerCase();
            return (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-600 font-medium'
                      : 'text-ink-500 hover:text-ink-800'
                  }`}
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-800 mb-4">
          Price Range
        </h3>
        <ul className="space-y-2">
          {filters.priceRanges.map((range) => {
            const isActive =
              selectedPrice?.min === range.min && selectedPrice?.max === range.max;
            return (
              <li key={range.label}>
                <button
                  onClick={() => onPriceChange(isActive ? null : range)}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-600 font-medium'
                      : 'text-ink-500 hover:text-ink-800'
                  }`}
                >
                  {range.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-semibold text-ink-800 mb-4">
          Material
        </h3>
        <ul className="space-y-2">
          {filters.materials.map((mat) => {
            const isActive = selectedMaterial === mat.toLowerCase();
            return (
              <li key={mat}>
                <button
                  onClick={() => onMaterialChange(isActive ? null : mat.toLowerCase())}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-600 font-medium'
                      : 'text-ink-500 hover:text-ink-800'
                  }`}
                >
                  {mat}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}