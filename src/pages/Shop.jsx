import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const PRICE_RANGES = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-80", label: "$50 — $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80 & Above", min: 80, max: Infinity },
];

const MATERIALS = [
  { id: "brass", label: "18K Gold Plated Brass", match: "Brass" },
  { id: "silver", label: "18K Gold Plated Silver", match: "Silver" },
  { id: "crystal", label: "Hand-set Crystals", match: "Crystal" },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [priceFilters, setPriceFilters] = useState([]);
  const [materialFilters, setMaterialFilters] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Keep URL in sync
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (category === "all") next.delete("category");
    else next.set("category", category);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // React to external URL changes (e.g. clicking category from home)
  useEffect(() => {
    const urlCat = searchParams.get("category") || "all";
    if (urlCat !== category) setCategory(urlCat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (priceFilters.length > 0) {
      list = list.filter((p) =>
        priceFilters.some((rid) => {
          const range = PRICE_RANGES.find((r) => r.id === rid);
          return range && p.price >= range.min && p.price <= range.max;
        }),
      );
    }

    if (materialFilters.length > 0) {
      list = list.filter((p) =>
        materialFilters.some((mid) => {
          const m = MATERIALS.find((mm) => mm.id === mid);
          return m && p.material.toLowerCase().includes(m.match.toLowerCase());
        }),
      );
    }

    switch (sort) {
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
  }, [category, priceFilters, materialFilters, sort]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filtered]);

  const togglePrice = (id) =>
    setPriceFilters((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  const toggleMaterial = (id) =>
    setMaterialFilters((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const clearAll = () => {
    setCategory("all");
    setPriceFilters([]);
    setMaterialFilters([]);
  };

  const activeFilterCount =
    (category !== "all" ? 1 : 0) + priceFilters.length + materialFilters.length;

  const FilterPanel = (
    <div className="space-y-10">
      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#1A1410] mb-4">
          Category
        </p>
        <ul className="space-y-3 text-sm">
          {[{ id: "all", label: "All Jewelry" }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })), { id: "sets", label: "Gift Sets" }].map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={`flex items-center justify-between w-full text-left transition-colors ${
                  category === c.id ? "text-[#B8924A]" : "text-[#3D332A] hover:text-[#1A1410]"
                }`}
              >
                <span>{c.label}</span>
                {category === c.id && <Check className="w-3.5 h-3.5" strokeWidth={1.5} />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#1A1410] mb-4">
          Price
        </p>
        <ul className="space-y-3 text-sm">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 cursor-pointer text-[#3D332A] hover:text-[#1A1410]">
                <span
                  className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                    priceFilters.includes(r.id)
                      ? "bg-[#B8924A] border-[#B8924A]"
                      : "border-[#1A1410]/40"
                  }`}
                >
                  {priceFilters.includes(r.id) && (
                    <Check className="w-3 h-3 text-[#F7F2EA]" strokeWidth={2.5} />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={priceFilters.includes(r.id)}
                  onChange={() => togglePrice(r.id)}
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#1A1410] mb-4">
          Material
        </p>
        <ul className="space-y-3 text-sm">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <label className="flex items-center gap-3 cursor-pointer text-[#3D332A] hover:text-[#1A1410]">
                <span
                  className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                    materialFilters.includes(m.id)
                      ? "bg-[#B8924A] border-[#B8924A]"
                      : "border-[#1A1410]/40"
                  }`}
                >
                  {materialFilters.includes(m.id) && (
                    <Check className="w-3 h-3 text-[#F7F2EA]" strokeWidth={2.5} />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={materialFilters.includes(m.id)}
                  onChange={() => toggleMaterial(m.id)}
                />
                {m.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.3em] text-[#8B7D6B] hover:text-[#1A1410] underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-[#F7F2EA]">
      {/* Page header */}
      <section className="border-b border-[#1A1410]/10 py-12 md:py-20 bg-[#EFE7DA]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
            The Velmora Collection
          </p>
          <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-[#1A1410] tracking-tight">
            {category === "all"
              ? "Shop all jewelry."
              : CATEGORIES.find((c) => c.id === category)?.label || (category === "sets" ? "Gift Sets" : "Jewelry")}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-[#3D332A] leading-relaxed">
            Hand-finished, 18K gold plated, designed to layer.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#8B7D6B] mb-8">
                Refine
              </p>
              {FilterPanel}
            </div>
          </aside>

          <div className="lg:col-span-9">
            {/* Controls bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#1A1410]/10">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#1A1410]"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.25} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#B8924A] text-[#F7F2EA] text-[10px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <p className="hidden lg:block text-sm text-[#8B7D6B]">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>

              <div className="relative">
                <label htmlFor="sort" className="sr-only">Sort</label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-[#1A1410]/25 hover:border-[#1A1410] pl-5 pr-10 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[#1A1410] cursor-pointer transition-colors"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>Sort: {o.label}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#1A1410]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-3xl text-[#1A1410] mb-3">
                  No pieces match your filters.
                </p>
                <p className="text-sm text-[#8B7D6B] mb-6">
                  Try clearing a filter or browse the full collection.
                </p>
                <button
                  onClick={clearAll}
                  className="bg-[#B8924A] hover:bg-[#8E6E33] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-3 px-8 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[55] lg:hidden">
          <div
            className="absolute inset-0 bg-[#1A1410]/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-[#F7F2EA] p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <p className="text-[11px] uppercase tracking-[0.3em]">Refine</p>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2 -mr-2"
              >
                <X className="w-5 h-5" strokeWidth={1.25} />
              </button>
            </div>
            {FilterPanel}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full bg-[#1A1410] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4"
            >
              View {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
