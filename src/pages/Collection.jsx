import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 - $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80+", min: 80, max: Infinity },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const initialCategory = searchParams.get("category") || "";
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategories(cat ? [cat] : []);
  }, [searchParams]);

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return range && p.price >= range.min && p.price < range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    switch (sort) {
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const activeFiltersCount =
    selectedCategories.length +
    selectedPrices.length +
    selectedMaterials.length;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-velmora-linen pb-6">
      <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-velmora-espresso">
        {title}
      </h4>
      <div className="space-y-3">{children}</div>
    </div>
  );

  const Checkbox = ({ label, checked, onChange, count }) => (
    <label className="flex cursor-pointer items-center justify-between text-sm text-velmora-mocha">
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 rounded border-velmora-linen text-velmora-gold focus:ring-velmora-gold"
        />
        {label}
      </span>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe">({count})</span>
      )}
    </label>
  );

  const Filters = () => (
    <div className="space-y-6">
      <FilterGroup title="Category">
        {categories.map((cat) => (
          <Checkbox
            key={cat.id}
            label={cat.label}
            checked={selectedCategories.includes(cat.id)}
            onChange={() => toggle(cat.id, selectedCategories, setSelectedCategories)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {priceRanges.map((range) => (
          <Checkbox
            key={range.id}
            label={range.label}
            checked={selectedPrices.includes(range.id)}
            onChange={() => toggle(range.id, selectedPrices, setSelectedPrices)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        <Checkbox
          label="18K Gold Plated"
          checked={selectedMaterials.includes("18k-gold-plated")}
          onChange={() =>
            toggle("18k-gold-plated", selectedMaterials, setSelectedMaterials)
          }
        />
        <Checkbox
          label="Sterling Silver"
          checked={selectedMaterials.includes("sterling-silver")}
          onChange={() =>
            toggle("sterling-silver", selectedMaterials, setSelectedMaterials)
          }
        />
      </FilterGroup>
    </div>
  );

  return (
    <main className="bg-velmora-cream pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-velmora-taupe">
              The Collection
            </p>
            <h1 className="mt-2 font-serif text-3xl text-velmora-espresso md:text-5xl">
              Shop All Jewelry
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-velmora-linen px-4 py-2 text-xs uppercase tracking-widest text-velmora-espresso transition-colors hover:border-velmora-espresso md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filter
              {activeFiltersCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-velmora-taupe">
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-b border-velmora-linen bg-transparent py-2 text-sm text-velmora-espresso focus:border-velmora-gold focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <div className="sticky top-28">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xs font-medium uppercase tracking-widest text-velmora-espresso">
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-velmora-taupe underline-offset-2 hover:text-velmora-gold hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <Filters />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <p className="mb-4 text-sm text-velmora-taupe">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded border border-velmora-linen bg-velmora-champagne py-20 text-center">
                <p className="font-serif text-xl text-velmora-espresso">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest text-velmora-gold underline-offset-2 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-velmora-espresso/30 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-velmora-cream p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-velmora-espresso">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={24} className="text-velmora-taupe" />
              </button>
            </div>
            <Filters />
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="flex-1 border border-velmora-espresso py-3 text-xs uppercase tracking-widest text-velmora-espresso"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 bg-velmora-gold py-3 text-xs uppercase tracking-widest text-white"
              >
                Show {filtered.length} Pieces
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
