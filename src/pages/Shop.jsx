import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/catalog";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-40", label: "Under $40", min: 0, max: 39.99 },
  { id: "40-70", label: "$40 – $70", min: 40, max: 70 },
  { id: "70-plus", label: "$70 & above", min: 70, max: Infinity },
];

const MATERIALS = [
  { id: "all", label: "All materials" },
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = searchParams.get("category") || "all";
  const priceId = searchParams.get("price") || "all";
  const material = searchParams.get("material") || "all";
  const sort = searchParams.get("sort") || "featured";

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const priceRange = PRICE_RANGES.find((p) => p.id === priceId) || PRICE_RANGES[0];
    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < priceRange.min || p.price > priceRange.max) return false;
      if (material !== "all" && !p.variants.some((v) => v.id === material)) return false;
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
  }, [category, priceId, material, sort]);

  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [filtered]);

  const activeCat = CATEGORIES.find((c) => c.slug === category);

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Page header */}
      <div className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <nav className="font-sans text-xs uppercase tracking-[0.22em] text-taupe mb-4">
            <Link to="/" className="hover:text-onyx transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-onyx">{activeCat ? activeCat.title : "Shop All"}</span>
          </nav>
          <h1 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-onyx">
            {activeCat ? activeCat.title : "The Collection"}
          </h1>
          <p className="mt-4 max-w-xl font-sans text-taupe">
            {activeCat
              ? activeCat.description
              : "Demi-fine pieces, considered details, every-day wearability."}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Sort + mobile filter trigger */}
        <div className="flex items-center justify-between border-b border-hairline pb-4 mb-8">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-onyx"
          >
            <SlidersHorizontal size={16} strokeWidth={1.25} />
            Filters
          </button>
          <p className="hidden lg:block font-sans text-xs uppercase tracking-[0.22em] text-taupe">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setParam("sort", e.target.value)}
              className="appearance-none bg-transparent border border-hairline-dark text-onyx pl-4 pr-10 py-2.5 font-sans text-xs uppercase tracking-[0.22em] focus:outline-none focus:border-onyx"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  Sort: {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-taupe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <FilterGroup title="Category">
              <FilterOption
                label="All"
                checked={category === "all"}
                onChange={() => setParam("category", "all")}
              />
              {CATEGORIES.map((cat) => (
                <FilterOption
                  key={cat.slug}
                  label={cat.title}
                  checked={category === cat.slug}
                  onChange={() => setParam("category", cat.slug)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Price">
              {PRICE_RANGES.map((p) => (
                <FilterOption
                  key={p.id}
                  label={p.label}
                  checked={priceId === p.id}
                  onChange={() => setParam("price", p.id)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Material">
              {MATERIALS.map((m) => (
                <FilterOption
                  key={m.id}
                  label={m.label}
                  checked={material === m.id}
                  onChange={() => setParam("material", m.id)}
                />
              ))}
            </FilterGroup>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-onyx mb-3">No pieces match these filters.</p>
                <p className="font-sans text-sm text-taupe mb-6">
                  Try expanding your selection.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchParams({}, { replace: true })}
                  className="font-sans text-xs uppercase tracking-[0.22em] text-gold hover:text-gold-deep transition-colors"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-onyx/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ivory flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-lg uppercase tracking-[0.18em]">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2 -mr-2"
              >
                <X size={20} strokeWidth={1.25} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterGroup title="Category">
                <FilterOption
                  label="All"
                  checked={category === "all"}
                  onChange={() => setParam("category", "all")}
                />
                {CATEGORIES.map((cat) => (
                  <FilterOption
                    key={cat.slug}
                    label={cat.title}
                    checked={category === cat.slug}
                    onChange={() => setParam("category", cat.slug)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Price">
                {PRICE_RANGES.map((p) => (
                  <FilterOption
                    key={p.id}
                    label={p.label}
                    checked={priceId === p.id}
                    onChange={() => setParam("price", p.id)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Material">
                {MATERIALS.map((m) => (
                  <FilterOption
                    key={m.id}
                    label={m.label}
                    checked={material === m.id}
                    onChange={() => setParam("material", m.id)}
                  />
                ))}
              </FilterGroup>
            </div>
            <div className="border-t border-hairline px-6 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-onyx text-ivory py-4 font-sans text-xs uppercase tracking-[0.22em] hover:bg-espresso transition-colors"
              >
                Show {filtered.length} pieces
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="font-sans text-[11px] uppercase tracking-[0.28em] text-onyx mb-4 pb-3 border-b border-hairline">
        {title}
      </h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FilterOption({ label, checked, onChange }) {
  return (
    <li>
      <button
        type="button"
        onClick={onChange}
        className={cn(
          "w-full text-left font-sans text-sm py-1 transition-colors flex items-center gap-3",
          checked ? "text-onyx" : "text-taupe hover:text-onyx",
        )}
      >
        <span
          className={cn(
            "inline-block w-3 h-3 border transition-colors",
            checked
              ? "bg-gold border-gold"
              : "bg-transparent border-hairline-dark",
          )}
        />
        {label}
      </button>
    </li>
  );
}
