import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const priceRanges = [
  { label: "Under $50", min: 0, max: 49 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75+", min: 76, max: 999 },
];

const materials = ["18K Gold Plated"];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Rating", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice];
      result = result.filter(
        (p) => p.price >= range.min && p.price <= range.max
      );
    }

    // Material filter
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Sort
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedPrice(null);
    setSelectedMaterial(null);
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== "all" || selectedPrice !== null || selectedMaterial !== null;

  return (
    <main className="bg-cream min-h-screen pt-20 sm:pt-24">
      {/* Page header */}
      <div className="bg-ivory border-b border-sand/50 py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-mega-wide uppercase text-gold mb-3 font-sans font-medium">
            The Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-3">
            Shop All
          </h1>
          <p className="text-sm text-warm-gray">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-medium text-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase font-medium text-charcoal pr-8 pl-4 py-2 border border-sand cursor-pointer focus:outline-none focus:border-gold transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters (desktop) */}
          <aside
            className={`${
              filterOpen ? "block" : "hidden"
            } lg:block w-full lg:w-[220px] flex-shrink-0`}
          >
            {/* Mobile filter overlay */}
            <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-cream p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={20} className="text-warm-gray" />
                  </button>
                </div>
                <FilterContent
                  selectedCategory={selectedCategory}
                  setSelectedCategory={handleCategoryChange}
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
                  selectedMaterial={selectedMaterial}
                  setSelectedMaterial={setSelectedMaterial}
                  clearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                />
              </div>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:block sticky top-28">
              <FilterContent
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                selectedMaterial={selectedMaterial}
                setSelectedMaterial={setSelectedMaterial}
                clearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">
                  No products found
                </p>
                <p className="text-sm text-warm-gray mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-gold text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function FilterContent({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  selectedMaterial,
  setSelectedMaterial,
  clearFilters,
  hasActiveFilters,
}) {
  return (
    <div className="space-y-8">
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-gold hover:text-gold-dark transition-colors underline"
        >
          Clear all filters
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "all"}
              onChange={() => setSelectedCategory("all")}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                selectedCategory === "all"
                  ? "border-gold"
                  : "border-sand group-hover:border-warm-gray"
              }`}
            >
              {selectedCategory === "all" && (
                <span className="w-2 h-2 bg-gold rounded-full" />
              )}
            </span>
            <span className="text-sm text-charcoal">All</span>
          </label>
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.slug}
                onChange={() => setSelectedCategory(cat.slug)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                  selectedCategory === cat.slug
                    ? "border-gold"
                    : "border-sand group-hover:border-warm-gray"
                }`}
              >
                {selectedCategory === cat.slug && (
                  <span className="w-2 h-2 bg-gold rounded-full" />
                )}
              </span>
              <span className="text-sm text-charcoal">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-2.5">
          {priceRanges.map((range, idx) => (
            <label
              key={idx}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPrice === idx}
                onChange={() =>
                  setSelectedPrice(selectedPrice === idx ? null : idx)
                }
                className="sr-only"
              />
              <span
                className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                  selectedPrice === idx
                    ? "border-gold"
                    : "border-sand group-hover:border-warm-gray"
                }`}
              >
                {selectedPrice === idx && (
                  <span className="w-2 h-2 bg-gold rounded-full" />
                )}
              </span>
              <span className="text-sm text-charcoal">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() =>
                  setSelectedMaterial(selectedMaterial === mat ? null : mat)
                }
                className="sr-only"
              />
              <span
                className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                  selectedMaterial === mat
                    ? "border-gold"
                    : "border-sand group-hover:border-warm-gray"
                }`}
              >
                {selectedMaterial === mat && (
                  <span className="w-2 h-2 bg-gold rounded-full" />
                )}
              </span>
              <span className="text-sm text-charcoal">{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
