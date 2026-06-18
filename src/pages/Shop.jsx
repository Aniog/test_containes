import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import StrkImageHost from "@/components/ui/StrkImageHost";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "lt40", label: "Under $40", min: 0, max: 39.99 },
  { id: "40-70", label: "$40 – $70", min: 40, max: 70 },
  { id: "gt70", label: "$70 & Up", min: 70.01, max: Infinity },
];

const MATERIALS = ["All", "Gold", "Silver"];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("all");
  const [material, setMaterial] = useState("All");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category state when URL changes (e.g. from nav link)
  useEffect(() => {
    const c = searchParams.get("category") || "all";
    setCategory(c);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange) || PRICE_RANGES[0];
    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (material !== "All" && !p.variants.includes(material)) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [category, priceRange, material, sort]);

  const handleCategory = (id) => {
    setCategory(id);
    if (id === "all") searchParams.delete("category");
    else searchParams.set("category", id);
    setSearchParams(searchParams, { replace: true });
  };

  const filtersContent = (
    <div className="space-y-10">
      <div>
        <h3 className="text-[11px] uppercase tracking-editorial text-muted mb-4">Category</h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              className={`text-sm transition ${
                category === "all" ? "text-gold" : "text-ink hover:text-gold"
              }`}
              onClick={() => handleCategory("all")}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                className={`text-sm transition ${
                  category === c.id ? "text-gold" : "text-ink hover:text-gold"
                }`}
                onClick={() => handleCategory(c.id)}
              >
                {c.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={`text-sm transition ${
                category === "sets" ? "text-gold" : "text-ink hover:text-gold"
              }`}
              onClick={() => handleCategory("sets")}
            >
              Gift Sets
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-editorial text-muted mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="inline-flex items-center gap-3 cursor-pointer text-sm text-ink">
                <input
                  type="radio"
                  name="price"
                  value={r.id}
                  checked={priceRange === r.id}
                  onChange={() => setPriceRange(r.id)}
                  className="accent-gold"
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-editorial text-muted mb-4">Material</h3>
        <div className="flex flex-wrap gap-2">
          {MATERIALS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMaterial(m)}
              className={`px-3.5 py-2 text-[11px] uppercase tracking-editorial border transition ${
                material === m
                  ? "border-ink bg-ink text-ivory"
                  : "border-sand text-ink hover:border-ink"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <StrkImageHost deps={[category, priceRange, material, sort]}>
      {/* Page header */}
      <section className="bg-bone border-b border-sand py-12 md:py-16">
        <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 text-center">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Shop All Jewelry</h1>
          <p className="mt-4 text-sm md:text-base text-espresso/80 max-w-xl mx-auto">
            Hand-finished demi-fine pieces in 18K gold. Designed to be worn daily, kept always.
          </p>
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8 gap-4">
          <button
            type="button"
            className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial border border-ink px-4 py-2.5 hover:bg-ink hover:text-ivory transition"
            onClick={() => setFiltersOpen(true)}
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>
          <p className="hidden lg:block text-sm text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-[11px] uppercase tracking-editorial text-muted hidden md:inline">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-sand px-3 py-2 text-sm text-ink focus:outline-none focus:border-ink transition"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">{filtersContent}</aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-20 border border-sand">
                <p className="font-serif text-2xl text-ink">No pieces match those filters.</p>
                <p className="mt-2 text-sm text-muted">Try widening your selection.</p>
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
      </section>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
                className="p-1 hover:text-gold transition"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            {filtersContent}
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-10 w-full bg-ink text-ivory py-3.5 tracking-editorial uppercase text-[11px] hover:bg-goldDeep transition"
            >
              View {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      )}
    </StrkImageHost>
  );
}
