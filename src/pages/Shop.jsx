import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import { useStrkImages } from "@/hooks/useStrkImages";
import { ProductCard } from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

const priceRanges = [
  { id: "under50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over75", label: "$75+", min: 75.01, max: Infinity },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "priceAsc", label: "Price: Low to High" },
  { id: "priceDesc", label: "Price: High to Low" },
  { id: "rating", label: "Best Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get("category");
    return cat ? [cat] : [];
  });

  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategories(cat ? [cat] : []);
  }, [searchParams]);

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((c) => c !== slug)
        : [...prev, slug]
    );
  };

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const catMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category);
      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id);
          return range && p.price >= range.min && p.price <= range.max;
        });
      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.some((m) =>
          p.materials.toLowerCase().includes(m.toLowerCase())
        );
      return catMatch && priceMatch && materialMatch;
    });

    switch (sortBy) {
      case "priceAsc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const containerRef = useStrkImages([filteredProducts]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-widest text-velmora-base mb-4">
          Category
        </h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 text-sm text-velmora-taupe cursor-pointer hover:text-velmora-base transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug)}
                onChange={() => toggleCategory(cat.slug)}
                className="w-4 h-4 accent-velmora-gold border-velmora-hairline rounded-sm"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest text-velmora-base mb-4">
          Price
        </h4>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 text-sm text-velmora-taupe cursor-pointer hover:text-velmora-base transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.id)}
                onChange={() => togglePrice(range.id)}
                className="w-4 h-4 accent-velmora-gold border-velmora-hairline rounded-sm"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest text-velmora-base mb-4">
          Material
        </h4>
        <label className="flex items-center gap-3 text-sm text-velmora-taupe cursor-pointer hover:text-velmora-base transition-colors">
          <input
            type="checkbox"
            checked={selectedMaterials.includes("gold-plated")}
            onChange={() => toggleMaterial("gold-plated")}
            className="w-4 h-4 accent-velmora-gold border-velmora-hairline rounded-sm"
          />
          18K Gold Plated
        </label>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 bg-velmora-cream min-h-screen">
      <div className="px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p className="text-xs uppercase tracking-widest text-velmora-gold mb-2">
              Explore
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base">
              The Collection
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs uppercase tracking-widest text-velmora-base">
                    Filters
                  </h3>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-velmora-taupe hover:text-velmora-gold transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Mobile filter toggle */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest border border-velmora-hairline px-4 py-2.5"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest border border-velmora-hairline px-4 py-2.5"
                >
                  {sortOptions.find((s) => s.id === sortBy)?.label}
                  <ChevronDown size={14} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-hairline z-20 min-w-[180px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortBy(option.id);
                          setSortOpen(false);
                        }}
                        className={cn(
                          "block w-full text-left px-4 py-2.5 text-sm hover:bg-velmora-sand transition-colors",
                          sortBy === option.id
                            ? "text-velmora-gold"
                            : "text-velmora-base"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Main grid */}
            <div className="flex-1">
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-sm text-velmora-taupe">
                  {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>

                <div className="relative">
                  <button
                    onClick={() => setSortOpen((v) => !v)}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest border border-velmora-hairline px-4 py-2.5"
                  >
                    {sortOptions.find((s) => s.id === sortBy)?.label}
                    <ChevronDown size={14} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-hairline z-20 min-w-[180px]">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSortBy(option.id);
                            setSortOpen(false);
                          }}
                          className={cn(
                            "block w-full text-left px-4 py-2.5 text-sm hover:bg-velmora-sand transition-colors",
                            sortBy === option.id
                              ? "text-velmora-gold"
                              : "text-velmora-base"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-velmora-sand">
                  <p className="font-serif text-2xl mb-3">No products found</p>
                  <p className="text-velmora-taupe text-sm mb-6">
                    Try adjusting your filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-velmora-gold text-white px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors"
                  >
                    Clear Filters
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

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-velmora-base/40 z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-cream z-50 lg:hidden max-h-[80vh] overflow-y-auto rounded-t-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-widest text-velmora-base">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <FilterContent />
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="flex-1 border border-velmora-base text-velmora-base py-3 text-xs uppercase tracking-widest"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 bg-velmora-gold text-white py-3 text-xs uppercase tracking-widest"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
