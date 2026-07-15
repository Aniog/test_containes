import React, { useEffect, useMemo, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

const PRICE_BANDS = [
  { id: "u50", label: "Under $50", test: (p) => p < 50 },
  { id: "50to80", label: "$50 – $80", test: (p) => p >= 50 && p < 80 },
  { id: "o80", label: "$80 & up", test: (p) => p >= 80 },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function useFilters() {
  const [params, setParams] = useSearchParams();
  const [cats, setCats] = useState(() =>
    params.get("collection") ? [params.get("collection")] : [],
  );
  const [mats, setMats] = useState([]);
  const [prices, setPrices] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep ?collection= in sync for shareable links (initial filter from URL)
  useEffect(() => {
    const c = params.get("collection");
    if (c && !cats.includes(c)) setCats([c]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const toggle = (list, set, value) => {
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let result = PRODUCTS.slice();
    if (cats.length) result = result.filter((p) => cats.includes(p.category));
    if (mats.length) result = result.filter((p) => mats.includes(p.material));
    if (prices.length) {
      const tests = PRICE_BANDS.filter((b) => prices.includes(b.id)).map((b) => b.test);
      result = result.filter((p) => tests.some((t) => t(p.price)));
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
      case "newest":
        result.sort((a, b) => Number(b.id > a.id) - 0.5);
        break;
      default:
        break;
    }
    return result;
  }, [cats, mats, prices, sort]);

  return {
    cats,
    mats,
    prices,
    sort,
    setSort,
    toggleCat: (v) => toggle(cats, setCats, v),
    toggleMat: (v) => toggle(mats, setMats, v),
    togglePrice: (v) => toggle(prices, setPrices, v),
    clearAll: () => {
      setCats([]);
      setMats([]);
      setPrices([]);
      if (params.get("collection")) {
        params.delete("collection");
        setParams(params, { replace: true });
      }
    },
    filtered,
    filtersOpen,
    setFiltersOpen,
    hasFilters: cats.length + mats.length + prices.length > 0,
  };
}

function FiltersPanel({
  cats,
  mats,
  prices,
  toggleCat,
  toggleMat,
  togglePrice,
  clearAll,
  hasFilters,
}) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="eyebrow">Category</h3>
        <ul className="mt-4 space-y-3">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={cats.includes(c.id)}
                  onChange={() => toggleCat(c.id)}
                  className="appearance-none w-4 h-4 border border-ink/50 rounded-sm checked:bg-ink checked:border-ink relative cursor-pointer transition-colors"
                />
                <span className="text-sm text-ink/85 group-hover:text-ink transition-colors">
                  {c.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow">Material</h3>
        <ul className="mt-4 space-y-3">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={mats.includes(m.id)}
                  onChange={() => toggleMat(m.id)}
                  className="appearance-none w-4 h-4 border border-ink/50 rounded-sm checked:bg-ink checked:border-ink relative cursor-pointer transition-colors"
                />
                <span className="text-sm text-ink/85 group-hover:text-ink transition-colors">
                  {m.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow">Price</h3>
        <ul className="mt-4 space-y-3">
          {PRICE_BANDS.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={prices.includes(b.id)}
                  onChange={() => togglePrice(b.id)}
                  className="appearance-none w-4 h-4 border border-ink/50 rounded-sm checked:bg-ink checked:border-ink relative cursor-pointer transition-colors"
                />
                <span className="text-sm text-ink/85 group-hover:text-ink transition-colors">
                  {b.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="text-[11px] uppercase tracking-[0.22em] text-muted hover:text-ink border-b border-muted hover:border-ink pb-1 transition-colors"
        >
          Clear all
        </button>
      )}
    </div>
  );
}

export default function Shop() {
  const f = useFilters();
  const containerRef = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [f.cats, f.mats, f.prices]);

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="container-shell pt-28 md:pt-32 pb-10">
        <SectionHeading
          eyebrow="The Collection"
          title="Shop Velmora."
          align="left"
        />
        <p className="mt-4 text-muted text-[15px] max-w-xl">
          Demi-fine gold pieces, made to be lived in. Filter by category,
          material, or price — or sort to your taste.
        </p>
      </section>

      <section className="container-shell pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <FiltersPanel
                cats={f.cats}
                mats={f.mats}
                prices={f.prices}
                toggleCat={f.toggleCat}
                toggleMat={f.toggleMat}
                togglePrice={f.togglePrice}
                clearAll={f.clearAll}
                hasFilters={f.hasFilters}
              />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden -mt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => f.setFiltersOpen(true)}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink border border-ink/40 px-4 py-2.5 hover:bg-ink hover:text-ivory transition-colors"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters{f.hasFilters ? ` (${f.cats.length + f.mats.length + f.prices.length})` : ""}
            </button>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="sr-only">Sort</label>
              <select
                id="sort"
                value={f.sort}
                onChange={(e) => f.setSort(e.target.value)}
                className="text-[12px] uppercase tracking-[0.22em] text-ink bg-transparent border border-ink/40 px-3 py-2.5 focus:outline-none focus:border-ink"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile drawer */}
          {f.filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-cocoa/40"
                onClick={() => f.setFiltersOpen(false)}
              />
              <aside className="absolute top-0 left-0 h-full w-[84%] max-w-[380px] bg-ivory p-6 overflow-y-auto shadow-lift">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl text-ink">Filters</h3>
                  <button
                    type="button"
                    aria-label="Close filters"
                    onClick={() => f.setFiltersOpen(false)}
                    className="p-2 -mr-2"
                  >
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>
                <FiltersPanel
                  cats={f.cats}
                  mats={f.mats}
                  prices={f.prices}
                  toggleCat={f.toggleCat}
                  toggleMat={f.toggleMat}
                  togglePrice={f.togglePrice}
                  clearAll={f.clearAll}
                  hasFilters={f.hasFilters}
                />
                <button
                  type="button"
                  onClick={() => f.setFiltersOpen(false)}
                  className="btn-primary w-full mt-8"
                >
                  Show {f.filtered.length} Pieces
                </button>
              </aside>
            </div>
          )}

          {/* Product grid */}
          <div className="lg:col-span-9">
            {/* Sort row (desktop) */}
            <div className="hidden lg:flex items-center justify-between pb-6 border-b border-line/70 mb-8">
              <p className="text-sm text-muted">
                {f.filtered.length} piece{f.filtered.length === 1 ? "" : "s"}
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort-d" className="text-[11px] uppercase tracking-[0.22em] text-muted">
                  Sort
                </label>
                <select
                  id="sort-d"
                  value={f.sort}
                  onChange={(e) => f.setSort(e.target.value)}
                  className="text-[12px] uppercase tracking-[0.22em] text-ink bg-transparent border border-ink/40 px-3 py-2 focus:outline-none focus:border-ink"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {f.filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl text-ink">Nothing matches — yet.</p>
                <p className="mt-2 text-muted text-sm">Try removing a filter.</p>
                <button
                  type="button"
                  onClick={f.clearAll}
                  className="btn-outline mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-14">
                {f.filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
