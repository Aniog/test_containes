import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75 – $100", min: 75, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category")
      ? searchParams.get("category").charAt(0).toUpperCase() + searchParams.get("category").slice(1)
      : "All"
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  // Filter + sort products
  const filtered = products
    .filter((p) => {
      const catMatch =
        activeCategory === "All" ||
        p.category === activeCategory.toLowerCase();
      const priceRange = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
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

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 border-b border-champagne">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
          Velmora
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-velvet tracking-wide">
          {activeCategory === "All" ? "All Jewelry" : activeCategory}
        </h1>
        <p className="font-sans text-sm text-driftwood mt-2">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Filter sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-sm transition-colors duration-300 ${
                          activeCategory === cat
                            ? "text-gold"
                            : "text-driftwood hover:text-velvet"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="hairline" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-sans text-sm transition-colors duration-300 ${
                          activePriceRange === i
                            ? "text-gold"
                            : "text-driftwood hover:text-velvet"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="hairline" />

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {["18K Gold Plated", "Silver Tone"].map((mat) => (
                    <li key={mat}>
                      <button className="font-sans text-sm text-driftwood hover:text-velvet transition-colors duration-300">
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velvet border border-champagne px-4 py-2.5 hover:border-gold transition-colors duration-300"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-xs text-driftwood hidden sm:inline">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-champagne font-sans text-xs text-velvet px-4 py-2.5 pr-8 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-driftwood pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-driftwood mb-4">No pieces found</p>
                  <button
                    onClick={() => { setActiveCategory("All"); setActivePriceRange(0); }}
                    className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="cart-overlay" onClick={() => setFilterOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-72 bg-ivory z-50 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-champagne">
              <span className="font-sans text-xs tracking-widest uppercase text-velvet">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-driftwood hover:text-velvet">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">Category</h3>
                <ul className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                        className={`font-sans text-sm ${activeCategory === cat ? "text-gold" : "text-driftwood"}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="hairline" />
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">Price</h3>
                <ul className="space-y-3">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                        className={`font-sans text-sm ${activePriceRange === i ? "text-gold" : "text-driftwood"}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
