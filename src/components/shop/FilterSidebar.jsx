import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { cn } from "@/lib/cn";

const PRICE_RANGES = [
  { id: "all",     label: "All prices",     min: 0,   max: Infinity },
  { id: "u40",     label: "Under $40",      min: 0,   max: 40 },
  { id: "40-60",   label: "$40 – $60",      min: 40,  max: 60 },
  { id: "60-90",   label: "$60 – $90",      min: 60,  max: 90 },
  { id: "90+",     label: "$90 & above",    min: 90,  max: Infinity },
];

const MATERIAL_OPTIONS = [
  { value: "18k",  label: "18K Gold Plated" },
  { value: "ss",   label: "Sterling Silver" },
  { value: "mix",  label: "Mixed Metals"    },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={open}
      >
        <span className="vm-eyebrow text-ink">{title}</span>
        <ChevronDown className={cn("w-4 h-4 text-ink-muted transition-transform duration-300", open ? "rotate-0" : "-rotate-90")} strokeWidth={1.4} />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default function FilterSidebar({ filters, onChange, onReset, resultCount }) {
  const active = [];
  if (filters.category) {
    const c = CATEGORIES.find((c) => c.slug === filters.category);
    if (c) active.push({ key: "category", label: c.label });
  }
  if (filters.priceRange && filters.priceRange !== "all") {
    const p = PRICE_RANGES.find((r) => r.id === filters.priceRange);
    if (p) active.push({ key: "priceRange", label: p.label });
  }
  if (filters.material) {
    const m = MATERIAL_OPTIONS.find((m) => m.value === filters.material);
    if (m) active.push({ key: "material", label: m.label });
  }

  return (
    <aside aria-label="Filters" className="text-ink">
      <div className="flex items-center justify-between mb-6">
        <p className="vm-eyebrow text-ink">Refine</p>
        <span className="text-xs text-ink-muted">{resultCount} piece{resultCount === 1 ? "" : "s"}</span>
      </div>

      {active.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {active.map((a) => (
            <button
              key={a.key}
              type="button"
              onClick={() => onChange({ [a.key]: a.key === "category" ? "" : a.key === "priceRange" ? "all" : "" })}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink/20 text-[11px] tracking-[0.18em] uppercase text-ink hover:border-gold hover:text-gold-dark transition-colors"
            >
              {a.label}
              <X className="w-3 h-3" strokeWidth={1.6} />
            </button>
          ))}
          <button type="button" onClick={onReset} className="text-[11px] tracking-[0.18em] uppercase text-ink-muted hover:text-gold-dark ml-1">
            Clear all
          </button>
        </div>
      )}

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => onChange({ category: "" })}
              className={cn(
                "text-sm w-full text-left transition-colors",
                !filters.category ? "text-ink font-medium" : "text-ink-muted hover:text-ink"
              )}
            >
              All categories
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => onChange({ category: c.slug })}
                className={cn(
                  "text-sm w-full text-left transition-colors",
                  filters.category === c.slug ? "text-ink font-medium" : "text-ink-muted hover:text-ink"
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => onChange({ priceRange: r.id })}
                className={cn(
                  "text-sm w-full text-left transition-colors",
                  filters.priceRange === r.id ? "text-ink font-medium" : "text-ink-muted hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => onChange({ material: "" })}
              className={cn(
                "text-sm w-full text-left transition-colors",
                !filters.material ? "text-ink font-medium" : "text-ink-muted hover:text-ink"
              )}
            >
              All materials
            </button>
          </li>
          {MATERIAL_OPTIONS.map((m) => (
            <li key={m.value}>
              <button
                type="button"
                onClick={() => onChange({ material: m.value })}
                className={cn(
                  "text-sm w-full text-left transition-colors",
                  filters.material === m.value ? "text-ink font-medium" : "text-ink-muted hover:text-ink"
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </aside>
  );
}

export { PRICE_RANGES, MATERIAL_OPTIONS };
