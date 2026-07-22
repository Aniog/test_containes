import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { CATEGORIES, MATERIALS } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "u30", label: "Under $30", min: 0, max: 30 },
  { id: "30-60", label: "$30 — $60", min: 30, max: 60 },
  { id: "60-100", label: "$60 — $100", min: 60, max: 100 },
  { id: "100p", label: "$100 +", min: 100, max: Infinity },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-espresso/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-eyebrow font-medium text-espresso">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-espresso-soft transition-transform duration-300",
            open ? "rotate-180" : "",
          )}
          strokeWidth={1.6}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function CheckRow({ label, count, checked, onChange }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "h-4 w-4 border flex items-center justify-center transition-colors duration-300",
            checked
              ? "bg-espresso border-espresso"
              : "border-espresso/30 group-hover:border-espresso/60",
          )}
        >
          {checked && (
            <svg
              viewBox="0 0 12 12"
              className="h-2.5 w-2.5 text-cream"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 6.5l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <span className="text-sm text-espresso-soft group-hover:text-espresso transition-colors">
          {label}
        </span>
      </span>
      {typeof count === "number" && (
        <span className="text-xs text-taupe">{count}</span>
      )}
    </label>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  counts,
  onClear,
  totalCount,
}) {
  const hasAny =
    filters.categories.length > 0 ||
    filters.materials.length > 0 ||
    filters.priceBuckets.length > 0;

  const toggle = (key, value) => {
    onChange({
      ...filters,
      [key]: filters[key].includes(value)
        ? filters[key].filter((v) => v !== value)
        : [...filters[key], value],
    });
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs uppercase tracking-eyebrow font-medium text-espresso">
          Filter
        </h2>
        {hasAny && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-[11px] uppercase tracking-eyebrow text-taupe hover:text-espresso transition-colors"
          >
            <X className="h-3 w-3" strokeWidth={1.6} />
            Clear
          </button>
        )}
      </div>
      <p className="text-xs text-taupe mb-2">
        {totalCount} {totalCount === 1 ? "piece" : "pieces"}
      </p>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckRow
            key={c.id}
            label={c.label}
            count={counts.byCategory?.[c.id] ?? 0}
            checked={filters.categories.includes(c.id)}
            onChange={() => toggle("categories", c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <CheckRow
            key={b.id}
            label={b.label}
            checked={filters.priceBuckets.includes(b.id)}
            onChange={() => toggle("priceBuckets", b.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckRow
            key={m.id}
            label={m.label}
            count={counts.byMaterial?.[m.id] ?? 0}
            checked={filters.materials.includes(m.id)}
            onChange={() => toggle("materials", m.id)}
          />
        ))}
      </FilterGroup>

      <p className="mt-6 text-xs text-taupe leading-relaxed">
        Each piece is hand-finished and may vary slightly from the
        photography — a quality we rather like.
      </p>
    </aside>
  );
}

export { PRICE_BUCKETS };
export function bucketForPrice(price) {
  return PRICE_BUCKETS.find((b) => price >= b.min && price < b.max) || null;
}
