import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const priceBands = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 — $75", min: 50, max: 75 },
  { id: "o75", label: "$75+", min: 75, max: Infinity },
];

const materials = ["18K Gold Plated", "Sterling Silver", "Crystal"];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline/60 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between"
        aria-expanded={open}
      >
        <span className="font-sans text-[12px] uppercase tracking-widest2 text-espresso-300">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-espresso-300 transition-transform duration-300",
            open ? "rotate-0" : "-rotate-90",
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "h-4 w-4 inline-flex items-center justify-center border transition-colors",
          checked
            ? "bg-espresso-300 border-espresso-300"
            : "bg-transparent border-hairline group-hover:border-espresso-300",
        )}
        aria-hidden="true"
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-cream-50" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="2.5 6.5 5 9 9.5 3.5" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-espresso-300">{label}</span>
    </label>
  );
}

export default function FilterSidebar({ filters, setFilters, onClear, resultCount }) {
  const toggleSet = (key, value) => {
    setFilters((prev) => {
      const set = new Set(prev[key]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [key]: Array.from(set) };
    });
  };

  return (
    <aside className="bg-cream-50 border border-hairline/60 p-6">
      <div className="flex items-center justify-between pb-4 border-b border-hairline/60">
        <h2 className="font-sans text-[12px] uppercase tracking-widest2 text-espresso-300">
          Filter
        </h2>
        <button
          type="button"
          onClick={onClear}
          className="font-sans text-[11px] uppercase tracking-widest2 text-muted hover:text-espresso-300 transition-colors inline-flex items-center gap-1"
        >
          <X className="h-3 w-3" strokeWidth={1.5} />
          Clear
        </button>
      </div>

      <p className="py-4 text-[11px] uppercase tracking-widest2 text-muted">
        {resultCount} pieces
      </p>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <Checkbox
            key={c.id}
            checked={filters.categories.includes(c.id)}
            onChange={() => toggleSet("categories", c.id)}
            label={c.name}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceBands.map((b) => (
          <label key={b.id} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={filters.priceBand === b.id}
              onChange={() =>
                setFilters((p) => ({ ...p, priceBand: b.id }))
              }
              className="sr-only"
            />
            <span
              className={cn(
                "h-4 w-4 rounded-full border inline-flex items-center justify-center transition-colors",
                filters.priceBand === b.id
                  ? "border-espresso-300"
                  : "border-hairline group-hover:border-espresso-300",
              )}
              aria-hidden="true"
            >
              {filters.priceBand === b.id && (
                <span className="h-2 w-2 rounded-full bg-espresso-300" />
              )}
            </span>
            <span className="text-sm text-espresso-300">{b.label}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        {materials.map((m) => (
          <Checkbox
            key={m}
            checked={filters.materials.includes(m)}
            onChange={() => toggleSet("materials", m)}
            label={m}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}
