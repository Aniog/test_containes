import { useEffect, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const CATEGORIES = ["earrings", "necklaces", "huggies", "sets"];
const PRICE_RANGES = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={10} className={s <= Math.round(rating) ? "fill-velmora-gold text-velmora-gold" : "text-velmora-sand"} strokeWidth={1} />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-velmora-linen aspect-[3/4] block">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-velmora-gold text-velmora-obsidian font-manrope text-[10px] tracking-widest-sm uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velmora-obsidian/90 text-velmora-text-light font-manrope text-xs tracking-widest-md uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4 space-y-1.5">
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-cormorant text-base uppercase tracking-widest-sm text-velmora-obsidian font-medium hover:text-velmora-gold-muted transition-colors duration-200 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-manrope text-xs text-velmora-text-muted hidden">{product.shortDescription}</p>
        <p className="font-cormorant text-lg text-velmora-obsidian font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState("featured");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "");
  const [activePriceRange, setActivePriceRange] = useState(null);

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "");
  }, [searchParams]);

  const filtered = products
    .filter((p) => !activeCategory || p.category === activeCategory)
    .filter((p) => {
      if (!activePriceRange) return true;
      return p.price >= activePriceRange.min && p.price < activePriceRange.max;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sort]);

  const clearFilters = () => {
    setActiveCategory("");
    setActivePriceRange(null);
    setSearchParams({});
  };

  const hasFilters = activeCategory || activePriceRange;

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            {activeCategory ? activeCategory : "All Jewelry"}
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
            {activeCategory
              ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
              : "The Collection"}
          </h1>
          <p className="font-manrope text-sm text-velmora-text-muted mt-2">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-2 font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid border border-velmora-sand px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200 lg:hidden"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 font-manrope text-xs text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
            >
              <X size={12} strokeWidth={1.5} />
              Clear filters
            </button>
          )}

          <div className="ml-auto flex items-center gap-3">
            <span className="font-manrope text-xs text-velmora-text-muted hidden md:block">Sort by:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-sand font-manrope text-xs text-velmora-text-mid px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop always visible, mobile drawer */}
          <aside className={`${filterOpen ? "block" : "hidden"} lg:block w-full lg:w-56 flex-shrink-0`}>
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">
                  Category
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      onClick={() => { setActiveCategory(""); setSearchParams({}); }}
                      className={`font-manrope text-sm transition-colors duration-200 ${!activeCategory ? "text-velmora-gold" : "text-velmora-text-mid hover:text-velmora-obsidian"}`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => { setActiveCategory(cat); setSearchParams({ category: cat }); }}
                        className={`font-manrope text-sm capitalize transition-colors duration-200 ${activeCategory === cat ? "text-velmora-gold" : "text-velmora-text-mid hover:text-velmora-obsidian"}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">
                  Price
                </h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(activePriceRange?.label === range.label ? null : range)}
                        className={`font-manrope text-sm transition-colors duration-200 ${activePriceRange?.label === range.label ? "text-velmora-gold" : "text-velmora-text-mid hover:text-velmora-obsidian"}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">
                  Material
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <button className="font-manrope text-sm text-velmora-gold">
                      18K Gold Plated
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-text-mid font-light mb-4">
                  No pieces found
                </p>
                <button
                  onClick={clearFilters}
                  className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
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
