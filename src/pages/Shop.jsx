import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const CATEGORIES = [
  { value: "all", label: "All Jewelry" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const PRICE_RANGES = [
  { value: "all", label: "All Prices" },
  { value: "0-50", label: "Under $50" },
  { value: "50-75", label: "$50 – $75" },
  { value: "75-120", label: "$75 – $120" },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const handleCategory = (val) => {
    setCategory(val);
    setSearchParams(val !== "all" ? { category: val } : {});
  };

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-xs tracking-widest uppercase text-espresso mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => handleCategory(cat.value)}
                className={`font-inter text-sm transition-colors duration-200 ${
                  category === cat.value
                    ? "text-gold font-medium"
                    : "text-warm-gray hover:text-espresso"
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-inter text-xs tracking-widest uppercase text-espresso mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {PRICE_RANGES.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setPriceRange(range.value)}
                className={`font-inter text-sm transition-colors duration-200 ${
                  priceRange === range.value
                    ? "text-gold font-medium"
                    : "text-warm-gray hover:text-espresso"
                }`}
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
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 border-b border-warm-gray-light">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">
          {CATEGORIES.find((c) => c.value === category)?.label ?? "All Jewelry"}
        </p>
        <h1 className="font-cormorant text-4xl md:text-5xl text-espresso font-light">
          {category === "all" ? "All Jewelry" : CATEGORIES.find((c) => c.value === category)?.label}
        </h1>
        <p className="font-inter text-xs text-warm-gray mt-2">
          {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0 pt-1">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-espresso border border-warm-gray-light px-4 py-2 hover:border-espresso transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-inter text-xs text-warm-gray hidden sm:block">Sort:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-warm-gray-light font-inter text-xs text-espresso px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-cormorant text-3xl text-espresso mb-3">No pieces found</p>
                  <p className="font-inter text-sm text-warm-gray">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-lg px-6 py-8 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-cormorant text-xl uppercase tracking-widest text-espresso">
                Filters
              </h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} strokeWidth={1.5} className="text-warm-gray" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-espresso text-cream font-inter text-xs tracking-widest uppercase py-4"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
