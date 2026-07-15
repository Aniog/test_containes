import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories, priceRanges, materials } from "@/data/products.js";
import ProductCard from "@/components/ProductCard.jsx";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, options, selected, toggle }) {
  return (
    <div className="mb-8">
      <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.id}
            className="flex items-center gap-3 text-sm text-ink-muted cursor-pointer hover:text-ink"
          >
            <input
              type="checkbox"
              checked={selected.includes(opt.id)}
              onChange={() => toggle(opt.id)}
              className="w-4 h-4 border-ink/30 text-ink focus:ring-gold rounded-none"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [showSort, setShowSort] = useState(false);

  const initialCategory = searchParams.get("category");
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  const toggleFilter = (setter) => (id) => {
    setter((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
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
    let result = [...products];

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.material.includes(m))
      );
    }

    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return p.price >= range.min && p.price <= range.max;
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const FilterPanel = ({ isMobile }) => (
    <div className={`${isMobile ? "" : "pr-8"}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-xs tracking-widest uppercase text-ink-muted hover:text-gold"
          >
            Clear All
          </button>
        )}
      </div>

      <FilterGroup
        title="Category"
        options={categories}
        selected={selectedCategories}
        toggle={toggleFilter(setSelectedCategories)}
      />
      <FilterGroup
        title="Price"
        options={priceRanges}
        selected={selectedPrices}
        toggle={toggleFilter(setSelectedPrices)}
      />
      <FilterGroup
        title="Material"
        options={materials}
        selected={selectedMaterials}
        toggle={toggleFilter(setSelectedMaterials)}
      />
    </div>
  );

  return (
    <div className="pt-24 md:pt-28 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterPanel isMobile={false} />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-ink/10">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm font-semibold tracking-widest uppercase"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 bg-ink text-cream text-[10px] rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <span className="hidden md:block text-sm text-ink-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </span>

              <div className="relative">
                <button
                  onClick={() => setShowSort(!showSort)}
                  className="flex items-center gap-2 text-sm font-semibold tracking-wide"
                >
                  Sort: {sortOptions.find((s) => s.id === sortBy)?.label}
                  <ChevronDown size={14} className={`transition-transform ${showSort ? "rotate-180" : ""}`} />
                </button>
                {showSort && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-cream-light border border-ink/10 shadow-lg z-20">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSortBy(opt.id);
                          setShowSort(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-cream-dark transition-colors ${
                          sortBy === opt.id ? "font-semibold" : ""
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-2">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm font-semibold tracking-widest uppercase text-gold-dark hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="fixed top-0 left-0 z-[70] h-full w-80 max-w-[85vw] bg-cream-light shadow-2xl p-6 overflow-y-auto">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute top-4 right-4 p-2"
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
            <FilterPanel isMobile />
          </aside>
        </>
      )}
    </div>
  );
}
