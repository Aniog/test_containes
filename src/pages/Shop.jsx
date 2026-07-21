import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories, priceRanges } from "@/data/products";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState("featured");
  const gridRef = useRef(null);

  const activeCategory = searchParams.get("category") || "all";
  const activePrice = searchParams.get("price") || "all";

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activePrice !== "all") {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, activePrice, sort]);

  useEffect(() => {
    if (!gridRef.current) return;
    const id = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current);
    });
    return () => cancelAnimationFrame(id);
  }, [filtered]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "all") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSort("featured");
  };

  const activeFiltersCount =
    (activeCategory !== "all" ? 1 : 0) + (activePrice !== "all" ? 1 : 0);

  return (
    <main className="pt-20 md:pt-24 bg-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-6xl mb-3">The Collection</h1>
          <p className="font-sans text-warm-gray text-sm md:text-base max-w-xl mx-auto">
            Discover demi-fine essentials designed to be layered, loved, and lived in.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-sans text-xs uppercase tracking-widest text-warm-gray">Filters</h2>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-bronze hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  <FilterButton
                    label="All"
                    active={activeCategory === "all"}
                    onClick={() => updateFilter("category", "all")}
                  />
                  {categories.map((cat) => (
                    <FilterButton
                      key={cat.id}
                      label={cat.label}
                      active={activeCategory === cat.slug}
                      onClick={() => updateFilter("category", cat.slug)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-3">
                  <FilterButton
                    label="All"
                    active={activePrice === "all"}
                    onClick={() => updateFilter("price", "all")}
                  />
                  {priceRanges.map((range) => (
                    <FilterButton
                      key={range.label}
                      label={range.label}
                      active={activePrice === range.label}
                      onClick={() => updateFilter("price", range.label)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal"
              >
                <SlidersHorizontal size={16} />
                Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>
              <p className="hidden lg:block text-sm text-warm-gray">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-soft-taupe pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-bronze"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal mb-2">No pieces found</p>
                <p className="text-warm-gray text-sm mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="bg-bronze text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-bronze-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={gridRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10"
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-charcoal/40 transition-opacity lg:hidden",
          mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 z-[70] w-[85%] max-w-sm bg-parchment shadow-2xl transition-transform lg:hidden",
          mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-soft-taupe">
          <h2 className="font-serif text-2xl tracking-wide">Filters</h2>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X size={22} />
          </button>
        </div>
        <div className="p-5 overflow-y-auto h-[calc(100%-80px)]">
          <div className="mb-8">
            <h3 className="font-serif text-lg mb-4">Category</h3>
            <div className="space-y-3">
              <FilterButton
                label="All"
                active={activeCategory === "all"}
                onClick={() => updateFilter("category", "all")}
              />
              {categories.map((cat) => (
                <FilterButton
                  key={cat.id}
                  label={cat.label}
                  active={activeCategory === cat.slug}
                  onClick={() => updateFilter("category", cat.slug)}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Price</h3>
            <div className="space-y-3">
              <FilterButton
                label="All"
                active={activePrice === "all"}
                onClick={() => updateFilter("price", "all")}
              />
              {priceRanges.map((range) => (
                <FilterButton
                  key={range.label}
                  label={range.label}
                  active={activePrice === range.label}
                  onClick={() => updateFilter("price", range.label)}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "block w-full text-left font-sans text-sm py-2 border-b transition-colors",
        active
          ? "text-bronze border-bronze"
          : "text-charcoal border-transparent hover:text-bronze hover:border-soft-taupe"
      )}
    >
      {label}
    </button>
  );
}
