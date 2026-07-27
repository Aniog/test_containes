import React from "react";
import { X } from "lucide-react";

const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];
const materials = ["18K Gold Plated", "Sterling Silver"];
const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

export default function FilterSidebar({
  selectedCategories,
  toggleCategory,
  selectedMaterials,
  toggleMaterial,
  selectedPriceRange,
  setPriceRange,
  onClearAll,
  hasFilters,
}) {
  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-espresso">
          Filter
        </h3>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="flex items-center gap-1 font-inter text-[10px] uppercase tracking-[0.1em] text-taupe hover:text-gold transition-colors"
          >
            <X size={10} strokeWidth={2} />
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-7">
        <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-taupe mb-3">
          Category
        </p>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-3.5 h-3.5 accent-gold cursor-pointer"
                />
                <span className="font-inter text-sm text-taupe group-hover:text-espresso transition-colors">
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone mb-7" />

      {/* Price */}
      <div className="mb-7">
        <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-taupe mb-3">
          Price
        </p>
        <ul className="space-y-2.5">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={
                    selectedPriceRange?.label === range.label
                  }
                  onChange={() => setPriceRange(range)}
                  className="w-3.5 h-3.5 accent-gold cursor-pointer"
                />
                <span className="font-inter text-sm text-taupe group-hover:text-espresso transition-colors">
                  {range.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone mb-7" />

      {/* Material */}
      <div>
        <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-taupe mb-3">
          Material
        </p>
        <ul className="space-y-2.5">
          {materials.map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggleMaterial(mat)}
                  className="w-3.5 h-3.5 accent-gold cursor-pointer"
                />
                <span className="font-inter text-sm text-taupe group-hover:text-espresso transition-colors">
                  {mat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
