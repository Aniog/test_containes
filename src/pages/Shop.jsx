import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { SlidersHorizontal, X } from "lucide-react";

const PRICE_BUCKETS = {
  all: [0, Infinity],
  u50: [0, 50],
  "50-80": [50, 80],
  "80p": [80, Infinity],
};

const DEFAULT_FILTERS = { category: "all", price: "all", material: "all" };

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => ({
    ...DEFAULT_FILTERS,
    category: searchParams.get("category") || "all",
  }));
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    setFilters((f) => ({
      ...f,
      category: searchParams.get("category") || "all",
    }));
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }
    if (filters.price !== "all") {
      const [min, max] = PRICE_BUCKETS[filters.price];
      list = list.filter((p) => p.price >= min && p.price <= max);
    }
    if (filters.material !== "all") {
      if (filters.material === "gold") list = list.filter((p) => p.tone === "gold");
      if (filters.material === "silver") list = list.filter((p) => p.tone === "silver");
      if (filters.material === "rose") list = list.filter((p) => p.tone === "rose");
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
      case "newest":
        list.sort((a, b) => (a.badge === "New" ? -1 : 1));
        break;
      default:
        break;
    }
    return list;
  }, [filters, sort]);

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchParams({});
  };

  const headingLabel =
    filters.category === "all"
      ? "All Jewelry"
      : filters.category.charAt(0).toUpperCase() + filters.category.slice(1);

  return (
    <div ref={containerRef} className="bg-ivory text-espresso">
      {/* Page header */}
      <section className="bg-bone border-b border-sand">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <p className="eyebrow mb-3">The Collection</p>
          <h1
            id="shop-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl"
          >
            {headingLabel}
          </h1>
          <p
            id="shop-subtitle"
            className="mt-4 text-sm md:text-base text-espresso/65 max-w-md mx-auto"
          >
            Demitasse, demi-fine, designed in Brooklyn. Layered, gifted, and treasured through every beautiful, ordinary day.
          </p>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-espresso border border-espresso/30 px-4 py-2.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.4} />
            Filter
          </button>
          <p className="hidden md:block text-xs uppercase tracking-[0.22em] text-espresso/60">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onChange={(f) => {
                setFilters(f);
                if (f.category) {
                  if (f.category === "all") setSearchParams({});
                  else setSearchParams({ category: f.category });
                }
              }}
              onReset={handleReset}
              resultCount={filtered.length}
            />
          </div>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl mb-2">Nothing here yet</p>
                <p className="text-sm text-espresso/60 mb-6">
                  Try a different filter — or reset and see the full collection.
                </p>
                <button type="button" onClick={handleReset} className="btn-outline">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 right-0 max-w-md ml-auto bg-ivory overflow-y-auto p-6 animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl">Filter</h3>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close filters"
                className="p-2 -mr-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={handleReset}
              resultCount={filtered.length}
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show {filtered.length} Pieces
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
