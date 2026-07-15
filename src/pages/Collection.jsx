import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = ["earrings", "necklaces", "huggies", "sets"];
const materials = ["18k-gold-plated", "sterling-silver"];

const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const c = searchParams.get("category");
    return c ? [c] : [];
  });
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    const c = searchParams.get("category");
    if (c) setSelectedCategories([c]);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPrice) {
      list = list.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategories, selectedMaterials, selectedPrice, sortBy]);

  const toggleCategory = (c) => {
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice(null);
    setSearchParams({});
  };

  const activeFilterCount =
    selectedCategories.length +
    selectedMaterials.length +
    (selectedPrice ? 1 : 0);

  const FilterContent = () => (
    <div className="flex flex-col gap-7">
      {/* Category */}
      <div>
        <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-velmora-dark">
          Category
        </h4>
        <div className="mt-3 flex flex-col gap-2">
          {categories.map((c) => (
            <label
              key={c}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <span
                className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                  selectedCategories.includes(c)
                    ? "border-velmora-dark bg-velmora-dark"
                    : "border-velmora-hairline"
                }`}
              >
                {selectedCategories.includes(c) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(c)}
                onChange={() => toggleCategory(c)}
              />
              <span className="font-sans text-sm capitalize text-velmora-muted">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-velmora-dark">
          Price
        </h4>
        <div className="mt-3 flex flex-col gap-2">
          {priceRanges.map((r) => (
            <label
              key={r.label}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                  selectedPrice?.label === r.label
                    ? "border-velmora-dark bg-velmora-dark"
                    : "border-velmora-hairline"
                }`}
              >
                {selectedPrice?.label === r.label && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              <input
                type="radio"
                name="price"
                className="sr-only"
                checked={selectedPrice?.label === r.label}
                onChange={() => setSelectedPrice(r)}
              />
              <span className="font-sans text-sm text-velmora-muted">
                {r.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-[11px] font-semibold uppercase tracking-widest text-velmora-dark">
          Material
        </h4>
        <div className="mt-3 flex flex-col gap-2">
          {materials.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <span
                className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                  selectedMaterials.includes(m)
                    ? "border-velmora-dark bg-velmora-dark"
                    : "border-velmora-hairline"
                }`}
              >
                {selectedMaterials.includes(m) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggleMaterial(m)}
              />
              <span className="font-sans text-sm capitalize text-velmora-muted">
                {m.replace(/-/g, " ")}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="self-start font-sans text-xs uppercase tracking-widest text-velmora-muted underline underline-offset-4 transition-colors hover:text-velmora-dark"
        >
          Clear all
        </button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-medium text-velmora-dark md:text-4xl">
          Shop All
        </h1>
        <p className="mt-2 font-sans text-sm text-velmora-muted">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} found
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-56 flex-shrink-0 md:block">
          <FilterContent />
        </aside>

        {/* Main grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="mb-6 flex items-center justify-between border-b border-velmora-hairline pb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-velmora-dark text-[9px] text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="relative ml-auto">
              <button
                onClick={() => setSortOpen((s) => !s)}
                className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark"
              >
                Sort by: {sortOptions.find((s) => s.value === sortBy)?.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
                />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full z-20 mt-2 w-48 border border-velmora-hairline bg-white shadow-sm">
                  {sortOptions.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => {
                        setSortBy(s.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left font-sans text-xs transition-colors ${
                        sortBy === s.value
                          ? "bg-velmora-warm-gray font-medium text-velmora-dark"
                          : "text-velmora-muted hover:bg-velmora-warm-gray"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active filters */}
          {activeFilterCount > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {selectedCategories.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-full border border-velmora-hairline px-3 py-1 font-sans text-[11px] uppercase tracking-wider text-velmora-dark"
                >
                  {c}
                  <button
                    onClick={() => toggleCategory(c)}
                    className="ml-1"
                    aria-label={`Remove ${c}`}
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
              {selectedMaterials.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-1 rounded-full border border-velmora-hairline px-3 py-1 font-sans text-[11px] uppercase tracking-wider text-velmora-dark"
                >
                  {m.replace(/-/g, " ")}
                  <button
                    onClick={() => toggleMaterial(m)}
                    className="ml-1"
                    aria-label={`Remove ${m}`}
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
              {selectedPrice && (
                <span className="inline-flex items-center gap-1 rounded-full border border-velmora-hairline px-3 py-1 font-sans text-[11px] uppercase tracking-wider text-velmora-dark">
                  {selectedPrice.label}
                  <button
                    onClick={() => setSelectedPrice(null)}
                    className="ml-1"
                    aria-label="Remove price filter"
                  >
                    <X size={10} />
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-sans text-sm text-velmora-muted">
                No products match your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-3 font-sans text-xs uppercase tracking-widest text-velmora-gold underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-velmora-dark/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="fixed bottom-0 left-0 right-0 z-[70] max-h-[80vh] overflow-y-auto rounded-t-xl bg-velmora-cream p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium uppercase tracking-widest text-velmora-dark">
                Filters
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-velmora-dark py-3.5 font-sans text-xs font-medium uppercase tracking-widest text-white"
            >
              Show {filtered.length} Results
            </button>
          </aside>
        </>
      )}
    </div>
  );
}
