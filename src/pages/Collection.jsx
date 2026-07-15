import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES, PRICE_RANGES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

const MATERIALS = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
];

function Checkbox({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center justify-between gap-2 py-1.5 cursor-pointer group">
      <span className="flex items-center gap-2.5">
        <span
          className={cn(
            "w-4 h-4 flex-shrink-0 border transition-colors flex items-center justify-center",
            checked ? "bg-sable border-sable" : "border-sable/30 group-hover:border-sable/60"
          )}
        >
          {checked && (
            <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 6.5 5 9.5 10 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="font-sans text-sm text-sable/85 group-hover:text-sable">{label}</span>
      </span>
      {count !== undefined && (
        <span className="text-xs text-taupe font-sans">{count}</span>
      )}
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
    </label>
  );
}

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sable/15 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between mb-1"
        aria-expanded={open}
      >
        <span className="font-sans text-[11px] tracking-widest2 uppercase font-medium text-sable">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-sable transition-transform duration-300",
            open ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const ref = useRef(null);

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [activePrices, setActivePrices] = useState([]);
  const [activeMaterials, setActiveMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  // sync URL
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (activeCategory === "all") next.delete("category");
    else next.set("category", activeCategory);
    setSearchParams(next, { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (activePrices.length > 0) {
      list = list.filter((p) =>
        activePrices.some((id) => {
          const r = PRICE_RANGES.find((x) => x.id === id);
          return r && p.price >= r.min && p.price < r.max;
        })
      );
    }
    if (activeMaterials.length > 0) {
      list = list.filter((p) => activeMaterials.includes("gold") ? p.tone === "gold" : p.tone !== "gold");
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "newest") list.reverse();
    return list;
  }, [activeCategory, activePrices, activeMaterials, sort]);

  const toggle = (arr, setArr, value) => {
    setArr(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const clearAll = () => {
    setActiveCategory("all");
    setActivePrices([]);
    setActiveMaterials([]);
  };

  const activeSort = SORTS.find((s) => s.id === sort);
  const categoryLabel = activeCategory === "all" ? "All Jewelry" : CATEGORIES.find((c) => c.id === activeCategory)?.label;

  return (
    <div ref={ref} className="bg-ivory">
      {/* Header */}
      <section className="container-page pt-28 sm:pt-36 pb-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">The Collection</span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light mt-4 text-sable leading-[1.05]">
            {categoryLabel}
          </h1>
          <p className="mt-5 text-taupe font-sans text-sm sm:text-base font-light">
            Quiet, considered demi-fine jewelry. Hand-finished, made in small
            batches, and given to be remembered.
          </p>
        </div>
      </section>

      <div className="hairline" />

      {/* Toolbar */}
      <div className="container-page py-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setFilterOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 font-sans text-[11px] tracking-widest2 uppercase text-sable"
        >
          <SlidersHorizontal className="w-4 h-4" /> Filter
        </button>
        <span className="hidden lg:inline text-xs text-taupe font-sans">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </span>

        {/* Category chips (desktop inline) */}
        <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 font-sans text-[11px] tracking-widest2 uppercase transition-colors",
              activeCategory === "all" ? "text-sable border-b border-sable" : "text-taupe hover:text-sable"
            )}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={cn(
                "px-4 py-2 font-sans text-[11px] tracking-widest2 uppercase transition-colors",
                activeCategory === c.id ? "text-sable border-b border-sable" : "text-taupe hover:text-sable"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setSortOpen((o) => !o)}
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-widest2 uppercase text-sable"
          >
            Sort · {activeSort.label}
            <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", sortOpen && "rotate-180")} />
          </button>
          {sortOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} />
              <div className="absolute right-0 top-full mt-2 z-40 bg-ivory border border-sable/15 shadow-card min-w-[200px] py-2">
                {SORTS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSort(s.id);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 font-sans text-xs hover:bg-ivory-200",
                      sort === s.id ? "text-sable" : "text-sable/70"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="hairline" />

      {/* Body */}
      <div className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-sans text-[11px] tracking-widest2 uppercase font-medium text-sable">
                  Refine
                </h2>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] tracking-widest2 uppercase text-taupe hover:text-sable transition-colors"
                >
                  Clear all
                </button>
              </div>

              <FilterGroup title="Category">
                <Checkbox
                  checked={activeCategory === "all"}
                  onChange={() => setActiveCategory("all")}
                  label="All"
                  count={PRODUCTS.length}
                />
                {CATEGORIES.map((c) => (
                  <Checkbox
                    key={c.id}
                    checked={activeCategory === c.id}
                    onChange={() => setActiveCategory(c.id)}
                    label={c.label}
                    count={PRODUCTS.filter((p) => p.category === c.id).length}
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Price">
                {PRICE_RANGES.map((r) => (
                  <Checkbox
                    key={r.id}
                    checked={activePrices.includes(r.id)}
                    onChange={() => toggle(activePrices, setActivePrices, r.id)}
                    label={r.label}
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Material">
                {MATERIALS.map((m) => (
                  <Checkbox
                    key={m.id}
                    checked={activeMaterials.includes(m.id)}
                    onChange={() => toggle(activeMaterials, setActiveMaterials, m.id)}
                    label={m.label}
                  />
                ))}
              </FilterGroup>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          <div
            className={cn(
              "lg:hidden fixed inset-0 z-[55] transition-opacity duration-300",
              filterOpen ? "pointer-events-auto" : "pointer-events-none"
            )}
            aria-hidden={!filterOpen}
          >
            <div
              className={cn(
                "absolute inset-0 bg-sable/40 transition-opacity",
                filterOpen ? "opacity-100" : "opacity-0"
              )}
              onClick={() => setFilterOpen(false)}
            />
            <div
              className={cn(
                "absolute top-0 left-0 h-full w-[88%] max-w-sm bg-ivory shadow-drawer transition-transform duration-500 flex flex-col",
                filterOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="flex items-center justify-between h-16 px-5 border-b border-sable/10">
                <h2 className="font-serif text-xl text-sable">Refine</h2>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setFilterOpen(false)}
                  className="p-2 text-sable"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5">
                <FilterGroup title="Category">
                  <Checkbox
                    checked={activeCategory === "all"}
                    onChange={() => setActiveCategory("all")}
                    label="All"
                    count={PRODUCTS.length}
                  />
                  {CATEGORIES.map((c) => (
                    <Checkbox
                      key={c.id}
                      checked={activeCategory === c.id}
                      onChange={() => setActiveCategory(c.id)}
                      label={c.label}
                      count={PRODUCTS.filter((p) => p.category === c.id).length}
                    />
                  ))}
                </FilterGroup>
                <FilterGroup title="Price">
                  {PRICE_RANGES.map((r) => (
                    <Checkbox
                      key={r.id}
                      checked={activePrices.includes(r.id)}
                      onChange={() => toggle(activePrices, setActivePrices, r.id)}
                      label={r.label}
                    />
                  ))}
                </FilterGroup>
                <FilterGroup title="Material">
                  {MATERIALS.map((m) => (
                    <Checkbox
                      key={m.id}
                      checked={activeMaterials.includes(m.id)}
                      onChange={() => toggle(activeMaterials, setActiveMaterials, m.id)}
                      label={m.label}
                    />
                  ))}
                </FilterGroup>
              </div>
              <div className="border-t border-sable/10 p-5">
                <button
                  type="button"
                  onClick={() => setFilterOpen(false)}
                  className="btn-primary w-full"
                >
                  Show {filtered.length} pieces
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-sable">No pieces match those filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="btn-outline mt-6 inline-flex"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-14">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
