import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const [activeFilters, setActiveFilters] = useState({
    category: searchParams.get("cat") || "",
    price: "",
    material: "",
  });
  const [sortBy, setSortBy] = useState("featured");

  const priceRanges = [
    { label: "Under $40", value: "0-40" },
    { label: "$40 – $60", value: "40-60" },
    { label: "$60 – $80", value: "60-80" },
    { label: "$80+", value: "80-999" },
  ];

  const materials = ["gold", "silver"];

  const toggleFilter = (key, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  const clearFilters = () => {
    setActiveFilters({ category: "", price: "", material: "" });
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeFilters.category && activeFilters.category !== "collections") {
      result = result.filter((p) => p.category === activeFilters.category);
    }

    if (activeFilters.price) {
      const [min, max] = activeFilters.price.split("-").map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (activeFilters.material) {
      result = result.filter((p) => p.material === activeFilters.material);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeFilters, sortBy]);

  const activeCount = Object.values(activeFilters).filter(Boolean).length;

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="section-padding py-8 md:py-12">
        <h1 className="font-heading text-3xl md:text-4xl mb-2">Shop</h1>
        <p className="text-sm text-velmora-muted">
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </p>
      </div>

      <div className="hairline" />

      <div className="section-padding py-4 flex items-center justify-between">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 text-xs tracking-widester uppercase font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters {activeCount > 0 && `(${activeCount})`}
        </button>

        {/* Sort dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 text-xs tracking-widester uppercase font-medium"
          >
            Sort: {sortBy === "featured" ? "Featured" : sortBy === "price-asc" ? "Price: Low to High" : sortBy === "price-desc" ? "Price: High to Low" : "Top Rated"}
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          {sortOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
              <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-stone shadow-lg z-50 min-w-[180px]">
                {[
                  { value: "featured", label: "Featured" },
                  { value: "price-asc", label: "Price: Low to High" },
                  { value: "price-desc", label: "Price: High to Low" },
                  { value: "rating", label: "Top Rated" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs hover:bg-velmora-sand transition-colors ${
                      sortBy === opt.value ? "font-medium" : "text-velmora-muted"
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

      <div className="hairline" />

      <div className="section-padding py-8 md:py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-velmora-muted mb-4">No products match your filters.</p>
            <button onClick={clearFilters} className="btn-outline text-xs">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity ${
          mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-velmora-ink/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-velmora-cream shadow-2xl transition-transform duration-400 ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-velmora-stone/50">
            <h2 className="font-heading text-lg tracking-wide">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 overflow-y-auto h-[calc(100%-120px)]">
            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs tracking-widester uppercase font-medium mb-4">Category</h3>
              <div className="flex flex-col gap-2.5">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-4 h-4 border transition-colors ${
                        activeFilters.category === cat.id
                          ? "bg-velmora-ink border-velmora-ink"
                          : "border-velmora-stone"
                      }`}
                      onClick={() => toggleFilter("category", cat.id)}
                    />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs tracking-widester uppercase font-medium mb-4">Price</h3>
              <div className="flex flex-col gap-2.5">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-4 h-4 border transition-colors ${
                        activeFilters.price === range.value
                          ? "bg-velmora-ink border-velmora-ink"
                          : "border-velmora-stone"
                      }`}
                      onClick={() => toggleFilter("price", range.value)}
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="text-xs tracking-widester uppercase font-medium mb-4">Material</h3>
              <div className="flex flex-col gap-2.5">
                {materials.map((m) => (
                  <label key={m} className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-4 h-4 border transition-colors ${
                        activeFilters.material === m
                          ? "bg-velmora-ink border-velmora-ink"
                          : "border-velmora-stone"
                      }`}
                      onClick={() => toggleFilter("material", m)}
                    />
                    <span className="text-sm capitalize">{m}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-velmora-stone/50 bg-velmora-cream">
            <button onClick={clearFilters} className="btn-outline w-full text-xs mb-3">
              Clear All
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full text-xs"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
