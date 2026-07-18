import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";

const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 — $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75, max: Infinity },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
  { id: "newest", label: "Newest" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
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
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange("");
    setSortBy("featured");
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPriceRange;

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen animate-fade-in">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-light text-text-primary mb-3">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.label || "Shop"
            : "All Jewelry"}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-3" />
        <p className="text-sm text-text-secondary">
          {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"} available
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-light">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedCategory("");
                setSearchParams({});
              }}
              className={cn(
                "px-4 py-1.5 text-xs uppercase tracking-widest-xl border transition-all duration-200",
                !selectedCategory
                  ? "border-gold bg-gold text-white"
                  : "border-border text-text-secondary hover:border-gold hover:text-gold"
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchParams({ category: cat.id });
                }}
                className={cn(
                  "px-4 py-1.5 text-xs uppercase tracking-widest-xl border transition-all duration-200",
                  selectedCategory === cat.id
                    ? "border-gold bg-gold text-white"
                    : "border-border text-text-secondary hover:border-gold hover:text-gold"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-text-secondary border border-border px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest-xl font-medium text-text-primary mb-4">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => {
                        setSelectedCategory(cat.id);
                        setSearchParams({ category: cat.id });
                      }}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "w-4 h-4 border rounded-full flex items-center justify-center transition-all",
                        selectedCategory === cat.id ? "border-gold" : "border-border group-hover:border-text-tertiary"
                      )}
                    >
                      {selectedCategory === cat.id && (
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </div>
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {cat.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest-xl font-medium text-text-primary mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.id} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === range.id}
                      onChange={() => setSelectedPriceRange(range.id)}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "w-4 h-4 border rounded-full flex items-center justify-center transition-all",
                        selectedPriceRange === range.id ? "border-gold" : "border-border group-hover:border-text-tertiary"
                      )}
                    >
                      {selectedPriceRange === range.id && (
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </div>
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material info */}
            <div>
              <h3 className="text-xs uppercase tracking-widest-xl font-medium text-text-primary mb-4">
                Material
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                All Velmora pieces are crafted from 18K gold-plated surgical steel — hypoallergenic and nickel-free.
              </p>
            </div>
          </aside>

          {/* Mobile filter panel */}
          <div
            className={cn(
              "md:hidden fixed inset-0 z-40 bg-surface transition-transform duration-300",
              filterOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-border">
              <h2 className="font-serif text-lg text-text-primary">Filters</h2>
              <button onClick={() => setFilterOpen(false)} className="p-1 text-text-secondary">
                <X size={20} />
              </button>
            </div>
            <div className="px-4 py-6 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest-xl font-medium text-text-primary mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSearchParams({ category: cat.id });
                        setFilterOpen(false);
                      }}
                      className={cn(
                        "block text-sm transition-colors",
                        selectedCategory === cat.id ? "text-gold font-medium" : "text-text-secondary"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest-xl font-medium text-text-primary mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => {
                        setSelectedPriceRange(range.id);
                        setFilterOpen(false);
                      }}
                      className={cn(
                        "block text-sm transition-colors",
                        selectedPriceRange === range.id ? "text-gold font-medium" : "text-text-secondary"
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Active filters */}
            {hasFilters && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs text-text-tertiary">Active:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-muted text-gold text-xs">
                    {categories.find((c) => c.id === selectedCategory)?.label}
                    <button onClick={() => { setSelectedCategory(""); setSearchParams({}); }}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-muted text-gold text-xs">
                    {priceRanges.find((r) => r.id === selectedPriceRange)?.label}
                    <button onClick={() => setSelectedPriceRange("")}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-text-tertiary hover:text-gold transition-colors underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-primary mb-2">No pieces found</p>
                <p className="text-sm text-text-secondary mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold uppercase tracking-widest-xl hover:text-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
