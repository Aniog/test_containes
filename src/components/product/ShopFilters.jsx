import { useEffect, useState } from "react";
import { CATEGORIES, MATERIALS } from "@/data/products";

const PRICE_BUCKETS = [
  { id: "u40", label: "Under $40", test: (p) => p.price < 40 },
  { id: "40-60", label: "$40 – $60", test: (p) => p.price >= 40 && p.price <= 60 },
  { id: "60-100", label: "$60 – $100", test: (p) => p.price > 60 && p.price <= 100 },
  { id: "100+", label: "$100+", test: (p) => p.price > 100 },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price · Low to High" },
  { id: "price-desc", label: "Price · High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function ShopFilters({ filters, onChange, onClear }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Auto-collapse on small screens
    const m = window.matchMedia("(max-width: 1023px)");
    setOpen(!m.matches);
    const onChange = (e) => setOpen(!e.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  const toggle = (key, value) => {
    const set = new Set(filters[key]);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    onChange({ ...filters, [key]: Array.from(set) });
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="border border-line bg-ivory p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl text-espresso">Filter</h3>
          <button
            type="button"
            onClick={onClear}
            className="font-sans text-[10px] uppercase tracking-wider-2 text-stone transition-colors hover:text-espresso"
          >
            Clear
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            open ? "grid-rows-[1fr] mt-6" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            {/* Category */}
            <FilterGroup title="Category">
              {CATEGORIES.map((c) => (
                <CheckRow
                  key={c.id}
                  label={c.label}
                  checked={filters.categories.includes(c.id)}
                  onChange={() => toggle("categories", c.id)}
                />
              ))}
            </FilterGroup>

            {/* Price */}
            <FilterGroup title="Price">
              {PRICE_BUCKETS.map((b) => (
                <CheckRow
                  key={b.id}
                  label={b.label}
                  checked={filters.prices.includes(b.id)}
                  onChange={() => toggle("prices", b.id)}
                />
              ))}
            </FilterGroup>

            {/* Material */}
            <FilterGroup title="Material">
              {MATERIALS.map((m) => (
                <CheckRow
                  key={m.id}
                  label={m.label}
                  checked={filters.materials.includes(m.id)}
                  onChange={() => toggle("materials", m.id)}
                />
              ))}
            </FilterGroup>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="mt-6 inline-flex w-full items-center justify-center border border-line py-2 font-sans text-[10px] uppercase tracking-wider-2 text-stone lg:hidden"
        >
          {open ? "Hide filters" : "Show filters"}
        </button>
      </div>
    </aside>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-t border-line py-5">
      <h4 className="font-sans text-[10px] uppercase tracking-wider-3 text-stone">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function CheckRow({ label, checked, onChange }) {
  return (
    <li>
      <label className="flex cursor-pointer items-center gap-3 font-sans text-sm text-espresso">
        <span
          className={`inline-flex h-4 w-4 items-center justify-center border ${
            checked ? "border-espresso bg-espresso" : "border-line bg-ivory"
          }`}
        >
          {checked && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-ivory">
              <path d="M5 12l5 5L20 7" />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        {label}
      </label>
    </li>
  );
}

export { SORTS, PRICE_BUCKETS };
