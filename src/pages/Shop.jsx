import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS = [
  { value: "all", label: "All" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Sets" },
];

const PRICE_OPTIONS = [
  { value: "all", label: "All prices" },
  { value: "under-50", label: "Under $50", test: (p) => p < 50 },
  { value: "50-80", label: "$50 – $80", test: (p) => p >= 50 && p <= 80 },
  { value: "over-80", label: "Over $80", test: (p) => p > 80 },
];

const MATERIAL_OPTIONS = [
  { value: "all", label: "All materials" },
  { value: "gold", label: "18k Gold Plated", test: (m) => m.includes("Gold") },
  { value: "crystal", label: "With Crystal", test: (m) => m.includes("Crystal") },
  { value: "set", label: "Gift Set", test: (m) => m.includes("Gift") },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="py-6 border-b border-hairline">
      <h4 className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {options.map((opt) => (
          <li key={opt.value}>
            <label className="flex items-center gap-3 cursor-pointer text-sm text-ink">
              <input
                type="radio"
                name={title}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="appearance-none w-3.5 h-3.5 rounded-full border border-taupe checked:border-ink checked:bg-ink transition-colors"
              />
              <span className="hover:text-champagne transition-colors">
                {opt.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);

  const containerRef = useRef(null);

  // sync URL when category changes
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (category && category !== "all") {
      next.set("category", category);
    } else {
      next.delete("category");
    }
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // sync state if URL changes (e.g. nav from category tile)
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "all";
    if (urlCategory !== category) {
      setCategory(urlCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === category);
    }
    const priceOpt = PRICE_OPTIONS.find((o) => o.value === price);
    if (priceOpt?.test) list = list.filter((p) => priceOpt.test(p.price));

    const matOpt = MATERIAL_OPTIONS.find((o) => o.value === material);
    if (matOpt?.test) list = list.filter((p) => matOpt.test(p.material));

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, price, material, sort]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [filtered.length, filtered.map((p) => p.id).join(",")]);

  const activeCategoryLabel =
    CATEGORY_OPTIONS.find((c) => c.value === category)?.label || "All";

  return (
    <div ref={containerRef} className="bg-cream text-ink pt-20 md:pt-24">
      {/* Page header */}
      <header className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20 text-center">
          <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-4">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            {category === "all" ? "All Jewelry" : activeCategoryLabel}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-mocha/85 leading-relaxed">
            Hand-finished demi-fine pieces, made to be worn every day and treasured
            for years to come.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs text-taupe">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFilters(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 border border-hairline px-4 py-2.5 hover:border-ink transition-colors"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} /> Filter
            </button>
            <label className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-hairline px-3 py-2 text-[11px] uppercase tracking-widest2 text-ink focus:outline-none focus:border-ink"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-28">
              <FilterGroup
                title="Category"
                options={CATEGORY_OPTIONS}
                value={category}
                onChange={setCategory}
              />
              <FilterGroup
                title="Price"
                options={PRICE_OPTIONS}
                value={price}
                onChange={setPrice}
              />
              <FilterGroup
                title="Material"
                options={MATERIAL_OPTIONS}
                value={material}
                onChange={setMaterial}
              />
            </div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="text-center py-24 border border-hairline">
                <p className="font-serif text-2xl text-ink">No pieces match these filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    setPrice("all");
                    setMaterial("all");
                  }}
                  className="mt-5 text-[11px] uppercase tracking-widest2 text-ink border-b border-ink hover:text-champagne hover:border-champagne pb-1 transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-6 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFilters ? (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFilters(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-cream animate-slideInRight flex flex-col">
            <div className="flex items-center justify-between px-5 py-5 border-b border-hairline">
              <h3 className="font-serif text-2xl">Filter</h3>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setMobileFilters(false)}
                className="p-2"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              <FilterGroup
                title="Category"
                options={CATEGORY_OPTIONS}
                value={category}
                onChange={setCategory}
              />
              <FilterGroup
                title="Price"
                options={PRICE_OPTIONS}
                value={price}
                onChange={setPrice}
              />
              <FilterGroup
                title="Material"
                options={MATERIAL_OPTIONS}
                value={material}
                onChange={setMaterial}
              />
            </div>
            <div className="px-5 py-5 border-t border-hairline">
              <button
                type="button"
                onClick={() => setMobileFilters(false)}
                className={cn(
                  "w-full bg-ink text-cream uppercase tracking-widest2 text-[11px] py-4",
                  "hover:bg-mocha transition-colors"
                )}
              >
                Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
