import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES, MATERIALS } from "@/data/products";

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75plus", label: "$75 & Above", min: 75, max: Infinity },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="product-name text-ink">{title}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.25}
        />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 border transition-colors duration-300 flex items-center justify-center",
          checked ? "bg-ink border-ink" : "border-line group-hover:border-ink",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            className="w-3 h-3 text-bone"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2.5 6 5 8.5 9.5 3.5" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ink/80 group-hover:text-ink transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function FilterSidebar({
  filters,
  setFilters,
  resultCount,
  onClose,
}) {
  const update = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const toggleCategory = (id) => {
    setFilters((prev) => {
      const has = prev.categories.includes(id);
      return {
        ...prev,
        categories: has
          ? prev.categories.filter((c) => c !== id)
          : [...prev.categories, id],
      };
    });
  };

  const toggleMaterial = (id) => {
    setFilters((prev) => {
      const has = prev.materials.includes(id);
      return {
        ...prev,
        materials: has
          ? prev.materials.filter((c) => c !== id)
          : [...prev.materials, id],
      };
    });
  };

  const clearAll = () =>
    setFilters({
      categories: [],
      materials: [],
      price: "all",
    });

  const activeCount =
    filters.categories.length +
    filters.materials.length +
    (filters.price !== "all" ? 1 : 0);

  return (
    <aside className="w-full lg:w-64 lg:shrink-0">
      <div className="lg:sticky lg:top-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="product-name text-ink">Refine</h2>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="text-[11px] uppercase tracking-[0.18em] text-taupe hover:text-ink transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        <FilterGroup title="Category">
          {CATEGORIES.map((c) => (
            <Checkbox
              key={c.id}
              checked={filters.categories.includes(c.id)}
              onChange={() => toggleCategory(c.id)}
              label={c.label}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Material">
          {MATERIALS.map((m) => (
            <Checkbox
              key={m.id}
              checked={filters.materials.includes(m.id)}
              onChange={() => toggleMaterial(m.id)}
              label={m.label}
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
                  "w-4 h-4 rounded-full border transition-colors duration-300 flex items-center justify-center",
                  filters.price === b.id
                    ? "border-ink"
                    : "border-line group-hover:border-ink",
                )}
              >
                {filters.price === b.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                )}
              </span>
              <input
                type="radio"
                name="price"
                checked={filters.price === b.id}
                onChange={() => update("price", b.id)}
                className="sr-only"
              />
              <span className="text-sm text-ink/80 group-hover:text-ink transition-colors">
                {b.label}
              </span>
            </label>
          ))}
        </FilterGroup>

        <p className="mt-6 text-xs text-taupe">
          {resultCount} {resultCount === 1 ? "piece" : "pieces"}
        </p>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden mt-6 btn-outline w-full"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
            Show {resultCount} results
          </button>
        )}
      </div>
    </aside>
  );
}
