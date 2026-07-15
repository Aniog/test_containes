import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  { id: "all", label: "All Jewelry" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under40", label: "Under $40", min: 0, max: 40 },
  { id: "40to60", label: "$40 - $60", min: 40, max: 60 },
  { id: "60to100", label: "$60 - $100", min: 60, max: 100 },
  { id: "over100", label: "Over $100", min: 100, max: Infinity },
];

const materials = [
  { id: "all", label: "All Materials" },
  { id: "18k-gold-plated", label: "18K Gold Plated" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]?.id ?? null);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-3">
        <img
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 text-stone-800 text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-3 bg-white/95 text-stone-800 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>
      <h3
        id={`shop-title-${product.id}`}
        className="font-serif text-sm uppercase tracking-[0.12em] mb-1"
      >
        {product.name}
      </h3>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
        <div className="flex items-center gap-0.5">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-stone-500">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    const priceRange = priceRanges.find((r) => r.id === selectedPrice);
    if (priceRange) {
      list = list.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      );
    }

    if (selectedMaterial !== "all") {
      list = list.filter((p) => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedPrice("all");
    setSelectedMaterial("all");
    setSearchParams({});
  };

  const activeFilterCount = [
    selectedCategory !== "all",
    selectedPrice !== "all",
    selectedMaterial !== "all",
  ].filter(Boolean).length;

  return (
    <main ref={containerRef} className="pt-20 sm:pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 sm:py-12 border-b border-stone-100 mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3">
            Shop
          </h1>
          <p className="text-stone-500 text-sm max-w-lg">
            Discover our collection of demi-fine gold jewelry — designed to be
            worn, loved, and treasured.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm tracking-wide"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-dark text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <span className="hidden sm:inline text-sm text-stone-500">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </span>
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm tracking-wide"
            >
              Sort by: {sortOptions.find((s) => s.id === sortBy)?.label}
              <ChevronDown className="w-4 h-4" />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-white border border-stone-200 shadow-lg z-40 min-w-[200px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSortBy(opt.id);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-stone-50 transition-colors ${
                        sortBy === opt.id ? "font-medium" : ""
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-[0.2em] uppercase font-medium">
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-gold hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                Category
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (cat.id === "all") {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: cat.id });
                      }
                    }}
                    className={`block text-sm transition-colors ${
                      selectedCategory === cat.id
                        ? "text-velmora-dark font-medium"
                        : "text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                Price
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={`block text-sm transition-colors ${
                      selectedPrice === range.id
                        ? "text-velmora-dark font-medium"
                        : "text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                Material
              </h4>
              <div className="space-y-2">
                {materials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMaterial(m.id)}
                    className={`block text-sm transition-colors ${
                      selectedMaterial === m.id
                        ? "text-velmora-dark font-medium"
                        : "text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-500 mb-3">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
              <h3 className="text-xs tracking-[0.2em] uppercase font-medium">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-stone-600" />
              </button>
            </div>
            <div className="px-5 py-6 space-y-8">
              <div>
                <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                  Category
                </h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        if (cat.id === "all") {
                          setSearchParams({});
                        } else {
                          setSearchParams({ category: cat.id });
                        }
                      }}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? "text-velmora-dark font-medium"
                          : "text-stone-500"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                  Price
                </h4>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPrice(range.id)}
                      className={`block text-sm transition-colors ${
                        selectedPrice === range.id
                          ? "text-velmora-dark font-medium"
                          : "text-stone-500"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                  Material
                </h4>
                <div className="space-y-3">
                  {materials.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMaterial(m.id)}
                      className={`block text-sm transition-colors ${
                        selectedMaterial === m.id
                          ? "text-velmora-dark font-medium"
                          : "text-stone-500"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-stone-200">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full py-3 border border-stone-300 text-sm tracking-widest uppercase hover:border-stone-500 transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
