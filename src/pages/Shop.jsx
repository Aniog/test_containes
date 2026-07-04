import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/hooks/useStrkImages";
import { cn } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over75", label: "Over $75", min: 75, max: Infinity },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "priceAsc", label: "Price: Low to High" },
  { id: "priceDesc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  // Reflect ?category=… URL changes (header nav)
  useEffect(() => {
    const c = params.get("category") || "all";
    setCategory(c);
  }, [params]);

  const ref = useRef(null);
  useStrkImages(ref, [category, price, material, sort]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category !== "all") list = list.filter((p) => p.category === category);
    const bucket = PRICE_BUCKETS.find((b) => b.id === price);
    if (bucket) list = list.filter((p) => p.price >= bucket.min && p.price < bucket.max);
    if (material !== "all") list = list.filter((p) => p.materials.toLowerCase().includes(material.toLowerCase()));

    switch (sort) {
      case "priceAsc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured — keep as-is
        break;
    }
    return list;
  }, [category, price, material, sort]);

  function onCategoryChange(c) {
    setCategory(c);
    if (c === "all") {
      params.delete("category");
    } else {
      params.set("category", c);
    }
    setParams(params, { replace: true });
  }

  function clearAll() {
    onCategoryChange("all");
    setPrice("all");
    setMaterial("all");
  }

  const hasFilters = category !== "all" || price !== "all" || material !== "all";

  return (
    <div ref={ref} className="pt-24 md:pt-28 bg-cream min-h-screen">
      <div className="container-editorial">
        {/* Header */}
        <div className="py-10 md:py-14 border-b border-hairline">
          <p className="eyebrow">The Collection</p>
          <h1 className="font-serif text-5xl md:text-7xl text-ink mt-3 tracking-[-0.01em]">
            Shop All
          </h1>
          <p className="mt-4 text-taupe text-sm md:text-base max-w-lg">
            Demi-fine 18K gold plated jewelry — five pieces, each made to be worn for years.
          </p>
        </div>

        {/* Toolbar */}
        <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-hairline">
          <div className="flex items-center justify-between py-4 gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              className="inline-flex flex-shrink-0 items-center gap-2 text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-ink hover:text-gold-deep transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filter
              {hasFilters && (
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-gold-deep" />
              )}
            </button>
            <p className="hidden sm:block text-[11px] uppercase tracking-[0.22em] text-taupe">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <p className="block sm:hidden text-[11px] uppercase tracking-[0.2em] text-taupe">
              {filtered.length}
            </p>
            <div className="relative flex-shrink-0 max-w-[60%] sm:max-w-none">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-hairline pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 text-[10px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-ink font-medium focus:border-ink focus:outline-none cursor-pointer truncate"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-ink pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Inline category chips (desktop) */}
        <div className="hidden md:flex items-center gap-2 pt-6 flex-wrap">
          <CategoryChip
            active={category === "all"}
            onClick={() => onCategoryChange("all")}
            label="All"
          />
          {CATEGORIES.map((c) => (
            <CategoryChip
              key={c.slug}
              active={category === c.slug}
              onClick={() => onCategoryChange(c.slug)}
              label={c.label}
            />
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-serif text-3xl text-ink">No pieces match these filters.</p>
            <button type="button" onClick={clearAll} className="btn-outline mt-8">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14 py-10 md:py-14">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* Filter drawer (mobile + always-available) */}
      <div
        className={cn(
          "fixed inset-0 z-[70] transition-opacity duration-300",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!filterOpen}
      >
        <button
          type="button"
          aria-label="Close filters"
          onClick={() => setFilterOpen(false)}
          className="absolute inset-0 bg-ink/40"
        />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm bg-cream flex flex-col transition-transform duration-500 ease-editorial",
            filterOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-label="Filter products"
        >
          <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <h2 className="font-serif text-2xl text-ink">Filter</h2>
            <button type="button" onClick={() => setFilterOpen(false)} aria-label="Close" className="p-2 -mr-2">
              <X className="w-5 h-5" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10">
            <FilterGroup title="Category">
              <ChipList>
                <Chip active={category === "all"} onClick={() => onCategoryChange("all")} label="All" />
                {CATEGORIES.map((c) => (
                  <Chip
                    key={c.slug}
                    active={category === c.slug}
                    onClick={() => onCategoryChange(c.slug)}
                    label={c.label}
                  />
                ))}
              </ChipList>
            </FilterGroup>

            <FilterGroup title="Price">
              <ChipList>
                {PRICE_BUCKETS.map((b) => (
                  <Chip
                    key={b.id}
                    active={price === b.id}
                    onClick={() => setPrice(b.id)}
                    label={b.label}
                  />
                ))}
              </ChipList>
            </FilterGroup>

            <FilterGroup title="Material">
              <ChipList>
                <Chip active={material === "all"} onClick={() => setMaterial("all")} label="All" />
                {MATERIALS.map((m) => (
                  <Chip
                    key={m}
                    active={material === m}
                    onClick={() => setMaterial(m)}
                    label={m}
                  />
                ))}
              </ChipList>
            </FilterGroup>
          </div>

          <footer className="border-t border-hairline px-6 py-5 flex items-center gap-3">
            <button type="button" onClick={clearAll} className="btn-ghost flex-1">
              Clear All
            </button>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="btn-primary flex-1"
            >
              Show {filtered.length} Pieces
            </button>
          </footer>
        </aside>
      </div>
    </div>
  );
}

function CategoryChip({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-[12px] uppercase tracking-[0.22em] font-medium px-4 py-2 border transition-colors duration-300",
        active
          ? "border-ink bg-ink text-cream"
          : "border-hairline text-ink hover:border-ink",
      )}
    >
      {label}
    </button>
  );
}

function FilterGroup({ title, children }) {
  return (
    <section>
      <h3 className="eyebrow mb-4">{title}</h3>
      {children}
    </section>
  );
}

function ChipList({ children }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function Chip({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-[11px] uppercase tracking-[0.2em] font-medium px-3.5 py-2 border transition-colors duration-300",
        active
          ? "border-ink bg-ink text-cream"
          : "border-hairline text-ink hover:border-ink",
      )}
    >
      {label}
    </button>
  );
}
