import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar, { PRICE_BANDS } from "@/components/product/FilterSidebar";
import { useStrkImages } from "@/lib/useStrkImages";

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "new", label: "New Arrivals" },
];

function sortProducts(list, sort) {
  const copy = [...list];
  switch (sort) {
    case "price-asc":  return copy.sort((a, b) => a.price - b.price);
    case "price-desc": return copy.sort((a, b) => b.price - a.price);
    case "rating":     return copy.sort((a, b) => b.rating - a.rating);
    case "new":        return copy.sort((a, b) => b.slug.localeCompare(a.slug));
    default:           return copy;
  }
}

export default function Shop({ initialCategory = "all", title = "Shop All", eyebrow = "Velmora" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get("sort") || "featured";

  const [filters, setFilters] = useState({
    category: initialCategory,
    price: "all",
    materials: [],
  });
  const [sort, setSort] = useState(initialSort);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const ref = useRef(null);
  useStrkImages(ref, [filters.category, filters.price, filters.materials.join("|"), sort]);

  // When route changes (eg /collections/earrings), reset category.
  useEffect(() => {
    setFilters((f) => ({ ...f, category: initialCategory }));
  }, [initialCategory]);

  // Sync sort -> URL
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (sort === "featured") next.delete("sort");
    else next.set("sort", sort);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const filtered = useMemo(() => {
    const band = PRICE_BANDS.find((b) => b.id === filters.price) || PRICE_BANDS[0];
    const result = PRODUCTS.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (p.price < band.min || p.price > band.max) return false;
      if (filters.materials.length) {
        // Match on description/materials text or product name. Cheap proxy.
        const mat = (p.eyebrow + " " + p.materials).toLowerCase();
        const ok = filters.materials.some((m) => mat.includes(m.toLowerCase().split(" ")[0]));
        if (!ok) return false;
      }
      return true;
    });
    return sortProducts(result, sort);
  }, [filters, sort]);

  const activeCategory = CATEGORIES.find((c) => c.slug === filters.category);

  return (
    <div ref={ref} className="bg-ivory-50">
      {/* Header */}
      <header className="border-b border-ink-800/10 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-12 sm:pb-14">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 text-balance">
            {activeCategory ? activeCategory.label : title}
          </h1>
          <p className="mt-3 max-w-xl text-ink-500 text-pretty">
            Considered, demi-fine pieces in 18K gold plating. Designed to wear
            layered or alone, every day.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 border-b border-ink-800/10 pb-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 lg:hidden font-sans uppercase tracking-widest2 text-[11px] text-ink-800"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>
          <p className="hidden text-sm text-ink-500 lg:block">
            Showing <span className="text-ink-800">{filtered.length}</span> of {PRODUCTS.length} pieces
          </p>

          <label className="ml-auto flex items-center gap-2 text-sm text-ink-500">
            <span className="font-sans uppercase tracking-widest2 text-[11px]">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink-800/20 bg-transparent px-3 py-2 text-sm text-ink-800 focus:border-gold-400 focus:outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              total={filtered.length}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <p className="mb-4 text-sm text-ink-500 lg:hidden">
              Showing <span className="text-ink-800">{filtered.length}</span> of {PRODUCTS.length}
            </p>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink-800">Nothing here yet</p>
                <p className="mt-2 text-sm text-ink-500">Try a different filter combination.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-ink-900/40" onClick={() => setDrawerOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-ivory-50 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="font-serif text-2xl">Filter</p>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6">
              <FilterSidebar
                filters={filters}
                onChange={setFilters}
                total={filtered.length}
              />
            </div>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              View {filtered.length} pieces
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
