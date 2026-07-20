import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { id: "all", label: "All" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "all";
  const activeSort = searchParams.get("sort") || "featured";
  const priceRange = searchParams.get("price") || "all";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Sort
    switch (activeSort) {
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
  }, [activeCategory, activeSort, priceRange]);

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-40", label: "Under $40" },
    { value: "40-60", label: "$40 - $60" },
    { value: "60-80", label: "$60 - $80" },
    { value: "80-200", label: "$80+" },
  ];

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-ebony font-sans mb-4">
          Category
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setFilter("category", cat.id === "all" ? "" : cat.id)}
                className={`text-sm font-sans transition-colors ${
                  activeCategory === cat.id
                    ? "text-velmora-ebony font-medium"
                    : "text-velmora-stone hover:text-velmora-ebony"
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-velmora-ebony font-sans mb-4">
          Price
        </h3>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setFilter("price", range.value)}
                className={`text-sm font-sans transition-colors ${
                  priceRange === range.value
                    ? "text-velmora-ebony font-medium"
                    : "text-velmora-stone hover:text-velmora-ebony"
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="section-title">Shop All</h1>
          <p className="section-subtitle">
            {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-velmora-sand/20">
              {/* Mobile filter button */}
              <button
                className="md:hidden flex items-center gap-2 text-xs tracking-wide uppercase font-sans text-velmora-ebony"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-velmora-stone font-sans hidden sm:inline">
                  Sort by:
                </label>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter("sort", e.target.value)}
                  className="text-xs tracking-wide uppercase font-sans text-velmora-ebony bg-transparent border border-velmora-sand/30 px-3 py-2 focus:outline-none focus:border-velmora-ebony"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-pewter font-sans">
                  No products match your filters.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline mt-4 text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-velmora-warm-white shadow-xl transition-transform duration-300 ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/20">
            <h2 className="text-xs tracking-widest uppercase font-sans text-velmora-ebony">
              Filters
            </h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-6">
            <FilterSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}