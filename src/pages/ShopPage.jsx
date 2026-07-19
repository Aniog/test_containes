import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories, priceRanges, materials } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== "all") {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

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
  }, [selectedCategory, selectedPrice, sortBy]);

  useEffect(() => {
    if (!containerRef.current) return;
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(raf);
  }, [filteredProducts]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const activeFilters =
    (selectedCategory !== "all" ? 1 : 0) + (selectedPrice !== "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24" ref={containerRef}>
      {/* Header */}
      <div className="max-w-site mx-auto px-4 md:px-8 pt-8 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-ink font-light tracking-wide-heading">
          Shop All
        </h1>
        <p className="mt-2 text-warm-gray text-sm font-sans">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-site mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm font-sans text-slate hover:text-ink transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFilters > 0 && (
              <span className="bg-gold text-ink text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {activeFilters}
              </span>
            )}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm font-sans text-slate pr-6 pl-2 py-1 border border-cream focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={cn(
              "w-64 flex-shrink-0 transition-all duration-300",
              "hidden md:block",
              filtersOpen && "!block"
            )}
          >
            {/* Mobile filter overlay */}
            {filtersOpen && (
              <div className="fixed inset-0 bg-ink/40 z-40 md:hidden" onClick={() => setFiltersOpen(false)} />
            )}
            <div className={cn(
              "md:static",
              filtersOpen && "fixed top-0 left-0 h-full w-80 bg-parchment z-50 p-6 overflow-y-auto md:p-0 md:w-64 md:h-auto"
            )}>
              <div className="flex items-center justify-between mb-6 md:mb-4">
                <h3 className="font-serif text-lg text-ink tracking-wide-heading">Filters</h3>
                <button className="md:hidden" onClick={() => setFiltersOpen(false)}>
                  <X size={18} className="text-slate" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">
                  Category
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={cn(
                      "block w-full text-left text-sm font-sans py-1.5 transition-colors",
                      selectedCategory === "all"
                        ? "text-gold font-medium"
                        : "text-warm-gray hover:text-ink"
                    )}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={cn(
                        "block w-full text-left text-sm font-sans py-1.5 transition-colors",
                        selectedCategory === cat.id
                          ? "text-gold font-medium"
                          : "text-warm-gray hover:text-ink"
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">
                  Price
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedPrice("all")}
                    className={cn(
                      "block w-full text-left text-sm font-sans py-1.5 transition-colors",
                      selectedPrice === "all"
                        ? "text-gold font-medium"
                        : "text-warm-gray hover:text-ink"
                    )}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPrice(range.id)}
                      className={cn(
                        "block w-full text-left text-sm font-sans py-1.5 transition-colors",
                        selectedPrice === range.id
                          ? "text-gold font-medium"
                          : "text-warm-gray hover:text-ink"
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">
                  Material
                </h4>
                <div className="space-y-1.5">
                  {materials.map((mat) => (
                    <span key={mat.id} className="block text-sm font-sans text-warm-gray py-1.5">
                      {mat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-gray">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedPrice("all");
                  }}
                  className="mt-4 text-sm text-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
