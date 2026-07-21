import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

const PRICE_RANGES = [
  { id: "all", label: "All Prices", test: () => true },
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const MATERIALS = [
  { id: "all", label: "All Finishes" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Silver Tone" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [priceRange, setPriceRange] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    const range = PRICE_RANGES.find((r) => r.id === priceRange);
    if (range) list = list.filter(range.test);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, priceRange, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, material, sort]);

  const setCategory = (value) => {
    if (value === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: value }, { replace: true });
    }
  };

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.id === category)?.label || "All Jewelry";

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-line py-6 last:border-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink">
        {title}
      </p>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  );

  const RadioRow = ({ name, checked, onChange, label }) => (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-bronze transition-colors hover:text-ink">
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
          checked ? "border-gold" : "border-line"
        }`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-gold" />}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );

  const filterPanel = (
    <>
      <FilterGroup title="Category">
        <RadioRow
          name="category"
          checked={category === "all"}
          onChange={() => setCategory("all")}
          label="All Jewelry"
        />
        {CATEGORIES.map((c) => (
          <RadioRow
            key={c.id}
            name="category"
            checked={category === c.id}
            onChange={() => setCategory(c.id)}
            label={c.label}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            name="price"
            checked={priceRange === r.id}
            onChange={() => setPriceRange(r.id)}
            label={r.label}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            name="material"
            checked={material === m.id}
            onChange={() => setMaterial(m.id)}
            label={m.label}
          />
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      {/* Page header */}
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            The Collection
          </p>
          <h1
            id="shop-title"
            className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl"
          >
            {activeCategoryLabel}
          </h1>
          <p
            id="shop-sub"
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-bronze"
          >
            Demi-fine gold jewelry — earrings, necklaces, and huggies plated in
            18k gold, priced for everyday treasure.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink lg:hidden"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-taupe lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="appearance-none border border-line bg-cream px-4 py-2.5 pr-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink outline-none focus:border-gold"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold-deep"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterPanel}</div>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-4 border border-line bg-cream py-24 text-center">
                <p className="font-serif text-3xl text-ink">No pieces found</p>
                <p className="text-sm text-bronze">
                  Try widening your filters to see more of the collection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={i * 60}>
                    <ProductCard product={product} idPrefix="shop" index={i} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          filtersOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setFiltersOpen(false)}
          className={`drawer-overlay absolute inset-0 bg-ink/50 ${
            filtersOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`drawer-panel absolute left-0 top-0 h-full w-full max-w-xs overflow-y-auto bg-ivory px-6 py-6 ${
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p className="font-serif text-xl font-semibold uppercase tracking-[0.2em] text-ink">
              Filters
            </p>
            <button
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="p-2 text-ink/60 hover:text-ink"
            >
              <X size={20} />
            </button>
          </div>
          {filterPanel}
          <button
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full bg-gold py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory hover:bg-gold-deep"
          >
            View {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </button>
        </aside>
      </div>
    </div>
  );
}
