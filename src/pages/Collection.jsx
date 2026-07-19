import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import {
  CATEGORIES,
  MATERIALS,
  PRICE_BUCKETS,
  PRODUCTS,
} from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Collection() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [materials, setMaterials] = useState(new Set());
  const [prices, setPrices] = useState(new Set());
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  // Sync URL → state when ?category=… is used
  useEffect(() => {
    setCategory(params.get("category") || "all");
  }, [params]);

  // Sync state → URL
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category && category !== "all") next.set("category", category);
    else next.delete("category");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (materials.size) {
      list = list.filter((p) => materials.has(p.material));
    }
    if (prices.size) {
      list = list.filter((p) => {
        for (const id of prices) {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id);
          if (!bucket) continue;
          if (p.price >= bucket.min && p.price <= bucket.max) return true;
        }
        return false;
      });
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    return list;
  }, [category, materials, prices, sort]);

  const toggle = (set, setSetter, value) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSetter(next);
  };

  const clearAll = () => {
    setCategory("all");
    setMaterials(new Set());
    setPrices(new Set());
  };

  const heading = category === "all"
    ? "All Jewelry"
    : CATEGORIES.find((c) => c.id === category)?.label || "Collection";

  const sidebar = (
    <FilterPanel
      category={category}
      onCategory={setCategory}
      materials={materials}
      onToggleMaterial={(m) => toggle(materials, setMaterials, m)}
      prices={prices}
      onTogglePrice={(p) => toggle(prices, setPrices, p)}
      onClear={clearAll}
    />
  );

  return (
    <section className="pt-28 md:pt-32 pb-20">
      <div className="container-7xl">
        <header className="pb-10 border-b border-stone">
          <p className="eyebrow text-muted">◆ The Collection</p>
          <h1 className="display-1 text-ink mt-3 text-4xl md:text-6xl">
            {heading}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">{sidebar}</aside>

          {/* Products */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs uppercase tracking-eyebrow text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow font-medium text-ink border border-stone px-3 py-2"
                >
                  <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                  Filter
                </button>
                <label className="inline-flex items-center gap-2">
                  <span className="hidden sm:inline text-[11px] uppercase tracking-eyebrow text-muted">
                    Sort
                  </span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent text-sm text-ink border-b border-stone focus:border-ink focus:outline-none py-1 pr-1"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center border border-stone">
                <p className="eyebrow text-muted">Nothing matches</p>
                <p className="display-2 text-2xl text-ink mt-3">
                  Try a different filter.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="btn-outline mt-6 inline-flex"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden transition-opacity duration-300",
          filterOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          aria-hidden="true"
          onClick={() => setFilterOpen(false)}
          className="absolute inset-0 bg-ink/50"
        />
        <div
          className={cn(
            "absolute bottom-0 inset-x-0 bg-ivory max-h-[85vh] overflow-y-auto p-6 transition-transform duration-300 ease-out-soft",
            filterOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="eyebrow text-ink">Filter</h3>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              aria-label="Close filters"
              className="text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          {sidebar}
          <button
            type="button"
            onClick={() => setFilterOpen(false)}
            className="btn-primary w-full mt-6"
          >
            Show {filtered.length} pieces
          </button>
        </div>
      </div>
    </section>
  );
}

function FilterPanel({
  category,
  onCategory,
  materials,
  onToggleMaterial,
  prices,
  onTogglePrice,
  onClear,
}) {
  return (
    <div className="space-y-10">
      <FilterGroup title="Category">
        <ul className="space-y-2">
          <li>
            <RadioRow
              label="All"
              checked={category === "all"}
              onChange={() => onCategory("all")}
            />
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <RadioRow
                label={c.label}
                checked={category === c.id}
                onChange={() => onCategory(c.id)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <CheckboxRow
                label={m.label}
                checked={materials.has(m.id)}
                onChange={() => onToggleMaterial(m.id)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <CheckboxRow
                label={b.label}
                checked={prices.has(b.id)}
                onChange={() => onTogglePrice(b.id)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <button
        type="button"
        onClick={onClear}
        className="btn-ghost"
      >
        Clear all
      </button>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 className="eyebrow text-ink mb-4">{title}</h4>
      {children}
    </div>
  );
}

function CheckboxRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-sm text-ink-soft hover:text-ink transition-colors">
      <span
        className={`w-4 h-4 inline-flex items-center justify-center border ${
          checked ? "bg-ink border-ink" : "border-stone"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 6.5 5 9.5 10 3" strokeLinecap="round" strokeLinejoin="round" />
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
  );
}

function RadioRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-sm text-ink-soft hover:text-ink transition-colors">
      <span
        className={`w-4 h-4 rounded-full inline-flex items-center justify-center border ${
          checked ? "border-ink" : "border-stone"
        }`}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-ink" />}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}
