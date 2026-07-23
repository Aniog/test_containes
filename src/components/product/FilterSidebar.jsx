import { X } from "lucide-react";
import { categoryMeta } from "@/data/products";
import { cn } from "@/lib/utils";

const CATEGORIES = ["earrings", "necklaces", "huggies", "sets"];
const MATERIALS = ["18K Gold", "Sterling Silver", "Crystal", "Brass"];
const PRICE_BANDS = [
  { id: "p1", label: "Under $50",     min: 0,  max: 50 },
  { id: "p2", label: "$50 – $75",     min: 50, max: 75 },
  { id: "p3", label: "$75 – $120",    min: 75, max: 120 },
];

export default function FilterSidebar({
  filters,
  onChange,
  resultCount,
  mobile = false,
  onClose,
}) {
  function toggle(key, value) {
    const set = new Set(filters[key] || []);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    onChange({ ...filters, [key]: Array.from(set) });
  }

  function clear() {
    onChange({ category: [], price: [], material: [] });
  }

  return (
    <aside
      className={cn(
        "bg-bone-100",
        mobile
          ? "w-full p-6 overflow-y-auto"
          : "hidden lg:block w-full pr-2",
      )}
      aria-label="Filters"
    >
      {mobile && (
        <div className="flex items-center justify-between pb-5 border-b border-taupe-light">
          <p className="display-serif text-2xl">Filter</p>
          <button type="button" aria-label="Close filters" onClick={onClose} className="p-2 -mr-2">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
      )}

      <div className="space-y-9 pt-6 lg:pt-0">
        <FilterGroup title="Category">
          <ul className="space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={(filters.category || []).includes(c)}
                    onChange={() => toggle("category", c)}
                  />
                  <span
                    className={cn(
                      "h-4 w-4 border flex-shrink-0 transition-colors",
                      (filters.category || []).includes(c)
                        ? "bg-espresso border-espresso"
                        : "border-taupe group-hover:border-espresso",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm transition-colors",
                      (filters.category || []).includes(c)
                        ? "text-espresso"
                        : "text-espresso/75 group-hover:text-espresso",
                    )}
                  >
                    {categoryMeta[c]?.label || c}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Price">
          <ul className="space-y-2.5">
            {PRICE_BANDS.map((p) => (
              <li key={p.id}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={(filters.price || []).includes(p.id)}
                    onChange={() => toggle("price", p.id)}
                  />
                  <span
                    className={cn(
                      "h-4 w-4 border flex-shrink-0 transition-colors",
                      (filters.price || []).includes(p.id)
                        ? "bg-espresso border-espresso"
                        : "border-taupe group-hover:border-espresso",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm transition-colors",
                      (filters.price || []).includes(p.id)
                        ? "text-espresso"
                        : "text-espresso/75 group-hover:text-espresso",
                    )}
                  >
                    {p.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Material">
          <ul className="space-y-2.5">
            {MATERIALS.map((m) => (
              <li key={m}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={(filters.material || []).includes(m)}
                    onChange={() => toggle("material", m)}
                  />
                  <span
                    className={cn(
                      "h-4 w-4 border flex-shrink-0 transition-colors",
                      (filters.material || []).includes(m)
                        ? "bg-espresso border-espresso"
                        : "border-taupe group-hover:border-espresso",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm transition-colors",
                      (filters.material || []).includes(m)
                        ? "text-espresso"
                        : "text-espresso/75 group-hover:text-espresso",
                    )}
                  >
                    {m}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </FilterGroup>

        <button
          type="button"
          onClick={clear}
          className="link-underline text-[11px] uppercase tracking-widest2 text-espresso/60"
        >
          Clear all
        </button>

        <p className="text-[11px] uppercase tracking-widest2 text-espresso/45 pt-4">
          {resultCount} result{resultCount === 1 ? "" : "s"}
        </p>
      </div>
    </aside>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-widest2 text-espresso/55 font-medium mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

export { PRICE_BANDS, CATEGORIES, MATERIALS };
