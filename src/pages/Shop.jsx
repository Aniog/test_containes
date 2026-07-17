import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const categories = ["all", "earrings", "necklaces", "sets"];
const materials = ["all", "gold", "silver"];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "all";
  const activeMaterial = searchParams.get("material") || "all";
  const activeSort = searchParams.get("sort") || "newest";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial !== "all") {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (activeSort) {
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
  }, [activeCategory, activeMaterial, activeSort]);

  const hasFilters = activeCategory !== "all" || activeMaterial !== "all";

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-6 md:py-8">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-clay-900 font-light tracking-wide">
            All Jewelry
          </h1>
          <p className="mt-2 text-sm text-clay-500 font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-clay-700 mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter("category", cat)}
                      className={`block w-full text-left text-sm font-sans capitalize transition-colors ${
                        activeCategory === cat
                          ? "text-clay-900 font-medium"
                          : "text-clay-400 hover:text-clay-700"
                      }`}
                    >
                      {cat === "all" ? "All" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-clay-700 mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setFilter("material", mat)}
                      className={`block w-full text-left text-sm font-sans capitalize transition-colors ${
                        activeMaterial === mat
                          ? "text-clay-900 font-medium"
                          : "text-clay-400 hover:text-clay-700"
                      }`}
                    >
                      {mat === "all" ? "All" : mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-sans text-clay-500 hover:text-clay-800 uppercase tracking-wider transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter bar */}
            <div className="flex items-center justify-between mb-6">
              <button
                className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-clay-600"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-clay-500" />
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs font-sans text-clay-400 uppercase tracking-wider">
                  Sort
                </label>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter("sort", e.target.value)}
                  className="text-xs font-sans text-clay-700 bg-transparent border border-cream-300 rounded px-3 py-1.5 focus:outline-none focus:border-clay-400"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-clay-500 mb-4">
                  No pieces match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-clay-900/30 backdrop-blur-sm"
          onClick={() => setMobileFilterOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-cream-50 shadow-2xl transform transition-transform duration-300 ${
            mobileFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-clay-800">
                Filters
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-clay-400 hover:text-clay-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider text-clay-600 mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setFilter("category", cat);
                        setMobileFilterOpen(false);
                      }}
                      className={`block w-full text-left text-sm font-sans capitalize transition-colors ${
                        activeCategory === cat
                          ? "text-clay-900 font-medium"
                          : "text-clay-400 hover:text-clay-700"
                      }`}
                    >
                      {cat === "all" ? "All" : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider text-clay-600 mb-3">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => {
                        setFilter("material", mat);
                        setMobileFilterOpen(false);
                      }}
                      className={`block w-full text-left text-sm font-sans capitalize transition-colors ${
                        activeMaterial === mat
                          ? "text-clay-900 font-medium"
                          : "text-clay-400 hover:text-clay-700"
                      }`}
                    >
                      {mat === "all" ? "All" : mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFilterOpen(false);
                }}
                className="mt-6 text-xs font-sans text-clay-500 hover:text-clay-800 uppercase tracking-wider"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-100 rounded-sm">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cream-50"
        aria-label="Quick add to cart"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-clay-800" />
      </button>

      <div className="absolute top-3 left-3">
        <div className="flex items-center gap-1 bg-cream-50/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
          <Star className="w-2.5 h-2.5 text-gold-500 fill-gold-500" />
          <span className="text-[10px] font-sans font-medium text-clay-700">
            {product.rating}
          </span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <h3 className="product-name truncate">{product.name}</h3>
        <p className="product-price mt-1">${product.price}</p>
      </div>
    </div>
  );
}