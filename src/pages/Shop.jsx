import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const MATERIALS = ["18K Gold Plated", "Sterling Silver Base"];

const PRICE_RANGES = [
  { id: "all", label: "All prices", test: () => true },
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Alphabetical" },
];

function FilterSection({ title, children }) {
  return (
    <div className="border-b border-sand py-6">
      <h3 className="text-[11px] uppercase tracking-[0.25em] text-espresso">
        {title}
      </h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function FilterOption({ label, checked, onChange }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center border transition-colors",
          checked
            ? "border-gold bg-gold"
            : "border-sand bg-white group-hover:border-gold",
        )}
      >
        {checked && <Check className="h-3 w-3 text-white" />}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cn(
          "text-sm transition-colors",
          checked ? "text-ink" : "text-espresso group-hover:text-ink",
        )}
      >
        {label}
      </span>
    </label>
  );
}

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";

  const [priceRange, setPriceRange] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const setCategory = (category) => {
    if (category === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category }, { replace: true });
    }
  };

  const toggleMaterial = (material) => {
    setMaterials((current) =>
      current.includes(material)
        ? current.filter((m) => m !== material)
        : [...current, material],
    );
  };

  const activeRange = PRICE_RANGES.find((r) => r.id === priceRange);

  const visibleProducts = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => categoryParam === "All" || p.category === categoryParam,
    ).filter((p) => activeRange.test(p));

    // Material filter: our demi-fine line is 18K gold plated over recycled
    // brass; "Sterling Silver Base" maps to the silver-tone variant.
    if (materials.length === 1 && materials[0] === MATERIALS[1]) {
      list = [];
    }

    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "rating":
        return [...list].sort((a, b) => b.rating - a.rating);
      case "name":
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list;
    }
  }, [categoryParam, activeRange, materials, sort]);

  const activeFilterCount =
    (categoryParam !== "All" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    materials.length;

  const clearAll = () => {
    setCategory("All");
    setPriceRange("all");
    setMaterials([]);
  };

  const filterPanel = (
    <div>
      <FilterSection title="Category">
        {CATEGORIES.map((category) => (
          <FilterOption
            key={category}
            label={category}
            checked={categoryParam === category}
            onChange={() => setCategory(category)}
          />
        ))}
      </FilterSection>
      <FilterSection title="Price">
        {PRICE_RANGES.map((range) => (
          <FilterOption
            key={range.id}
            label={range.label}
            checked={priceRange === range.id}
            onChange={() =>
              setPriceRange(priceRange === range.id ? "all" : range.id)
            }
          />
        ))}
      </FilterSection>
      <FilterSection title="Material">
        {MATERIALS.map((material) => (
          <FilterOption
            key={material}
            label={material}
            checked={materials.includes(material)}
            onChange={() => toggleMaterial(material)}
          />
        ))}
      </FilterSection>
      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 text-xs text-taupe underline underline-offset-4 transition-colors hover:text-gold"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      {/* Page header */}
      <header className="border-b border-sand bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            {categoryParam === "All" ? "The Full Collection" : categoryParam}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
            Shop <em className="italic">Velmora</em>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-espresso">
            Every piece is demi-fine: 18K gold plated over recycled brass,
            hypoallergenic, and made to be worn daily.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-sand pb-5">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-sand px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-espresso transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden text-xs text-taupe lg:block">
            Showing {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <label htmlFor="sort-select" className="sr-only">
              Sort products
            </label>
            <select
              id="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-sand bg-white py-2.5 pl-4 pr-10 text-[11px] uppercase tracking-[0.15em] text-espresso outline-none transition-colors focus:border-gold"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" />
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {visibleProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-dashed border-sand px-6 py-24 text-center">
                <p className="font-serif text-3xl italic text-espresso">
                  Nothing matches just yet
                </p>
                <p className="mt-3 max-w-sm text-sm text-taupe">
                  Try widening your filters — every piece is currently 18K gold
                  plated, so silver-tone styles are coming soon.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {visibleProducts.map((product, i) => (
                  <Reveal key={product.id} delay={Math.min(i, 5) * 70}>
                    <ProductCard product={product} imgIdPrefix="shop" />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[85] lg:hidden",
          filtersOpen ? "" : "pointer-events-none",
        )}
        aria-hidden={!filtersOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/50 transition-opacity duration-300",
            filtersOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 max-h-[82vh] overflow-y-auto rounded-t-2xl bg-cream px-6 pb-10 pt-5 transition-transform duration-500",
            filtersOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="mx-auto h-1 w-10 rounded-full bg-sand" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-ink">Filters</h2>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="p-2 text-espresso"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {filterPanel}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-deep"
          >
            Show {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "piece" : "pieces"}
          </button>
        </div>
      </div>
    </div>
  );
}
