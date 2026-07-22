import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SearchX, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar, { priceRangeMap } from "@/components/product/FilterSidebar";
import { useReveal } from "@/hooks/useReveal";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Alphabetical" },
];

const sorters = {
  featured: (a, b) => Number(b.bestseller) - Number(a.bestseller),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
  name: (a, b) => a.name.localeCompare(b.name),
};

const toggle = (list, value) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get("category");
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategories(cat ? [cat] : []);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((id) => priceRangeMap[id]?.test(p))
      );
    }
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    return list.sort(sorters[sort]);
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const containerRef = useRef(null);
  const revealRef = useReveal([filtered.length]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered.length, sort]);

  const activeCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const sidebarProps = {
    products,
    selectedCategories,
    toggleCategory: (cat) => {
      const next = toggle(selectedCategories, cat);
      setSelectedCategories(next);
      if (next.length === 1) setSearchParams({ category: next[0] });
      else setSearchParams({});
    },
    selectedPrices,
    togglePrice: (id) => setSelectedPrices((prev) => toggle(prev, id)),
    selectedMaterials,
    toggleMaterial: (mat) => setSelectedMaterials((prev) => toggle(prev, mat)),
    resetFilters,
    activeCount,
  };

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        revealRef.current = node;
      }}
      className="mx-auto max-w-7xl px-5 pb-24 pt-24 md:px-10 md:pt-32"
    >
      {/* Header */}
      <header className="border-b border-line pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
          The Collection
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-serif text-4xl font-medium leading-[1.05] text-espresso md:text-6xl">
            Shop All Jewelry
          </h1>
          <p className="text-sm text-cocoa">
            {filtered.length}{" "}
            {filtered.length === 1 ? "piece" : "pieces"}
            {activeCount > 0 ? " · filtered" : ""}
          </p>
        </div>
      </header>

      {/* Toolbar */}
      <div className="sticky top-16 z-30 -mx-5 flex items-center justify-between gap-4 border-b border-line bg-ivory/95 px-5 py-4 backdrop-blur md:top-20 md:-mx-10 md:px-10">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 border border-espresso/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:border-espresso md:hidden"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
          Filters
          {activeCount > 0 && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-bronze text-[9px] font-bold text-ivory">
              {activeCount}
            </span>
          )}
        </button>

        <p className="hidden text-[11px] uppercase tracking-[0.22em] text-cocoa md:block">
          {activeCount > 0
            ? `${activeCount} filter${activeCount > 1 ? "s" : ""} applied`
            : "Refine your selection"}
        </p>

        <label className="relative flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.22em] text-cocoa">
            Sort
          </span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-espresso/25 bg-ivory py-2.5 pl-4 pr-10 text-xs font-medium tracking-wide text-espresso transition-colors hover:border-espresso focus:outline-none"
              aria-label="Sort products"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cocoa"
              strokeWidth={1.5}
            />
          </span>
        </label>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-40">
            <FilterSidebar {...sidebarProps} />
          </div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <SearchX className="h-10 w-10 text-sand" strokeWidth={1} />
              <p className="mt-5 font-serif text-2xl text-espresso">
                No pieces match your filters
              </p>
              <p className="mt-2 text-sm text-cocoa">
                Try widening your selection — treasure awaits.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-7 border border-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-all hover:bg-espresso hover:text-ivory"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {filtered.map((product, index) => (
                <div key={product.id} className="reveal">
                  <ProductCard product={product} eager={index < 3} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileFiltersOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-espresso/50 backdrop-blur-[2px] transition-opacity duration-400 ${
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[82vh] overflow-y-auto rounded-t-2xl bg-ivory px-6 pb-10 pt-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          }`}
          role="dialog"
          aria-label="Product filters"
        >
          <div className="mx-auto h-1 w-10 rounded-full bg-line" />
          <div className="mt-5 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="flex h-10 w-10 items-center justify-center rounded-full text-espresso hover:bg-sand/60"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="mt-6">
            <FilterSidebar {...sidebarProps} />
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-8 w-full bg-espresso py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-bronze"
          >
            View {filtered.length}{" "}
            {filtered.length === 1 ? "Piece" : "Pieces"}
          </button>
        </div>
      </div>
    </div>
  );
}

