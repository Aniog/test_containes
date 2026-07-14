import React, { useState } from "react";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  categories,
  priceRanges,
  materials,
} from "@/data/products";

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] tracking-widest2 uppercase text-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.6}
          className={cn(
            "text-ash transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function Radio({ checked, onChange, label, id }) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span
        className={cn(
          "h-4 w-4 rounded-full border transition flex-shrink-0 flex items-center justify-center",
          checked ? "border-espresso" : "border-ash group-hover:border-espresso"
        )}
      >
        <span
          className={cn(
            "h-2 w-2 rounded-full transition-all",
            checked ? "bg-espresso scale-100" : "scale-0"
          )}
        />
      </span>
      <input
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ash group-hover:text-espresso transition">
        {label}
      </span>
    </label>
  );
}

export default function FilterSidebar({ filters, setFilters, total }) {
  const clearAll = () =>
    setFilters({
      category: "all",
      price: "all",
      material: "all",
    });

  const isFiltered =
    filters.category !== "all" ||
    filters.price !== "all" ||
    filters.material !== "all";

  return (
    <aside className="w-full md:w-64 lg:w-72 md:flex-shrink-0">
      <div className="md:sticky md:top-24">
        <div className="hidden md:flex items-center justify-between pb-4 border-b border-line">
          <h3 className="font-serif text-xl text-espresso flex items-center gap-2">
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filter
          </h3>
          {isFiltered && (
            <button
              type="button"
              onClick={clearAll}
              className="text-[11px] tracking-widest2 uppercase text-ash hover:text-espresso flex items-center gap-1 transition"
            >
              <X size={12} strokeWidth={1.6} />
              Clear
            </button>
          )}
        </div>

        <FilterGroup title="Category">
          <Radio
            id="cat-all"
            checked={filters.category === "all"}
            onChange={() => setFilters({ ...filters, category: "all" })}
            label="All Categories"
          />
          {categories.map((c) => (
            <Radio
              key={c.id}
              id={`cat-${c.id}`}
              checked={filters.category === c.id}
              onChange={() => setFilters({ ...filters, category: c.id })}
              label={c.name}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Price">
          {priceRanges.map((p) => (
            <Radio
              key={p.id}
              id={`price-${p.id}`}
              checked={filters.price === p.id}
              onChange={() => setFilters({ ...filters, price: p.id })}
              label={p.label}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Material">
          {materials.map((m) => (
            <Radio
              key={m.id}
              id={`mat-${m.id}`}
              checked={filters.material === m.id}
              onChange={() => setFilters({ ...filters, material: m.id })}
              label={m.label}
            />
          ))}
        </FilterGroup>

        <p className="hidden md:block pt-6 text-xs text-ash tracking-wide">
          Showing {total} {total === 1 ? "piece" : "pieces"}
        </p>
      </div>
    </aside>
  );
}
