import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, materials, priceRanges, getProductById } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "A → Z" },
];

function sortProducts(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      // featured: bestsellers first
      return sorted.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
  }
}

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category");
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Sync URL ?category= when category selection changes
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (selectedCategories.length === 1) {
      next.set("category", selectedCategories[0]);
    } else {
      next.delete("category");
    }
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const toggle = (list, setList) => (value) => {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  };

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPriceRanges.length > 0) {
      list = list.filter((p) =>
        selectedPriceRanges.some((id) => {
          const range = priceRanges.find((r) => r.id === id);
          if (!range) return false;
          return p.price >= range.min && p.price < range.max;
        })
      );
    }
    return sortProducts(list, sort);
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, sort]);

  const activeFilterCount =
    selectedCategories.length + selectedPriceRanges.length + selectedMaterials.length;

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSelectedMaterials([]);
  };

  return (
    <div className="bg-bone pt-24 md:pt-28">
      {/* Page header */}
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12 pb-8 md:pb-12 border-b border-hairline">
        <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold">
          The Edit
        </p>
        <h1 className="mt-3 font-serif font-light text-4xl md:text-6xl text-ink">
          Shop All
        </h1>
        <p className="mt-4 text-sm md:text-base font-light text-cocoa max-w-xl">
          Demi-fine jewelry in considered small batches. Filter by category, material, or price — every piece is hand-finished and ready to be yours.
        </p>
      </div>

      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between py-5 border-b border-hairline sticky top-16 md:top-20 bg-bone/95 backdrop-blur-sm z-30">
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide-3 font-medium text-ink hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 w-5 h-5 inline-flex items-center justify-center bg-ink text-bone text-[9px]">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden md:block text-[11px] uppercase tracking-wide-2 text-cocoa">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="sr-only">Sort by</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-[11px] uppercase tracking-wide-3 font-medium text-ink border border-hairline px-3 py-2 focus:outline-none focus:border-ink cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 md:py-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3">
            <FilterGroup
              title="Category"
              options={categories.map((c) => ({ value: c.id, label: c.name }))}
              selected={selectedCategories}
              onToggle={(v) => toggle(selectedCategories, setSelectedCategories)(v)}
            />
            <FilterGroup
              title="Price"
              options={priceRanges.map((r) => ({ value: r.id, label: r.label }))}
              selected={selectedPriceRanges}
              onToggle={(v) => toggle(selectedPriceRanges, setSelectedPriceRanges)(v)}
            />
            <FilterGroup
              title="Material"
              options={materials.map((m) => ({ value: m, label: m }))}
              selected={selectedMaterials}
              onToggle={(v) => toggle(selectedMaterials, setSelectedMaterials)(v)}
            />
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="mt-2 text-[11px] uppercase tracking-wide-2 text-cocoa hover:text-ink underline-offset-4 hover:underline"
              >
                Clear all
              </button>
            )}
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">Nothing here yet</p>
                <p className="mt-2 text-sm text-cocoa">
                  Try removing a filter to see more pieces.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-[11px] uppercase tracking-wide-3 font-medium text-ink underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!filterOpen}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={() => setFilterOpen(false)} />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[88%] max-w-sm bg-bone shadow-drawer flex flex-col transition-transform duration-500 ease-elegant",
            filterOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
            <h2 className="font-serif text-xl text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
            <FilterGroup
              title="Category"
              options={categories.map((c) => ({ value: c.id, label: c.name }))}
              selected={selectedCategories}
              onToggle={(v) => toggle(selectedCategories, setSelectedCategories)(v)}
            />
            <FilterGroup
              title="Price"
              options={priceRanges.map((r) => ({ value: r.id, label: r.label }))}
              selected={selectedPriceRanges}
              onToggle={(v) => toggle(selectedPriceRanges, setSelectedPriceRanges)(v)}
            />
            <FilterGroup
              title="Material"
              options={materials.map((m) => ({ value: m, label: m }))}
              selected={selectedMaterials}
              onToggle={(v) => toggle(selectedMaterials, setSelectedMaterials)(v)}
            />
          </div>
          <div className="border-t border-hairline p-5 flex gap-3">
            <button
              type="button"
              onClick={clearAll}
              className="flex-1 py-3 text-[11px] uppercase tracking-wide-3 font-medium text-ink border border-hairline hover:border-ink transition-colors"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="flex-[2] py-3 text-[11px] uppercase tracking-wide-3 font-medium bg-ink text-bone hover:bg-ink/85 transition-colors"
            >
              Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-[11px] font-medium tracking-wide-4 uppercase text-ink">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {options.map((opt) => {
          const isActive = selected.includes(opt.value);
          return (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => onToggle(opt.value)}
                className="flex items-center gap-3 text-left group"
              >
                <span
                  className={cn(
                    "w-4 h-4 flex-shrink-0 border transition-colors flex items-center justify-center",
                    isActive ? "bg-ink border-ink" : "border-hairline group-hover:border-ink"
                  )}
                >
                  {isActive && (
                    <svg viewBox="0 0 12 12" className="w-3 h-3 text-bone" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6 L5 9 L10 3" />
                    </svg>
                  )}
                </span>
                <span
                  className={cn(
                    "text-sm font-light transition-colors",
                    isActive ? "text-ink" : "text-cocoa group-hover:text-ink"
                  )}
                >
                  {opt.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
