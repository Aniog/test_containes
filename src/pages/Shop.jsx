import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(
    categories.find((c) => c.toLowerCase() === initialCategory) || "All"
  );
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter((p) => {
      const catMatch =
        activeCategory === "All" ||
        p.category === activeCategory.toLowerCase();
      const priceMatch =
        p.price >= activePriceRange.min && p.price <= activePriceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-warm-gray-light bg-ivory">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Browse
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso font-light">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-warm-gray mt-2">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                priceRanges={priceRanges}
                activePriceRange={activePriceRange}
                setActivePriceRange={setActivePriceRange}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-espresso border border-warm-gray-light px-4 py-2.5 hover:border-espresso transition-colors duration-200"
              >
                <SlidersHorizontal size={12} strokeWidth={1.5} />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-xs text-warm-gray uppercase tracking-widest hidden sm:block">
                  Sort:
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-warm-gray-light font-sans text-xs text-espresso uppercase tracking-widest px-4 py-2.5 pr-8 focus:outline-none focus:border-espresso cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={12}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div
              ref={containerRef}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {filtered.length > 0 ? (
                filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-serif text-2xl text-espresso font-light mb-2">
                    No pieces found
                  </p>
                  <p className="font-sans text-sm text-warm-gray">
                    Try adjusting your filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-lg p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-sans text-xs uppercase tracking-widest text-espresso">
                Filters
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-warm-gray" />
              </button>
            </div>
            <FilterPanel
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={(c) => {
                setActiveCategory(c);
                setFilterOpen(false);
              }}
              priceRanges={priceRanges}
              activePriceRange={activePriceRange}
              setActivePriceRange={(r) => {
                setActivePriceRange(r);
                setFilterOpen(false);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

function FilterPanel({
  categories,
  activeCategory,
  setActiveCategory,
  priceRanges,
  activePriceRange,
  setActivePriceRange,
}) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[10px] uppercase tracking-widest text-warm-gray mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
                  activeCategory === cat
                    ? "text-espresso font-medium"
                    : "text-warm-gray hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-warm-gray-light" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-[10px] uppercase tracking-widest text-warm-gray mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceRange(range)}
                className={`font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
                  activePriceRange.label === range.label
                    ? "text-espresso font-medium"
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
}
