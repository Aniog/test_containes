import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $70", min: 40, max: 70 },
  { label: "$70 – $100", min: 70, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={0}
          fill={s <= Math.round(rating) ? "#C9A96E" : "#E8E0D0"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
          <img
            className="product-img-primary w-full h-full object-cover"
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] [shop-page-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
          <img
            className="product-img-secondary w-full h-full object-cover"
            data-strk-img-id={`shop-${product.img2Id}`}
            data-strk-img={`[shop-${product.id}-title] [shop-page-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gold-light text-umber font-inter text-[10px] uppercase tracking-widest px-2 py-0.5">
              {product.badge}
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-espresso/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full flex items-center justify-center gap-2 font-inter text-xs uppercase tracking-widest text-ivory hover:text-gold transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="pt-3">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${product.id}`}>
            <h3
              id={`shop-${product.id}-title`}
              className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight hover:text-gold transition-colors"
            >
              {product.name}
            </h3>
          </Link>
          <span className="font-inter text-sm font-medium text-espresso flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <p
          id={`shop-${product.id}-desc`}
          className="font-inter text-xs text-stone-warm mt-1"
        >
          {product.shortDesc}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[10px] text-stone-warm">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category")
      ? searchParams.get("category").charAt(0).toUpperCase() +
          searchParams.get("category").slice(1)
      : "All"
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Filter + sort products
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
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-linen bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-2">
            Collection
          </p>
          <h1
            id="shop-page-title"
            className="font-cormorant text-4xl md:text-5xl font-light text-espresso"
          >
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-stone-warm mt-2">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-espresso mb-4">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-inter text-sm transition-colors ${
                          activeCategory === cat
                            ? "text-gold font-medium"
                            : "text-umber hover:text-espresso"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6 mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-espresso mb-4">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-inter text-sm transition-colors ${
                          activePriceRange.label === range.label
                            ? "text-gold font-medium"
                            : "text-umber hover:text-espresso"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6">
                <h3 className="font-inter text-xs uppercase tracking-widest text-espresso mb-4">
                  Material
                </h3>
                <ul className="flex flex-col gap-2">
                  {["18K Gold Plated", "Sterling Silver"].map((m) => (
                    <li key={m}>
                      <button className="font-inter text-sm text-umber hover:text-espresso transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter bar + sort */}
            <div className="flex items-center justify-between mb-6 gap-3">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen((v) => !v)}
                className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-espresso border border-linen px-4 py-2 hover:border-espresso transition-colors"
              >
                <SlidersHorizontal size={12} strokeWidth={1.5} />
                Filter
              </button>

              {/* Active filters */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {activeCategory !== "All" && (
                  <span className="flex items-center gap-1 bg-gold-light text-umber font-inter text-xs px-2 py-1">
                    {activeCategory}
                    <button onClick={() => setActiveCategory("All")}>
                      <X size={10} />
                    </button>
                  </span>
                )}
                {activePriceRange.label !== "All Prices" && (
                  <span className="flex items-center gap-1 bg-gold-light text-umber font-inter text-xs px-2 py-1">
                    {activePriceRange.label}
                    <button onClick={() => setActivePriceRange(PRICE_RANGES[0])}>
                      <X size={10} />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-espresso border border-linen px-4 py-2 hover:border-espresso transition-colors"
                >
                  {SORT_OPTIONS.find((s) => s.value === sortBy)?.label}
                  <ChevronDown size={12} strokeWidth={1.5} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-ivory border border-linen z-20 min-w-[180px] shadow-sm">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-inter text-xs hover:bg-parchment transition-colors ${
                          sortBy === opt.value
                            ? "text-gold"
                            : "text-espresso"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-parchment border border-linen p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-inter text-xs uppercase tracking-widest text-espresso">
                    Filters
                  </span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={14} strokeWidth={1.5} className="text-espresso" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-inter text-xs uppercase tracking-widest text-stone-warm mb-3">
                      Category
                    </h4>
                    <div className="flex flex-col gap-2">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setFilterOpen(false);
                          }}
                          className={`text-left font-inter text-sm ${
                            activeCategory === cat
                              ? "text-gold font-medium"
                              : "text-umber"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-inter text-xs uppercase tracking-widest text-stone-warm mb-3">
                      Price
                    </h4>
                    <div className="flex flex-col gap-2">
                      {PRICE_RANGES.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => {
                            setActivePriceRange(range);
                            setFilterOpen(false);
                          }}
                          className={`text-left font-inter text-sm ${
                            activePriceRange.label === range.label
                              ? "text-gold font-medium"
                              : "text-umber"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl font-light text-stone-warm">
                  No pieces found
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setActivePriceRange(PRICE_RANGES[0]);
                  }}
                  className="mt-4 font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={containerRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              >
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
