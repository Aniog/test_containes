import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";

const categories = [
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

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => {
      if (priceRange === "all") return true;
      const [min, max] = priceRange.split("-").map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  const activeFilters = [
    category !== "all" && categories.find((c) => c.value === category)?.label,
    priceRange !== "all" && priceRanges.find((p) => p.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-stone-light/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            {category === "all" ? "All Jewelry" : categories.find((c) => c.value === category)?.label}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            {category === "all" ? "The Collection" : categories.find((c) => c.value === category)?.label}
          </h1>
          <p className="font-inter text-sm font-light text-stone mt-3">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-light/30">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-[0.12em] text-espresso border border-stone-light px-4 py-2.5 hover:border-espresso transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
          </button>

          {/* Active filter pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {activeFilters.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 font-inter text-xs text-espresso border border-stone-light px-3 py-1.5"
              >
                {f}
                <button
                  onClick={() => {
                    if (categories.find((c) => c.label === f)) setCategory("all");
                    if (priceRanges.find((p) => p.label === f)) setPriceRange("all");
                  }}
                  className="text-stone hover:text-espresso"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-inter text-xs uppercase tracking-[0.12em] text-stone hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-stone-light font-inter text-xs text-espresso px-4 py-2.5 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-4">
                  Category
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => setCategory(cat.value)}
                        className={`font-inter text-sm transition-colors ${
                          category === cat.value
                            ? "text-espresso font-medium"
                            : "text-stone hover:text-espresso"
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline mb-8" />

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-4">
                  Price
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`font-inter text-sm transition-colors ${
                          priceRange === range.value
                            ? "text-espresso font-medium"
                            : "text-stone hover:text-espresso"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-ivory-dark/95 flex flex-col p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-inter text-xs uppercase tracking-[0.15em] text-espresso">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-espresso" />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-4">Category</h3>
                <ul className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => { setCategory(cat.value); setFilterOpen(false); }}
                        className={`font-inter text-base ${category === cat.value ? "text-espresso font-medium" : "text-stone"}`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline mb-8" />

              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-espresso mb-4">Price</h3>
                <ul className="flex flex-col gap-3">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => { setPriceRange(range.value); setFilterOpen(false); }}
                        className={`font-inter text-base ${priceRange === range.value ? "text-espresso font-medium" : "text-stone"}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-cormorant text-2xl text-stone mb-3">No pieces found</p>
                <p className="font-inter text-xs text-stone/60">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
