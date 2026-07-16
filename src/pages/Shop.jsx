import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { cn } from "../lib/utils";

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 - $60", min: 40, max: 60 },
  { label: "$60 - $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [activePrice, setActivePrice] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory && activeCategory !== "all") {
      const catKey = activeCategory.toLowerCase();
      result = result.filter(
        (p) => p.category === catKey || p.category === catKey.slice(0, -1)
      );
    }

    // Price filter
    if (activePrice) {
      result = result.filter(
        (p) => p.price >= activePrice.min && p.price <= activePrice.max
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [activeCategory, activePrice, sortBy]);

  const handleCategoryChange = (cat) => {
    const catLower = cat.toLowerCase();
    setActiveCategory(catLower);
    setSearchParams(catLower !== "all" ? { category: catLower } : {});
  };

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">
          Category
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "font-sans text-sm transition-colors",
                  activeCategory === cat.toLowerCase()
                    ? "text-velmora-gold font-medium"
                    : "text-velmora-text-secondary hover:text-velmora-text"
                )}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-4">
          Price
        </h3>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                onClick={() =>
                  setActivePrice(
                    activePrice?.label === range.label ? null : range
                  )
                }
                className={cn(
                  "font-sans text-sm transition-colors",
                  activePrice?.label === range.label
                    ? "text-velmora-gold font-medium"
                    : "text-velmora-text-secondary hover:text-velmora-text"
                )}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-bg pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-text font-light capitalize">
              {activeCategory === "all" ? "Shop All" : activeCategory}
            </h1>
            <p className="font-sans text-sm text-velmora-text-secondary mt-1">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs uppercase tracking-widest text-velmora-text bg-transparent border-b border-velmora-border py-1 pr-6 focus:outline-none focus:border-velmora-gold cursor-pointer"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">
              <FiltersContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text-secondary">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setActivePrice(null);
                    setSearchParams({});
                  }}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-hover transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-velmora-muted overflow-hidden mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        />
                      )}
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-sans uppercase tracking-widest px-2 py-1">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-text truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                      <span className="font-sans text-xs text-velmora-text-secondary">
                        {product.rating}
                      </span>
                    </div>
                    <p className="font-sans text-sm font-medium text-velmora-text mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-velmora-bg p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-velmora-text">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 hover:text-velmora-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FiltersContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-velmora-gold text-white py-3 mt-8 font-sans text-xs uppercase tracking-widest hover:bg-velmora-gold-hover transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}