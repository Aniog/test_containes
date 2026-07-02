import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

const PRICE_RANGES = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 - $80", min: 50, max: 80 },
  { id: "80plus", label: "$80+", min: 80, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrice, setSelectedPrice] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice("");
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (initialSearch.trim()) {
      const query = initialSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrice) {
      const range = PRICE_RANGES.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
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
  }, [selectedCategories, selectedPrice, sortBy, initialSearch]);

  const activeFiltersCount =
    selectedCategories.length + (selectedPrice ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">
          Category
        </h4>
        <div className="space-y-3">
          {CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-mocha"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="h-4 w-4 rounded border-hairline text-gold focus:ring-gold"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">
          Price
        </h4>
        <div className="space-y-3">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-mocha"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPrice === range.id}
                onChange={() => setSelectedPrice(range.id)}
                className="h-4 w-4 border-hairline text-gold focus:ring-gold"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="w-full"
        >
          Clear Filters ({activeFiltersCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Shop All
          </p>
          <h1 className="font-serif text-3xl font-light sm:text-4xl">
            The Collection
          </h1>
          {initialSearch && (
            <p className="mt-2 text-sm text-mocha">
              Search results for “{initialSearch}”
            </p>
          )}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden w-64 shrink-0 lg:block">
            <FilterContent />
          </aside>

          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-cream p-4 lg:hidden">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-serif text-xl font-light">Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <FilterContent />
            </div>
          )}

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm text-mocha">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 rounded-full bg-gold px-1.5 py-0.5 text-[10px] text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-9 appearance-none rounded-md border border-hairline bg-white pl-3 pr-10 text-sm text-espresso focus:border-gold focus:outline-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mocha" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl font-light">
                  No products found
                </p>
                <p className="mt-2 text-sm text-mocha">
                  Try adjusting your filters.
                </p>
                <Button className="mt-6" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
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
