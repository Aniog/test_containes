import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { CATEGORIES, MATERIALS, PRICE_BANDS } from "@/data/products";
import { cn } from "@/lib/utils";

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-onyx-800/15 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.4}
          className={cn(
            "text-onyx-800 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function CheckboxRow({ label, count, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 shrink-0 border flex items-center justify-center transition-colors",
          checked
            ? "bg-onyx-800 border-onyx-800"
            : "border-onyx-800/30 group-hover:border-onyx-800",
        )}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path
              d="M1.5 5.2 L4 7.5 L8.5 2.5"
              fill="none"
              stroke="#faf7f2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-[14px] text-onyx-800 flex-1">{label}</span>
      {typeof count === "number" && (
        <span className="text-[12px] tabular-nums text-mocha-500">{count}</span>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
    </label>
  );
}

export default function FilterSidebar({
  category,
  setCategory,
  materials,
  toggleMaterial,
  priceBand,
  setPriceBand,
  countsByCategory,
  totalResults,
  onReset,
  open,
  onClose,
}) {
  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const content = (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800">
          Filters
        </h3>
        <button
          type="button"
          onClick={onReset}
          className="font-sans uppercase tracking-widest-2 text-[10px] text-mocha-500 hover:text-onyx-800"
        >
          Reset
        </button>
      </div>
      <p className="text-[12px] text-mocha-500 mb-5">
        {totalResults} {totalResults === 1 ? "piece" : "pieces"}
      </p>

      <FilterGroup title="Category">
        <CheckboxRow
          label="All"
          count={Object.values(countsByCategory).reduce((a, b) => a + b, 0)}
          checked={!category}
          onChange={() => setCategory("")}
        />
        {CATEGORIES.map((c) => (
          <CheckboxRow
            key={c.id}
            label={c.label}
            count={countsByCategory[c.id] || 0}
            checked={category === c.id}
            onChange={() => setCategory(category === c.id ? "" : c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckboxRow
            key={m.id}
            label={m.label}
            checked={materials.includes(m.id)}
            onChange={() => toggleMaterial(m.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price" defaultOpen={true}>
        <CheckboxRow
          label="All prices"
          checked={!priceBand}
          onChange={() => setPriceBand("")}
        />
        {PRICE_BANDS.map((p) => (
          <CheckboxRow
            key={p.id}
            label={p.label}
            checked={priceBand === p.id}
            onChange={() => setPriceBand(priceBand === p.id ? "" : p.id)}
          />
        ))}
      </FilterGroup>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-[260px] shrink-0 pr-8 sticky top-28 self-start">
        {content}
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-all duration-500",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-onyx-900/60 transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={onClose}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[86%] max-w-sm bg-cream-100 p-6 overflow-y-auto transition-transform duration-500 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800">
              Filters
            </h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close filters"
              className="p-2 text-onyx-800"
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          {content}
          <button
            type="button"
            onClick={onClose}
            className="btn-primary w-full mt-6"
          >
            Show {totalResults} results
          </button>
        </div>
      </div>
    </>
  );
}
