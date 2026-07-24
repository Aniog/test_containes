import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from "lucide-react";
import { products, categories, priceRanges } from "@/data/products";
import { useCart } from "@/context/CartContext";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const initialCategory = searchParams.get("category") || "";
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((pid) => {
          const range = priceRanges.find((r) => r.id === pid);
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
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrices, sortBy]);

  const activeFiltersCount = selectedCategories.length + selectedPrices.length;

  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide">
          Shop All
        </h1>
        <p className="mt-2 text-sm font-sans text-warm-gray">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      {/* Toolbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 border-t border-b border-divider">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 text-xs font-sans font-medium tracking-wider uppercase text-ink hover:text-accent transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setSortOpen((s) => !s)}
              className="flex items-center gap-2 text-xs font-sans font-medium tracking-wider uppercase text-ink"
            >
              Sort by: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-surface border border-divider shadow-soft z-40">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-sans tracking-wide hover:bg-cream transition-colors ${
                        sortBy === opt.value ? "font-semibold text-accent" : "text-ink"
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
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-sans font-semibold tracking-[0.15em] uppercase">
                Filters
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-[11px] font-sans text-warm-gray hover:text-accent underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-6">
              <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-warm-gray mb-3">
                Category
              </h4>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedCategories.includes(cat.id)
                            ? "bg-accent border-accent"
                            : "border-warm-gray/40 group-hover:border-accent"
                        }`}
                      >
                        {selectedCategories.includes(cat.id) && (
                          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                      />
                      <span className="text-sm font-sans text-ink">{cat.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div>
              <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-warm-gray mb-3">
                Price
              </h4>
              <ul className="space-y-2">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedPrices.includes(range.id)
                            ? "bg-accent border-accent"
                            : "border-warm-gray/40 group-hover:border-accent"
                        }`}
                      >
                        {selectedPrices.includes(range.id) && (
                          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selectedPrices.includes(range.id)}
                        onChange={() => togglePrice(range.id)}
                      />
                      <span className="text-sm font-sans text-ink">{range.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-gray">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 inline-block bg-accent text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-accent-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Quick add overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addItem(product, 1, "gold");
                            }}
                            className="w-full bg-ink/90 backdrop-blur-sm text-cream py-2.5 text-[11px] font-sans font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-ink transition-colors"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-warm-gray">${product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-[70] w-80 max-w-[85vw] bg-cream shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-divider">
              <h3 className="text-xs font-sans font-semibold tracking-[0.15em] uppercase">
                Filters
              </h3>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-5">
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="mb-5 text-[11px] font-sans text-warm-gray hover:text-accent underline"
                >
                  Clear all
                </button>
              )}

              <div className="mb-8">
                <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-warm-gray mb-3">
                  Category
                </h4>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div
                          className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                            selectedCategories.includes(cat.id)
                              ? "bg-accent border-accent"
                              : "border-warm-gray/40"
                          }`}
                        >
                          {selectedCategories.includes(cat.id) && (
                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selectedCategories.includes(cat.id)}
                          onChange={() => toggleCategory(cat.id)}
                        />
                        <span className="text-sm font-sans text-ink">{cat.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-sans font-medium tracking-wider uppercase text-warm-gray mb-3">
                  Price
                </h4>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div
                          className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                            selectedPrices.includes(range.id)
                              ? "bg-accent border-accent"
                              : "border-warm-gray/40"
                          }`}
                        >
                          {selectedPrices.includes(range.id) && (
                            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selectedPrices.includes(range.id)}
                          onChange={() => togglePrice(range.id)}
                        />
                        <span className="text-sm font-sans text-ink">{range.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-divider">
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full bg-accent text-white py-3 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
