import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Eyebrow } from "@/components/ui/primitives";
import { useStrkImages } from "@/hooks/useStrkImages";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "all", label: "All Prices", test: () => true },
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-80", label: "$50 – $80", test: (p) => p.price >= 50 && p.price <= 80 },
  { id: "over-80", label: "Over $80", test: (p) => p.price > 80 },
];

const MATERIALS = [
  { id: "all", label: "All Finishes" },
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "silver", label: "Silver Tone" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-stone py-6 last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-widest2 text-ink">{title}</p>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  );
}

function RadioRow({ name, checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[14px] text-ink-soft transition-colors hover:text-ink">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
          checked ? "border-gold" : "border-stone"
        )}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-gold" />}
      </span>
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("cat") || "all";
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const containerRef = useStrkImages([category, price, material, sort]);

  useEffect(() => {
    setFiltersOpen(false);
  }, [category]);

  const setCategory = (cat) => {
    if (cat === "all") searchParams.delete("cat");
    else searchParams.set("cat", cat);
    setSearchParams(searchParams, { replace: true });
  };

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price);
    let list = PRODUCTS.filter((p) => (category === "all" || p.category === category) && range.test(p));
    // Silver-tone is a finish variant of every piece; "18k-gold" matches all seed data
    if (material === "silver") list = list.filter((p) => p.material !== "silver-only");
    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "rating":
        return [...list].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      default:
        return list;
    }
  }, [category, price, material, sort]);

  const sidebar = (
    <div>
      <FilterGroup title="Category">
        <RadioRow name="cat" checked={category === "all"} onChange={() => setCategory("all")} label="All Jewelry" />
        {CATEGORIES.map((c) => (
          <RadioRow key={c.id} name="cat" checked={category === c.id} onChange={() => setCategory(c.id)} label={c.label} />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow key={r.id} name="price" checked={price === r.id} onChange={() => setPrice(r.id)} label={r.label} />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow key={m.id} name="material" checked={material === m.id} onChange={() => setMaterial(m.id)} label={m.label} />
        ))}
      </FilterGroup>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-stone bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-12">
          <Eyebrow>The Collection</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            {category === "all" ? "All Jewelry" : CATEGORIES.find((c) => c.id === category)?.label}
          </h1>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Demi-fine pieces in 18k gold — plated thick, finished by hand, and priced from $30.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-14 lg:px-12">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{sidebar}</div>
          </aside>

          <div>
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <button
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 border border-ink px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-cream lg:hidden"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
              <p className="hidden text-[13px] text-taupe sm:block lg:block">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-stone bg-cream py-2.5 pl-4 pr-10 text-[12px] font-medium uppercase tracking-[0.14em] text-ink focus:border-gold focus:outline-none"
                  aria-label="Sort products"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="border border-stone bg-sand/50 px-8 py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match those filters</p>
                <p className="mt-2 text-sm text-taupe">Try widening your price range or category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div className={cn("fixed inset-0 z-[60] lg:hidden", !filtersOpen && "pointer-events-none")}>
        <div
          onClick={() => setFiltersOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/50 transition-opacity duration-400",
            filtersOpen ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[85%] max-w-xs overflow-y-auto bg-cream px-6 pb-10 pt-6 transition-transform duration-500 ease-luxe",
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-stone pb-4">
            <p className="font-serif text-lg font-medium uppercase tracking-[0.2em] text-ink">Filters</p>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="p-1 text-ink-soft hover:text-gold">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          {sidebar}
          <button
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full bg-gold py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
          >
            Show {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </button>
        </aside>
      </div>
    </div>
  );
}
