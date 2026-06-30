import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "$80+", min: 80, max: Infinity },
];

const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "crystal", label: "Crystal" },
  { id: "filigree", label: "Filigree" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") || "all";
  const [category, setCategory] = useState(initialCat);
  const [price, setPrice] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync URL params
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category === "all") next.delete("category");
    else next.set("category", category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category !== "all") list = list.filter((p) => p.category === category);
    const bucket = PRICE_BUCKETS.find((b) => b.id === price);
    if (bucket) list = list.filter((p) => p.price >= bucket.min && p.price < bucket.max);
    if (materials.length > 0) {
      list = list.filter((p) =>
        materials.every((m) => {
          if (m === "crystal") return /crystal/i.test(p.description + p.tagline);
          if (m === "filigree") return /filigree/i.test(p.description + p.tagline);
          if (m === "18k-gold") return /18K gold/i.test(p.details?.join(" ") || "");
          return true;
        })
      );
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
      default:
        break;
    }
    return list;
  }, [category, price, materials, sort]);

  const toggleMaterial = (id) => {
    setMaterials((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  };

  const clearAll = () => {
    setCategory("all");
    setPrice("all");
    setMaterials([]);
  };

  return (
    <div className="bg-ivory pt-28 md:pt-32 pb-20 md:pb-28 min-h-[80vh]">
      <div className="container-editorial">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto pb-10 md:pb-14">
          <div className="label-eyebrow text-mute mb-3">Shop</div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.02] text-ink">
            {category === "all" ? (
              <>All jewelry</>
            ) : (
              <>
                {CATEGORIES.find((c) => c.slug === category)?.name || "Collection"}
              </>
            )}
          </h1>
          <p className="mt-4 text-mute text-sm">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} · demi-fine, made to wear
          </p>
        </div>

        <div className="hairline mb-8" />

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-ink border border-line px-4 py-2.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter
          </button>
          <div className="hidden md:flex items-center gap-2 text-xs text-mute">
            {(category !== "all" || price !== "all" || materials.length > 0) && (
              <button
                type="button"
                onClick={clearAll}
                className="underline-grow hover:text-ink"
              >
                Clear all
              </button>
            )}
          </div>
          <label className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-ink">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-line px-3 py-2 text-[11px] tracking-[0.22em] uppercase focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden md:block md:col-span-3">
            <FilterPanel
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
              materials={materials}
              toggleMaterial={toggleMaterial}
              onClear={clearAll}
              showClear={category !== "all" || price !== "all" || materials.length > 0}
            />
          </aside>

          {/* Grid */}
          <section className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-3xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 btn-ghost"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filtered.map((p, i) => (
                  <div
                    key={p.id}
                    className="animate-fadeUp"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            "absolute top-0 left-0 bottom-0 w-[88%] max-w-sm bg-ivory transition-transform duration-500 flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)" }}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-line">
            <div className="label-eyebrow text-ink">Filter</div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterPanel
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
              materials={materials}
              toggleMaterial={toggleMaterial}
              onClear={clearAll}
              showClear={category !== "all" || price !== "all" || materials.length > 0}
            />
          </div>
          <div className="border-t border-line p-6">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-full btn-primary"
            >
              Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({
  category,
  setCategory,
  price,
  setPrice,
  materials,
  toggleMaterial,
  onClear,
  showClear,
}) {
  return (
    <div className="space-y-10">
      <FilterGroup title="Category">
        <div className="space-y-2">
          <RadioRow
            label="All"
            active={category === "all"}
            onClick={() => setCategory("all")}
          />
          {CATEGORIES.map((c) => (
            <RadioRow
              key={c.slug}
              label={c.name}
              active={category === c.slug}
              onClick={() => setCategory(c.slug)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-2">
          {PRICE_BUCKETS.map((b) => (
            <RadioRow
              key={b.id}
              label={b.label}
              active={price === b.id}
              onClick={() => setPrice(b.id)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Material">
        <div className="space-y-2">
          {MATERIALS.map((m) => (
            <CheckboxRow
              key={m.id}
              label={m.label}
              checked={materials.includes(m.id)}
              onChange={() => toggleMaterial(m.id)}
            />
          ))}
        </div>
      </FilterGroup>

      {showClear && (
        <button
          type="button"
          onClick={onClear}
          className="text-xs tracking-[0.22em] uppercase text-mute hover:text-ink underline-grow"
        >
          Clear all
        </button>
      )}
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <div className="label-eyebrow text-ink mb-4">{title}</div>
      {children}
    </div>
  );
}

function RadioRow({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 text-sm w-full text-left py-1.5 transition-colors",
        active ? "text-ink" : "text-charcoal hover:text-ink"
      )}
    >
      <span
        className={cn(
          "w-3.5 h-3.5 rounded-full border transition-colors flex items-center justify-center",
          active ? "border-ink" : "border-line"
        )}
      >
        {active && <span className="w-1.5 h-1.5 rounded-full bg-ink" />}
      </span>
      {label}
    </button>
  );
}

function CheckboxRow({ label, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center gap-3 text-sm w-full text-left py-1.5 text-charcoal hover:text-ink transition-colors"
    >
      <span
        className={cn(
          "w-3.5 h-3.5 border transition-colors flex items-center justify-center",
          checked ? "bg-ink border-ink" : "border-line"
        )}
      >
        {checked && (
          <svg
            className="w-2.5 h-2.5 text-ivory"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 6.5 4.5 9 10 3" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}
