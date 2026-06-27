import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = [
  { value: "all", label: "All" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function Collection() {
  const { category } = useParams();
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState(category || "all");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(category || "all");
  }, [category]);

  const filtered = useMemo(() => {
    let result =
      activeCategory === "all"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

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
  }, [activeCategory, sortBy]);

  const pageTitle =
    activeCategory === "all"
      ? "All Jewelry"
      : categories.find((c) => c.value === activeCategory)?.label || "Shop";

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-[0.08em]">
              {pageTitle}
            </h1>
            <p className="text-sm text-muted mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-xs text-muted uppercase tracking-widest hidden sm:block">
                Sort
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-foreground bg-transparent border border-border/60 rounded-sm px-3 py-2 focus:outline-none focus:border-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs text-muted uppercase tracking-widest mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.value}>
                    <button
                      onClick={() => setActiveCategory(cat.value)}
                      className={`text-sm transition-colors ${
                        activeCategory === cat.value
                          ? "text-gold font-medium"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setMobileFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-widest uppercase">Filters</h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1 text-muted hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => {
                          setActiveCategory(cat.value);
                          setMobileFilterOpen(false);
                        }}
                        className={`text-sm transition-colors ${
                          activeCategory === cat.value
                            ? "text-gold font-medium"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted font-serif text-xl">No pieces found in this category</p>
                <Link
                  to="/collections/all"
                  className="text-gold hover:text-gold-hover text-sm mt-4 inline-block"
                >
                  View all jewelry
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden bg-surface rounded-sm">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        {product.images[1] && (
                          <img
                            src={product.images[1]}
                            alt={`${product.name} alternate`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        )}
                      </div>
                    </Link>
                    <button
                      onClick={() => addItem(product, "gold", 1)}
                      className="absolute bottom-3 left-3 right-3 bg-foreground/90 backdrop-blur-sm text-ivory text-xs tracking-widest uppercase py-2.5 rounded-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Quick Add
                    </button>
                    <div className="mt-3">
                      <h3 className="font-serif text-sm font-medium text-foreground truncate uppercase tracking-[0.08em]">
                        <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-xs text-muted">{product.rating}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground mt-1">
                        ${product.price}
                      </p>
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