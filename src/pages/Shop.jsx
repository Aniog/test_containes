import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Star, SlidersHorizontal, ChevronDown } from "lucide-react";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [quickAddId, setQuickAddId] = useState(null);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get("category") || "all";
  const activePrice = searchParams.get("price") || "all";
  const activeMaterial = searchParams.get("material") || "all";

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Filter products
  let filtered = [...products];

  if (activeCategory !== "all") {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  if (activePrice !== "all") {
    const [min, max] = activePrice.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && (max ? p.price <= max : true));
  }

  // Sort
  switch (sortBy) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      variant: "Gold",
      image: product.images[0],
    });
    setQuickAddId(product.id);
    setTimeout(() => setQuickAddId(null), 1500);
  };

  return (
    <main className="py-8 md:py-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
              {activeCategory !== "all"
                ? categories.find((c) => c.id === activeCategory)?.name || "Shop"
                : "All Jewelry"}
            </h1>
            <p className="text-sm text-velmora-muted mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Filter toggle (mobile) */}
            <button
              className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest text-velmora-text"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-border px-3 py-2 pr-8 text-xs uppercase tracking-widest text-velmora-text focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-velmora-text mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter("category", "all")}
                    className={`block text-sm transition-colors ${
                      activeCategory === "all" ? "text-velmora-gold" : "text-velmora-muted hover:text-velmora-text"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter("category", cat.id)}
                      className={`block text-sm transition-colors ${
                        activeCategory === cat.id
                          ? "text-velmora-gold"
                          : "text-velmora-muted hover:text-velmora-text"
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-velmora-text mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: "All Prices", value: "all" },
                    { label: "Under $50", value: "0-50" },
                    { label: "$50 - $75", value: "50-75" },
                    { label: "$75+", value: "75-999" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateFilter("price", opt.value)}
                      className={`block text-sm transition-colors ${
                        activePrice === opt.value
                          ? "text-velmora-gold"
                          : "text-velmora-muted hover:text-velmora-text"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-velmora-text mb-3">Material</h3>
                <div className="space-y-2">
                  {[
                    { label: "All", value: "all" },
                    { label: "18K Gold Plated", value: "gold" },
                    { label: "Silver Tone", value: "silver" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateFilter("material", opt.value)}
                      className={`block text-sm transition-colors ${
                        activeMaterial === opt.value
                          ? "text-velmora-gold"
                          : "text-velmora-muted hover:text-velmora-text"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden mb-6 p-4 bg-velmora-card border border-velmora-border space-y-4">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-velmora-text mb-2">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {[{ id: "all", name: "All" }, ...categories].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => updateFilter("category", cat.id)}
                        className={`px-3 py-1 text-xs border transition-colors ${
                          activeCategory === cat.id
                            ? "border-velmora-gold bg-velmora-gold text-velmora-text"
                            : "border-velmora-border text-velmora-muted"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-velmora-text mb-2">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "All", value: "all" },
                      { label: "Under $50", value: "0-50" },
                      { label: "$50-$75", value: "50-75" },
                      { label: "$75+", value: "75-999" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateFilter("price", opt.value)}
                        className={`px-3 py-1 text-xs border transition-colors ${
                          activePrice === opt.value
                            ? "border-velmora-gold bg-velmora-gold text-velmora-text"
                            : "border-velmora-border text-velmora-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted font-serif text-lg">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-sm uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/products/${product.id}`}>
                      <div className="relative aspect-[4/5] bg-velmora-border/30 overflow-hidden">
                        <img
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[shop-title-${product.id}]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                      </div>
                    </Link>

                    <div className="mt-3">
                      <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-velmora-text">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                        <span className="text-xs text-velmora-muted">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-velmora-text font-medium">${product.price}</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuickAdd(product);
                          }}
                          className={`text-xs uppercase tracking-widest transition-all flex items-center gap-1 ${
                            quickAddId === product.id
                              ? "text-green-600"
                              : "text-velmora-muted hover:text-velmora-gold"
                          }`}
                        >
                          <ShoppingBag className="w-3 h-3" />
                          {quickAddId === product.id ? "Added" : "Add"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}