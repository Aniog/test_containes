import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SORTS = {
  featured: "Featured",
  "price-low": "Price: Low to High",
  "price-high": "Price: High to Low",
  rating: "Top Rated",
};

const PRICE_RANGES = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75+", min: 75, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "all";
  const activeSort = searchParams.get("sort") || "featured";
  const activePrice = searchParams.get("price") || "";

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activeSort, activePrice]);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = PRICE_RANGES.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (activeSort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeSort, activePrice]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const filterCount =
    (activeCategory !== "all" ? 1 : 0) + (activePrice ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-xs uppercase tracking-widest text-velmora-fg">
          Category
        </h3>
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => updateParam("category", "")}
            className={cn(
              "block text-sm transition-colors",
              activeCategory === "all"
                ? "font-medium text-velmora-accent"
                : "text-velmora-muted hover:text-velmora-fg"
            )}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => updateParam("category", cat.id)}
              className={cn(
                "block text-sm capitalize transition-colors",
                activeCategory === cat.id
                  ? "font-medium text-velmora-accent"
                  : "text-velmora-muted hover:text-velmora-fg"
              )}
            >
              {cat.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => updateParam("category", "sets")}
            className={cn(
              "block text-sm capitalize transition-colors",
              activeCategory === "sets"
                ? "font-medium text-velmora-accent"
                : "text-velmora-muted hover:text-velmora-fg"
            )}
          >
            Gift Sets
          </button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xs uppercase tracking-widest text-velmora-fg">
          Price
        </h3>
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => updateParam("price", "")}
            className={cn(
              "block text-sm transition-colors",
              !activePrice
                ? "font-medium text-velmora-accent"
                : "text-velmora-muted hover:text-velmora-fg"
            )}
          >
            All
          </button>
          {PRICE_RANGES.map((range) => (
            <button
              key={range.label}
              type="button"
              onClick={() => updateParam("price", range.label)}
              className={cn(
                "block text-sm transition-colors",
                activePrice === range.label
                  ? "font-medium text-velmora-accent"
                  : "text-velmora-muted hover:text-velmora-fg"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xs uppercase tracking-widest text-velmora-fg">
          Material
        </h3>
        <p className="text-sm text-velmora-muted">
          18K gold-plated, hypoallergenic brass
        </p>
      </div>

      {filterCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-fg"
        >
          <X className="h-3 w-3" />
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef}>
      <div className="bg-velmora-cream py-16 md:py-20">
        <div className="container-velmora text-center">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
            The Collection
          </p>
          <h1 className="font-serif text-4xl tracking-wide md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <section className="container-velmora py-10 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar — desktop */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterContent />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-velmora-fg/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-velmora-cream p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-serif text-xl tracking-wide">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-velmora-muted hover:text-velmora-fg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-fg lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters {filterCount > 0 && `(${filterCount})`}
              </button>
              <p className="text-sm text-velmora-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <label className="text-xs uppercase tracking-widest text-velmora-muted">
                  Sort
                </label>
                <select
                  value={activeSort}
                  onChange={(e) => updateParam("sort", e.target.value)}
                  className="border border-velmora-border bg-white px-3 py-2 text-sm text-velmora-fg focus:border-velmora-accent focus:outline-none"
                >
                  {Object.entries(SORTS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-fg">
                  No pieces match your filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
