import React from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Pieces" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "hypoallergenic", label: "Hypoallergenic" },
];

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80 +", min: 80.01, max: Infinity },
];

export default function FilterSidebar({
  category,
  onCategoryChange,
  priceRange,
  onPriceChange,
  materials,
  onMaterialToggle,
  resultCount,
}) {
  return (
    <aside className="md:w-64 lg:w-72 shrink-0">
      <div className="md:sticky md:top-28 space-y-10">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-taupe mb-3">
            Showing {resultCount} {resultCount === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <FilterGroup label="Category">
          <ul className="space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(c.id)}
                  className={cn(
                    "text-sm transition-colors duration-300",
                    category === c.id
                      ? "text-espresso font-medium"
                      : "text-espresso/60 hover:text-espresso"
                  )}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup label="Price">
          <ul className="space-y-2">
            {PRICE_RANGES.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => onPriceChange(p.id)}
                  className={cn(
                    "text-sm transition-colors duration-300",
                    priceRange === p.id
                      ? "text-espresso font-medium"
                      : "text-espresso/60 hover:text-espresso"
                  )}
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup label="Material">
          <ul className="space-y-2.5">
            {MATERIALS.map((m) => (
              <li key={m.id}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <span
                    className={cn(
                      "w-4 h-4 border flex items-center justify-center transition-colors",
                      materials.includes(m.id)
                        ? "border-espresso bg-espresso"
                        : "border-hairline group-hover:border-espresso"
                    )}
                  >
                    {materials.includes(m.id) && (
                      <svg
                        className="w-3 h-3 text-ivory"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm text-espresso/80 group-hover:text-espresso">
                    {m.label}
                  </span>
                  <input
                    type="checkbox"
                    checked={materials.includes(m.id)}
                    onChange={() => onMaterialToggle(m.id)}
                    className="sr-only"
                  />
                </label>
              </li>
            ))}
          </ul>
        </FilterGroup>
      </div>
    </aside>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div>
      <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-espresso mb-4">
        {label}
      </h3>
      {children}
    </div>
  );
}
