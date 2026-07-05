import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = [
  { value: "", label: "All" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "sets", label: "Gift Sets" },
];

const priceRanges = [
  { value: "", label: "All Prices" },
  { value: "0-40", label: "Under $40" },
  { value: "40-60", label: "$40 – $60" },
  { value: "60-80", label: "$60 – $80" },
  { value: "80-200", label: "$80+" },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const activePrice = searchParams.get("price") || "";
  const activeSort = searchParams.get("sort") || "";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const [minStr, maxStr] = activePrice.split("-");
      const min = Number(minStr);
      const max = Number(maxStr);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (activeSort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, activePrice, activeSort]);

  const hasActiveFilters = activeCategory || activePrice;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em]">
            Shop
          </h1>
          <div className="w-12 h-[1px] bg-[#b68860] mt-4" />
          <p className="mt-4 font-sans text-sm text-[hsl(var(--muted-foreground))] max-w-md">
            Discover demi-fine gold jewelry crafted for everyday luxury.
          </p>
        </div>

        {/* Mobile filter toggle */}
        <button
          className="lg:hidden flex items-center gap-2 mb-6 font-sans text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground))]"
          onClick={() => setMobileFilterOpen(true)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#b68860]" />
          )}
        </button>

        <div className="flex gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {/* Categories */}
            <div className="mb-10">
              <h3 className="font-sans text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground))] mb-4">
                Category
              </h3>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setFilter("category", cat.value)}
                    className={`block w-full text-left font-sans text-sm transition-colors ${
                      activeCategory === cat.value
                        ? "text-[#b68860] font-medium"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-10">
              <h3 className="font-sans text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground))] mb-4">
                Price
              </h3>
              <div className="space-y-2.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setFilter("price", range.value)}
                    className={`block w-full text-left font-sans text-sm transition-colors ${
                      activePrice === range.value
                        ? "text-[#b68860] font-medium"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-sans text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground))] mb-4">
                Sort By
              </h3>
              <select
                value={activeSort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="w-full px-3 py-2.5 border border-[hsl(var(--border))] bg-transparent font-sans text-sm text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--foreground))]"
              >
                <option value="">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearchParams({});
                }}
                className="mt-8 font-sans text-xs text-[hsl(var(--muted-foreground))] underline underline-offset-2 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
              mobileFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileFilterOpen(false)}
            />
            <div
              className={`absolute top-0 left-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
                mobileFilterOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-sans text-xs tracking-[0.1em] uppercase">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Categories */}
                <div className="mb-8">
                  <h4 className="font-sans text-xs tracking-[0.1em] uppercase mb-4">Category</h4>
                  <div className="space-y-2.5">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setFilter("category", cat.value);
                          setMobileFilterOpen(false);
                        }}
                        className={`block w-full text-left font-sans text-sm ${
                          activeCategory === cat.value
                            ? "text-[#b68860] font-medium"
                            : "text-[hsl(var(--muted-foreground))]"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Price */}
                <div className="mb-8">
                  <h4 className="font-sans text-xs tracking-[0.1em] uppercase mb-4">Price</h4>
                  <div className="space-y-2.5">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => {
                          setFilter("price", range.value);
                          setMobileFilterOpen(false);
                        }}
                        className={`block w-full text-left font-sans text-sm ${
                          activePrice === range.value
                            ? "text-[#b68860] font-medium"
                            : "text-[hsl(var(--muted-foreground))]"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Sort */}
                <div className="mb-8">
                  <h4 className="font-sans text-xs tracking-[0.1em] uppercase mb-4">Sort By</h4>
                  <select
                    value={activeSort}
                    onChange={(e) => setFilter("sort", e.target.value)}
                    className="w-full px-3 py-2.5 border border-[hsl(var(--border))] bg-transparent font-sans text-sm focus:outline-none"
                  >
                    <option value="">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name: A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort bar for desktop */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-[hsl(var(--muted-foreground))]">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <select
                value={activeSort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="px-3 py-2 border border-[hsl(var(--border))] bg-transparent font-sans text-sm text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--foreground))]"
              >
                <option value="">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-sm text-[hsl(var(--muted-foreground))]">
                  No products match your filters.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline text-xs mt-6 inline-block"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link
                      to={`/product/${product.id}`}
                      className="block aspect-[3/4] bg-[hsl(var(--muted))] overflow-hidden relative"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }}
                        className="absolute bottom-0 left-0 right-0 py-3 bg-white/90 backdrop-blur-sm text-[hsl(var(--foreground))]
                          font-sans text-[11px] tracking-[0.1em] uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Add to Cart
                      </button>
                    </Link>
                    <div className="mt-3 space-y-1">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="product-name text-xs group-hover:text-[#b68860] transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-xs text-[hsl(var(--muted-foreground))]">
                        {product.type}
                      </p>
                      <p className="font-sans text-sm font-medium">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}