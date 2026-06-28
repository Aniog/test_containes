import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const MATERIALS = ["18K Gold Plated", "Sterling Silver"];
const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-40", label: "Under $40", min: 0, max: 40 },
  { id: "40-70", label: "$40 – $70", min: 40, max: 70 },
  { id: "70-plus", label: "$70 and above", min: 70, max: Infinity },
];
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const categoryParam = searchParams.get("category") || "all";

  const [category, setCategory] = useState(categoryParam);
  const [priceRangeId, setPriceRangeId] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setCategory(categoryParam);
  }, [categoryParam]);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRangeId);
    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (materials.length > 0 && !materials.includes(p.material)) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [category, priceRangeId, materials, sort]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filtered]);

  const setCategoryAndUrl = (id) => {
    setCategory(id);
    const params = new URLSearchParams(searchParams);
    if (id === "all") params.delete("category");
    else params.set("category", id);
    setSearchParams(params, { replace: true });
  };

  const toggleMaterial = (m) => {
    setMaterials((cur) =>
      cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m],
    );
  };

  const clearFilters = () => {
    setCategory("all");
    setPriceRangeId("all");
    setMaterials([]);
    setSearchParams({}, { replace: true });
  };

  const activeCount =
    (category !== "all" ? 1 : 0) +
    (priceRangeId !== "all" ? 1 : 0) +
    materials.length;

  const categoryLabel =
    category === "all"
      ? "All Jewelry"
      : CATEGORIES.find((c) => c.id === category)?.label || "Shop";

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20 md:pb-28 bg-ivory">
      <header className="border-b border-hairline">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05]">
            {categoryLabel}
          </h1>
          <p className="mt-4 text-taupe text-base max-w-xl mx-auto">
            Considered pieces in 18K gold, made to be layered, lived in, and loved.
          </p>
        </div>
      </header>

      <div className="border-b border-hairline">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium text-ink hover:text-champagne transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters {activeCount > 0 && `(${activeCount})`}
          </button>
          <p className="hidden lg:block text-xs text-taupe tracking-wide">
            Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort"
              className="appearance-none bg-transparent border border-hairline pr-9 pl-4 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium text-ink focus:outline-none focus:border-ink cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  Sort: {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
          <aside className="hidden lg:block">
            <FilterPanel
              category={category}
              setCategory={setCategoryAndUrl}
              priceRangeId={priceRangeId}
              setPriceRangeId={setPriceRangeId}
              materials={materials}
              toggleMaterial={toggleMaterial}
              clearFilters={clearFilters}
              activeCount={activeCount}
            />
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl mb-3">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[11px] uppercase tracking-[0.22em] font-medium text-ink border-b border-ink pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} idPrefix="shop" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <aside className="absolute left-0 top-0 h-full w-[85%] max-w-[360px] bg-ivory drawer-in p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl">Filters</h3>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setFiltersOpen(false)}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel
              category={category}
              setCategory={setCategoryAndUrl}
              priceRangeId={priceRangeId}
              setPriceRangeId={setPriceRangeId}
              materials={materials}
              toggleMaterial={toggleMaterial}
              clearFilters={clearFilters}
              activeCount={activeCount}
            />
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-8 w-full bg-ink text-ivory py-4 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-champagne transition-colors"
            >
              Show {filtered.length} results
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}

function FilterPanel({
  category,
  setCategory,
  priceRangeId,
  setPriceRangeId,
  materials,
  toggleMaterial,
  clearFilters,
  activeCount,
}) {
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] uppercase tracking-[0.22em] font-medium text-ink">
          Filter By
        </h3>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-[10px] uppercase tracking-[0.22em] text-taupe hover:text-ink transition-colors underline underline-offset-4"
          >
            Clear
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {[{ id: "all", label: "All" }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label }))].map((c) => (
          <RadioRow
            key={c.id}
            label={c.label}
            checked={category === c.id}
            onChange={() => setCategory(c.id)}
            name="category"
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            label={r.label}
            checked={priceRangeId === r.id}
            onChange={() => setPriceRangeId(r.id)}
            name="price"
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckRow
            key={m}
            label={m}
            checked={materials.includes(m)}
            onChange={() => toggleMaterial(m)}
          />
        ))}
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-taupe mb-3 pb-3 border-b border-hairline">
        {title}
      </p>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function RadioRow({ label, checked, onChange, name }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "relative w-4 h-4 rounded-full border transition-colors",
          checked ? "border-ink" : "border-hairline group-hover:border-taupe",
        )}
      >
        {checked && (
          <span className="absolute inset-[3px] rounded-full bg-ink" />
        )}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-ink group-hover:text-champagne transition-colors">
        {label}
      </span>
    </label>
  );
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "relative w-4 h-4 border transition-colors",
          checked ? "border-ink bg-ink" : "border-hairline group-hover:border-taupe",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 16 16"
            className="absolute inset-0 w-full h-full text-ivory"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8.5L7 12L13 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm text-ink group-hover:text-champagne transition-colors">
        {label}
      </span>
    </label>
  );
}
