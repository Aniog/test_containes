import React from "react";
import { CATEGORIES, MATERIALS } from "@/lib/products";
import { cn } from "@/lib/utils";

const PRICE_BANDS = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-plus", label: "$75 & up", min: 75, max: Infinity },
];

function FilterGroup({ title, children }) {
  return (
    <div className="py-6 border-b border-cocoa-900/10 last:border-b-0">
      <h3 className="text-[12px] tracking-button uppercase font-medium text-cocoa-900 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  total,
  onClear,
  className,
}) {
  const toggle = (key, value) => {
    const current = new Set(filters[key]);
    if (current.has(value)) current.delete(value);
    else current.add(value);
    onChange({ ...filters, [key]: Array.from(current) });
  };

  const isActive = (key, value) => filters[key]?.includes(value);

  const activeCount =
    (filters.categories?.length || 0) +
    (filters.materials?.length || 0) +
    (filters.prices?.length || 0);

  return (
    <aside className={cn("w-full", className)} aria-label="Filters">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[12px] tracking-button uppercase text-cocoa-900 font-medium">
          Filter
          {activeCount > 0 && (
            <span className="ml-2 text-taupe-500">({activeCount})</span>
          )}
        </p>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] tracking-button uppercase text-taupe-500 hover:text-cocoa-900 transition-colors"
          >
            Clear
          </button>
        )}
      </div>
      <p className="text-xs text-taupe-500 mb-4">
        {total} {total === 1 ? "piece" : "pieces"}
      </p>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <label key={c.id} className="filter-checkbox">
            <input
              type="checkbox"
              checked={isActive("categories", c.id)}
              onChange={() => toggle("categories", c.id)}
            />
            <span>{c.label}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <label key={m.id} className="filter-checkbox">
            <input
              type="checkbox"
              checked={isActive("materials", m.id)}
              onChange={() => toggle("materials", m.id)}
            />
            <span>{m.label}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BANDS.map((p) => (
          <label key={p.id} className="filter-checkbox">
            <input
              type="checkbox"
              checked={isActive("prices", p.id)}
              onChange={() => toggle("prices", p.id)}
            />
            <span>{p.label}</span>
          </label>
        ))}
      </FilterGroup>
    </aside>
  );
}

export { PRICE_BANDS };
