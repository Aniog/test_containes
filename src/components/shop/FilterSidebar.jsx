import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { CATEGORIES, MATERIALS } from "@/data/products";
import { cn } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "all",  label: "All prices", range: [null, null] },
  { id: "u40",  label: "Under $40",  range: [0, 40] },
  { id: "40-60", label: "$40 – $60", range: [40, 60] },
  { id: "60-80", label: "$60 – $80", range: [60, 80] },
  { id: "80+",   label: "$80+",       range: [80, null] },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-5">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between text-[12px] uppercase tracking-[0.22em] font-medium text-espresso-900"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-elegant",
          open ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden space-y-2.5">{children}</div>
      </div>
    </div>
  );
}

function Checkbox({ label, count, checked, onChange }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span className="inline-flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-4 border transition-colors flex-shrink-0 inline-flex items-center justify-center",
            checked ? "bg-espresso-900 border-espresso-900" : "border-hairline group-hover:border-espresso-500"
          )}
        >
          {checked && (
            <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory-50" aria-hidden="true">
              <path d="M2 6.5 5 9.5 10 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <span className="text-sm text-espresso-700 group-hover:text-espresso-900 transition-colors">
          {label}
        </span>
      </span>
      {typeof count === "number" && (
        <span className="text-[11px] text-espresso-500 tabular-nums">{count}</span>
      )}
    </label>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  counts,
  totalShown,
  onClear,
}) {
  const toggleSetValue = (key, value) => {
    const current = filters[key] || [];
    const exists = current.includes(value);
    const next = exists ? current.filter((v) => v !== value) : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const setPrice = (bucketId) => {
    onChange({ ...filters, price: bucketId });
  };

  const activeCount =
    (filters.categories?.length || 0) +
    (filters.materials?.length || 0) +
    (filters.price && filters.price !== "all" ? 1 : 0);

  return (
    <aside className="w-full lg:w-64 lg:flex-shrink-0">
      <div className="lg:sticky lg:top-28">
        <div className="flex items-center justify-between pb-5 border-b border-hairline">
          <h3 className="text-[12px] uppercase tracking-[0.22em] font-medium text-espresso-900">
            Filter
            {activeCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-espresso-900 text-ivory-50 text-[10px]">
                {activeCount}
              </span>
            )}
          </h3>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="text-[11px] uppercase tracking-[0.22em] text-espresso-500 hover:text-gold-400 transition-colors inline-flex items-center gap-1"
            >
              Clear <X size={12} strokeWidth={1.5} />
            </button>
          )}
        </div>

        <FilterGroup title="Category">
          {CATEGORIES.map((c) => (
            <Checkbox
              key={c.id}
              label={c.label}
              count={counts?.category?.[c.id] ?? 0}
              checked={filters.categories?.includes(c.id)}
              onChange={() => toggleSetValue("categories", c.id)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Price">
          {PRICE_BUCKETS.map((b) => (
            <label
              key={b.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <span
                className={cn(
                  "w-4 h-4 rounded-full border transition-colors flex-shrink-0 inline-flex items-center justify-center",
                  filters.price === b.id
                    ? "border-espresso-900"
                    : "border-hairline group-hover:border-espresso-500"
                )}
              >
                {filters.price === b.id && (
                  <span className="w-2 h-2 rounded-full bg-espresso-900" />
                )}
              </span>
              <input
                type="radio"
                name="price-bucket"
                checked={filters.price === b.id}
                onChange={() => setPrice(b.id)}
                className="sr-only"
              />
              <span className="text-sm text-espresso-700 group-hover:text-espresso-900 transition-colors">
                {b.label}
              </span>
            </label>
          ))}
        </FilterGroup>

        <FilterGroup title="Material">
          {MATERIALS.map((m) => (
            <Checkbox
              key={m.id}
              label={m.label}
              count={counts?.material?.[m.id] ?? 0}
              checked={filters.materials?.includes(m.id)}
              onChange={() => toggleSetValue("materials", m.id)}
            />
          ))}
        </FilterGroup>

        <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-espresso-500">
          Showing {totalShown} {totalShown === 1 ? "piece" : "pieces"}
        </p>
      </div>
    </aside>
  );
}

export { PRICE_BUCKETS };
