import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const containerRef = useRef(null);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPriceRange(null);
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    selectedPriceRange !== null;

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPriceRange) {
      result = result.filter(
        (p) =>
          p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max
      );
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
  }, [selectedCategories, selectedMaterials, selectedPriceRange, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  return (
    <div className="bg-cream min-h-screen pt-20" ref={containerRef}>
      {/* Page header */}
      <div className="border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            {selectedCategories.length === 1
              ? selectedCategories[0]
              : "All Jewelry"}
          </h1>
          <p className="font-inter text-sm text-taupe mt-2">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-inter text-xs uppercase tracking-[0.12em] text-taupe border border-stone px-4 py-2.5 hover:border-espresso transition-colors"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filter {hasFilters && `(${selectedCategories.length + selectedMaterials.length + (selectedPriceRange ? 1 : 0)})`}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-inter text-xs text-taupe bg-transparent border border-stone px-3 py-2.5 focus:outline-none focus:border-espresso"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              selectedMaterials={selectedMaterials}
              toggleMaterial={toggleMaterial}
              selectedPriceRange={selectedPriceRange}
              setPriceRange={setSelectedPriceRange}
              onClearAll={clearAll}
              hasFilters={hasFilters}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort bar */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-inter text-xs text-taupe">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
              </p>
              <div className="flex items-center gap-3">
                <span className="font-inter text-xs uppercase tracking-[0.1em] text-taupe">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-inter text-xs text-espresso bg-transparent border-b border-stone pb-0.5 focus:outline-none focus:border-espresso cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-[0.1em] text-espresso border border-stone px-3 py-1.5 hover:border-espresso transition-colors"
                  >
                    {cat}
                    <X size={9} strokeWidth={2} />
                  </button>
                ))}
                {selectedPriceRange && (
                  <button
                    onClick={() => setSelectedPriceRange(null)}
                    className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-[0.1em] text-espresso border border-stone px-3 py-1.5 hover:border-espresso transition-colors"
                  >
                    {selectedPriceRange.label}
                    <X size={9} strokeWidth={2} />
                  </button>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-espresso mb-3">
                  No pieces found
                </p>
                <p className="font-inter text-sm text-taupe mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="font-inter text-xs uppercase tracking-[0.15em] text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-obsidian/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cormorant text-2xl font-light text-espresso">
                Filter
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-taupe hover:text-espresso transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              selectedMaterials={selectedMaterials}
              toggleMaterial={toggleMaterial}
              selectedPriceRange={selectedPriceRange}
              setPriceRange={setSelectedPriceRange}
              onClearAll={clearAll}
              hasFilters={hasFilters}
            />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-6 bg-espresso text-cream font-inter text-xs uppercase tracking-[0.15em] py-4"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
