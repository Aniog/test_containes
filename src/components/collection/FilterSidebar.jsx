import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, materials } from "@/data/products";

const priceBands = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-120", label: "$80 – $120", min: 80, max: 120 },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="label text-espresso">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn("text-taupe transition-transform", open ? "rotate-180" : "")}
        />
      </button>
      {open && <div className="mt-4 flex flex-col gap-2.5">{children}</div>}
    </div>
  );
}

function CheckboxRow({ id, label, checked, onChange, count }) {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between cursor-pointer group"
    >
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-4 border flex items-center justify-center transition-colors",
            checked ? "bg-espresso border-espresso" : "border-hairline group-hover:border-espresso"
          )}
        >
          {checked && (
            <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 6.2 4.7 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span className="text-sm text-espresso font-light group-hover:text-brass transition-colors">
          {label}
        </span>
      </span>
      {count !== undefined && <span className="text-xs text-taupe">({count})</span>}
    </label>
  );
}

export default function FilterSidebar({ filters, onChange, onClear, total, mobileOpen, onCloseMobile }) {
  const toggle = (group, value) => {
    onChange({
      ...filters,
      [group]: filters[group].includes(value)
        ? filters[group].filter((v) => v !== value)
        : [...filters[group], value],
    });
  };

  const activeCount =
    filters.category.length + filters.material.length + filters.price.length;

  const body = (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pb-5">
        <span className="label text-espresso">Refine</span>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="label text-taupe hover:text-espresso transition-colors"
          >
            Clear ({activeCount})
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <CheckboxRow
            key={c.id}
            id={`cat-${c.id}`}
            label={c.label}
            checked={filters.category.includes(c.id)}
            onChange={() => toggle("category", c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceBands.map((p) => (
          <CheckboxRow
            key={p.id}
            id={`price-${p.id}`}
            label={p.label}
            checked={filters.price.includes(p.id)}
            onChange={() => toggle("price", p.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        {materials.map((m) => (
          <CheckboxRow
            key={m.id}
            id={`mat-${m.id}`}
            label={m.label}
            checked={filters.material.includes(m.id)}
            onChange={() => toggle("material", m.id)}
          />
        ))}
      </FilterGroup>

      <p className="text-xs text-taupe font-light pt-6">{total} pieces</p>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:block w-60 lg:w-64 flex-shrink-0 sticky top-24 self-start">
        {body}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-espresso/40" onClick={onCloseMobile} />
          <div className="absolute top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="label text-espresso">Refine</span>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1 text-espresso"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            {body}
          </div>
        </div>
      )}
    </>
  );
}
