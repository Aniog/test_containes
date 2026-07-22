import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, priceRanges, sortOptions } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

function applyFilters(list, filters) {
  let out = list;
  if (filters.category !== "all") {
    out = out.filter((p) => p.category === filters.category);
  }
  if (filters.price !== "all") {
    const range = priceRanges.find((r) => r.id === filters.price);
    if (range) out = out.filter((p) => p.price >= range.min && p.price <= range.max);
  }
  if (filters.material !== "all") {
    out = out.filter((p) => p.material === filters.material);
  }
  return out;
}

function applySort(list, sort) {
  const arr = [...list];
  switch (sort) {
    case "priceAsc":
      return arr.sort((a, b) => a.price - b.price);
    case "priceDesc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    default:
      return arr;
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState(params.get("category") || "all");
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep URL ?category in sync
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category === "all") next.delete("category");
    else next.set("category", category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    return applySort(
      applyFilters(products, { category, price, material }),
      sort
    );
  }, [category, price, material, sort]);

  const clearAll = () => {
    setCategory("all");
    setPrice("all");
    setMaterial("all");
  };

  const activeChips = [
    category !== "all" && {
      label: categories.find((c) => c.id === category)?.label,
      clear: () => setCategory("all"),
    },
    price !== "all" && {
      label: priceRanges.find((r) => r.id === price)?.label,
      clear: () => setPrice("all"),
    },
    material !== "all" && {
      label: material === "gold" ? "Gold" : "Other",
      clear: () => setMaterial("all"),
    },
  ].filter(Boolean);

  return (
    <>
      {/* Editorial header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory">
        <div className="container-x text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4">The Edit</p>
          <h1 className="font-serif text-h1 md:text-[64px] leading-[1.05]">
            <em className="italic font-normal text-champagne-deep">All</em>{" "}
            Jewelry
          </h1>
          <p className="mt-5 text-body text-espresso">
            {filtered.length} piece{filtered.length === 1 ? "" : "s"} in this edit —
            designed in small batches and made to last.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-ivory">
        <div className="container-x">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-hairline mb-8">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="inline-flex items-center gap-2 text-eyebrow uppercase text-ink lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
              {activeChips.length > 0 && (
                <span className="ml-1 w-5 h-5 grid place-items-center bg-ink text-bone text-[10px] rounded-full">
                  {activeChips.length}
                </span>
              )}
            </button>
            <p className="hidden lg:block text-eyebrow uppercase text-muted">
              Showing {filtered.length} of {products.length}
            </p>
            <label className="inline-flex items-center gap-3 ml-auto">
              <span className="text-eyebrow uppercase text-muted">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-hairline text-ink text-small py-2 pl-3 pr-8 focus:outline-none focus:border-ink"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar — desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <FilterPanel
                category={category}
                setCategory={setCategory}
                price={price}
                setPrice={setPrice}
                material={material}
                setMaterial={setMaterial}
                clearAll={clearAll}
              />
            </aside>

            {/* Grid */}
            <div className="lg:col-span-9">
              {activeChips.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {activeChips.map((chip, i) => (
                    <button
                      key={i}
                      onClick={chip.clear}
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-hairline text-small text-ink hover:border-ink"
                    >
                      {chip.label}
                      <X className="w-3 h-3" />
                    </button>
                  ))}
                  <button
                    onClick={clearAll}
                    className="text-eyebrow uppercase text-muted hover:text-ink ml-2"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-ink mb-3">
                    Nothing in this edit — yet.
                  </p>
                  <p className="text-small text-muted mb-6">
                    Try a different filter, or browse the full collection.
                  </p>
                  <button onClick={clearAll} className="btn-outline">
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 transition-opacity lg:hidden",
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setFiltersOpen(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-bone text-ink",
          "transition-transform duration-300 ease-editorial",
          filtersOpen ? "translate-y-0" : "translate-y-full"
        )}
        role="dialog"
        aria-label="Filters"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl">Filters</h2>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            aria-label="Close filters"
            className="p-2 -mr-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
          <FilterPanel
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            material={material}
            setMaterial={setMaterial}
            clearAll={clearAll}
          />
        </div>
        <div className="border-t border-hairline p-4">
          <button
            onClick={() => setFiltersOpen(false)}
            className="btn-primary w-full"
          >
            Show {filtered.length} Pieces
          </button>
        </div>
      </div>
    </>
  );
}

function FilterPanel({ category, setCategory, price, setPrice, material, setMaterial, clearAll }) {
  return (
    <div className="space-y-10">
      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {categories.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => setCategory(c.id)}
                className={cn(
                  "text-small transition-colors",
                  category === c.id ? "text-ink font-medium" : "text-muted hover:text-ink"
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {priceRanges.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => setPrice(p.id)}
                className={cn(
                  "text-small transition-colors",
                  price === p.id ? "text-ink font-medium" : "text-muted hover:text-ink"
                )}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All" },
            { id: "gold", label: "Gold" },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMaterial(m.id)}
              className={cn(
                "px-3.5 py-1.5 border text-small uppercase tracking-[0.15em] transition-colors",
                material === m.id
                  ? "bg-ink text-bone border-ink"
                  : "border-hairline text-ink hover:border-ink"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </FilterGroup>

      <button
        onClick={clearAll}
        className="text-eyebrow uppercase text-muted hover:text-ink"
      >
        Clear All
      </button>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-eyebrow uppercase text-ink font-medium mb-5">{title}</h3>
      {children}
    </div>
  );
}
