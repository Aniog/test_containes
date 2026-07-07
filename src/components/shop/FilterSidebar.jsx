import { useState } from "react";
import { CATEGORIES, MATERIALS } from "@/data/products";
import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75, max: Infinity },
];

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] uppercase tracking-editorial text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted transition-transform",
            open && "rotate-180",
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
          "w-4 h-4 grid place-items-center border transition-colors",
          checked
            ? "bg-ink border-ink"
            : "border-hairline group-hover:border-ink",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            className="w-2.5 h-2.5 text-ivory"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 6 L5 9 L10 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ink/80 group-hover:text-ink">
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
  className,
  onClose,
}) {
  const toggle = (key, value) => {
    const set = new Set(filters[key]);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    onChange({ ...filters, [key]: Array.from(set) });
  };

  return (
    <aside
      className={cn(
        "bg-ivory text-ink",
        "md:sticky md:top-24 md:self-start",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-2 md:mb-0">
        <h3 className="font-serif text-2xl">Filter</h3>
        {onClose && (
          <button
            aria-label="Close filters"
            onClick={onClose}
            className="md:hidden p-2 -mr-2"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      <p className="text-xs text-muted mt-1 mb-2 md:mb-0">
        {resultCount} {resultCount === 1 ? "piece" : "pieces"}
      </p>

      <div className="md:mt-6">
        <FilterSection title="Category">
          {CATEGORIES.map((c) => (
            <Checkbox
              key={c.id}
              label={c.name}
              checked={filters.categories.includes(c.id)}
              onChange={() => toggle("categories", c.id)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Price">
          {PRICE_RANGES.map((r) => (
            <label
              key={r.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={filters.priceRange === r.id}
                onChange={() =>
                  onChange({ ...filters, priceRange: r.id })
                }
                className="accent-ink"
              />
              <span className="text-sm text-ink/80 group-hover:text-ink">
                {r.label}
              </span>
            </label>
          ))}
        </FilterSection>

        <FilterSection title="Material" defaultOpen={false}>
          {MATERIALS.map((m) => (
            <Checkbox
              key={m.id}
              label={m.name}
              checked={filters.materials.includes(m.id)}
              onChange={() => toggle("materials", m.id)}
            />
          ))}
        </FilterSection>

        <button
          onClick={onReset}
          className="mt-6 text-[12px] uppercase tracking-editorial text-muted hover:text-ink border-b border-hairline hover:border-ink pb-1 transition-colors"
        >
          Reset filters
        </button>
      </div>
    </aside>
  );
}

export { PRICE_RANGES };
