import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-ivory-dark aspect-[3/4] block mb-3">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        {product.tags.includes("bestseller") && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian text-[9px] uppercase tracking-widest font-sans font-bold px-2 py-0.5">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="flex items-center gap-2 text-ivory text-[10px] uppercase tracking-widest font-sans font-semibold hover:text-gold transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="flex items-center gap-0.5 mb-1">
        {[1,2,3,4,5].map(s => (
          <Star key={s} size={9} style={s <= Math.round(product.rating) ? { color: "#C9A96E", fill: "#C9A96E" } : { color: "#B5A898" }} strokeWidth={1} />
        ))}
        <span className="text-[10px] font-sans text-taupe-light ml-1">({product.reviewCount})</span>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors duration-300 leading-tight mb-1">
          {product.name}
        </h3>
      </Link>
      <p id={`shop-desc-${product.id}`} className="hidden text-xs text-taupe">{product.shortDesc}</p>
      <p className="text-sm font-sans font-medium text-obsidian">${product.price}</p>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category")
      ? searchParams.get("category").charAt(0).toUpperCase() + searchParams.get("category").slice(1)
      : "All"
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark py-12 md:py-16 px-4 md:px-8 text-center border-b border-taupe-light/20">
        <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
          The Collection
        </h1>
        <p className="text-sm font-sans text-taupe mt-3">
          {filtered.length} pieces
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-sans uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-obsidian text-ivory border-obsidian"
                    : "border-taupe-light/40 text-taupe hover:border-obsidian hover:text-obsidian"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-taupe hover:text-obsidian transition-colors border border-taupe-light/40 px-3 py-2 md:hidden"
            >
              <SlidersHorizontal size={12} />
              Filter
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-taupe-light/40 text-[10px] font-sans uppercase tracking-widest text-taupe px-4 py-2 pr-8 focus:outline-none focus:border-obsidian cursor-pointer hover:border-obsidian transition-colors"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-obsidian mb-4">
                Price Range
              </h3>
              <ul className="flex flex-col gap-2 mb-8">
                {PRICE_RANGES.map((range) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setActivePriceRange(range)}
                      className={`text-xs font-sans text-left w-full transition-colors duration-300 ${
                        activePriceRange.label === range.label
                          ? "text-obsidian font-semibold"
                          : "text-taupe hover:text-obsidian"
                      }`}
                    >
                      {activePriceRange.label === range.label && (
                        <span className="text-gold mr-1.5">✦</span>
                      )}
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="hairline mb-6" />

              <h3 className="text-xs font-sans uppercase tracking-widest font-semibold text-obsidian mb-4">
                Material
              </h3>
              <ul className="flex flex-col gap-2">
                {["18K Gold Plated", "Sterling Silver", "Rose Gold"].map((m) => (
                  <li key={m}>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-gold" />
                      <span className="text-xs font-sans text-taupe group-hover:text-obsidian transition-colors">
                        {m}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 bg-obsidian/40 md:hidden" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-sans uppercase tracking-widest font-semibold text-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={18} className="text-taupe" /></button>
                </div>
                <h4 className="text-xs font-sans uppercase tracking-widest text-taupe mb-3">Price Range</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                      className={`text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 border transition-all ${
                        activePriceRange.label === range.label
                          ? "bg-obsidian text-ivory border-obsidian"
                          : "border-taupe-light/40 text-taupe"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-taupe mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory("All"); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="text-xs font-sans uppercase tracking-widest text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
