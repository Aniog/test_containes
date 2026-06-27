import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const MATERIALS = ["18K Gold", "Silver"];
const PRICE_RANGES = [
  { id: "under-40", label: "Under $40", min: 0, max: 40 },
  { id: "40-70", label: "$40 — $70", min: 40, max: 70 },
  { id: "70-100", label: "$70 — $100", min: 70, max: 100 },
  { id: "over-100", label: "$100+", min: 100, max: Infinity },
];
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [prices, setPrices] = useState(new Set());
  const [materials, setMaterials] = useState(new Set());
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (prices.size > 0) {
      list = list.filter((p) =>
        Array.from(prices).some((id) => {
          const r = PRICE_RANGES.find((x) => x.id === id);
          return p.price >= r.min && p.price < r.max;
        })
      );
    }
    if (materials.size > 0) {
      list = list.filter((p) =>
        Array.from(materials).some((m) => p.variants.includes(m))
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, prices, materials, sort]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [filtered.length, category]);

  const toggleSet = (setter) => (value) => {
    setter((current) => {
      const next = new Set(current);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const updateCategory = (id) => {
    setCategory(id);
    const next = new URLSearchParams(searchParams);
    if (id === "all") next.delete("category");
    else next.set("category", id);
    setSearchParams(next, { replace: true });
  };

  const clearAll = () => {
    setPrices(new Set());
    setMaterials(new Set());
    updateCategory("all");
  };

  const activeCategoryLabel =
    category === "all"
      ? "All Jewelry"
      : CATEGORIES.find((c) => c.id === category)?.label || "Shop";

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Page header */}
      <header className="border-b border-hairline bg-cream-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            Shop
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light tracking-tight text-espresso md:text-6xl">
            {activeCategoryLabel}
          </h1>
          <p className="mt-4 max-w-lg text-sm text-espresso/70 md:text-base">
            Demi-fine pieces in 18K gold-plated brass — hypoallergenic, made to
            be layered, lived in, and treasured.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <FilterSidebar
              category={category}
              setCategory={updateCategory}
              prices={prices}
              togglePrice={toggleSet(setPrices)}
              materials={materials}
              toggleMaterial={toggleSet(setMaterials)}
              onClear={clearAll}
            />
          </aside>

          {/* Mobile sticky bar */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-espresso/30 px-4 py-2.5 text-[11px] uppercase tracking-[0.24em] text-espresso"
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.4} />
              Filters
            </button>
          </div>

          {/* Grid */}
          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <label className="flex items-center gap-3 text-xs">
                <span className="uppercase tracking-[0.2em] text-muted">
                  Sort
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-hairline bg-cream px-3 py-2 text-xs text-espresso focus:border-gold focus:outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-hairline bg-cream-soft px-6 py-20 text-center">
                <p className="font-serif text-3xl text-espresso">
                  Nothing matches yet.
                </p>
                <p className="mt-3 text-sm text-muted">
                  Try clearing a filter or browsing all jewelry.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-espresso px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-espresso transition-colors hover:bg-espresso hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-ink/60 velmora-fade-in"
          />
          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-cream p-6 velmora-slide-in overflow-y-auto">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <h2 className="font-serif text-2xl text-espresso">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-espresso"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="mt-6">
              <FilterSidebar
                category={category}
                setCategory={updateCategory}
                prices={prices}
                togglePrice={toggleSet(setPrices)}
                materials={materials}
                toggleMaterial={toggleSet(setMaterials)}
                onClear={clearAll}
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-3.5 text-[11px] uppercase tracking-[0.28em] text-cream"
            >
              Apply ({filtered.length})
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

function FilterSidebar({
  category,
  setCategory,
  prices,
  togglePrice,
  materials,
  toggleMaterial,
  onClear,
}) {
  return (
    <div className="space-y-10">
      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {[{ id: "all", label: "All Jewelry" }, ...CATEGORIES].map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={
                  "text-sm transition-colors duration-300 " +
                  (category === c.id
                    ? "text-gold-deep"
                    : "text-espresso/75 hover:text-espresso")
                }
              >
                {category === c.id ? "— " : ""}
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-3">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 text-sm text-espresso/85 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prices.has(r.id)}
                  onChange={() => togglePrice(r.id)}
                  className="h-4 w-4 accent-gold border-hairline"
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-3">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 text-sm text-espresso/85 cursor-pointer">
                <input
                  type="checkbox"
                  checked={materials.has(m)}
                  onChange={() => toggleMaterial(m)}
                  className="h-4 w-4 accent-gold border-hairline"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <button
        type="button"
        onClick={onClear}
        className="text-[11px] uppercase tracking-[0.28em] text-muted underline-offset-8 transition-colors hover:text-espresso hover:underline"
      >
        Clear All
      </button>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="border-b border-hairline pb-3 text-[11px] uppercase tracking-[0.3em] text-espresso">
        {title}
      </h3>
      <div className="pt-4">{children}</div>
    </div>
  );
}
