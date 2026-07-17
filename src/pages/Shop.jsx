import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, X, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "earrings", "necklaces", "huggies", "sets"];
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

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`gold jewelry worn model ${product.shortDescription}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
        {product.tags.includes("bestseller") && (
          <span className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          {added ? "Added!" : "Quick Add"}
        </button>
      </div>
      <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
      <h3 id={`shop-title-${product.id}`} className="product-name text-xs text-obsidian mb-1 group-hover:text-gold transition-colors duration-300">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-taupe-light"} strokeWidth={0} />
          ))}
        </div>
        <span className="font-sans text-[11px] text-taupe">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm text-obsidian">${product.price}</p>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) => {
      const range = PRICE_RANGES[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-obsidian py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-ivory font-light">
            All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian border border-gold/30 px-4 py-2.5 hover:border-gold transition-colors duration-300"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-sans text-xs text-taupe">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs tracking-widest uppercase text-taupe hidden sm:block">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs text-obsidian bg-transparent border border-gold/30 px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside
            className={`${
              filterOpen ? "block" : "hidden"
            } lg:block w-full lg:w-52 flex-shrink-0`}
          >
            {filterOpen && (
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <span className="font-sans text-xs tracking-widest uppercase text-obsidian">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={16} className="text-taupe" />
                </button>
              </div>
            )}

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
                Category
              </h3>
              <ul className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategory(cat)}
                      className={`font-sans text-sm transition-colors duration-200 capitalize ${
                        activeCategory === cat
                          ? "text-obsidian font-500"
                          : "text-taupe hover:text-obsidian"
                      }`}
                    >
                      {cat === "All" ? "All Jewelry" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
                Price
              </h3>
              <ul className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setActivePriceRange(i)}
                      className={`font-sans text-sm transition-colors duration-200 ${
                        activePriceRange === i
                          ? "text-obsidian font-500"
                          : "text-taupe hover:text-obsidian"
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
              <h3 className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
                Material
              </h3>
              <ul className="flex flex-col gap-2">
                {["18K Gold Plated", "Sterling Silver"].map((m) => (
                  <li key={m}>
                    <button className="font-sans text-sm text-taupe hover:text-obsidian transition-colors duration-200">
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-taupe mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory("All"); setActivePriceRange(0); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
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
