import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { categories, materials, priceRanges } from "@/data/products";
import { cn } from "@/lib/utils";

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-[11px] font-medium uppercase tracking-ui text-ink">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn(
            "text-taupe transition-transform duration-300",
            open ? "rotate-0" : "-rotate-90"
          )}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function Checkbox({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "inline-flex h-4 w-4 items-center justify-center border transition-colors",
          checked
            ? "bg-ink border-ink"
            : "bg-paper border-hairline group-hover:border-ink"
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 text-paper"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8.5L6.5 12 13 4.5" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-[14px] text-ink-soft group-hover:text-ink transition-colors flex-1">
        {label}
      </span>
      {typeof count === "number" && (
        <span className="text-[12px] text-taupe">{count}</span>
      )}
    </label>
  );
}

export default function FilterSidebar({ filters, setFilters, counts, onClear }) {
  const toggle = (key, value) => {
    setFilters((f) => {
      const set = new Set(f[key] || []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...f, [key]: Array.from(set) };
    });
  };

  const totalActive =
    (filters.categories?.length || 0) +
    (filters.materials?.length || 0) +
    (filters.prices?.length || 0);

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[11px] font-medium uppercase tracking-ui text-ink">
          Filter
        </p>
        {totalActive > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-[11px] uppercase tracking-ui text-taupe hover:text-ink transition-colors"
          >
            <X size={12} strokeWidth={1.4} />
            Clear
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <Checkbox
            key={c.id}
            label={c.label}
            checked={filters.categories?.includes(c.id) || false}
            onChange={() => toggle("categories", c.id)}
            count={counts.byCategory?.[c.id] || 0}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((p) => (
          <Checkbox
            key={p.id}
            label={p.label}
            checked={filters.prices?.includes(p.id) || false}
            onChange={() => toggle("prices", p.id)}
            count={counts.byPrice?.[p.id] || 0}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        {materials.map((m) => (
          <Checkbox
            key={m.id}
            label={m.label}
            checked={filters.materials?.includes(m.id) || false}
            onChange={() => toggle("materials", m.id)}
            count={counts.byMaterial?.[m.id] || 0}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}
