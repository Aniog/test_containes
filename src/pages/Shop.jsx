import { useEffect, useRef, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { ProductCardById } from "@/components/ui/ProductCardById";
import { Footer } from "@/components/Footer";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const categoryFilters = [
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceFilters = [
  { value: "under50", label: "Under $50", min: 0, max: 50 },
  { value: "50to80", label: "$50 — $80", min: 50, max: 80 },
  { value: "over80", label: "Over $80", min: 80, max: Infinity },
];

export function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const category = searchParams.get("category");
    return category ? [category] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategories, selectedPrices, sortBy]);

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const togglePrice = (value) => {
    setSelectedPrices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((priceKey) => {
          const range = priceFilters.find((f) => f.value === priceKey);
          return range && p.price >= range.min && p.price < range.max;
        })
      );
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
  }, [selectedCategories, selectedPrices, sortBy]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Category</h4>
        <div className="space-y-3">
          {categoryFilters.map((filter) => (
            <label key={filter.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(filter.value)}
                onChange={() => toggleCategory(filter.value)}
                className="w-4 h-4 border-taupe text-gold focus:ring-gold rounded-none"
              />
              <span className="text-sm text-espresso group-hover:text-gold transition-colors">
                {filter.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Price</h4>
        <div className="space-y-3">
          {priceFilters.map((filter) => (
            <label key={filter.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(filter.value)}
                onChange={() => togglePrice(filter.value)}
                className="w-4 h-4 border-taupe text-gold focus:ring-gold rounded-none"
              />
              <span className="text-sm text-espresso group-hover:text-gold transition-colors">
                {filter.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Material</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked
            readOnly
            className="w-4 h-4 border-taupe text-gold focus:ring-gold rounded-none"
          />
          <span className="text-sm text-espresso">18K Gold Plated</span>
        </label>
      </div>

      {(selectedCategories.length > 0 || selectedPrices.length > 0) && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-stone hover:text-espresso border-b border-transparent hover:border-espresso transition-all"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-taupe text-xs uppercase tracking-widest text-espresso"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filter & Sort
            </button>
            <span className="text-sm text-stone">{filteredProducts.length} products</span>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-8 pb-4 border-b border-taupe">
              <span className="text-sm text-stone">{filteredProducts.length} products</span>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-xs uppercase tracking-widest text-stone">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-taupe px-4 py-2 text-sm text-espresso focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.some((p) => p.id === "vivid-aura-jewels") && (
                  <ProductCardById productId="vivid-aura-jewels" />
                )}
                {filteredProducts.some((p) => p.id === "majestic-flora-nectar") && (
                  <ProductCardById productId="majestic-flora-nectar" />
                )}
                {filteredProducts.some((p) => p.id === "golden-sphere-huggies") && (
                  <ProductCardById productId="golden-sphere-huggies" />
                )}
                {filteredProducts.some((p) => p.id === "amber-lace-earrings") && (
                  <ProductCardById productId="amber-lace-earrings" />
                )}
                {filteredProducts.some((p) => p.id === "royal-heirloom-set") && (
                  <ProductCardById productId="royal-heirloom-set" />
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso mb-2">No products found</p>
                <p className="text-sm text-stone mb-6">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-gold text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileFiltersOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-espresso/40 transition-opacity",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-cream p-6 rounded-t-2xl transform transition-transform duration-300 max-h-[80vh] overflow-y-auto",
            mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl text-espresso">Filters</h3>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
          <div className="mt-8 pt-6 border-t border-taupe">
            <label className="block text-xs uppercase tracking-widest text-stone mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-transparent border border-taupe px-4 py-3 text-sm text-espresso focus:outline-none focus:border-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="w-full mt-6 bg-gold text-white py-4 uppercase text-xs tracking-widest hover:bg-gold-dark transition-colors"
          >
            Show {filteredProducts.length} Products
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
