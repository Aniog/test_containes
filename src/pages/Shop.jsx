import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const PRICE_BUCKETS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75, max: Infinity },
];

function useFilters() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "all";
  const material = params.get("material") || "all";
  const price = params.get("price") || "all";
  const sort = params.get("sort") || "featured";

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === "all" || value === "featured") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setParams(next, { replace: true });
  };

  const clearAll = () => setParams(new URLSearchParams(), { replace: true });

  return { category, material, price, sort, setParam, clearAll };
}

function FilterPanel({ filters, onClose }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
        <h2 className="font-serif text-xl text-ink tracking-wider2">Filter</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close filters"
          className="text-ink hover:text-gold-deep p-1"
        >
          <X className="w-5 h-5" strokeWidth={1.25} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10">
        <FilterGroup title="Category">
          <ul className="space-y-2.5">
            <li>
              <FilterRadio
                checked={filters.category === "all"}
                onChange={() => filters.setParam("category", "all")}
                label="All"
              />
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <FilterRadio
                  checked={filters.category === c.id}
                  onChange={() => filters.setParam("category", c.id)}
                  label={c.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Material">
          <ul className="space-y-2.5">
            <li>
              <FilterRadio
                checked={filters.material === "all"}
                onChange={() => filters.setParam("material", "all")}
                label="All Materials"
              />
            </li>
            {MATERIALS.map((m) => (
              <li key={m.id}>
                <FilterRadio
                  checked={filters.material === m.id}
                  onChange={() => filters.setParam("material", m.id)}
                  label={m.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Price">
          <ul className="space-y-2.5">
            {PRICE_BUCKETS.map((b) => (
              <li key={b.id}>
                <FilterRadio
                  checked={filters.price === b.id}
                  onChange={() => filters.setParam("price", b.id)}
                  label={b.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>
      </div>
      <div className="border-t border-hairline px-6 py-5 flex items-center gap-3">
        <button
          type="button"
          onClick={filters.clearAll}
          className="flex-1 text-[11px] uppercase tracking-wider2 text-ink hover:text-gold-deep py-3 border border-ink"
        >
          Clear all
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 bg-ink text-bone text-[11px] uppercase tracking-wider2 font-medium py-3 hover:bg-gold-deep"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-4 font-medium">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FilterRadio({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
          checked ? "border-ink" : "border-hairline group-hover:border-ink"
        )}
      >
        {checked && <span className="w-1.5 h-1.5 rounded-full bg-ink" />}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ink/85 group-hover:text-ink">{label}</span>
    </label>
  );
}

export default function Shop() {
  const filters = useFilters();
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }
    if (filters.material !== "all") {
      list = list.filter((p) => p.material === filters.material);
    }
    const priceBucket = PRICE_BUCKETS.find((b) => b.id === filters.price);
    if (priceBucket && priceBucket.id !== "all") {
      list = list.filter(
        (p) => p.price >= priceBucket.min && p.price < priceBucket.max
      );
    }

    switch (filters.sort) {
      case "new":
        list.sort((a, b) => Number(b.new) - Number(a.new));
        break;
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
        // featured: bestsellers first
        list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
    }
    return list;
  }, [filters.category, filters.material, filters.price, filters.sort]);

  const activeChips = useMemo(() => {
    const chips = [];
    if (filters.category !== "all") {
      const c = CATEGORIES.find((x) => x.id === filters.category);
      if (c) chips.push({ key: "category", value: "all", label: c.label });
    }
    if (filters.material !== "all") {
      const m = MATERIALS.find((x) => x.id === filters.material);
      if (m) chips.push({ key: "material", value: "all", label: m.label });
    }
    if (filters.price !== "all") {
      const p = PRICE_BUCKETS.find((x) => x.id === filters.price);
      if (p) chips.push({ key: "price", value: "all", label: p.label });
    }
    return chips;
  }, [filters.category, filters.material, filters.price]);

  return (
    <div className="bg-bone min-h-screen pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-ink text-4xl md:text-6xl font-light leading-tight">
            Shop All
          </h1>
          <p className="mt-4 text-muted text-sm md:text-base max-w-md mx-auto">
            Every Velmora piece, hand-finished in 18K gold plating.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-b border-hairline py-4 mb-10">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-wider2 text-ink border border-ink px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.25} />
              Filter
            </button>
            {activeChips.length > 0 && (
              <>
                {activeChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={() => filters.setParam(chip.key, chip.value)}
                    className="inline-flex items-center gap-2 bg-ivory border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-wider2 text-ink hover:border-ink"
                  >
                    {chip.label}
                    <X className="w-3 h-3" />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={filters.clearAll}
                  className="text-[11px] uppercase tracking-wider2 text-muted hover:text-ink underline underline-offset-2"
                >
                  Clear all
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider2 text-ink/80">
            <span className="text-muted">{filtered.length} pieces</span>
            <span className="w-px h-3 bg-hairline" />
            <label htmlFor="sort" className="sr-only">Sort by</label>
            <select
              id="sort"
              value={filters.sort}
              onChange={(e) => filters.setParam("sort", e.target.value)}
              className="bg-transparent border border-hairline px-3 py-2 text-[11px] uppercase tracking-wider2 text-ink focus:outline-none focus:border-ink"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block sticky top-28 self-start">
            <FilterPanelDesktop filters={filters} />
          </aside>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-ink mb-2">No pieces match</p>
              <p className="text-sm text-muted mb-6">Try adjusting your filters.</p>
              <button
                type="button"
                onClick={filters.clearAll}
                className="inline-block text-[11px] uppercase tracking-wider2 text-ink hover:text-gold-deep border-b border-ink pb-1"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-12">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-0 ml-auto flex">
            <div className="ml-auto h-full w-full sm:max-w-md bg-bone shadow-drawer animate-slide-in-right flex flex-col">
              <FilterPanel filters={filters} onClose={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterPanelDesktop({ filters }) {
  return (
    <div className="pr-4">
      <h2 className="text-[10px] uppercase tracking-wider3 text-gold-deep font-medium mb-6">
        Refine
      </h2>
      <div className="space-y-10">
        <FilterGroup title="Category">
          <ul className="space-y-2.5">
            <li>
              <FilterRadio
                checked={filters.category === "all"}
                onChange={() => filters.setParam("category", "all")}
                label="All"
              />
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <FilterRadio
                  checked={filters.category === c.id}
                  onChange={() => filters.setParam("category", c.id)}
                  label={c.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Material">
          <ul className="space-y-2.5">
            <li>
              <FilterRadio
                checked={filters.material === "all"}
                onChange={() => filters.setParam("material", "all")}
                label="All Materials"
              />
            </li>
            {MATERIALS.map((m) => (
              <li key={m.id}>
                <FilterRadio
                  checked={filters.material === m.id}
                  onChange={() => filters.setParam("material", m.id)}
                  label={m.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Price">
          <ul className="space-y-2.5">
            {PRICE_BUCKETS.map((b) => (
              <li key={b.id}>
                <FilterRadio
                  checked={filters.price === b.id}
                  onChange={() => filters.setParam("price", b.id)}
                  label={b.label}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>
      </div>
    </div>
  );
}
