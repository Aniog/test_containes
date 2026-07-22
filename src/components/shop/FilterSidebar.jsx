import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";

export default function FilterSidebar({
  categories,
  materials,
  priceMax,
  filters,
  onChange,
  onReset,
  total,
  mobileOpen,
  onCloseMobile,
}) {
  const setFilter = (patch) => onChange({ ...filters, ...patch });

  const priceBands = [
    { id: "all", label: "All prices", min: 0, max: priceMax },
    { id: "under50", label: "Under $50", min: 0, max: 50 },
    { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
    { id: "over75", label: "$75+", min: 75, max: priceMax },
  ];

  const content = (
    <div className="space-y-9">
      <div>
        <h3 className="eyebrow text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setFilter({ category: "all" })}
              className={cn(
                "text-left text-sm font-sans font-light w-full transition-colors",
                filters.category === "all" ? "text-ink" : "text-muted hover:text-ink"
              )}
            >
              All categories
              <span className="ml-1.5 text-[11px] text-muted/70">({total})</span>
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => setFilter({ category: c.slug })}
                className={cn(
                  "text-left text-sm font-sans font-light w-full transition-colors",
                  filters.category === c.slug
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {priceBands.map((p) => {
            const active =
              filters.priceMin === p.min && filters.priceMax === p.max;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setFilter({ priceMin: p.min, priceMax: p.max })}
                  className={cn(
                    "text-left text-sm font-sans font-light w-full transition-colors",
                    active ? "text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {p.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          <li>
            <label className="flex items-center gap-3 cursor-pointer text-sm font-sans font-light text-ink-soft">
              <input
                type="checkbox"
                checked={filters.materials.length === 0}
                onChange={() => setFilter({ materials: [] })}
                className="accent-ink"
              />
              All materials
            </label>
          </li>
          {materials.map((m) => {
            const checked = filters.materials.includes(m);
            return (
              <li key={m}>
                <label className="flex items-center gap-3 cursor-pointer text-sm font-sans font-light text-ink-soft">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      const next = checked
                        ? filters.materials.filter((x) => x !== m)
                        : [...filters.materials, m];
                      setFilter({ materials: next });
                    }}
                    className="accent-ink"
                  />
                  {m}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="text-[11px] uppercase tracking-wider-3 font-sans font-medium text-muted hover:text-ink underline underline-offset-4"
      >
        Reset filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:block w-60 shrink-0 sticky top-24 self-start">
        {content}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/50" onClick={onCloseMobile} />
          <div className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-cream overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-ink">Filters</h2>
              <button
                type="button"
                aria-label="Close filters"
                onClick={onCloseMobile}
                className="p-2 -mr-2"
              >
                <X strokeWidth={1.25} className="w-5 h-5" />
              </button>
            </div>
            {content}
            <div className="mt-10 pt-6 border-t border-line">
              <button
                type="button"
                onClick={onCloseMobile}
                className="btn-primary w-full"
              >
                Show results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
