import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);

  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("featured");

  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      list = list.filter((p) => p.price >= min && p.price <= max);
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, priceRange, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val !== "all") setSearchParams({ category: val });
    else setSearchParams({});
  };

  const clearFilters = () => {
    setCategory("all");
    setPriceRange("all");
    setSort("featured");
    setSearchParams({});
  };

  const hasFilters = category !== "all" || priceRange !== "all";

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-[11px] tracking-widest3 uppercase text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-espresso">
            {category !== "all"
              ? categoryOptions.find((c) => c.value === category)?.label || "Shop"
              : "All Jewelry"}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal border border-border px-4 py-2.5 hover:border-espresso transition-colors md:hidden"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>

            {/* Desktop category pills */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categoryOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleCategoryChange(opt.value)}
                  className={`font-sans text-xs tracking-wide px-4 py-2 border transition-colors ${
                    category === opt.value
                      ? "border-espresso bg-espresso text-cream"
                      : "border-border text-charcoal hover:border-espresso"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 font-sans text-[11px] text-stone hover:text-espresso transition-colors"
              >
                <X size={12} />
                Clear
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-sans text-[11px] tracking-widest uppercase text-stone hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none font-sans text-xs text-charcoal bg-transparent border border-border px-4 py-2.5 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-[11px] tracking-widest uppercase text-stone mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block w-full text-left font-sans text-xs py-1.5 transition-colors ${
                        priceRange === opt.value ? "text-espresso font-medium" : "text-stone hover:text-espresso"
                      }`}
                    >
                      {priceRange === opt.value && (
                        <span className="inline-block w-2 h-px bg-gold mr-2 align-middle" />
                      )}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div className="mb-8">
                <h3 className="font-sans text-[11px] tracking-widest uppercase text-stone mb-4">Material</h3>
                <div className="space-y-2">
                  {["18K Gold Plated", "Silver Tone"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <span className="w-3.5 h-3.5 border border-border group-hover:border-espresso transition-colors flex-shrink-0" />
                      <span className="font-sans text-xs text-stone group-hover:text-espresso transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-espresso/50" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-ivory rounded-t-none p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-espresso">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} className="text-stone" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="font-sans text-[11px] tracking-widest uppercase text-stone mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { handleCategoryChange(opt.value); setFilterOpen(false); }}
                        className={`font-sans text-xs px-3 py-2 border transition-colors ${
                          category === opt.value
                            ? "border-espresso bg-espresso text-cream"
                            : "border-border text-charcoal"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-sans text-[11px] tracking-widest uppercase text-stone mb-3">Price</h4>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setPriceRange(opt.value)}
                        className={`font-sans text-xs px-3 py-2 border transition-colors ${
                          priceRange === opt.value
                            ? "border-espresso bg-espresso text-cream"
                            : "border-border text-charcoal"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full bg-espresso text-cream font-sans text-xs tracking-widest uppercase py-3.5"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone italic mb-4">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-widest uppercase text-espresso border-b border-espresso pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
