import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { products, categories, priceRanges } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const activeCategory = searchParams.get("category") || "all";
  const activePrice = searchParams.get("price") || "all";
  const activeMaterial = searchParams.get("material") || "all";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

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

    if (activeMaterial !== "all") {
      result = result.filter((p) =>
        p.material.toLowerCase().includes(activeMaterial.toLowerCase())
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const hasFilters = activeCategory !== "all" || activePrice !== "all" || activeMaterial !== "all";

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-overline uppercase text-charcoal-700 tracking-[0.1em] font-semibold mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter("category", "all")}
            className={`block w-full text-left text-body-sm py-1.5 px-3 rounded-lg transition-colors ${
              activeCategory === "all"
                ? "text-gold font-medium bg-gold/5"
                : "text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100"
            }`}
          >
            All Jewelry
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter("category", c.id)}
              className={`block w-full text-left text-body-sm py-1.5 px-3 rounded-lg transition-colors ${
                activeCategory === c.id
                  ? "text-gold font-medium bg-gold/5"
                  : "text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-overline uppercase text-charcoal-700 tracking-[0.1em] font-semibold mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter("price", "all")}
            className={`block w-full text-left text-body-sm py-1.5 px-3 rounded-lg transition-colors ${
              activePrice === "all"
                ? "text-gold font-medium bg-gold/5"
                : "text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100"
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((r) => (
            <button
              key={r.label}
              onClick={() => setFilter("price", r.label)}
              className={`block w-full text-left text-body-sm py-1.5 px-3 rounded-lg transition-colors ${
                activePrice === r.label
                  ? "text-gold font-medium bg-gold/5"
                  : "text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-overline uppercase text-charcoal-700 tracking-[0.1em] font-semibold mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {["all", "Gold", "Silver"].map((m) => (
            <button
              key={m}
              onClick={() => setFilter("material", m)}
              className={`block w-full text-left text-body-sm py-1.5 px-3 rounded-lg transition-colors ${
                activeMaterial === m
                  ? "text-gold font-medium bg-gold/5"
                  : "text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-100"
              }`}
            >
              {m === "all" ? "All Materials" : `18K ${m} Plated`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-cream-100/40 border-b border-cream-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">
          <h1
            className="text-display-md text-charcoal-800 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shop All Jewelry
          </h1>
          <p className="text-body-md text-charcoal-500 text-center mt-2">
            Discover our collection of premium demi-fine pieces
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-[220px] flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-cream-200 rounded-lg text-body-sm text-charcoal-700 hover:border-cream-300 transition-colors"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1.5 text-caption text-charcoal-500 hover:text-gold transition-colors"
                  >
                    <X size={12} />
                    Clear all
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-caption text-charcoal-400 hidden sm:inline">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-cream-50 border border-cream-200 rounded-lg px-4 py-2 pr-8 text-body-sm text-charcoal-700 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filter pills */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 text-gold text-caption rounded-full">
                    {categories.find((c) => c.id === activeCategory)?.name}
                    <button onClick={() => setFilter("category", "all")}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {activePrice !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 text-gold text-caption rounded-full">
                    {activePrice}
                    <button onClick={() => setFilter("price", "all")}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {activeMaterial !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 text-gold text-caption rounded-full">
                    18K {activeMaterial} Plated
                    <button onClick={() => setFilter("material", "all")}>
                      <X size={10} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p
                  className="text-display-sm text-charcoal-300 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  No pieces found
                </p>
                <p className="text-body-md text-charcoal-400 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 border-2 border-charcoal-800 text-charcoal-800 text-overline uppercase tracking-[0.14em] font-semibold rounded-lg hover:bg-charcoal-800 hover:text-cream-50 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ${
          mobileFiltersOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal-800/40 transition-opacity duration-400 ${
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 max-h-[80vh] bg-cream-50 rounded-t-2xl shadow-elevated transition-transform duration-400 overflow-y-auto ${
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-cream-200 sticky top-0 bg-cream-50">
            <h2 className="text-body-lg font-semibold text-charcoal-800">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 -mr-2 text-charcoal-500"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-5">
            <FilterPanel />
          </div>
          <div className="p-5 border-t border-cream-200 sticky bottom-0 bg-cream-50">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3.5 bg-charcoal-800 text-cream-50 text-overline uppercase tracking-[0.14em] font-semibold rounded-lg"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
