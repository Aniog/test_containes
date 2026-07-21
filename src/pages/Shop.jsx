import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const activeCategory = searchParams.get("category") || "all";

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
      default:
        break;
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.value || "gold");
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-content mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary">
              {activeCategory === "all"
                ? "All Jewelry"
                : categories.find((c) => c.slug === activeCategory)?.name ||
                  "All Jewelry"}
            </h1>
            <p className="text-secondary text-sm mt-1">
              {filteredProducts.length} piece{filteredProducts.length !== 1 && "s"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-secondary hover:text-primary transition-colors"
              >
                {sortOptions.find((o) => o.value === sortBy)?.label}
                <ChevronDown className="w-3 h-3" />
              </button>
              {showSort && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowSort(false)}
                  />
                  <div className="absolute right-0 top-8 bg-surface border border-border shadow-lg z-20 min-w-[180px]">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setShowSort(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.08em] transition-colors",
                          sortBy === opt.value
                            ? "text-accent bg-accent/5"
                            : "text-secondary hover:text-primary hover:bg-light-accent"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile filter */}
            <button
              className="md:hidden flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-secondary"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.1em] font-medium text-primary mb-4">
                Category
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => setCategory("all")}
                    className={cn(
                      "text-sm transition-colors",
                      activeCategory === "all"
                        ? "text-accent font-medium"
                        : "text-secondary hover:text-primary"
                    )}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.slug)}
                      className={cn(
                        "text-sm transition-colors",
                        activeCategory === cat.slug
                          ? "text-accent font-medium"
                          : "text-secondary hover:text-primary"
                      )}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.1em] font-medium text-primary mb-4">
                Price
              </h4>
              <div className="space-y-3">
                <input
                  type="range"
                  min={0}
                  max={200}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-accent"
                />
                <div className="flex items-center justify-between text-xs text-secondary">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-secondary">No products match your filters.</p>
                <button
                  onClick={() => {
                    setCategory("all");
                    setPriceRange([0, 200]);
                  }}
                  className="text-xs uppercase tracking-[0.1em] text-accent hover:underline mt-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] bg-light-accent overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-surface/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.1em] font-medium px-2 py-1">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.1em] py-2.5 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="product-name text-xs truncate group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-star text-star" />
                      <span className="text-[11px] text-secondary">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-medium">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-secondary line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 md:hidden rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="text-sm font-medium uppercase tracking-[0.08em]">
                Filters
              </span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.1em] font-medium mb-3">
                  Category
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["all", ...categories.map((c) => c.slug)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setMobileFilterOpen(false);
                      }}
                      className={cn(
                        "px-4 py-2 text-xs uppercase tracking-[0.08em] border transition-colors",
                        activeCategory === cat
                          ? "border-primary bg-primary text-white"
                          : "border-border text-secondary"
                      )}
                    >
                      {cat === "all"
                        ? "All"
                        : categories.find((c) => c.slug === cat)?.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.1em] font-medium mb-3">
                  Price
                </h4>
                <input
                  type="range"
                  min={0}
                  max={200}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-accent"
                />
                <div className="flex items-center justify-between text-xs text-secondary mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.1em] font-medium mb-3">
                  Sort By
                </h4>
                <div className="space-y-2">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setMobileFilterOpen(false);
                      }}
                      className={cn(
                        "block w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.08em] border transition-colors",
                        sortBy === opt.value
                          ? "border-primary bg-primary text-white"
                          : "border-border text-secondary"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full bg-primary text-white py-3.5 text-xs uppercase tracking-[0.12em] font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}