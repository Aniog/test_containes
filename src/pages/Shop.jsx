import * as React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, X } from "lucide-react";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Name: A → Z" },
];

const PRICE_BUCKETS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "$75 +", min: 75, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = React.useState(initialCategory);
  const [priceBucket, setPriceBucket] = React.useState("all");
  const [material, setMaterial] = React.useState("all");
  const [sort, setSort] = React.useState("featured");
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  // Sync state with URL when category param changes (e.g. clicking a category tile)
  React.useEffect(() => {
    setCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  const filtered = React.useMemo(() => {
    let result = PRODUCTS.slice();
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }
    if (material !== "all") {
      result = result.filter((p) => p.material === material);
    }
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket);
    if (bucket && bucket.id !== "all") {
      result = result.filter((p) => p.price >= bucket.min && p.price < bucket.max);
    }
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return result;
  }, [category, priceBucket, material, sort]);

  const clearAll = () => {
    setCategory("all");
    setPriceBucket("all");
    setMaterial("all");
    setSearchParams({});
  };

  const activeFilterCount = [
    category !== "all",
    priceBucket !== "all",
    material !== "all",
  ].filter(Boolean).length;

  return (
    <main className="bg-ivory pt-24 md:pt-28 pb-20 md:pb-28">
      {/* Header */}
      <header className="max-w-[1280px] mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
          The Catalog
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
          {category === "all"
            ? "All Jewelry"
            : CATEGORIES.find((c) => c.id === category)?.label || "Shop"}
        </h1>
        <p className="mt-4 text-sm text-ink-muted max-w-md">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} — hand-finished, hypoallergenic, made to be worn.
        </p>
        <div className="mt-8 h-px bg-hairline" />
      </header>

      {/* Toolbar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="inline-flex items-center gap-2 lg:hidden text-xs uppercase tracking-button font-medium text-ink"
        >
          <SlidersHorizontal strokeWidth={1.25} className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-cocoa text-[10px] font-medium">
              {activeFilterCount}
            </span>
          )}
        </button>
        <div className="hidden lg:block" />
        <SortControl value={sort} onChange={setSort} />
      </div>

      {/* Body */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Filter sidebar (desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <FilterPanel
            category={category}
            setCategory={(v) => {
              setCategory(v);
              setSearchParams(v === "all" ? {} : { category: v });
            }}
            priceBucket={priceBucket}
            setPriceBucket={setPriceBucket}
            material={material}
            setMaterial={setMaterial}
            onClear={clearAll}
            activeCount={activeFilterCount}
          />
        </aside>

        {/* Mobile drawer */}
        {filtersOpen && (
          <div
            className="lg:hidden fixed inset-0 z-[80] bg-cocoa/50"
            onClick={() => setFiltersOpen(false)}
          >
            <div
              className="absolute top-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-ivory p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl text-ink">Filters</span>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  aria-label="Close filters"
                  className="text-ink-muted hover:text-ink"
                >
                  <X strokeWidth={1.25} className="w-5 h-5" />
                </button>
              </div>
              <FilterPanel
                category={category}
                setCategory={(v) => {
                  setCategory(v);
                  setSearchParams(v === "all" ? {} : { category: v });
                }}
                priceBucket={priceBucket}
                setPriceBucket={setPriceBucket}
                material={material}
                setMaterial={setMaterial}
                onClear={clearAll}
                activeCount={activeFilterCount}
                onApply={() => setFiltersOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="lg:col-span-9">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[11px] uppercase tracking-eyebrow font-medium text-ink-muted">
                Nothing here yet
              </p>
              <h2 className="mt-4 font-serif text-3xl text-ink">
                We're curating more pieces in this category.
              </h2>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 text-xs uppercase tracking-button font-medium text-ink underline underline-offset-4 hover:text-gold-deep transition-colors duration-300"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p) => (
                <li key={p.id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

function FilterPanel({
  category,
  setCategory,
  priceBucket,
  setPriceBucket,
  material,
  setMaterial,
  onClear,
  activeCount,
  onApply,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[11px] uppercase tracking-eyebrow font-medium text-ink-muted">
          Filter
        </h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] uppercase tracking-button text-ink-muted hover:text-ink transition-colors duration-300"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        <RadioRow
          value={category}
          onChange={setCategory}
          options={[{ id: "all", label: "All" }, ...CATEGORIES]}
        />
      </FilterGroup>

      <FilterGroup title="Price">
        <RadioRow
          value={priceBucket}
          onChange={setPriceBucket}
          options={PRICE_BUCKETS}
        />
      </FilterGroup>

      <FilterGroup title="Material" last>
        <RadioRow
          value={material}
          onChange={setMaterial}
          options={[{ id: "all", label: "All" }, ...MATERIALS]}
        />
      </FilterGroup>

      {onApply && (
        <div className="mt-8">
          <Button onClick={onApply} variant="primary" size="md" className="w-full">
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ title, children, last }) {
  return (
    <div className={cn("py-6", !last && "border-b border-hairline")}>
      <h3 className="text-[11px] uppercase tracking-eyebrow font-medium text-ink">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function RadioRow({ value, onChange, options }) {
  return (
    <ul className="space-y-3">
      {options.map((o) => (
        <li key={o.id}>
          <label className="flex items-center gap-3 cursor-pointer group">
            <span
              className={cn(
                "w-4 h-4 rounded-full border flex-shrink-0 transition-colors duration-300",
                value === o.id ? "border-cocoa" : "border-hairline group-hover:border-ink"
              )}
            >
              <span
                className={cn(
                  "block w-full h-full rounded-full scale-[0.4] transition-transform duration-300",
                  value === o.id ? "bg-cocoa" : "bg-transparent"
                )}
              />
            </span>
            <input
              type="radio"
              name={o.id}
              value={o.id}
              checked={value === o.id}
              onChange={() => onChange(o.id)}
              className="sr-only"
            />
            <span
              className={cn(
                "text-sm transition-colors duration-300",
                value === o.id ? "text-ink" : "text-ink-muted group-hover:text-ink"
              )}
            >
              {o.label}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function SortControl({ value, onChange }) {
  return (
    <label className="inline-flex items-center gap-3">
      <span className="hidden sm:inline text-[11px] uppercase tracking-button font-medium text-ink-muted">
        Sort
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm text-ink bg-transparent border-b border-hairline hover:border-ink focus:border-ink focus:outline-none h-10 pr-6 cursor-pointer"
      >
        {SORTS.map((s) => (
          <option key={s.id} value={s.id}>
            {s.label}
          </option>
        ))}
      </select>
    </label>
  );
}
