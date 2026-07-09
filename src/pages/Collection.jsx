import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { useStrkImages } from "@/hooks/useStrkImages";
import { PRODUCTS, CATEGORIES, MATERIALS, formatPrice } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { SortSelect } from "@/components/ui/SortSelect";
import { Sheet, SheetHeader, SheetContent } from "@/components/ui/Sheet";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const PRICE_RANGES = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $75", min: 50, max: 75 },
  { label: "$75+", min: 75, max: Infinity },
];

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useStrkImages([]);

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const c = searchParams.get("category");
    return c ? [c] : [];
  });
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const c = searchParams.get("category");
    if (c && CATEGORIES.includes(c)) {
      setSelectedCategories([c]);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
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
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
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

  const Filters = ({ mobile = false }) => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-base-800">
          Category
        </h4>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted hover:text-base-800"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="h-4 w-4 rounded border-hairline text-gold focus:ring-gold"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-base-800">
          Material
        </h4>
        <div className="space-y-2">
          {MATERIALS.map((mat) => (
            <label
              key={mat}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted hover:text-base-800"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="h-4 w-4 rounded border-hairline text-gold focus:ring-gold"
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-base-800">
          Price
        </h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.label}
              className="flex cursor-pointer items-center gap-3 text-sm text-muted hover:text-base-800"
            >
              <input
                type="radio"
                name={mobile ? "price-mobile" : "price"}
                checked={selectedPrice?.label === range.label}
                onChange={() => setSelectedPrice(range)}
                className="h-4 w-4 border-hairline text-gold focus:ring-gold"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
              The Collection
            </p>
            <h1 className="font-serif text-3xl font-medium text-base-800 md:text-4xl">
              Shop All Jewelry
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <SortSelect
              value={sort}
              onChange={setSort}
              options={SORT_OPTIONS}
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Desktop filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border border-hairline bg-cream-100 p-6">
              <Filters />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-hairline bg-cream-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-base-800"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-base">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <span className="text-sm text-muted">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </span>
          </div>

          {/* Product grid */}
          <main>
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <span className="text-sm text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-hairline bg-cream-100 py-20 text-center">
                <p className="font-serif text-xl text-base-800">
                  No pieces match your filters.
                </p>
                <p className="mt-2 text-sm text-muted">
                  Try adjusting your selection to see more jewelry.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  className="mt-6"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <Sheet open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} side="left">
        <SheetHeader onClose={() => setMobileFiltersOpen(false)}>
          <h2 className="font-serif text-lg text-base-800">Filters</h2>
        </SheetHeader>
        <SheetContent className="px-6 py-6">
          <Filters mobile />
        </SheetContent>
      </Sheet>
    </div>
  );
}
