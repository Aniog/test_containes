import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { CATEGORIES, MATERIALS } from "@/data/products.js";
import { formatPrice } from "@/lib/format.js";
import Hairline from "@/components/common/Hairline.jsx";

const PRICE_BUCKETS = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-200", label: "$80+", min: 80, max: 1000 },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="py-5 border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-ink">
          {title}
        </span>
        <ChevronDown
          strokeWidth={1.5}
          className={`w-4 h-4 text-ink-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="mt-4 flex flex-col gap-2.5">{children}</div>}
    </div>
  );
}

function CheckboxRow({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={[
            "w-4 h-4 border transition-colors flex items-center justify-center",
            checked ? "border-ink bg-ink" : "border-line bg-surface group-hover:border-ink",
          ].join(" ")}
        >
          {checked && (
            <svg
              viewBox="0 0 12 12"
              className="w-3 h-3 text-cream"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 6.5L5 9.5L10 3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <span className="font-sans text-sm text-ink-muted group-hover:text-ink transition-colors">
          {label}
        </span>
      </span>
      {count != null && (
        <span className="font-sans text-xs text-ink-soft tabular-nums">
          {count}
        </span>
      )}
    </label>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  onReset,
  productCounts,
  className = "",
}) {
  const { categories, materials, priceBucket } = filters;

  // Lock body scroll when mobile drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (className.includes("mobile-open")) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [className]);

  return (
    <aside className={className}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-ink">
          Refine
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-ink transition-colors"
        >
          Reset
        </button>
      </div>
      <Hairline className="mb-1" />

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckboxRow
            key={c.id}
            checked={categories.includes(c.id)}
            onChange={() => onChange("categories", c.id)}
            label={c.label}
            count={productCounts.categories?.[c.id] || 0}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((p) => (
          <label
            key={p.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span
              className={[
                "w-4 h-4 rounded-full border transition-colors flex items-center justify-center",
                priceBucket === p.id
                  ? "border-ink"
                  : "border-line group-hover:border-ink",
              ].join(" ")}
            >
              {priceBucket === p.id && (
                <span className="w-2 h-2 rounded-full bg-ink" />
              )}
            </span>
            <input
              type="radio"
              name="price"
              className="sr-only"
              checked={priceBucket === p.id}
              onChange={() => onChange("priceBucket", p.id)}
            />
            <span className="font-sans text-sm text-ink-muted group-hover:text-ink transition-colors">
              {p.label}
            </span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckboxRow
            key={m.id}
            checked={materials.includes(m.id)}
            onChange={() => onChange("materials", m.id)}
            label={m.label}
            count={productCounts.materials?.[m.id] || 0}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}

export { PRICE_BUCKETS };
export function ActiveChips({ filters, onChange, onReset }) {
  const items = [];
  filters.categories.forEach((c) => {
    const label = CATEGORIES.find((x) => x.id === c)?.label;
    if (label) items.push({ id: `cat-${c}`, label, onRemove: () => onChange("categories", c) });
  });
  filters.materials.forEach((m) => {
    const label = MATERIALS.find((x) => x.id === m)?.label;
    if (label) items.push({ id: `mat-${m}`, label, onRemove: () => onChange("materials", m) });
  });
  if (filters.priceBucket) {
    const bucket = PRICE_BUCKETS.find((x) => x.id === filters.priceBucket);
    if (bucket) {
      items.push({
        id: `price-${bucket.id}`,
        label: bucket.label,
        onRemove: () => onChange("priceBucket", null),
      });
    }
  }
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={item.onRemove}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-line text-ink hover:border-ink transition-colors font-sans text-xs tracking-wide"
        >
          {item.label}
          <X strokeWidth={1.5} className="w-3 h-3" />
        </button>
      ))}
      <button
        type="button"
        onClick={onReset}
        className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-ink ml-1"
      >
        Clear all
      </button>
    </div>
  );
}
