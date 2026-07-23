import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { PRODUCTS, CATEGORIES, PRICE_RANGES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Name A–Z" },
];

const MATERIALS = [
  { id: "all", label: "All materials" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "crystal", label: "Crystal Accent" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";

  const [category, setCategory] = useState(initialCat);
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") || "All";
    setCategory(cat);
  }, [searchParams]);

  const updateCategory = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: cat }, { replace: true });
    }
  };

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0];
    let list = PRODUCTS.filter((p) => {
      const inCat = category === "All" || p.category === category;
      const inPrice = p.price >= range.min && p.price < range.max;
      const inMat =
        material === "all" ||
        (material === "crystal"
          ? /crystal/i.test(p.imageQuery + p.short)
          : true);
      return inCat && inPrice && inMat;
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
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [category, price, material, sort]);

  const clearAll = () => {
    updateCategory("All");
    setPrice("all");
    setMaterial("all");
    setSort("featured");
  };

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-line py-6 first:pt-0 last:border-0">
      <h3 className="mb-4 font-body text-[11px] font-semibold uppercase tracking-widest2 text-espresso">
        {title}
      </h3>
      {children}
    </div>
  );

  const RadioRow = ({ name, checked, onChange, label }) => (
    <label className="flex cursor-pointer items-center gap-3 py-1.5">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
          checked ? "border-gold-deep" : "border-line"
        )}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-gold-deep" />}
      </span>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className={cn("font-body text-sm transition-colors", checked ? "text-espresso font-medium" : "text-cocoa/70")}>
        {label}
      </span>
    </label>
  );

  const filters = (
    <>
      <FilterGroup title="Category">
        {CATEGORIES.map((cat) => (
          <RadioRow
            key={cat}
            name="category"
            label={cat}
            checked={category === cat}
            onChange={() => updateCategory(cat)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            name="price"
            label={r.label}
            checked={price === r.id}
            onChange={() => setPrice(r.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            name="material"
            label={m.label}
            checked={material === m.id}
            onChange={() => setMaterial(m.id)}
          />
        ))}
      </FilterGroup>

      <button
        type="button"
        onClick={clearAll}
        className="mt-2 font-body text-[11px] font-semibold uppercase tracking-widest2 text-gold-deep transition-colors hover:text-espresso"
      >
        Clear all filters
      </button>
    </>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-12">
      <SectionHeading
        align="left"
        eyebrow="The Collection"
        title={category === "All" ? "All Jewelry" : category}
        sub="Demi-fine pieces in 18K gold — designed to be worn every day and treasured for years."
      />

      {/* Toolbar */}
      <div className="mt-10 flex items-center justify-between gap-4 border-y border-line py-4">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 font-body text-[12px] font-semibold uppercase tracking-widest2 text-espresso lg:hidden"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
        <p className="hidden font-body text-sm text-cocoa/70 lg:block">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            className="appearance-none border border-line bg-ivory py-2.5 pl-4 pr-10 font-body text-[12px] font-medium uppercase tracking-widest2 text-espresso focus:border-gold-deep focus:outline-none"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown size={15} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gold-deep" />
        </div>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[240px_1fr]">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">{filters}</div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center border border-dashed border-line py-24 text-center">
              <p className="font-display text-2xl text-espresso">No pieces match those filters</p>
              <p className="mt-2 font-body text-sm text-cocoa/60">Try broadening your selection.</p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 font-body text-[12px] font-semibold uppercase tracking-widest2 text-gold-deep hover:text-espresso"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:gap-x-6">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={i * 40}>
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-espresso/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          filtersOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setFiltersOpen(false)}
      >
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-full max-w-xs overflow-y-auto bg-ivory p-6 shadow-soft transition-transform duration-500 ease-luxe",
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-display text-xl uppercase tracking-widest2 text-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="flex h-9 w-9 items-center justify-center rounded-full text-espresso hover:bg-sand"
            >
              <X size={20} />
            </button>
          </div>
          {filters}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full bg-espresso py-3.5 font-body text-[12px] font-semibold uppercase tracking-widest2 text-ivory"
          >
            View {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </button>
        </div>
      </div>
    </div>
  );
}
