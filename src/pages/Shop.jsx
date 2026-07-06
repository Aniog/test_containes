import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products as allProducts, categories, materials, formatPrice } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { useImageLoader } from "@/hooks/useImageLoader";
import { cn } from "@/lib/utils";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-70", label: "$50 – $70", min: 50, max: 70 },
  { id: "70-100", label: "$70 – $100", min: 70, max: 100 },
  { id: "over-100", label: "Over $100", min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useImageLoader();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const initialCategory = searchParams.get("category") || "";
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length;

  const filteredProducts = useMemo(() => {
    let list = allProducts.filter((p) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id);
          return p.price >= range.min && p.price < range.max;
        });
      return categoryMatch && materialMatch && priceMatch;
    });

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [selectedCategories, selectedMaterials, selectedPrices, sortBy]);

  const FiltersContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-3 text-xs uppercase tracking-widest text-warm-gray">
          Category
        </h4>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c.id)}
                  onChange={() => toggle(c.id, selectedCategories, setSelectedCategories)}
                  className="h-4 w-4 accent-espresso"
                />
                {c.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-xs uppercase tracking-widest text-warm-gray">
          Material
        </h4>
        <ul className="space-y-2">
          {materials.map((m) => (
            <li key={m.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m.id)}
                  onChange={() => toggle(m.id, selectedMaterials, setSelectedMaterials)}
                  className="h-4 w-4 accent-espresso"
                />
                {m.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-xs uppercase tracking-widest text-warm-gray">
          Price
        </h4>
        <ul className="space-y-2">
          {priceRanges.map((r) => (
            <li key={r.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(r.id)}
                  onChange={() => toggle(r.id, selectedPrices, setSelectedPrices)}
                  className="h-4 w-4 accent-espresso"
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
          The Collection
        </p>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl">
          Shop All Jewelry
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar desktop */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-24 border-t border-hairline pt-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-widest text-warm-gray">
                  Filters
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-warm-gray underline-offset-2 hover:text-gold hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FiltersContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-espresso text-[9px] text-cream">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <p className="hidden text-sm text-warm-gray lg:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 text-xs uppercase tracking-widest"
                >
                  Sort: {sortOptions.find((s) => s.id === sortBy)?.label}
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", sortOpen && "rotate-180")}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full z-20 mt-2 w-48 border border-hairline bg-cream shadow-lg">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSortBy(option.id);
                          setSortOpen(false);
                        }}
                        className={cn(
                          "block w-full px-4 py-2 text-left text-xs uppercase tracking-widest transition-colors hover:bg-linen",
                          sortBy === option.id && "bg-linen font-medium"
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
              <div className="py-20 text-center">
                <p className="font-serif text-xl">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 border-b border-espresso pb-1 text-xs uppercase tracking-widest hover:text-gold"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-cream transition-transform duration-500 ease-out lg:hidden",
          mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-hairline px-4 py-4">
          <h2 className="font-serif text-xl uppercase tracking-widest">Filters</h2>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            aria-label="Close filters"
          >
            <X size={24} />
          </button>
        </div>
        <div className="h-[calc(100vh-70px)] overflow-y-auto p-6">
          <FiltersContent />
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="flex-1 bg-espresso py-3 text-xs uppercase tracking-widest text-cream"
            >
              Show {filteredProducts.length} Results
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="flex-1 border border-hairline py-3 text-xs uppercase tracking-widest"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
