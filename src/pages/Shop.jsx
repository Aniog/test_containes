import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75+", min: 75, max: Infinity },
];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-ivory-dark aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] [shop-${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); addItem(product); }}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-sans text-[11px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>
      <div className="pt-4 pb-2">
        <p id={`shop-${product.titleId}`} className="font-sans text-[11px] tracking-widest uppercase text-obsidian font-medium">
          {product.name}
        </p>
        <p id={`shop-${product.descId}`} className="font-sans text-xs text-text-muted mt-1">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-serif text-lg text-obsidian font-light">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-sans text-[11px] text-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(
    initCategory === "all" ? "All" : initCategory.charAt(0).toUpperCase() + initCategory.slice(1)
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

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

  return (
    <div className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-parchment py-12 md:py-16 text-center">
        <p className="font-sans text-[11px] tracking-widest uppercase text-gold mb-3">
          Velmora Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
          All Jewelry
        </h1>
        <p className="font-sans text-sm text-text-secondary mt-3">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-gold bg-gold text-obsidian"
                    : "border-parchment text-text-secondary hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-text-secondary border border-parchment px-4 py-2 hover:border-gold hover:text-gold transition-all"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-[11px] tracking-wider uppercase text-text-muted hidden md:block">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs text-obsidian bg-ivory border border-parchment px-3 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filters panel */}
        {filterOpen && (
          <div className="md:hidden bg-ivory-dark border border-parchment p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest uppercase text-obsidian">
                Filters
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={14} strokeWidth={1.5} className="text-warm-gray" />
              </button>
            </div>
            <div className="mb-4">
              <p className="font-sans text-[11px] tracking-widest uppercase text-text-muted mb-3">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                    className={`font-sans text-xs px-4 py-1.5 border transition-all ${
                      activeCategory === cat
                        ? "border-gold bg-gold text-obsidian"
                        : "border-parchment text-text-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-[11px] tracking-widest uppercase text-text-muted mb-3">
                Price
              </p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                    className={`font-sans text-xs text-left px-3 py-1.5 border transition-all ${
                      activePriceRange.label === range.label
                        ? "border-gold text-gold"
                        : "border-transparent text-text-secondary"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <p className="font-sans text-[11px] tracking-widest uppercase text-text-muted mb-4">
                  Category
                </p>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-sm transition-colors duration-200 ${
                          activeCategory === cat
                            ? "text-gold font-medium"
                            : "text-text-secondary hover:text-gold"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-parchment pt-6">
                <p className="font-sans text-[11px] tracking-widest uppercase text-text-muted mb-4">
                  Price
                </p>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-sans text-sm transition-colors duration-200 ${
                          activePriceRange.label === range.label
                            ? "text-gold font-medium"
                            : "text-text-secondary hover:text-gold"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-text-secondary font-light">
                  No pieces found
                </p>
                <p className="font-sans text-sm text-text-muted mt-2">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
