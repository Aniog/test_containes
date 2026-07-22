import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", test: (p) => p < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p >= 50 && p < 75 },
  { id: "75-100", label: "$75 – $100", test: (p) => p >= 75 && p < 100 },
  { id: "100-plus", label: "$100 & above", test: (p) => p >= 100 },
];

const MATERIALS = [
  { id: "gold", label: "18K Gold Plated" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export { CATEGORIES, PRICE_BUCKETS, MATERIALS, SORTS };

export default function FilterSidebar({
  selectedCategories,
  selectedPrice,
  selectedMaterials,
  onToggleCategory,
  onSelectPrice,
  onToggleMaterial,
  onClear,
  totalCount,
  className,
}) {
  const activeCount =
    selectedCategories.length +
    (selectedPrice ? 1 : 0) +
    selectedMaterials.length;

  return (
    <aside className={cn("w-full md:w-64 md:shrink-0", className)}>
      <div className="mb-6 flex items-center justify-between border-b border-cream pb-4">
        <h2 className="font-serif text-xl text-espresso">Filter</h2>
        {activeCount > 0 ? (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-[10.5px] uppercase tracking-widest2 text-muted transition hover:text-espresso"
          >
            <X size={11} strokeWidth={1.6} />
            Clear ({activeCount})
          </button>
        ) : (
          <span className="text-[10.5px] uppercase tracking-widest2 text-muted">
            {totalCount} pieces
          </span>
        )}
      </div>

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {CATEGORIES.map((cat) => {
            const checked = selectedCategories.includes(cat.id);
            return (
              <li key={cat.id}>
                <label className="group flex cursor-pointer items-center gap-3 text-sm text-espresso-soft transition hover:text-espresso">
                  <span
                    className={cn(
                      "inline-flex h-4 w-4 items-center justify-center border transition-colors",
                      checked
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-muted/50 bg-transparent"
                    )}
                  >
                    {checked ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 6.5L5 9L9.5 3.5" />
                      </svg>
                    ) : null}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => onToggleCategory(cat.id)}
                  />
                  <span className="flex-1">{cat.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((bucket) => {
            const checked = selectedPrice === bucket.id;
            return (
              <li key={bucket.id}>
                <label className="group flex cursor-pointer items-center gap-3 text-sm text-espresso-soft transition hover:text-espresso">
                  <span
                    className={cn(
                      "inline-flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
                      checked
                        ? "border-espresso"
                        : "border-muted/50"
                    )}
                  >
                    {checked ? (
                      <span className="h-2 w-2 rounded-full bg-espresso" />
                    ) : null}
                  </span>
                  <input
                    type="radio"
                    name="price"
                    className="sr-only"
                    checked={checked}
                    onChange={() => onSelectPrice(checked ? null : bucket.id)}
                  />
                  <span className="flex-1">{bucket.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material" last>
        <ul className="space-y-2.5">
          {MATERIALS.map((mat) => {
            const checked = selectedMaterials.includes(mat.id);
            return (
              <li key={mat.id}>
                <label className="group flex cursor-pointer items-center gap-3 text-sm text-espresso-soft transition hover:text-espresso">
                  <span
                    className={cn(
                      "inline-flex h-4 w-4 items-center justify-center border transition-colors",
                      checked
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-muted/50 bg-transparent"
                    )}
                  >
                    {checked ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 6.5L5 9L9.5 3.5" />
                      </svg>
                    ) : null}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => onToggleMaterial(mat.id)}
                  />
                  <span className="flex-1">{mat.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({ title, children, last }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={cn("border-b border-cream py-5", last && "border-b-0")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] font-medium uppercase tracking-widest2 text-espresso">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={cn(
            "text-espresso-soft transition-transform duration-300",
            open ? "rotate-0" : "-rotate-90"
          )}
        />
      </button>
      {open ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
