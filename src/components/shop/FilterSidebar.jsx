import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { categories, materials } from "../../data/products";
import { cn } from "../../lib/utils";

const priceBuckets = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-120", label: "$75 – $120", min: 75, max: 120 },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[11px] uppercase tracking-widest2 text-espresso">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-espresso transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.4}
        />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

function RadioRow({ name, options, value, onChange }) {
  return (
    <div className="space-y-2.5">
      {options.map((opt) => {
        const checked = value === opt.id;
        return (
          <label
            key={opt.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span
              className={cn(
                "h-4 w-4 grid place-items-center border transition-colors duration-300",
                checked
                  ? "border-espresso"
                  : "border-ink-soft/40 group-hover:border-espresso",
              )}
            >
              <span
                className={cn(
                  "h-2 w-2 bg-espresso transition-opacity duration-300",
                  checked ? "opacity-100" : "opacity-0",
                )}
              />
            </span>
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={checked}
              onChange={() => onChange(opt.id)}
              className="sr-only"
            />
            <span
              className={cn(
                "font-sans text-sm transition-colors duration-300",
                checked ? "text-espresso" : "text-ink-soft group-hover:text-espresso",
              )}
            >
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  onReset,
  totalCount,
  isOpen,
  onClose,
}) {
  const update = (patch) => onChange({ ...filters, ...patch });
  const hasActiveFilter =
    filters.category !== "all" ||
    filters.price !== "all" ||
    filters.material !== "all";

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-espresso/40 transition-opacity duration-500 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "bg-ivory md:bg-transparent z-50 md:z-auto",
          "fixed md:static inset-y-0 left-0 w-[85%] max-w-sm md:w-auto md:max-w-none",
          "transition-transform duration-500 ease-out-soft md:transition-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "overflow-y-auto md:overflow-visible p-6 md:p-0",
        )}
        aria-label="Filter products"
      >
        <div className="flex items-center justify-between md:hidden mb-6">
          <h2 className="font-serif text-2xl text-espresso">Filter</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="p-2 text-espresso"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        <div className="md:sticky md:top-24">
          <div className="hidden md:flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl text-espresso">Filter</h2>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={onReset}
                className="font-sans text-[11px] uppercase tracking-widest2 text-ink-soft hover:text-espresso transition-colors duration-300"
              >
                Reset
              </button>
            )}
          </div>

          <p className="font-sans text-xs text-ink-soft mb-2">
            {totalCount} {totalCount === 1 ? "piece" : "pieces"}
          </p>

          <FilterGroup title="Category">
            <RadioRow
              name="category"
              options={[
                { id: "all", label: "All jewelry" },
                ...categories.map((c) => ({ id: c.id, label: c.name })),
              ]}
              value={filters.category}
              onChange={(v) => update({ category: v })}
            />
          </FilterGroup>

          <FilterGroup title="Price">
            <RadioRow
              name="price"
              options={priceBuckets.map((p) => ({
                id: p.id,
                label: p.label,
              }))}
              value={filters.price}
              onChange={(v) => update({ price: v })}
            />
          </FilterGroup>

          <FilterGroup title="Material" defaultOpen={false}>
            <RadioRow
              name="material"
              options={[
                { id: "all", label: "All materials" },
                ...materials.map((m) => ({ id: m.id, label: m.label })),
              ]}
              value={filters.material}
              onChange={(v) => update({ material: v })}
            />
          </FilterGroup>

          <div className="mt-8 hidden md:block">
            <p className="font-serif text-lg text-espresso leading-snug">
              Free worldwide shipping on orders over $75.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export { priceBuckets };
