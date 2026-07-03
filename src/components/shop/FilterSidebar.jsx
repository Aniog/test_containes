import React from "react";
import { X } from "lucide-react";
import { categories, priceBands, materials } from "@/data/products";
import { cn } from "@/lib/utils";

function Group({ title, children }) {
  return (
    <div className="border-b border-hairline py-6">
      <h3 className="eyebrow text-ink mb-4">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Checkbox({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-4 flex items-center justify-center border transition-colors",
            checked
              ? "border-ink bg-ink text-ivory"
              : "border-hairline group-hover:border-ink",
          )}
        >
          {checked && (
            <svg
              viewBox="0 0 12 12"
              className="w-2.5 h-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 6.5 5 9.5 10 3.5" strokeLinecap="round" />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <span className="text-sm text-ink group-hover:text-gold transition-colors">
          {label}
        </span>
      </span>
      {count != null && (
        <span className="text-xs text-taupe">{count}</span>
      )}
    </label>
  );
}

export default function FilterSidebar({
  filters,
  setFilters,
  counts,
  onClear,
  mobileOpen,
  onCloseMobile,
}) {
  function toggle(key, value) {
    setFilters((prev) => {
      const set = new Set(prev[key]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [key]: Array.from(set) };
    });
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-ink/40 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "bg-ivory md:bg-transparent md:relative md:translate-x-0 md:block",
          "fixed top-0 left-0 z-[71] h-full w-[85%] max-w-sm md:w-auto md:max-w-none",
          "transition-transform duration-400 ease-out md:transition-none",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
        aria-label="Filters"
      >
        <div className="md:hidden flex items-center justify-between px-6 h-16 border-b border-hairline">
          <span className="product-name text-xs">Filter</span>
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-2 text-ink"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="p-6 md:p-0 md:pr-8 md:sticky md:top-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="eyebrow text-ink">Filter</h2>
            <button
              type="button"
              onClick={onClear}
              className="text-[11px] tracking-eyebrow uppercase text-taupe hover:text-ink transition-colors"
            >
              Clear all
            </button>
          </div>

          <Group title="Category">
            {categories.map((c) => (
              <Checkbox
                key={c.id}
                label={c.label}
                checked={filters.categories.includes(c.id)}
                onChange={() => toggle("categories", c.id)}
                count={counts?.byCategory?.[c.id]}
              />
            ))}
          </Group>

          <Group title="Price">
            {priceBands.map((b) => (
              <Checkbox
                key={b.id}
                label={b.label}
                checked={filters.prices.includes(b.id)}
                onChange={() => toggle("prices", b.id)}
                count={counts?.byPrice?.[b.id]}
              />
            ))}
          </Group>

          <Group title="Material">
            {materials.map((m) => (
              <Checkbox
                key={m}
                label={m}
                checked={filters.materials.includes(m)}
                onChange={() => toggle("materials", m)}
                count={counts?.byMaterial?.[m]}
              />
            ))}
          </Group>
        </div>
      </aside>
    </>
  );
}
