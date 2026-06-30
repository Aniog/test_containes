import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar, { PRICE_BUCKETS } from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import Reveal from "@/components/ui/Reveal";

const DEFAULT_FILTERS = {
  categories: [],
  materials:  [],
  price:      "all",
};

function sortProducts(list, sortId) {
  const arr = [...list];
  switch (sortId) {
    case "price-asc":  return arr.sort((a, b) => a.price - b.price);
    case "price-desc": return arr.sort((a, b) => b.price - a.price);
    case "top-rated":  return arr.sort((a, b) => b.rating - a.rating);
    case "newest":     return arr.sort((a, b) => (a.badge === "New" ? -1 : 1));
    default:           return arr;
  }
}

function matchesFilters(p, filters) {
  if (filters.categories?.length && !filters.categories.includes(p.category)) return false;
  if (filters.materials?.length  && !filters.materials.includes(p.material))  return false;
  if (filters.price && filters.price !== "all") {
    const bucket = PRICE_BUCKETS.find((b) => b.id === filters.price);
    if (bucket) {
      const [lo, hi] = bucket.range;
      if (lo != null && p.price < lo) return false;
      if (hi != null && p.price > hi) return false;
    }
  }
  return true;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("cat");

  const [filters, setFilters] = useState(() => ({
    ...DEFAULT_FILTERS,
    categories: catParam ? [catParam] : [],
  }));
  const [sort, setSort] = useState("featured");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const sectionRef = useRef(null);

  // Keep filters in sync with ?cat= URL param
  useEffect(() => {
    if (catParam) {
      setFilters((f) => ({
        ...f,
        categories: f.categories.includes(catParam) ? f.categories : [catParam],
      }));
    }
  }, [catParam]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  // Body scroll lock when mobile filter drawer is open
  useEffect(() => {
    document.body.style.overflow = filterDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filterDrawerOpen]);

  const filtered = useMemo(
    () => PRODUCTS.filter((p) => matchesFilters(p, filters)),
    [filters]
  );
  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort]);

  const counts = useMemo(() => {
    const category = {};
    const material = {};
    PRODUCTS.forEach((p) => {
      category[p.category] = (category[p.category] || 0) + 1;
      material[p.material] = (material[p.material] || 0) + 1;
    });
    return { category, material };
  }, []);

  const activeHeading =
    filters.categories.length === 1
      ? CATEGORIES.find((c) => c.id === filters.categories[0])?.label + " — The Collection"
      : "All Pieces";

  const handleClear = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchParams({});
  };

  return (
    <div ref={sectionRef}>
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Page header */}
      <header className="bg-ivory-50 border-b border-hairline">
        <div className="container-x py-12 md:py-20">
          <Reveal>
            <p className="eyebrow">Shop</p>
            <h1 className="h-display mt-3 text-display-lg text-espresso-900 text-balance">
              {activeHeading}
            </h1>
            <p className="mt-4 text-espresso-500 text-[15px] max-w-xl">
              A small, considered edit — every piece made by hand in small
              batches, designed to be worn, gifted, and kept.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="container-x py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Sidebar — desktop */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              counts={counts}
              totalShown={sorted.length}
              onClear={handleClear}
            />
          </div>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-3 pb-6 mb-8 border-b border-hairline">
              <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-500">
                {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFilterDrawerOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 border border-hairline text-[12px] uppercase tracking-[0.22em] text-espresso-900 hover:border-espresso-500 transition-colors"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.4} />
                  Filter
                </button>
                <SortDropdown value={sort} onChange={setSort} />
              </div>
            </div>

            {/* Active filter chips */}
            {(filters.categories.length > 0 || filters.materials.length > 0 || filters.price !== "all") && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.categories.map((cId) => {
                  const c = CATEGORIES.find((c) => c.id === cId);
                  return (
                    <button
                      key={cId}
                      onClick={() =>
                        setFilters((f) => ({
                          ...f,
                          categories: f.categories.filter((c) => c !== cId),
                        }))
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ivory-50 border border-hairline text-[11px] uppercase tracking-[0.22em] text-espresso-700 hover:border-espresso-500 transition-colors"
                    >
                      {c?.label || cId} <X size={11} strokeWidth={1.5} />
                    </button>
                  );
                })}
                {filters.materials.map((mId) => (
                  <button
                    key={mId}
                    onClick={() =>
                      setFilters((f) => ({
                        ...f,
                        materials: f.materials.filter((m) => m !== mId),
                      }))
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ivory-50 border border-hairline text-[11px] uppercase tracking-[0.22em] text-espresso-700 hover:border-espresso-500 transition-colors"
                  >
                    {mId} <X size={11} strokeWidth={1.5} />
                  </button>
                ))}
                {filters.price !== "all" && (
                  <button
                    onClick={() => setFilters((f) => ({ ...f, price: "all" }))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ivory-50 border border-hairline text-[11px] uppercase tracking-[0.22em] text-espresso-700 hover:border-espresso-500 transition-colors"
                  >
                    {PRICE_BUCKETS.find((b) => b.id === filters.price)?.label} <X size={11} strokeWidth={1.5} />
                  </button>
                )}
              </div>
            )}

            {sorted.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso-900">No pieces match those filters yet.</p>
                <p className="mt-3 text-espresso-500 text-sm">Try widening your selection.</p>
                <button
                  type="button"
                  onClick={handleClear}
                  className="btn-outline mt-6"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-7 md:gap-y-14">
                {sorted.map((product, i) => (
                  <Reveal key={product.id} delay={Math.min(i, 8) * 60}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <div
            className="absolute inset-0 bg-espresso-900/40"
            onClick={() => setFilterDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory-100 shadow-drawer flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
              <p className="text-[12px] uppercase tracking-[0.22em] font-medium">Filter</p>
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(false)}
                className="p-2 text-espresso-700"
                aria-label="Close filters"
              >
                <X size={18} strokeWidth={1.4} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              <FilterSidebar
                filters={filters}
                onChange={setFilters}
                counts={counts}
                totalShown={sorted.length}
                onClear={handleClear}
              />
            </div>
            <div className="border-t border-hairline p-5">
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(false)}
                className="btn-primary w-full"
              >
                Show {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
