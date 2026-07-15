import React, { useState, useMemo } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    material: [],
  });

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const current = prev[group];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], price: [], material: [] });
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }
    if (filters.material.length > 0) {
      result = result.filter((p) => filters.material.includes(p.material));
    }
    if (filters.price.length > 0) {
      result = result.filter((p) => {
        return filters.price.some((range) => {
          if (range === "under40") return p.price < 40;
          if (range === "40to60") return p.price >= 40 && p.price <= 60;
          if (range === "60to80") return p.price > 60 && p.price <= 80;
          if (range === "over80") return p.price > 80;
          return false;
        });
      });
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    // featured = default order

    return result;
  }, [filters, sortBy]);

  const filterGroups = [
    {
      title: "Category",
      key: "category",
      options: [
        { value: "earrings", label: "Earrings" },
        { value: "necklaces", label: "Necklaces" },
        { value: "huggies", label: "Huggies" },
        { value: "sets", label: "Gift Sets" },
      ],
    },
    {
      title: "Price",
      key: "price",
      options: [
        { value: "under40", label: "Under $40" },
        { value: "40to60", label: "$40 – $60" },
        { value: "60to80", label: "$60 – $80" },
        { value: "over80", label: "Over $80" },
      ],
    },
    {
      title: "Material",
      key: "material",
      options: [
        { value: "gold", label: "Gold Plated" },
        { value: "silver", label: "Silver Tone" },
      ],
    },
  ];

  const hasActiveFilters =
    filters.category.length > 0 ||
    filters.price.length > 0 ||
    filters.material.length > 0;

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-8 lg:pt-32 lg:pb-12 border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl lg:text-5xl text-charcoal mb-2">
            Shop All
          </h1>
          <p className="font-sans text-sm text-warmgray">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""} curated
            for you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="flex items-start gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal">
                Filters
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[11px] text-warmgray hover:text-gold underline"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="space-y-6">
              {filterGroups.map((group) => (
                <div key={group.key}>
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-3">
                    {group.title}
                  </h4>
                  <div className="space-y-2">
                    {group.options.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                            filters[group.key].includes(opt.value)
                              ? "border-charcoal bg-charcoal"
                              : "border-divider group-hover:border-charcoal"
                          }`}
                        >
                          {filters[group.key].includes(opt.value) && (
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <path
                                d="M1 5L4 8L9 2"
                                stroke="#FAF7F2"
                                strokeWidth="1.5"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={filters[group.key].includes(opt.value)}
                          onChange={() => toggleFilter(group.key, opt.value)}
                        />
                        <span className="font-sans text-sm text-charcoal group-hover:text-gold transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-charcoal border border-divider px-4 py-2.5"
              >
                <SlidersHorizontal size={14} />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-gold rounded-full" />
                )}
              </button>

              {/* Sort */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-divider font-sans text-[11px] uppercase tracking-widest text-charcoal pl-4 pr-10 py-2.5 focus:outline-none focus:border-charcoal cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-warmgray"
                />
              </div>
            </div>

            {/* Active filter chips (desktop) */}
            {hasActiveFilters && (
              <div className="hidden lg:flex flex-wrap items-center gap-2 mb-6">
                {filters.category.map((v) => (
                  <button
                    key={v}
                    onClick={() => toggleFilter("category", v)}
                    className="inline-flex items-center gap-1.5 bg-stonebg text-charcoal text-[11px] font-sans uppercase tracking-wider px-3 py-1.5 hover:bg-divider transition-colors"
                  >
                    {v}
                    <X size={12} />
                  </button>
                ))}
                {filters.price.map((v) => (
                  <button
                    key={v}
                    onClick={() => toggleFilter("price", v)}
                    className="inline-flex items-center gap-1.5 bg-stonebg text-charcoal text-[11px] font-sans uppercase tracking-wider px-3 py-1.5 hover:bg-divider transition-colors"
                  >
                    {v}
                    <X size={12} />
                  </button>
                ))}
                {filters.material.map((v) => (
                  <button
                    key={v}
                    onClick={() => toggleFilter("material", v)}
                    className="inline-flex items-center gap-1.5 bg-stonebg text-charcoal text-[11px] font-sans uppercase tracking-wider px-3 py-1.5 hover:bg-divider transition-colors"
                  >
                    {v}
                    <X size={12} />
                  </button>
                ))}
              </div>
            )}

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-warmgray hover:text-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-cream z-[70] shadow-2xl overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-divider">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-5 space-y-8">
              {filterGroups.map((group) => (
                <div key={group.key}>
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-3">
                    {group.title}
                  </h4>
                  <div className="space-y-3">
                    {group.options.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <div
                          className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                            filters[group.key].includes(opt.value)
                              ? "border-charcoal bg-charcoal"
                              : "border-divider"
                          }`}
                        >
                          {filters[group.key].includes(opt.value) && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <path
                                d="M1 5L4 8L9 2"
                                stroke="#FAF7F2"
                                strokeWidth="1.5"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={filters[group.key].includes(opt.value)}
                          onChange={() => toggleFilter(group.key, opt.value)}
                        />
                        <span className="font-sans text-sm text-charcoal">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 border-t border-divider space-y-3">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full border border-charcoal text-charcoal font-sans text-xs uppercase tracking-widest py-3"
              >
                Clear All
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-charcoal text-cream font-sans text-xs uppercase tracking-widest py-3"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
