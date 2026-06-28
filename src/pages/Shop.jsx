import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const categories = ["All", "Earrings", "Necklaces", "Huggies"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $100", min: 60, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(
    initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)
  );
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = products
    .filter((p) => {
      const catMatch =
        activeCategory === "All" ||
        p.category === activeCategory.toLowerCase();
      const priceMatch =
        p.price >= activePriceRange.min && p.price <= activePriceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const clearFilters = () => {
    setActiveCategory("All");
    setActivePriceRange(priceRanges[0]);
    setSortBy("featured");
  };

  const hasActiveFilters =
    activeCategory !== "All" || activePriceRange.label !== "All Prices";

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-gold-pale border-b border-border-warm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-dark">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-stone-warm mt-3">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-dark border border-border-warm px-4 py-2.5 hover:border-dark transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            )}
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-xs uppercase tracking-widest px-4 py-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-dark text-white"
                    : "border border-border-warm text-dark hover:border-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-dark border border-border-warm px-4 py-2.5 hover:border-dark transition-colors"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${sortOpen ? "rotate-180" : ""}`}
              />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-border-warm shadow-md z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-inter text-xs hover:bg-gold-pale transition-colors ${
                      sortBy === opt.value ? "text-gold" : "text-dark"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest text-dark mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-inter text-sm transition-colors ${
                          activeCategory === cat
                            ? "text-gold font-medium"
                            : "text-stone-warm hover:text-dark"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest text-dark mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-inter text-sm transition-colors ${
                          activePriceRange.label === range.label
                            ? "text-gold font-medium"
                            : "text-stone-warm hover:text-dark"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest text-dark mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {["18K Gold Plated", "Sterling Silver"].map((mat) => (
                    <li key={mat}>
                      <button className="font-inter text-sm text-stone-warm hover:text-dark transition-colors">
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 font-inter text-xs text-stone-warm hover:text-dark transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-white overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-5 border-b border-border-warm">
                <span className="font-inter text-xs uppercase tracking-widest text-dark">
                  Filters
                </span>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-dark" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-8">
                <div>
                  <h3 className="font-inter text-xs uppercase tracking-widest text-dark mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`font-inter text-xs uppercase tracking-widest px-4 py-2 transition-all ${
                          activeCategory === cat
                            ? "bg-dark text-white"
                            : "border border-border-warm text-dark"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter text-xs uppercase tracking-widest text-dark mb-4">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setActivePriceRange(range)}
                        className={`font-inter text-xs uppercase tracking-widest px-4 py-2 transition-all ${
                          activePriceRange.label === range.label
                            ? "bg-dark text-white"
                            : "border border-border-warm text-dark"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full bg-dark text-white font-inter text-xs uppercase tracking-widest py-4"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <p className="font-cormorant text-3xl text-dark font-light">
                  No pieces found
                </p>
                <p className="font-inter text-sm text-stone-warm">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5 mt-2"
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
    </div>
  );
}
