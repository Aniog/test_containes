import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";

const categoryOptions = [
  { value: "all", label: "All Jewelry" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-50", label: "Under $50" },
  { value: "50-75", label: "$50 – $75" },
  { value: "75-120", label: "$75 – $120" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function filterProducts(items, category, priceRange, sort) {
  let result = [...items];

  if (category && category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  if (priceRange && priceRange !== "all") {
    const [min, max] = priceRange.split("-").map(Number);
    result = result.filter((p) => p.price >= min && p.price <= max);
  }

  if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
  else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

  return result;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get("category") || "all";
  const priceRange = searchParams.get("price") || "all";
  const sort = searchParams.get("sort") || "featured";

  const filtered = filterProducts(products, category, priceRange, sort);

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "all" || !value) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const activeFilters = [
    category !== "all" && { key: "category", label: categoryOptions.find((c) => c.value === category)?.label },
    priceRange !== "all" && { key: "price", label: priceRanges.find((p) => p.value === priceRange)?.label },
  ].filter(Boolean);

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-stone-light/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            {category !== "all"
              ? categoryOptions.find((c) => c.value === category)?.label
              : "All Jewelry"}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            The Collection
          </h1>
          <p className="font-inter text-sm text-stone mt-3">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filter bar */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-light/50">
          {/* Left: filter toggle + active filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-espresso border border-stone-light px-4 py-2.5 hover:border-espresso transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>

            {activeFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setParam(f.key, "all")}
                className="flex items-center gap-1.5 font-inter text-xs text-espresso bg-ivory-dark border border-stone-light px-3 py-2 hover:border-espresso transition-colors"
              >
                {f.label}
                <X className="w-3 h-3" />
              </button>
            ))}
          </div>

          {/* Right: sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setParam("sort", e.target.value)}
              className="appearance-none bg-transparent font-inter text-xs uppercase tracking-widest text-espresso border border-stone-light px-4 py-2.5 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`flex-shrink-0 transition-all duration-300 overflow-hidden ${
              filterOpen ? "w-52 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <div className="w-52 pr-6">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-espresso mb-4">Category</h3>
                <ul className="space-y-2">
                  {categoryOptions.map((opt) => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setParam("category", opt.value)}
                        className={`font-inter text-sm transition-colors ${
                          category === opt.value
                            ? "text-espresso font-medium"
                            : "text-stone hover:text-espresso"
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest text-espresso mb-4">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map((opt) => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setParam("price", opt.value)}
                        className={`font-inter text-sm transition-colors ${
                          priceRange === opt.value
                            ? "text-espresso font-medium"
                            : "text-stone hover:text-espresso"
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-espresso mb-3">No pieces found</p>
                <p className="font-inter text-sm text-stone">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
