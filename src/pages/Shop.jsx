import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/home/Footer";

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

const CATEGORIES = [
  { id: "all", label: "All Jewelry" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? "fill-gold text-gold" : "text-divider fill-divider"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tags.includes("bestseller") && (
          <div className="absolute top-3 left-3">
            <span className="bg-espresso text-cream text-[9px] uppercase tracking-widest font-sans px-2 py-0.5">
              Bestseller
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-espresso text-cream text-xs uppercase tracking-widest font-sans py-3 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>
      <p
        id={`shop-${product.titleId}`}
        className="font-serif text-sm uppercase tracking-widest text-espresso leading-tight"
      >
        {product.name}
      </p>
      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-1.5">
        <StarRating rating={product.rating} />
        <p className="font-sans text-sm text-espresso font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setActiveCategory(cat);
  }, [searchParams]);

  // Filter & sort
  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) => {
      const range = PRICE_RANGES[activePriceRange];
      return p.price >= range.min && p.price < range.max;
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
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <div className="bg-parchment border-b border-divider pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-espresso font-light">
            All Jewelry
          </h1>
          <p className="text-sm font-sans text-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-sans uppercase tracking-widest px-4 py-2 border transition-colors ${
                  activeCategory === cat.id
                    ? "border-espresso bg-espresso text-cream"
                    : "border-divider text-charcoal hover:border-espresso"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-charcoal border border-divider px-4 py-2"
          >
            <SlidersHorizontal size={12} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs font-sans uppercase tracking-widest text-stone hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-divider text-xs font-sans text-charcoal uppercase tracking-widest px-4 py-2 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            {/* Price filter */}
            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-4">Price</p>
              <div className="space-y-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePriceRange(i)}
                    className={`block text-xs font-sans text-left w-full transition-colors ${
                      activePriceRange === i ? "text-espresso font-medium" : "text-stone hover:text-espresso"
                    }`}
                  >
                    {activePriceRange === i && <span className="text-gold mr-1">—</span>}
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category filter */}
            <div>
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-4">Category</p>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`block text-xs font-sans text-left w-full transition-colors ${
                      activeCategory === cat.id ? "text-espresso font-medium" : "text-stone hover:text-espresso"
                    }`}
                  >
                    {activeCategory === cat.id && <span className="text-gold mr-1">—</span>}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso font-light mb-2">No pieces found</p>
                <p className="text-xs font-sans text-stone uppercase tracking-widest">
                  Try adjusting your filters
                </p>
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

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 bg-espresso/40 z-50"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-2xl p-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-sans uppercase tracking-widest text-espresso">Filters</p>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-charcoal" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setFilterOpen(false); }}
                    className={`text-xs font-sans uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activeCategory === cat.id
                        ? "border-espresso bg-espresso text-cream"
                        : "border-divider text-charcoal"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">Price</p>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                    className={`text-xs font-sans uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activePriceRange === i
                        ? "border-espresso bg-espresso text-cream"
                        : "border-divider text-charcoal"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
