import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS = [
  { id: "all", label: "All Jewelry" },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  { id: "sets", label: "Gift Sets" },
];

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-40", label: "Under $40", min: 0, max: 40 },
  { id: "40-70", label: "$40 — $70", min: 40, max: 70 },
  { id: "70-plus", label: "$70 & Up", min: 70, max: Infinity },
];

const MATERIALS = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal Accent" },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-ink/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-[0.24em] text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          strokeWidth={1.4}
        />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function Radio({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[13px] text-velmora-charcoal/90 hover:text-velmora-ink">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
          checked ? "border-velmora-ink" : "border-velmora-ink/30",
        )}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-velmora-ink" />}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}

function Check({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[13px] text-velmora-charcoal/90 hover:text-velmora-ink">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center border transition-colors",
          checked ? "border-velmora-ink bg-velmora-ink" : "border-velmora-ink/30",
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-velmora-cream" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M2 6.5L5 9.5L10 3.5" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryParam = params.get("category") || "all";
  const [category, setCategory] = useState(
    CATEGORY_OPTIONS.some((c) => c.id === categoryParam) ? categoryParam : "all",
  );
  const [priceRange, setPriceRange] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");

  // Sync category from URL
  useEffect(() => {
    const p = params.get("category");
    if (p && CATEGORY_OPTIONS.some((c) => c.id === p)) setCategory(p);
    else if (!p) setCategory("all");
  }, [params]);

  const setCategoryAndUrl = (id) => {
    setCategory(id);
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("category");
    else next.set("category", id);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange) || PRICE_RANGES[0];

    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, priceRange, sort]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Re-scan on filter change since products in DOM change
  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [category, priceRange, sort, materials]);

  const activeCategoryLabel = CATEGORY_OPTIONS.find((c) => c.id === category)?.label || "All Jewelry";

  const toggleMaterial = (id) => {
    setMaterials((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const clearAll = () => {
    setCategoryAndUrl("all");
    setPriceRange("all");
    setMaterials([]);
    setSort("featured");
  };

  const Sidebar = () => (
    <aside className="w-full">
      <div className="flex items-center justify-between border-b border-velmora-ink/10 pb-4">
        <h2 className="text-[11px] uppercase tracking-[0.28em] text-velmora-ink">
          Filter
        </h2>
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.22em] text-velmora-taupe hover:text-velmora-ink"
        >
          Clear
        </button>
      </div>

      <FilterGroup title="Category">
        {CATEGORY_OPTIONS.map((c) => (
          <Radio
            key={c.id}
            label={c.label}
            checked={category === c.id}
            onChange={() => setCategoryAndUrl(c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <Radio
            key={r.id}
            label={r.label}
            checked={priceRange === r.id}
            onChange={() => setPriceRange(r.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <Check
            key={m.id}
            label={m.label}
            checked={materials.includes(m.id)}
            onChange={() => toggleMaterial(m.id)}
          />
        ))}
      </FilterGroup>
    </aside>
  );

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-24 md:pt-28">
      {/* Page header */}
      <header className="border-b border-velmora-ink/10">
        <div className="mx-auto max-w-[1440px] px-5 py-14 text-center md:px-10 md:py-20 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-velmora-taupe">
            Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-velmora-ink md:text-6xl">
            {activeCategoryLabel}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-velmora-charcoal/75 md:text-[15px]">
            Demi-fine pieces made in small batches with recycled metals and ethically sourced stones.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          {/* Sidebar (desktop) */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Main */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-velmora-ink/10 pb-5">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-velmora-ink lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.4} />
                Filter
              </button>
              <span className="hidden text-[12px] uppercase tracking-[0.22em] text-velmora-taupe lg:inline">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </span>
              <span className="text-[12px] uppercase tracking-[0.22em] text-velmora-taupe lg:hidden">
                {filtered.length} items
              </span>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="hidden text-[11px] uppercase tracking-[0.22em] text-velmora-taupe md:inline">
                  Sort by
                </label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none border border-velmora-ink/20 bg-velmora-cream py-2 pl-3 pr-9 text-[12px] uppercase tracking-[0.18em] text-velmora-ink focus:border-velmora-ink focus:outline-none"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-ink" strokeWidth={1.4} />
                </div>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-[11px] uppercase tracking-[0.28em] text-velmora-taupe">
                  Nothing matched your filters
                </p>
                <h3 className="mt-4 font-serif text-3xl text-velmora-ink">
                  Try widening your search.
                </h3>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-7 inline-block bg-velmora-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-velmora-cream"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-6 xl:grid-cols-4">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-[2px]"
          />
          <div className="slide-in absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-velmora-ivory">
            <div className="flex items-center justify-between border-b border-velmora-ink/10 px-5 py-5">
              <h2 className="font-serif text-2xl text-velmora-ink">Filter</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              <Sidebar />
            </div>
            <div className="border-t border-velmora-ink/10 bg-velmora-cream px-5 py-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-velmora-ink py-4 text-[12px] uppercase tracking-[0.24em] text-velmora-cream"
              >
                Show {filtered.length} pieces
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
