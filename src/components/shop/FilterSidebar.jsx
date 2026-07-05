import React from "react";
import { Check } from "lucide-react";
import { CATEGORIES, MATERIALS } from "@/data/products";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80+", label: "$80+", min: 80, max: Infinity },
];

const FilterGroup = ({ title, children }) => (
  <div className="border-b border-ink/10 py-6">
    <h3 className="font-sans text-[11px] uppercase tracking-eyebrow text-ink mb-4">
      {title}
    </h3>
    {children}
  </div>
);

const FilterPill = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "w-full flex items-center justify-between text-left py-1.5 text-sm font-sans transition-colors",
      active ? "text-ink" : "text-ink/70 hover:text-ink"
    )}
  >
    <span>{children}</span>
    {active && <Check size={14} strokeWidth={1.5} className="text-gold" />}
  </button>
);

const FilterSidebar = ({ filters, setFilters, totalCount }) => {
  const update = (patch) => setFilters({ ...filters, ...patch });

  return (
    <aside className="lg:sticky lg:top-28 self-start">
      <div className="flex items-center justify-between mb-2">
        <p className="font-sans text-[11px] uppercase tracking-eyebrow text-ink">
          Filters
        </p>
        <button
          type="button"
          onClick={() =>
            setFilters({ category: "all", price: "all", material: "all" })
          }
          className="text-[11px] uppercase tracking-eyebrow text-taupe hover:text-ink"
        >
          Clear
        </button>
      </div>
      <p className="text-[11px] uppercase tracking-eyebrow text-taupe mb-6">
        {totalCount} {totalCount === 1 ? "piece" : "pieces"}
      </p>

      <FilterGroup title="Category">
        <div className="space-y-1">
          <FilterPill
            active={filters.category === "all"}
            onClick={() => update({ category: "all" })}
          >
            All
          </FilterPill>
          {CATEGORIES.map((c) => (
            <FilterPill
              key={c.slug}
              active={filters.category === c.slug}
              onClick={() => update({ category: c.slug })}
            >
              {c.label}
            </FilterPill>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-1">
          {PRICE_RANGES.map((p) => (
            <FilterPill
              key={p.id}
              active={filters.price === p.id}
              onClick={() => update({ price: p.id })}
            >
              {p.label}
            </FilterPill>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Material">
        <div className="space-y-1">
          <FilterPill
            active={filters.material === "all"}
            onClick={() => update({ material: "all" })}
          >
            All materials
          </FilterPill>
          {MATERIALS.map((m) => (
            <FilterPill
              key={m.slug}
              active={filters.material === m.slug}
              onClick={() => update({ material: m.slug })}
            >
              {m.label}
            </FilterPill>
          ))}
        </div>
      </FilterGroup>
    </aside>
  );
};

export default FilterSidebar;
