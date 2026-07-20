import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Star, SlidersHorizontal, X, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categoryOptions = [
  { value: "", label: "All" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceRanges = [
  { value: "", label: "Any Price" },
  { value: "0-50", label: "Under $50" },
  { value: "50-75", label: "$50 – $75" },
  { value: "75-120", label: "$75 – $120" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? "text-gold fill-gold" : "text-taupe-light"}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory-dark aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[10px] uppercase tracking-widest px-2 py-1">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
          <span className="font-sans text-[10px] uppercase tracking-widest text-obsidian">Quick Add</span>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="bg-obsidian text-ivory p-2 hover:bg-gold transition-colors border-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
          </button>
        </div>
      </Link>
      <div className="pt-3">
        <p id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest2 text-obsidian leading-tight">
          {product.name}
        </p>
        <p id={`shop-desc-${product.id}`} className="font-sans text-xs text-taupe mt-0.5">{product.subtitle}</p>
        <div className="flex items-center justify-between mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-sm font-semibold text-obsidian">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get("category") || "";
  const priceParam = searchParams.get("price") || "";
  const sortParam = searchParams.get("sort") || "featured";

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, priceParam, sortParam]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = products
    .filter((p) => {
      if (categoryParam && p.category !== categoryParam) return false;
      if (priceParam) {
        const [min, max] = priceParam.split("-").map(Number);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortParam === "price-asc") return a.price - b.price;
      if (sortParam === "price-desc") return b.price - a.price;
      if (sortParam === "rating") return b.rating - a.rating;
      return 0;
    });

  const FilterPanel = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium mb-3">
          Category
        </p>
        <ul className="flex flex-col gap-2">
          {categoryOptions.map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter("category", opt.value)}
                className={`font-sans text-sm transition-colors bg-transparent border-0 p-0 text-left ${
                  categoryParam === opt.value
                    ? "text-gold font-medium"
                    : "text-text-secondary hover:text-gold"
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Price */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium mb-3">
          Price
        </p>
        <ul className="flex flex-col gap-2">
          {priceRanges.map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => setFilter("price", opt.value)}
                className={`font-sans text-sm transition-colors bg-transparent border-0 p-0 text-left ${
                  priceParam === opt.value
                    ? "text-gold font-medium"
                    : "text-text-secondary hover:text-gold"
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Material */}
      <div>
        <p className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium mb-3">
          Material
        </p>
        <ul className="flex flex-col gap-2">
          {["18K Gold Plated", "Sterling Silver"].map((m) => (
            <li key={m}>
              <button className="font-sans text-sm text-text-secondary hover:text-gold transition-colors bg-transparent border-0 p-0 text-left">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-ivory-dark py-10 md:py-14 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
          {categoryParam
            ? categoryOptions.find((c) => c.value === categoryParam)?.label
            : "All Jewelry"}
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-obsidian font-light">
          {categoryParam
            ? categoryOptions.find((c) => c.value === categoryParam)?.label
            : "The Collection"}
        </h1>
        <p className="font-sans text-sm text-taupe mt-3">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-obsidian bg-transparent border border-ivory-dark px-4 py-2.5 hover:border-obsidian transition-colors"
          >
            <SlidersHorizontal size={12} />
            Filters
          </button>
          <div className="hidden md:block" />
          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-taupe hidden md:block">
              Sort by
            </span>
            <select
              value={sortParam}
              onChange={(e) => setFilter("sort", e.target.value)}
              className="font-sans text-xs text-obsidian bg-transparent border border-ivory-dark px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian font-light mb-3">
                  No pieces found
                </p>
                <p className="font-sans text-sm text-taupe mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-sans text-xs uppercase tracking-widest border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-ivory transition-colors bg-transparent"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <ShopProductCard key={p.id} product={p} />
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
            className="fixed inset-0 z-[70] bg-obsidian/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="fixed top-0 left-0 h-full w-72 z-[80] bg-ivory flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
              <span className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium">
                Filters
              </span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-obsidian bg-transparent border-0 p-1"
                aria-label="Close filters"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="px-6 py-5 border-t border-ivory-dark">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-obsidian text-ivory font-sans text-xs uppercase tracking-widest py-4 border-0"
              >
                View {filtered.length} Results
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
