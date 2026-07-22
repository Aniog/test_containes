import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { usePageFx } from "@/hooks/usePageFx";
import ProductCard from "@/components/product/ProductCard";

const PRICE_FILTERS = [
  { id: "all", label: "All Prices", test: () => true },
  { id: "under50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50to80", label: "$50 – $80", test: (p) => p.price >= 50 && p.price <= 80 },
  { id: "over80", label: "Over $80", test: (p) => p.price > 80 },
];

const MATERIALS = ["All Materials", "18k Gold Plated", "Crystal Accent"];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Alphabetical" },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-line py-6 last:border-b-0">
      <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-overline text-ink">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function RadioRow({ name, checked, onChange, label }) {
  return (
    <label className="group flex cursor-pointer items-center gap-2.5">
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
          checked ? "border-gold" : "border-line group-hover:border-gold"
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-gold" />}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`text-sm transition-colors ${
          checked ? "font-medium text-ink" : "text-inkSoft group-hover:text-ink"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const qParam = searchParams.get("q") || "";

  const [category, setCategory] = useState(categoryParam);
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("All Materials");
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep local state in sync when arriving via category tiles / footer links.
  useEffect(() => {
    setCategory(categoryParam);
  }, [categoryParam]);

  const ref = usePageFx([category, price, material, sort, qParam]);

  const results = useMemo(() => {
    let list = [...PRODUCTS];
    if (qParam) {
      const q = qParam.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q),
      );
    }
    if (category !== "All") list = list.filter((p) => p.category === category);
    const pf = PRICE_FILTERS.find((f) => f.id === price);
    if (pf) list = list.filter((p) => pf.test(p));
    if (material === "Crystal Accent")
      list = list.filter((p) => /crystal|zirconia/i.test(p.materials + p.description));
    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }
    return list;
  }, [category, price, material, sort, qParam]);

  const setCategoryAndUrl = (c) => {
    setCategory(c);
    if (c === "All") searchParams.delete("category");
    else searchParams.set("category", c);
    setSearchParams(searchParams, { replace: true });
  };

  const clearAll = () => {
    setCategoryAndUrl("All");
    setPrice("all");
    setMaterial("All Materials");
  };

  const hasFilters = category !== "All" || price !== "all" || material !== "All Materials";

  const filters = (
    <>
      <FilterGroup title="Category">
        {["All", ...CATEGORIES].map((c) => (
          <RadioRow
            key={c}
            name="category"
            label={c === "All" ? "All Jewelry" : c}
            checked={category === c}
            onChange={() => setCategoryAndUrl(c)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_FILTERS.map((f) => (
          <RadioRow
            key={f.id}
            name="price"
            label={f.label}
            checked={price === f.id}
            onChange={() => setPrice(f.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m}
            name="material"
            label={m}
            checked={material === m}
            onChange={() => setMaterial(m)}
          />
        ))}
      </FilterGroup>
      {hasFilters && (
        <button
          onClick={clearAll}
          className="mt-6 font-sans text-xs font-semibold uppercase tracking-luxe text-gold underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-12">
      {/* Header */}
      <div className="border-b border-line pb-8 text-center md:text-left">
        <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
          The Collection
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          {qParam ? `“${qParam}”` : category === "All" ? "All Jewelry" : category}
        </h1>
        <p className="mt-3 text-sm text-inkSoft">
          {results.length} {results.length === 1 ? "piece" : "pieces"}
          {qParam ? " match your search" : " · crafted to be treasured"}
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 py-5">
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-luxe text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          <SlidersHorizontal size={14} /> Filters
        </button>
        <div className="hidden text-xs uppercase tracking-luxe text-inkSoft lg:block">
          Showing {results.length} of {PRODUCTS.length}
        </div>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            className="appearance-none border border-line bg-cream py-2.5 pl-4 pr-10 font-sans text-xs font-semibold uppercase tracking-luxe text-ink focus:border-gold focus:outline-none"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-inkSoft"
          />
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">{filters}</div>
        </aside>

        {/* Grid */}
        <div>
          {results.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <p className="font-display text-2xl text-ink">No pieces match</p>
              <p className="text-sm text-inkSoft">
                Try clearing a filter to see more of the collection.
              </p>
              <button
                onClick={clearAll}
                className="mt-2 font-sans text-xs font-semibold uppercase tracking-luxe text-gold underline-offset-4 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3">
              {results.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-cream p-6 shadow-drawer animate-slide-in-left">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-xl text-ink">Filters</h2>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close filters"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:border-gold hover:text-gold"
              >
                <X size={18} />
              </button>
            </div>
            {filters}
            <button
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full bg-gold py-4 font-sans text-[13px] font-semibold uppercase tracking-luxe text-cream transition-colors hover:bg-goldDark"
            >
              View {results.length} {results.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
