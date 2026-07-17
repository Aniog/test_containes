import React from "react";
import { X } from "lucide-react";
import { categories, priceRanges, materials } from "@/data/products";
import { cn } from "@/lib/utils";

function FilterGroup({ title, children }) {
  return (
    <div className="py-6 border-b border-hairline last:border-b-0">
      <h3 className="text-[11px] uppercase tracking-widest-2 text-ink-muted mb-4 font-medium">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Checkbox({ checked, onChange, label, id }) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 py-1.5 cursor-pointer group"
    >
      <span
        className={cn(
          "w-4 h-4 border flex items-center justify-center transition-colors duration-200",
          checked
            ? "bg-espresso border-espresso"
            : "border-hairline group-hover:border-ink"
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 10"
            className="w-2.5 h-2.5 text-ivory"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 5l3 3 7-7" />
          </svg>
        )}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ink group-hover:text-ink-muted transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  onReset,
  resultCount,
  openMobile,
  onCloseMobile,
}) {
  const Sidebar = (
    <div className="text-ink">
      <div className="flex items-center justify-between mb-2 md:mb-6">
        <h2 className="font-serif text-2xl font-light">Filter</h2>
        {openMobile && (
          <button
            type="button"
            aria-label="Close filters"
            onClick={onCloseMobile}
            className="md:hidden p-2 -mr-2"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        )}
        <button
          type="button"
          onClick={onReset}
          className="hidden md:inline text-[11px] uppercase tracking-wider-2 text-ink-muted hover:text-ink transition-colors"
        >
          Reset
        </button>
      </div>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <Checkbox
            key={c.id}
            id={`cat-${c.id}`}
            label={c.label}
            checked={filters.categories.includes(c.id)}
            onChange={() => onChange("categories", c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((p) => (
          <Checkbox
            key={p.id}
            id={`price-${p.id}`}
            label={p.label}
            checked={filters.prices.includes(p.id)}
            onChange={() => onChange("prices", p.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materials.map((m) => (
          <Checkbox
            key={m.id}
            id={`mat-${m.id}`}
            label={m.label}
            checked={filters.materials.includes(m.id)}
            onChange={() => onChange("materials", m.id)}
          />
        ))}
      </FilterGroup>

      {openMobile && (
        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={onCloseMobile}
            className="btn-primary w-full"
          >
            Show {resultCount} Result{resultCount === 1 ? "" : "s"}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="text-[11px] uppercase tracking-wider-2 text-ink-muted hover:text-ink transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );

  if (openMobile) {
    return (
      <div className="fixed inset-0 z-[60] md:hidden">
        <div className="absolute inset-0 bg-espresso/40" onClick={onCloseMobile} />
        <aside className="absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory p-6 overflow-y-auto">
          {Sidebar}
        </aside>
      </div>
    );
  }

  return <aside className="hidden md:block w-60 shrink-0">{Sidebar}</aside>;
}
