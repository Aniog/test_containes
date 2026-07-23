import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, SlidersHorizontal, X } from "lucide-react";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const activeSort = searchParams.get("sort") || "newest";
  const activePriceRange = searchParams.get("price") || "";

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [searchParams]);

  const filtered = products.filter((p) => {
    if (activeCategory) {
      const catMatch = categories.find(
        (c) => c.id === activeCategory
      );
      if (catMatch && p.category.toLowerCase() !== catMatch.name.toLowerCase()) {
        return false;
      }
    }
    if (activePriceRange) {
      const [min, max] = activePriceRange.split("-").map(Number);
      if (max && (p.price < min || p.price > max)) return false;
      if (!max && p.price < min) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (activeSort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => setSearchParams({});

  const priceRanges = [
    { label: "Under $40", value: "0-40" },
    { label: "$40 – $70", value: "40-70" },
    { label: "$70 – $100", value: "70-100" },
    { label: "$100+", value: "100-" },
  ];

  const hasActiveFilters = activeCategory || activePriceRange;

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => updateFilter("category", "")}
            className={`text-left text-sm font-sans transition-colors duration-200 ${
              !activeCategory
                ? "text-velmora-gold"
                : "text-velmora-text-secondary hover:text-velmora-text-primary"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                updateFilter(
                  "category",
                  activeCategory === cat.id ? "" : cat.id
                );
              }}
              className={`text-left text-sm font-sans transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "text-velmora-gold"
                  : "text-velmora-text-secondary hover:text-velmora-text-primary"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-3">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => {
                updateFilter(
                  "price",
                  activePriceRange === range.value ? "" : range.value
                );
              }}
              className={`text-left text-sm font-sans transition-colors duration-200 ${
                activePriceRange === range.value
                  ? "text-velmora-gold"
                  : "text-velmora-text-secondary hover:text-velmora-text-primary"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mb-4">
          Material
        </h4>
        <div className="flex flex-col gap-3">
          {["18K Gold Plated", "Sterling Silver"].map((mat) => (
            <button
              key={mat}
              className="text-left text-sm font-sans text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 md:pt-28" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="section-title">All Jewelry</h1>
            <p className="section-subtitle mt-2">
              {sorted.length} pieces
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 text-velmora-text-secondary text-xs uppercase tracking-[0.15em] font-sans hover:text-velmora-text-primary transition-colors"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => updateFilter("sort", e.target.value)}
              className="bg-transparent text-velmora-text-secondary text-xs uppercase tracking-[0.15em] font-sans border border-velmora-border-light px-3 py-2 focus:outline-none focus:border-velmora-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            {activeCategory && (
              <span className="flex items-center gap-2 bg-velmora-surface-elevated text-velmora-text-primary text-xs font-sans px-3 py-1.5">
                {categories.find((c) => c.id === activeCategory)?.name}
                <button
                  onClick={() => updateFilter("category", "")}
                  className="text-velmora-text-secondary hover:text-velmora-text-primary"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activePriceRange && (
              <span className="flex items-center gap-2 bg-velmora-surface-elevated text-velmora-text-primary text-xs font-sans px-3 py-1.5">
                {priceRanges.find((r) => r.value === activePriceRange)?.label}
                <button
                  onClick={() => updateFilter("price", "")}
                  className="text-velmora-text-secondary hover:text-velmora-text-primary"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-velmora-text-secondary text-xs font-sans underline hover:text-velmora-text-primary"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-text-secondary font-sans">
                  No pieces match your filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] bg-velmora-surface-elevated overflow-hidden mb-3">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[shop-name-${product.id}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-velmora-bg/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addItem(product);
                            }}
                            className="bg-velmora-gold text-velmora-bg font-sans text-xs uppercase tracking-widest px-5 py-2.5 flex items-center gap-2 transition-all duration-200 hover:bg-velmora-gold-hover"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            Add to Cart
                          </button>
                        </div>
                        {product.isNew && (
                          <div className="absolute top-3 left-3">
                            <Badge variant="new">New</Badge>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="text-center">
                      <h3
                        id={`shop-name-${product.id}`}
                        className="product-name"
                      >
                        {product.name}
                      </h3>
                      <p className="product-price mt-1">${product.price}</p>
                    </div>
                  </div>
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-velmora-surface border-l border-velmora-border p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-velmora-text-primary text-sm uppercase tracking-[0.15em] font-sans">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-velmora-text-secondary hover:text-velmora-text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}