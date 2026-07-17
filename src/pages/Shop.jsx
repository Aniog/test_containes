import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { products, categories, priceRanges } from "@/data/products";
import { cn } from "@/lib/utils";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function compare(a, b, sort) {
  switch (sort) {
    case "price-asc":
      return a.price - b.price;
    case "price-desc":
      return b.price - a.price;
    case "rating":
      return b.rating - a.rating;
    default:
      return 0;
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams();

  const initialCategory = params.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep URL in sync with category (so navbar links work)
  useEffect(() => {
    if (category === "all" && params.get("category")) {
      params.delete("category");
      setParams(params, { replace: true });
    } else if (category !== "all" && params.get("category") !== category) {
      params.set("category", category);
      setParams(params, { replace: true });
    }
  }, [category, params, setParams]);

  // Sync from URL changes (back/forward)
  useEffect(() => {
    const c = params.get("category") || "all";
    setCategory(c);
  }, [params]);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (price !== "all") {
      const range = priceRanges.find((r) => r.id === price);
      if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    }
    if (material !== "all") {
      // simple mapping by tone
      if (material === "18K Gold Plated")
        list = list.filter((p) => p.tone === "gold");
      else if (material === "Sterling Silver")
        list = list.filter((p) => p.tone === "silver");
      else if (material === "Rose Gold")
        list = list.filter((p) => p.tone === "rose");
    }
    return [...list].sort((a, b) => compare(a, b, sort));
  }, [category, price, material, sort]);

  const clearAll = () => {
    setCategory("all");
    setPrice("all");
    setMaterial("all");
  };

  const FilterPanel = (
    <div className="space-y-10">
      <div>
        <h4 className="eyebrow text-ink">Category</h4>
        <ul className="mt-4 space-y-2.5 text-sm">
          {[{ id: "all", label: "All Jewelry" }, ...categories].map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "flex w-full items-center justify-between py-1 text-left transition-colors",
                  category === c.id ? "text-ink" : "text-ink-secondary hover:text-ink",
                )}
              >
                <span>{c.label}</span>
                <span className="text-xs text-ink-muted">
                  {c.id === "all"
                    ? products.length
                    : products.filter((p) => p.category === c.id).length}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow text-ink">Price</h4>
        <ul className="mt-4 space-y-2.5 text-sm">
          {[{ id: "all", label: "All Prices" }, ...priceRanges].map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  "block py-1 text-left transition-colors",
                  price === r.id ? "text-ink" : "text-ink-secondary hover:text-ink",
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow text-ink">Material</h4>
        <ul className="mt-4 space-y-2.5 text-sm">
          {[{ id: "all", label: "All Materials" }, "18K Gold Plated", "Sterling Silver", "Rose Gold"].map((m) => {
            const id = typeof m === "string" ? m : m.id;
            const label = typeof m === "string" ? m : m.label;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setMaterial(id)}
                  className={cn(
                    "block py-1 text-left transition-colors",
                    material === id ? "text-ink" : "text-ink-secondary hover:text-ink",
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="text-[11px] uppercase tracking-wider2 text-ink-secondary hover:text-ink"
      >
        Clear all
      </button>
    </div>
  );

  return (
    <main className="bg-canvas pt-24 md:pt-28">
      {/* Page header */}
      <div className="container-editorial pb-10">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
          The Collection
        </h1>
        <p className="mt-3 max-w-xl text-ink-secondary leading-relaxed">
          Demi-fine jewelry, hand-finished in 18K gold plating. Browse by
          category, material, or price.
        </p>
      </div>

      <div className="container-editorial pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Main */}
          <div className="md:col-span-9">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-y border-line py-4">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider2 text-ink md:hidden"
              >
                <SlidersHorizontal size={14} strokeWidth={1.4} /> Filter
              </button>
              <p className="text-[11px] uppercase tracking-wider2 text-ink-secondary">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="sort"
                  className="hidden md:inline text-[11px] uppercase tracking-wider2 text-ink-secondary"
                >
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent text-[11px] uppercase tracking-wider2 text-ink focus:outline-none"
                >
                  {sortOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-ink-secondary">Try a different filter.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 btn-outline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity",
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!filtersOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/50"
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-canvas p-6 shadow-drawer transition-transform duration-500",
            filtersOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-between pb-4">
            <h3 className="font-serif text-2xl text-ink">Filter</h3>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          {FilterPanel}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full btn-primary"
          >
            View {filtered.length} pieces
          </button>
        </div>
      </div>
    </main>
  );
}
