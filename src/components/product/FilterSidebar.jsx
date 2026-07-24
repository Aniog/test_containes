import React from "react";
import { CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";

const PRICE_BANDS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75up", label: "$75 & up", min: 75, max: Infinity },
];

const MATERIALS = ["18K Gold Plated", "Sterling Silver"];

export default function FilterSidebar({ filters, onChange, total }) {
  const set = (k, v) => onChange({ ...filters, [k]: v });

  return (
    <aside className="w-full lg:w-64 lg:flex-shrink-0">
      <p className="font-sans uppercase tracking-widest2 text-[11px] text-ink-500">
        Filter
      </p>
      <p className="mt-2 font-serif text-2xl text-ink-800">{total} pieces</p>

      {/* Category */}
      <div className="mt-8">
        <h3 className="font-sans uppercase tracking-widest2 text-[11px] text-ink-800">
          Category
        </h3>
        <ul className="mt-4 space-y-2">
          <li>
            <button
              type="button"
              onClick={() => set("category", "all")}
              className={cn(
                "text-left text-sm transition-colors",
                filters.category === "all" ? "text-ink-800 font-medium" : "text-ink-500 hover:text-ink-800"
              )}
            >
              All
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => set("category", c.slug)}
                className={cn(
                  "text-left text-sm transition-colors capitalize",
                  filters.category === c.slug ? "text-ink-800 font-medium" : "text-ink-500 hover:text-ink-800"
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mt-8">
        <h3 className="font-sans uppercase tracking-widest2 text-[11px] text-ink-800">
          Price
        </h3>
        <ul className="mt-4 space-y-2">
          {PRICE_BANDS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => set("price", b.id)}
                className={cn(
                  "text-left text-sm transition-colors",
                  filters.price === b.id ? "text-ink-800 font-medium" : "text-ink-500 hover:text-ink-800"
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div className="mt-8">
        <h3 className="font-sans uppercase tracking-widest2 text-[11px] text-ink-800">
          Material
        </h3>
        <ul className="mt-4 space-y-2">
          {MATERIALS.map((m) => {
            const checked = filters.materials.includes(m);
            return (
              <li key={m}>
                <label className="flex items-center gap-3 text-sm text-ink-700">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      const next = checked
                        ? filters.materials.filter((x) => x !== m)
                        : [...filters.materials, m];
                      set("materials", next);
                    }}
                    className="h-4 w-4 rounded-sm border-ink-800/30 text-ink-800 focus:ring-gold-400"
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
        onClick={() => onChange({ category: "all", price: "all", materials: [] })}
        className="mt-8 link-underline font-sans uppercase tracking-widest2 text-[11px] text-ink-500"
      >
        Clear all
      </button>
    </aside>
  );
}

export { PRICE_BANDS };
