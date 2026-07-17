import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { CATEGORIES, MATERIALS, PRICE_BUCKETS } from "@/data/products";
import { cn } from "@/lib/utils";

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="cta-caps text-ink">{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-ink-soft transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

function CheckRow({ label, count, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "inline-flex h-4 w-4 flex-none items-center justify-center border transition-colors",
          checked ? "bg-ink border-ink" : "border-line group-hover:border-ink"
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            className="h-3 w-3 text-ivory"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 6.5 5 9.5 10 3.5" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className="text-sm text-ink group-hover:text-gold transition-colors flex-1">
        {label}
      </span>
      <span className="text-xs text-ink-soft">{count}</span>
    </label>
  );
}

export default function FilterSidebar({
  filters,
  setFilters,
  products,
  onClose,
}) {
  const toggle = (key, value) => {
    setFilters((prev) => {
      const cur = new Set(prev[key]);
      cur.has(value) ? cur.delete(value) : cur.add(value);
      return { ...prev, [key]: cur };
    });
  };

  const clearAll = () => {
    setFilters({
      category: new Set(),
      material: new Set(),
      price: new Set(),
    });
  };

  const countBy = (key, value) =>
    products.filter((p) =>
      key === "price"
        ? (() => {
            const bucket = PRICE_BUCKETS.find((b) => b.id === value);
            return p.price >= bucket.min && p.price < bucket.max;
          })()
        : p[key] === value
    ).length;

  return (
    <aside className="w-full md:max-w-[260px]">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl">Filters</h3>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] tracking-eyebrow uppercase text-ink-soft hover:text-ink"
          >
            Clear
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close filters"
              className="md:hidden inline-flex h-8 w-8 items-center justify-center text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-2">
        <FilterGroup title="Category">
          {CATEGORIES.map((c) => (
            <CheckRow
              key={c.id}
              label={c.label}
              count={countBy("category", c.id)}
              checked={filters.category.has(c.id)}
              onChange={() => toggle("category", c.id)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Material">
          {MATERIALS.map((m) => (
            <CheckRow
              key={m.id}
              label={m.label}
              count={countBy("material", m.id)}
              checked={filters.material.has(m.id)}
              onChange={() => toggle("material", m.id)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Price">
          {PRICE_BUCKETS.map((b) => (
            <CheckRow
              key={b.id}
              label={b.label}
              count={countBy("price", b.id)}
              checked={filters.price.has(b.id)}
              onChange={() => toggle("price", b.id)}
            />
          ))}
        </FilterGroup>
      </div>
    </aside>
  );
}
