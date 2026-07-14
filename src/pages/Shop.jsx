import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, priceRanges, sortOptions } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";

const filterFromCollection = {
  earrings: { category: "earrings" },
  necklaces: { category: "necklaces" },
  huggies: { category: "huggies" },
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    material: "all",
  });
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, gridRef.current);
  }, [filters, sort, mobileOpen]);

  useEffect(() => {
    const collection = searchParams.get("collection");
    if (collection && filterFromCollection[collection]) {
      setFilters((f) => ({ ...f, ...filterFromCollection[collection] }));
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    const range = priceRanges.find((p) => p.id === filters.price) ||
      priceRanges[0];
    let list = products.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category)
        return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (filters.material !== "all" && p.material !== filters.material)
        return false;
      return true;
    });
    list = [...list];
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        list.sort((a, b) => (b.id > a.id ? 1 : -1));
        break;
      default:
        break;
    }
    return list;
  }, [filters, sort]);

  const clearAll = () => {
    setFilters({ category: "all", price: "all", material: "all" });
    setSearchParams({});
  };
  const isFiltered =
    filters.category !== "all" ||
    filters.price !== "all" ||
    filters.material !== "all";

  return (
    <div className="bg-cream pt-12 md:pt-20 pb-20">
      <header className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 mb-10 md:mb-14 text-center">
        <p className="eyebrow">The Collection</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso mt-3">
          Shop All Jewelry
        </h1>
        <p className="mt-5 text-sm md:text-base text-ash max-w-lg mx-auto leading-relaxed">
          Hand-finished demi-fine pieces — designed to wear every day and
          keep forever.
        </p>
      </header>

      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 flex items-center justify-between mb-6 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-espresso border border-line px-4 py-2.5"
        >
          <SlidersHorizontal size={14} strokeWidth={1.5} />
          Filters {isFiltered && <span className="text-gold">•</span>}
        </button>
        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 flex gap-10 lg:gap-14">
        <div className="hidden md:block">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            total={filtered.length}
          />
        </div>

        <div className="flex-1 min-w-0" ref={gridRef}>
          <div className="hidden md:flex items-center justify-between mb-6">
            <p className="text-xs tracking-wide text-ash">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <SortDropdown sort={sort} setSort={setSort} />
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-espresso">
                Nothing matches yet.
              </p>
              <p className="mt-3 text-sm text-ash">
                Try adjusting your filters.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 btn-outline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} priority={i < 2} />
              ))}
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-ivory p-6 shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-2xl text-espresso">Filter</h3>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close"
                className="text-ash hover:text-espresso"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              total={filtered.length}
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full btn-primary"
            >
              View {filtered.length} Pieces
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SortDropdown({ sort, setSort }) {
  const current = sortOptions.find((o) => o.id === sort);
  return (
    <div className="relative inline-block">
      <label className="sr-only" htmlFor="sort-select">
        Sort by
      </label>
      <select
        id="sort-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="appearance-none bg-transparent border border-line pl-4 pr-9 py-2.5 text-[11px] tracking-widest2 uppercase text-espresso focus:outline-none focus:border-gold cursor-pointer"
      >
        {sortOptions.map((o) => (
          <option key={o.id} value={o.id}>
            Sort: {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        strokeWidth={1.6}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-ash pointer-events-none"
      />
    </div>
  );
}
