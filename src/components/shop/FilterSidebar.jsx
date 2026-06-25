import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
];

const PRICE_RANGES = [
  { value: "all", label: "All prices" },
  { value: "under-50", label: "Under $50" },
  { value: "50-75", label: "$50 – $75" },
  { value: "over-75", label: "Over $75" },
];

const MATERIALS = [
  { value: "all", label: "All materials" },
  { value: "18k-gold", label: "18K Gold Plated" },
  { value: "crystal", label: "Crystal" },
  { value: "filigree", label: "Filigree" },
];

function FilterGroup({ title, options, value, onChange }) {
  const id = useId();
  return (
    <div className="border-t border-bone/80 py-6 first:border-t-0">
      <h3 className="text-[11px] tracking-[0.22em] uppercase text-charcoal mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <li key={opt.value}>
              <button
                id={`${id}-${opt.value}`}
                type="button"
                onClick={() => onChange(opt.value)}
                className={cn(
                  "flex w-full items-center justify-between text-left text-sm py-1 transition-colors",
                  isActive
                    ? "text-espresso font-medium"
                    : "text-charcoal hover:text-espresso"
                )}
                aria-pressed={isActive}
              >
                <span>{opt.label}</span>
                {isActive && (
                  <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function FilterSidebar({
  category,
  priceRange,
  material,
  onCategoryChange,
  onPriceChange,
  onMaterialChange,
  onClear,
}) {
  const hasActiveFilter =
    category !== "all" || priceRange !== "all" || material !== "all";

  return (
    <aside className="w-full md:w-64 md:flex-shrink-0 md:pr-8">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="font-serif text-2xl text-espresso">Filter</h2>
        {hasActiveFilter && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] tracking-[0.22em] uppercase text-charcoal hover:text-accent transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      <p className="text-xs text-charcoal mb-2">Refine by category, price, and material.</p>
      <FilterGroup
        title="Category"
        options={[{ value: "all", label: "All categories" }, ...CATEGORIES]}
        value={category}
        onChange={onCategoryChange}
      />
      <FilterGroup
        title="Price"
        options={PRICE_RANGES}
        value={priceRange}
        onChange={onPriceChange}
      />
      <FilterGroup
        title="Material"
        options={MATERIALS}
        value={material}
        onChange={onMaterialChange}
      />
    </aside>
  );
}