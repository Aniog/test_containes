import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"];
const MATERIALS = ["18K Gold Plated"];
const PRICE_RANGES = [
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-noir-line py-6">
      <h3 className="text-[11px] font-semibold uppercase tracking-luxe text-gold">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function CheckRow({ label, checked, onChange, count }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none flex h-4 w-4 items-center justify-center border transition-colors duration-200",
          checked ? "border-gold bg-gold" : "border-noir-line group-hover:border-gold/60"
        )}
      >
        {checked && <span className="pointer-events-none h-1.5 w-1.5 bg-noir" />}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cn(
          "flex-1 text-sm transition-colors duration-200",
          checked ? "text-cream" : "text-sand group-hover:text-cream"
        )}
      >
        {label}
      </span>
      {typeof count === "number" && (
        <span className="text-[11px] text-sand/70">{count}</span>
      )}
    </label>
  );
}

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category");
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory && CATEGORIES.includes(initialCategory) ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category from URL (e.g. footer/category tile links)
  useEffect(() => {
    const category = searchParams.get("category");
    setSelectedCategories(category && CATEGORIES.includes(category) ? [category] : []);
  }, [searchParams]);

  const toggle = (list, setList, value) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      if (selectedCategories.length && !selectedCategories.includes(product.category)) {
        return false;
      }
      if (selectedMaterials.length && !selectedMaterials.includes(product.material)) {
        return false;
      }
      if (selectedPrices.length) {
        const matches = PRICE_RANGES.filter((r) => selectedPrices.includes(r.id)).some((r) =>
          r.test(product)
        );
        if (!matches) return false;
      }
      return true;
    });

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        result = [...result].sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  // Re-scan images whenever the rendered grid changes
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const hasActiveFilters =
    selectedCategories.length || selectedPrices.length || selectedMaterials.length;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const categoryCount = (category) => PRODUCTS.filter((p) => p.category === category).length;
  const priceCount = (range) => PRODUCTS.filter((p) => range.test(p)).length;

  const filterPanel = (
    <div>
      <FilterGroup title="Category">
        {CATEGORIES.map((category) => (
          <CheckRow
            key={category}
            label={category}
            count={categoryCount(category)}
            checked={selectedCategories.includes(category)}
            onChange={() => toggle(selectedCategories, setSelectedCategories, category)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_RANGES.map((range) => (
          <CheckRow
            key={range.id}
            label={range.label}
            count={priceCount(range)}
            checked={selectedPrices.includes(range.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, range.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((material) => (
          <CheckRow
            key={material}
            label={material}
            count={PRODUCTS.length}
            checked={selectedMaterials.includes(material)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials, material)}
          />
        ))}
      </FilterGroup>

      {hasActiveFilters ? (
        <button
          type="button"
          onClick={clearFilters}
          className="mt-6 w-full border border-noir-line py-3 text-[11px] font-semibold uppercase tracking-luxe text-sand transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          Clear all filters
        </button>
      ) : null}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-noir-line bg-noir-soft">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-cream md:text-6xl">
            Shop <span className="italic text-gold-soft">All Pieces</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand">
            Demi-fine essentials in warm 18K gold plate — every piece hypoallergenic,
            nickel-free, and gift-ready.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-noir-line px-5 py-3 text-[11px] font-semibold uppercase tracking-luxe text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {hasActiveFilters ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-noir">
                {selectedCategories.length + selectedPrices.length + selectedMaterials.length}
              </span>
            ) : null}
          </button>

          <p className="hidden text-xs uppercase tracking-widest text-sand lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative">
            <label htmlFor="sort" className="sr-only">
              Sort products
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="appearance-none border border-noir-line bg-noir py-3 pl-5 pr-11 text-[11px] font-semibold uppercase tracking-luxe text-cream transition-colors hover:border-gold focus:border-gold focus:outline-none"
            >
              {SORTS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-noir-line py-24 text-center">
                <p className="font-serif text-2xl italic text-cream/90">
                  No pieces match your filters
                </p>
                <p className="mt-2 text-sm text-sand">
                  Try widening your selection — beautiful things await.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 border border-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-luxe text-gold transition-colors hover:bg-gold hover:text-noir"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn("fixed inset-0 z-[60] lg:hidden", !filtersOpen && "pointer-events-none")}
        aria-hidden={!filtersOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-noir/70 backdrop-blur-sm transition-opacity duration-500",
            filtersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setFiltersOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-full max-w-xs overflow-y-auto border-r border-noir-line bg-noir-soft px-6 pb-10 pt-5 transition-transform duration-500",
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          )}
          role="dialog"
          aria-label="Product filters"
        >
          <div className="flex items-center justify-between border-b border-noir-line pb-4">
            <h2 className="font-serif text-lg font-medium uppercase tracking-[0.2em] text-cream">
              Filters
            </h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="flex h-9 w-9 items-center justify-center text-cream/80 transition-colors hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {filterPanel}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full bg-gold py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors hover:bg-gold-deep"
          >
            Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </button>
        </aside>
      </div>
    </div>
  );
}
