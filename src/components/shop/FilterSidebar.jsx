import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { categories, materials } from "@/data/products";
import { cn } from "@/lib/utils";

const priceBands = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75, max: Infinity },
];

const FilterGroup = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-5">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-[12px] uppercase tracking-widest-2 text-ink font-medium">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-ink-muted transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
          strokeWidth={1.4}
        />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
};

const Check = ({ label, checked, onChange, count }) => (
  <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
    <span
      className={cn(
        "w-4 h-4 border flex items-center justify-center transition-colors",
        checked ? "border-ink bg-ink" : "border-hairline bg-transparent group-hover:border-ink"
      )}
    >
      {checked && (
        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-cream" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6l3 3 5-6" />
        </svg>
      )}
    </span>
    <input
      type="checkbox"
      className="sr-only"
      checked={checked}
      onChange={onChange}
    />
    <span className="flex-1 text-[14px] text-ink font-sans">{label}</span>
    {count !== undefined && (
      <span className="text-[12px] text-taupe tabular-nums">{count}</span>
    )}
  </label>
);

export default function FilterSidebar({
  filters,
  setFilters,
  productCounts,
  resultCount,
  onClose,
}) {
  const toggle = (group, value) => {
    setFilters((prev) => {
      const set = new Set(prev[group]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [group]: Array.from(set) };
    });
  };

  const setPrice = (bandId) => {
    setFilters((prev) => ({ ...prev, price: bandId }));
  };

  const reset = () =>
    setFilters({ categories: [], materials: [], price: "all" });

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-serif text-xl text-ink">Filters</h3>
        <button
          type="button"
          onClick={reset}
          className="text-[11px] uppercase tracking-widest-2 text-taupe hover:text-ink underline underline-offset-4"
        >
          Reset
        </button>
      </div>
      <p className="text-[12px] text-taupe mb-3">
        {resultCount} {resultCount === 1 ? "piece" : "pieces"}
      </p>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <Check
            key={c.id}
            label={c.label}
            checked={filters.categories.includes(c.id)}
            onChange={() => toggle("categories", c.id)}
            count={productCounts.byCategory[c.id] || 0}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceBands.map((b) => (
          <label
            key={b.id}
            className="flex items-center gap-3 py-1.5 cursor-pointer group"
          >
            <span
              className={cn(
                "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
                filters.price === b.id
                  ? "border-ink"
                  : "border-hairline group-hover:border-ink"
              )}
            >
              {filters.price === b.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              )}
            </span>
            <input
              type="radio"
              name="price"
              className="sr-only"
              checked={filters.price === b.id}
              onChange={() => setPrice(b.id)}
            />
            <span className="text-[14px] text-ink font-sans">{b.label}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materials.map((m) => (
          <Check
            key={m.id}
            label={m.label}
            checked={filters.materials.includes(m.id)}
            onChange={() => toggle("materials", m.id)}
          />
        ))}
      </FilterGroup>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full btn-outline"
        >
          View Results
        </button>
      )}
    </aside>
  );
}

export { priceBands };
