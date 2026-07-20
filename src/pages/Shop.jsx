import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, X, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

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

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-champagne-pale overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
          />
          <img
            data-strk-img-id={`shop-${product.img2Id}`}
            data-strk-img={`[shop-${product.id}-title] [shop-${product.id}-desc]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />

          {product.tags.includes("bestseller") && (
            <span className="absolute top-3 left-3 bg-champagne text-obsidian font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
              Bestseller
            </span>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              addItem({ id: product.id, name: product.name, price: product.price, variant: product.variants[0] });
            }}
            className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        <p id={`shop-${product.id}-title`} className="product-name text-xs text-obsidian mb-1">{product.name}</p>
        <p id={`shop-${product.id}-desc`} className="font-sans text-xs text-stone hidden">{product.shortDesc}</p>
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? "fill-champagne text-champagne" : "text-stone-light"} strokeWidth={1} />
          ))}
          <span className="font-sans text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-semibold text-obsidian">${product.price}</p>
      </Link>
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
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const priceRange = PRICE_RANGES[activePriceRange];

  let filtered = products.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory.toLowerCase();
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    return catMatch && priceMatch;
  });

  if (sortBy === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-ivory-dark py-12 md:py-16 px-4 md:px-8 text-center border-b border-ivory-dark">
        <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-3">
          Velmora Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
          {activeCategory === "All" ? "All Jewelry" : activeCategory}
        </h1>
        <p className="font-sans text-stone text-sm mt-3">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchParams(cat === "All" ? {} : { category: cat.toLowerCase() });
                }}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-champagne bg-champagne text-obsidian"
                    : "border-ivory-dark text-stone hover:border-champagne hover:text-obsidian"
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
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone border border-ivory-dark px-3 py-2 hover:border-champagne transition-colors"
            >
              <SlidersHorizontal size={13} />
              Filter
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs tracking-widest uppercase text-stone border border-ivory-dark px-3 py-2 bg-ivory focus:outline-none focus:border-champagne transition-colors cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`${
              filterOpen ? "block" : "hidden"
            } md:block w-full md:w-52 flex-shrink-0`}
          >
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-sans text-xs text-obsidian tracking-widest uppercase font-semibold mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                        activePriceRange === i
                          ? "text-champagne font-semibold"
                          : "text-stone hover:text-obsidian"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xs text-obsidian tracking-widest uppercase font-semibold mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {["18K Gold Plated", "Sterling Silver", "Rose Gold"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-champagne" />
                      <span className="font-sans text-sm text-stone group-hover:text-obsidian transition-colors">
                        {m}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory("All"); setActivePriceRange(0); }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
