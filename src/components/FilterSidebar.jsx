import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, materials } from "@/data/products";

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75 – $100", min: 75, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
];

export function FilterSidebar({
  selectedCategories,
  toggleCategory,
  selectedMaterials,
  toggleMaterial,
  selectedPrice,
  setSelectedPrice,
  isOpen,
  onClose,
}) {
  const FilterContent = () => (
    <div className="space-y-10">
      <div>
        <h4 className="mb-4 text-xs uppercase tracking-widest text-espresso">
          Category
        </h4>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-warm-gray">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="h-4 w-4 accent-gold"
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-xs uppercase tracking-widest text-espresso">
          Price
        </h4>
        <ul className="space-y-3">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-warm-gray">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice?.label === range.label}
                  onChange={() => setSelectedPrice(range)}
                  className="h-4 w-4 accent-gold"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-xs uppercase tracking-widest text-espresso">
          Material
        </h4>
        <ul className="space-y-3">
          {materials.map((material) => (
            <li key={material}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-warm-gray">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => toggleMaterial(material)}
                  className="h-4 w-4 accent-gold"
                />
                {material}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <FilterContent />
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed bottom-0 left-0 top-0 z-[70] w-80 max-w-full overflow-y-auto bg-cream p-6 shadow-2xl transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-serif text-xl text-espresso">Filters</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="p-1 text-warm-gray hover:text-espresso focus-visible:outline-none"
          >
            <X size={22} />
          </button>
        </div>
        <FilterContent />
      </aside>
    </>
  );
}
