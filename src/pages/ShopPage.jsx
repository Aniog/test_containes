import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const priceRanges = [
  { label: "All Prices", min: 0, max: 999 },
  { label: "Under $50", min: 0, max: 49 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75+", min: 76, max: 999 },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Rating", value: "rating" },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-card overflow-hidden mb-4">
        <img
          data-strk-img-id={`shop-${product.id}-1`}
          data-strk-img={`[${product.id}-name] gold jewelry elegant product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          data-strk-img-id={`shop-${product.id}-2`}
          data-strk-img={`[${product.id}-name] jewelry detail closeup model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-velmora-gold text-velmora-bg text-[10px] tracking-[0.15em] uppercase font-semibold">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, "Gold", 1);
          }}
          className={`absolute bottom-3 left-3 right-3 py-3 bg-velmora-cream/95 backdrop-blur-sm text-velmora-bg text-xs tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          } hover:bg-white`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>

        <span id={`${product.id}-name`} className="hidden">{product.name}</span>
      </div>

      <div className="px-1">
        <h3 className="font-serif text-sm md:text-base tracking-[0.15em] uppercase text-velmora-cream group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating)
                    ? "fill-velmora-star text-velmora-star"
                    : "text-velmora-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-velmora-text-secondary">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-velmora-gold font-medium mt-2 tracking-wide">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy, priceRange]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const range = priceRanges[priceRange];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const filterContent = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium mb-4">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`text-left text-sm py-1.5 transition-colors ${
              selectedCategory === "all"
                ? "text-velmora-cream font-medium"
                : "text-velmora-text-secondary hover:text-velmora-cream"
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`text-left text-sm py-1.5 transition-colors ${
                selectedCategory === cat.id
                  ? "text-velmora-cream font-medium"
                  : "text-velmora-text-secondary hover:text-velmora-cream"
              }`}
            >
              {cat.label} <span className="text-velmora-muted">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium mb-4">
          Price
        </h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(i)}
              className={`text-left text-sm py-1.5 transition-colors ${
                priceRange === i
                  ? "text-velmora-cream font-medium"
                  : "text-velmora-text-secondary hover:text-velmora-cream"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-gold font-medium mb-4">
          Material
        </h3>
        <div className="flex flex-col gap-2">
          {["18K Gold Plated", "Sterling Silver"].map((mat) => (
            <button
              key={mat}
              className="text-left text-sm py-1.5 text-velmora-text-secondary hover:text-velmora-cream transition-colors"
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-10 md:py-14 text-center">
          <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-cream font-light">
            {selectedCategory === "all"
              ? "All Jewelry"
              : categories.find((c) => c.id === selectedCategory)?.label || "Shop"}
          </h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between border-y border-velmora-border py-4 mb-8">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm text-velmora-text-secondary hover:text-velmora-cream transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="uppercase tracking-wider text-xs">Filters</span>
          </button>
          <p className="text-sm text-velmora-text-secondary hidden lg:block">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-velmora-border text-sm text-velmora-text-secondary pl-4 pr-10 py-2 focus:outline-none focus:border-velmora-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-velmora-surface text-velmora-cream">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-text-secondary pointer-events-none" />
          </div>
        </div>

        {/* Layout */}
        <div className="flex gap-10 pb-20">
          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden" onClick={() => setFilterOpen(false)}>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <div
                className="absolute top-0 left-0 h-full w-80 bg-velmora-surface p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-lg tracking-[0.1em] text-velmora-cream">Filters</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-velmora-text-secondary" />
                  </button>
                </div>
                {filterContent}
              </div>
            </div>
          )}

          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
            {filterContent}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-sm text-velmora-text-secondary mb-6 lg:hidden">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text-secondary mb-4">
                  No products found
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange("all");
                    setPriceRange(0);
                  }}
                  className="text-velmora-gold text-sm uppercase tracking-wider hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                {filteredProducts.map((product) => (
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
