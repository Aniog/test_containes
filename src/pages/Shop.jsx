import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { PRODUCTS } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PRICE_BUCKETS = {
  all: [0, Infinity],
  under50: [0, 50],
  "50to75": [50, 75],
  "75plus": [75, Infinity],
};

const SORT_FNS = {
  featured: (a, b) => Number(b.isBestseller) - Number(a.isBestseller),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
  name: (a, b) => a.name.localeCompare(b.name),
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionParam = searchParams.get("collection");
  const containerRef = useRef(null);

  const [filters, setFilters] = useState({
    categories: collectionParam ? [collectionParam] : [],
    materials: [],
    price: "all",
  });
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [collectionParam, sort, filters]);

  // Sync URL -> filter state on first load and when collection param changes.
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      categories: collectionParam ? [collectionParam] : prev.categories,
    }));
  }, [collectionParam]);

  const filtered = useMemo(() => {
    const [min, max] = PRICE_BUCKETS[filters.price] || [0, Infinity];
    return PRODUCTS.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category))
        return false;
      if (filters.materials.length && !filters.materials.includes(p.material))
        return false;
      if (p.price < min || p.price > max) return false;
      return true;
    }).sort(SORT_FNS[sort] || SORT_FNS.featured);
  }, [filters, sort]);

  const headline =
    filters.categories.length === 1
      ? filters.categories[0][0].toUpperCase() + filters.categories[0].slice(1)
      : "The Collection";

  // Clear a single category pill (e.g. when arriving with a query param).
  const removeCategory = (id) =>
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== id),
    }));

  return (
    <div ref={containerRef} className="bg-bone">
      {/* Editorial header */}
      <div className="pt-24 sm:pt-28 lg:pt-32">
        <div className="container-page pb-10 sm:pb-12 border-b border-line">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.02] text-ink">
            {headline}
          </h1>
          <p className="mt-4 max-w-prose text-ink/70 text-sm sm:text-base">
            Demi-fine 18K gold-plated jewelry, designed for the everyday.
            <span className="text-ink/50"> Free worldwide shipping over $75.</span>
          </p>
        </div>
      </div>

      <div className="container-page py-10 sm:py-12">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink hover:text-gold-deep transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.25} />
              Filter
            </button>
            {filters.categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => removeCategory(c)}
                className="inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink hover:border-ink transition-colors"
              >
                {c}
                <X className="w-3 h-3" strokeWidth={1.5} />
              </button>
            ))}
          </div>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              resultCount={filtered.length}
            />
          </div>

          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl font-light text-ink">
                  Nothing matches just yet.
                </p>
                <p className="mt-3 text-sm text-taupe">
                  Try removing a filter or browse the full collection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilters({ categories: [], materials: [], price: "all" });
                    setSearchParams({});
                  }}
                  className="btn-outline mt-7"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!filtersOpen}
      >
        <div
          className="absolute inset-0 bg-ink/50"
          onClick={() => setFiltersOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[88%] max-w-sm bg-bone text-ink shadow-card flex flex-col transition-transform duration-500 ease-velvet ${
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-line">
            <span className="product-name text-ink">Refine</span>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              resultCount={filtered.length}
              onClose={() => setFiltersOpen(false)}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
