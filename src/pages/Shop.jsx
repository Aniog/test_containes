import React, { useEffect, useMemo, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { Filter, X, ChevronDown } from "lucide-react";
import {
  products,
  categories,
  sortOptions,
  materials,
  priceBuckets,
} from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { formatPrice } from "@/lib/format";
import strkImgConfig from "@/strk-img-config.json";

function sortProducts(list, sortId) {
  const out = [...list];
  switch (sortId) {
    case "newest":
      return out.reverse();
    case "price-asc":
      return out.sort((a, b) => a.price - b.price);
    case "price-desc":
      return out.sort((a, b) => b.price - a.price);
    case "rating":
      return out.sort((a, b) => b.rating - a.rating);
    case "featured":
    default:
      return out;
  }
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);
  const gridRef = useRef(null);

  const initialCategory = searchParams.get("category") || "all";
  const initialSort = searchParams.get("sort") || "featured";
  const initialMaterial = searchParams.get("material") || "all";
  const initialPrice = searchParams.get("price") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeSort, setActiveSort] = useState(initialSort);
  const [activeMaterial, setActiveMaterial] = useState(initialMaterial);
  const [activePrice, setActivePrice] = useState(initialPrice);

  // Re-read URL when the search params change (back/forward, deep-link)
  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "all");
    setActiveSort(searchParams.get("sort") || "featured");
    setActiveMaterial(searchParams.get("material") || "all");
    setActivePrice(searchParams.get("price") || "all");
  }, [searchParams]);

  // Sync filter state -> URL
  useEffect(() => {
    const next = {};
    if (activeCategory !== "all") next.category = activeCategory;
    if (activeSort !== "featured") next.sort = activeSort;
    if (activeMaterial !== "all") next.material = activeMaterial;
    if (activePrice !== "all") next.price = activePrice;
    setSearchParams(next, { replace: true });
  }, [activeCategory, activeSort, activeMaterial, activePrice, setSearchParams]);

  // Close sort dropdown on outside click
  useEffect(() => {
    if (!sortOpen) return;
    const onClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [sortOpen]);

  const filtered = useMemo(() => {
    let out = products;
    if (activeCategory !== "all") {
      out = out.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== "all") {
      out = out.filter((p) => p.material === activeMaterial);
    }
    if (activePrice !== "all") {
      const bucket = priceBuckets.find((b) => b.id === activePrice);
      if (bucket) {
        out = out.filter(
          (p) => p.price >= bucket.min && p.price < bucket.max
        );
      }
    }
    return sortProducts(out, activeSort);
  }, [activeCategory, activeMaterial, activePrice, activeSort]);

  const activeFilters = [
    activeCategory !== "all" && {
      key: "category",
      label:
        categories.find((c) => c.id === activeCategory)?.label || activeCategory,
      onClear: () => setActiveCategory("all"),
    },
    activeMaterial !== "all" && {
      key: "material",
      label: activeMaterial,
      onClear: () => setActiveMaterial("all"),
    },
    activePrice !== "all" && {
      key: "price",
      label:
        priceBuckets.find((b) => b.id === activePrice)?.label || activePrice,
      onClear: () => setActivePrice("all"),
    },
  ].filter(Boolean);

  const FilterPanel = (
    <div className="space-y-10">
      <div>
        <h3 className="eyebrow text-taupe-500 mb-4">Category</h3>
        <ul className="space-y-2.5">
          {[{ id: "all", label: "All Jewelry" }, ...categories].map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={[
                  "w-full text-left font-sans text-sm py-1 transition-colors",
                  activeCategory === c.id
                    ? "text-espresso"
                    : "text-taupe-500 hover:text-espresso",
                ].join(" ")}
              >
                {c.label}
                {activeCategory === c.id && (
                  <span className="ml-2 text-gold-500">—</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow text-taupe-500 mb-4">Price</h3>
        <ul className="space-y-2.5">
          {[{ id: "all", label: "All Prices" }, ...priceBuckets].map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setActivePrice(b.id)}
                className={[
                  "w-full text-left font-sans text-sm py-1 transition-colors",
                  activePrice === b.id
                    ? "text-espresso"
                    : "text-taupe-500 hover:text-espresso",
                ].join(" ")}
              >
                {b.label}
                {activePrice === b.id && (
                  <span className="ml-2 text-gold-500">—</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow text-taupe-500 mb-4">Material</h3>
        <ul className="space-y-2.5">
          {[{ id: "all", label: "All Materials" }, ...materials].map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setActiveMaterial(m.id)}
                className={[
                  "w-full text-left font-sans text-sm py-1 transition-colors",
                  activeMaterial === m.id
                    ? "text-espresso"
                    : "text-taupe-500 hover:text-espresso",
                ].join(" ")}
              >
                {m.label}
                {activeMaterial === m.id && (
                  <span className="ml-2 text-gold-500">—</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Editorial banner */}
      <section
        className="bg-ivory-50 border-b border-hairline pt-28 sm:pt-32 pb-12 sm:pb-16"
        aria-labelledby="shop-banner"
      >
        <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow text-taupe-500">The Collection</p>
          <h1
            id="shop-banner"
            className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] text-espresso text-balance"
          >
            Demi-fine, designed to last.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-taupe-500 max-w-md mx-auto">
            Eight pieces. Every one crafted in 18K gold plating, ready to wear
            every day, gifted any day.
          </p>
        </div>
      </section>

      <section className="bg-ivory-100">
        <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border border-espresso px-4 py-2.5"
            >
              <Filter className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filter
            </button>

            <p className="hidden lg:block font-sans text-xs text-taupe-500 tabular-nums">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>

            <div className="relative ml-auto" ref={sortRef}>
              <button
                type="button"
                onClick={() => setSortOpen((v) => !v)}
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border border-hairline px-4 py-2.5 hover:border-espresso transition-colors"
                aria-expanded={sortOpen}
                aria-haspopup="listbox"
              >
                Sort: {sortOptions.find((s) => s.id === activeSort)?.label}
                <ChevronDown
                  className={[
                    "w-3.5 h-3.5 transition-transform",
                    sortOpen ? "rotate-180" : "",
                  ].join(" ")}
                  strokeWidth={1.5}
                />
              </button>
              {sortOpen && (
                <ul
                  className="absolute right-0 top-full mt-2 z-30 w-56 bg-ivory-50 border border-hairline shadow-soft py-2 animate-fade-in"
                  role="listbox"
                >
                  {sortOptions.map((opt) => (
                    <li key={opt.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSort(opt.id);
                          setSortOpen(false);
                        }}
                        className={[
                          "w-full text-left px-4 py-2 font-sans text-sm transition-colors",
                          activeSort === opt.id
                            ? "text-espresso bg-ivory-200"
                            : "text-taupe-500 hover:text-espresso",
                        ].join(" ")}
                        role="option"
                        aria-selected={activeSort === opt.id}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {activeFilters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={f.onClear}
                  className="inline-flex items-center gap-2 bg-ivory-50 border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-widest2 text-espresso hover:border-espresso transition-colors"
                >
                  {f.label}
                  <X className="w-3 h-3" strokeWidth={1.5} />
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setActiveMaterial("all");
                  setActivePrice("all");
                }}
                className="font-sans text-[11px] uppercase tracking-widest2 text-taupe-500 hover:text-espresso transition-colors ml-2"
              >
                Clear all
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
              <div className="sticky top-28">{FilterPanel}</div>
            </aside>

            {/* Product grid */}
            <div className="lg:col-span-9 xl:col-span-9" ref={gridRef}>
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-espresso">
                    Nothing matches just yet.
                  </p>
                  <p className="mt-2 text-taupe-500 text-sm">
                    Try removing a filter to see more pieces.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={[
          "fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!drawerOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setDrawerOpen(false)}
        />
        <aside
          className={[
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory-50 shadow-soft-lg p-6 overflow-y-auto transition-transform duration-500",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sans text-[11px] uppercase tracking-widest2 text-espresso">
              Filter
            </h2>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          {FilterPanel}
          <div className="mt-10 pt-6 border-t border-hairline flex gap-3">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setActiveMaterial("all");
                setActivePrice("all");
              }}
              className="btn-ghost"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="btn-primary flex-1"
            >
              Show {filtered.length} results
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
