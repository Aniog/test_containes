import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 — $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 — $100", min: 75, max: 100 },
];

const MATERIALS = [
  { id: "all", label: "All materials" },
  { id: "18K Gold Plated", label: "18K Gold Plated" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to high" },
  { id: "price-desc", label: "Price: High to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "Newest" },
];

function getSortFn(id) {
  switch (id) {
    case "price-asc":
      return (a, b) => a.price - b.price;
    case "price-desc":
      return (a, b) => b.price - a.price;
    case "rating":
      return (a, b) => (b.rating || 0) - (a.rating || 0);
    case "newest":
      return (a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0);
    default:
      return () => 0;
  }
}

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const initialCategory = params.get("category") || "all";
  const initialPrice = PRICE_BUCKETS.find((b) => b.id === params.get("price"))?.id || "all";
  const initialMaterial = params.get("material") || "all";
  const initialSort = params.get("sort") || "featured";

  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState(initialPrice);
  const [material, setMaterial] = useState(initialMaterial);
  const [sort, setSort] = useState(initialSort);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync state to URL
  useEffect(() => {
    const next = new URLSearchParams();
    if (category !== "all") next.set("category", category);
    if (price !== "all") next.set("price", price);
    if (material !== "all") next.set("material", material);
    if (sort !== "featured") next.set("sort", sort);
    const qs = next.toString();
    navigate(qs ? `?${qs}` : "", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, price, material, sort]);

  // Sync URL -> state
  useEffect(() => {
    setCategory(params.get("category") || "all");
    setPrice(PRICE_BUCKETS.find((b) => b.id === params.get("price"))?.id || "all");
    setMaterial(params.get("material") || "all");
    setSort(params.get("sort") || "featured");
  }, [params]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === price);
    let list = products.slice();
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (material !== "all") list = list.filter((p) => p.material === material);
    if (bucket && bucket.id !== "all") {
      list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max);
    }
    list.sort(getSortFn(sort));
    return list;
  }, [category, price, material, sort]);

  const activeCategory =
    categories.find((c) => c.id === category) ||
    { label: "All Jewelry", blurb: "The full collection" };

  return (
    <div className="bg-cream-50 min-h-screen pt-24 md:pt-28 pb-24">
      {/* Page hero */}
      <div className="max-w-editorial mx-auto px-5 sm:px-8 mb-10 md:mb-14">
        <p className="eyebrow mb-4">Shop the collection</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-2xl">
          {activeCategory.label}
        </h1>
        <p className="mt-4 text-sand-600 max-w-md font-sans">
          {activeCategory.blurb}. {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} available.
        </p>
      </div>

      <div className="max-w-editorial mx-auto px-5 sm:px-8 grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <Filters
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            material={material}
            setMaterial={setMaterial}
          />
        </aside>

        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 border-y border-hairline py-4 mb-8">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 text-[11px] tracking-widest2 uppercase font-sans font-medium"
            >
              <SlidersHorizontal size={14} strokeWidth={1.6} />
              Filters
            </button>
            <p className="hidden lg:block text-[11px] tracking-widest2 uppercase text-sand-600 font-sans">
              Showing {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <label htmlFor="sort" className="text-[11px] tracking-widest2 uppercase text-sand-600 font-sans hidden sm:block">
                Sort
              </label>
              <div className="relative">
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border-b border-ink/30 hover:border-ink focus:border-ink py-1.5 pr-7 pl-1 text-[12px] font-sans focus:outline-none cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink/60">▾</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl mb-2">No pieces match your filters</p>
              <p className="text-sand-600 mb-6">Try widening your selection.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setPrice("all");
                  setMaterial("all");
                }}
                className="btn-outline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!filtersOpen}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={() => setFiltersOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[85vh] bg-cream shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            filtersOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <p className="font-sans text-[0.7rem] tracking-widest2 uppercase font-medium">
              Filter
            </p>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="p-2 -mr-2"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-2">
            <Filters
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
              material={material}
              setMaterial={setMaterial}
            />
          </div>
          <div className="px-6 py-4 border-t border-hairline">
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="btn-primary w-full"
            >
              Show {filtered.length} {filtered.length === 1 ? "Result" : "Results"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filters({ category, setCategory, price, setPrice, material, setMaterial }) {
  return (
    <div className="space-y-10">
      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          <FilterItem
            label="All jewelry"
            active={category === "all"}
            onClick={() => setCategory("all")}
          />
          {categories.map((c) => (
            <FilterItem
              key={c.id}
              label={c.label}
              active={category === c.id}
              onClick={() => setCategory(c.id)}
            />
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <FilterItem
              key={b.id}
              label={b.label}
              active={price === b.id}
              onClick={() => setPrice(b.id)}
            />
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <FilterItem
              key={m.id}
              label={m.label}
              active={material === m.id}
              onClick={() => setMaterial(m.id)}
            />
          ))}
        </ul>
      </FilterGroup>

      <button
        type="button"
        onClick={() => {
          setCategory("all");
          setPrice("all");
          setMaterial("all");
        }}
        className="text-[10.5px] tracking-widest2 uppercase text-sand-600 hover:text-ink underline underline-offset-2 font-sans"
      >
        Reset all
      </button>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <p className="font-sans text-[10.5px] tracking-widest2 uppercase text-ink font-medium mb-4 flex items-center gap-2">
        <span className="w-3 h-px bg-ink" />
        {title}
      </p>
      {children}
    </div>
  );
}

function FilterItem({ label, active, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={`group flex items-center gap-3 w-full text-left text-[13.5px] font-sans transition-colors py-1 ${
          active ? "text-ink" : "text-sand-600 hover:text-ink"
        }`}
        aria-pressed={active}
      >
        <span
          className={`w-3.5 h-3.5 border flex-shrink-0 flex items-center justify-center transition-colors ${
            active ? "border-ink bg-ink" : "border-ink/30 group-hover:border-ink"
          }`}
          aria-hidden="true"
        >
          {active && <span className="w-1.5 h-1.5 bg-cream-50" />}
        </span>
        {label}
      </button>
    </li>
  );
}
