import { categories, materials } from '@/data/products';
import { X } from 'lucide-react';

export function FilterSidebar({
  selectedCategories,
  toggleCategory,
  selectedMaterials,
  toggleMaterial,
  priceRange,
  setPriceRange,
  onClose,
}) {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-taupe/60">
        <h3 className="font-serif text-xl">Filter</h3>
        {onClose && (
          <button type="button" onClick={onClose} aria-label="Close filters" className="lg:hidden p-1">
            <X size={22} />
          </button>
        )}
      </div>

      <div className="mb-8">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warmGray">Category</h4>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-gold border-taupe"
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
                {cat.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warmGray">Material</h4>
        <ul className="space-y-3">
          {materials.map((mat) => (
            <li key={mat.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-gold border-taupe"
                  checked={selectedMaterials.includes(mat.id)}
                  onChange={() => toggleMaterial(mat.id)}
                />
                {mat.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-warmGray">Price</h4>
        <div className="flex items-center gap-3">
          <input
            type="number"
            min={0}
            max={priceRange.max}
            value={priceRange.min}
            onChange={(e) => setPriceRange((p) => ({ ...p, min: Number(e.target.value) }))}
            className="w-full border border-taupe bg-cream px-3 py-2 text-sm focus:border-gold focus:outline-none"
            placeholder="Min"
          />
          <span className="text-warmGray">—</span>
          <input
            type="number"
            min={priceRange.min}
            value={priceRange.max}
            onChange={(e) => setPriceRange((p) => ({ ...p, max: Number(e.target.value) }))}
            className="w-full border border-taupe bg-cream px-3 py-2 text-sm focus:border-gold focus:outline-none"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
}
