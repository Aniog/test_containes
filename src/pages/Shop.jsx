import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/catalog";
import ProductCard from "@/components/product/ProductCard";
import { cn, formatPrice } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "u50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

const useQueryCategory = (searchParams) => {
  const cat = searchParams.get("category");
  if (!cat) return null;
  return cat;
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = useQueryCategory(searchParams);

  const [category, setCategory] = useState(initialCategory);
  const [priceBucket, setPriceBucket] = useState(null);
  const [material, setMaterial] = useState(null);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category from URL
  useEffect(() => {
    setCategory(searchParams.get("category"));
  }, [searchParams]);

  const updateCategory = (id) => {
    setCategory(id);
    const next = new URLSearchParams(searchParams);
    if (id) next.set("category", id);
    else next.delete("category");
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category) list = list.filter((p) => p.category === category);
    if (material) list = list.filter((p) => p.material === material);
    if (priceBucket) {
      const b = PRICE_BUCKETS.find((x) => x.id === priceBucket);
      if (b) list = list.filter((p) => p.price >= b.min && p.price <= b.max);
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
      case "newest":
        list.sort((a, b) => (a.badge === "New" ? -1 : 1));
        break;
      default:
        break;
    }
    return list;
  }, [category, material, priceBucket, sort]);

  const activeFilterCount = [category, material, priceBucket].filter(Boolean).length;

  const clearAll = () => {
    setCategory(null);
    setMaterial(null);
    setPriceBucket(null);
    const next = new URLSearchParams(searchParams);
    next.delete("category");
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="pt-24 md:pt-28">
      {/* Page header */}
      <div className="container-velmora pb-10 md:pb-14">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl">
          The <em className="not-italic text-accent">collection</em>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} — each made by hand, in small batches, with recycled metals and 18K gold plating.
        </p>
      </div>

      <div className="container-velmora">
        <div className="hairline" />
      </div>

      <div className="container-velmora grid grid-cols-1 md:grid-cols-12 gap-10 py-10">
        {/* Sidebar */}
        <aside
          className={cn(
            "md:col-span-3 md:block",
            filtersOpen
              ? "fixed inset-0 z-[55] overflow-y-auto bg-background p-6 block"
              : "hidden"
          )}
        >
          <div className="flex items-center justify-between md:hidden">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className="space-y-10">
            <FilterGroup title="Category">
              <ul className="space-y-3">
                <li>
                  <FilterRow
                    label="All"
                    checked={!category}
                    onChange={() => updateCategory(null)}
                  />
                </li>
                {CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <FilterRow
                      label={c.name}
                      checked={category === c.id}
                      onChange={() => updateCategory(c.id)}
                    />
                  </li>
                ))}
              </ul>
            </FilterGroup>

            <FilterGroup title="Price">
              <ul className="space-y-3">
                <li>
                  <FilterRow
                    label="All prices"
                    checked={!priceBucket}
                    onChange={() => setPriceBucket(null)}
                  />
                </li>
                {PRICE_BUCKETS.map((b) => (
                  <li key={b.id}>
                    <FilterRow
                      label={b.label}
                      checked={priceBucket === b.id}
                      onChange={() => setPriceBucket(b.id)}
                    />
                  </li>
                ))}
              </ul>
            </FilterGroup>

            <FilterGroup title="Material">
              <ul className="space-y-3">
                <li>
                  <FilterRow
                    label="All materials"
                    checked={!material}
                    onChange={() => setMaterial(null)}
                  />
                </li>
                <li>
                  <FilterRow
                    label="18K Gold Plated"
                    checked={material === "18k-gold"}
                    onChange={() => setMaterial("18k-gold")}
                  />
                </li>
                <li>
                  <FilterRow
                    label="Sterling Silver"
                    checked={material === "sterling-silver"}
                    onChange={() => setMaterial("sterling-silver")}
                  />
                </li>
              </ul>
            </FilterGroup>

            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="text-[11px] font-medium uppercase tracking-widest2 text-ink underline underline-offset-4 hover:text-accent"
              >
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        {/* Main */}
        <div className="md:col-span-9">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 pb-6">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-cream md:hidden"
            >
              <SlidersHorizontal size={12} strokeWidth={1.5} />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>

            <div className="ml-auto flex items-center gap-3">
              <label htmlFor="sort" className="text-[11px] uppercase tracking-widest2 text-muted-foreground">
                Sort
              </label>
              <div className="relative">
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-border bg-background pl-3 pr-8 py-2.5 text-xs uppercase tracking-widest2 text-ink focus:outline-none focus:border-ink"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-ink">
                  ▾
                </span>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl">Nothing here yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try clearing your filters to see the full collection.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 inline-flex items-center justify-center border border-ink px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FilterGroup = ({ title, children }) => (
  <div>
    <h3 className="eyebrow mb-4">{title}</h3>
    {children}
  </div>
);

const FilterRow = ({ label, checked, onChange }) => (
  <label className="flex cursor-pointer items-center gap-3 text-sm text-foreground transition-colors hover:text-accent">
    <span
      className={cn(
        "grid h-4 w-4 place-items-center border transition-colors",
        checked ? "border-ink bg-ink" : "border-border bg-background"
      )}
    >
      {checked && (
        <span className="block h-1.5 w-1.5 bg-cream" aria-hidden />
      )}
    </span>
    <input
      type="radio"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <span>{label}</span>
  </label>
);

export default Shop;
