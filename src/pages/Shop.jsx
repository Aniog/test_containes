import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, Check } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/lib/useStrkImages";
import { cn } from "@/lib/utils";

const categoryOptions = ["Earrings", "Necklaces", "Huggies"];
const materialOptions = ["18K Gold Plated"];
const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState("featured");

  const selectedCategories = useMemo(() => {
    const cat = searchParams.get("category");
    return cat ? [cat] : [];
  }, [searchParams]);

  const selectedPrice = searchParams.get("price") || "";
  const selectedMaterial = searchParams.get("material") || "";

  const containerRef = useStrkImages([selectedCategories, selectedPrice, selectedMaterial, sort]);

  const toggleCategory = (cat) => {
    const next = new URLSearchParams(searchParams);
    const current = next.get("category");
    if (current === cat) {
      next.delete("category");
    } else {
      next.set("category", cat);
    }
    setSearchParams(next);
  };

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearAll = () => {
    setSearchParams(new URLSearchParams());
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
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
  }, [selectedCategories, selectedPrice, selectedMaterial, sort]);

  const hasFilters = selectedCategories.length > 0 || selectedPrice || selectedMaterial;

  // Sync category from URL on mount (e.g. navigating from category tile)
  useEffect(() => {
    // no-op; derived from searchParams directly
  }, []);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">Category</h3>
        <ul className="mt-4 space-y-3">
          {categoryOptions.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                onClick={() => toggleCategory(cat)}
                className="flex items-center gap-2.5 font-sans text-sm text-stone transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    selectedCategories.includes(cat) ? "border-gold bg-gold" : "border-hairline"
                  )}
                >
                  {selectedCategories.includes(cat) && <Check size={11} className="text-cream" />}
                </span>
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">Price</h3>
        <ul className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <button
                type="button"
                onClick={() => setParam("price", selectedPrice === range.label ? "" : range.label)}
                className="flex items-center gap-2.5 font-sans text-sm text-stone transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    selectedPrice === range.label ? "border-gold bg-gold" : "border-hairline"
                  )}
                >
                  {selectedPrice === range.label && <Check size={11} className="text-cream" />}
                </span>
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">Material</h3>
        <ul className="mt-4 space-y-3">
          {materialOptions.map((mat) => (
            <li key={mat}>
              <button
                type="button"
                onClick={() => setParam("material", selectedMaterial === mat ? "" : mat)}
                className="flex items-center gap-2.5 font-sans text-sm text-stone transition-colors hover:text-ink"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center border transition-colors",
                    selectedMaterial === mat ? "border-gold bg-gold" : "border-hairline"
                  )}
                >
                  {selectedMaterial === mat && <Check size={11} className="text-cream" />}
                </span>
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="font-sans text-[11px] uppercase tracking-widest2 text-gold transition-colors hover:text-gold-deep"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      {/* Header */}
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-editorial px-5 py-12 text-center md:px-10 md:py-16">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">All Jewelry</h1>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-stone">
            Demi-fine gold pieces, hand-finished and made to be treasured.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-editorial px-5 py-10 md:px-10">
        {/* Toolbar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-hairline px-4 py-2.5 font-sans text-[11px] uppercase tracking-widest2 text-ink lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <p className="hidden font-sans text-sm text-stone lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="hidden font-sans text-[11px] uppercase tracking-widest2 text-stone sm:block">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-hairline bg-cream px-4 py-2.5 font-sans text-xs text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 text-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-cream p-6" style={{ animation: "slideInLeft 0.4s cubic-bezier(0.22, 1, 0.36, 1) both" }}>
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-ink" />
              </button>
            </div>
            <div className="mt-6">
              <FilterContent />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
