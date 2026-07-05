import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import { products } from "@/data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const priceRanges = {
  "Under $50": { min: 0, max: 50 },
  "$50 – $80": { min: 50, max: 80 },
  "$80+": { min: 80, max: Infinity },
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const category = searchParams.get("category");
    return category ? [category] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const currentCategory = searchParams.get("category");
  if (
    currentCategory &&
    (selectedCategories.length !== 1 || selectedCategories[0] !== currentCategory)
  ) {
    setSelectedCategories([currentCategory]);
  }

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
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
        selectedPrices.some((label) => {
          const range = priceRanges[label];
          return p.price >= range.min && p.price < range.max;
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

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-ivory min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight">
            Shop All
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-56 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              selectedPrices={selectedPrices}
              togglePrice={togglePrice}
              clearFilters={clearFilters}
              isMobileOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-stonehair px-4 py-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <label
                  htmlFor="sort"
                  className="hidden sm:block text-xs uppercase tracking-widest text-taupe"
                >
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-stonehair px-3 py-2 text-sm focus:outline-none focus:border-espresso"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-sm text-taupe mb-6">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-stonehair bg-cream">
                <p className="font-serif text-2xl mb-3">No pieces found</p>
                <p className="text-taupe text-sm mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
