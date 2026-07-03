import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, MATERIALS, PRODUCTS } from "../data/products.js";
import ProductCard from "../components/product/ProductCard.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import { cn } from "../lib/cn.js";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
];

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
];

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function ShopPage() {
  const navigate = useNavigate();
  const params = useQueryParams();
  const [sort, setSort] = useState(params.get("sort") || "featured");
  const [category, setCategory] = useState(params.get("category") || "all");
  const [material, setMaterial] = useState(params.get("material") || "all");
  const [price, setPrice] = useState(params.get("price") || "all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const next = new URLSearchParams();
    if (category !== "all") next.set("category", category);
    if (material !== "all") next.set("material", material);
    if (price !== "all") next.set("price", price);
    if (sort !== "featured") next.set("sort", sort);
    navigate(`/shop?${next.toString()}`, { replace: true });
  }, [category, material, price, sort, navigate]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === price) || PRICE_BUCKETS[0];
    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (material !== "all" && p.material !== material) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, material, price, sort]);

  const FilterPanel = (
    <div className="space-y-10">
      <div>
        <Eyebrow tone="gold">Category</Eyebrow>
        <ul className="mt-5 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "flex w-full items-center justify-between font-sans text-[13px] transition-colors",
                category === "all" ? "text-gold-300" : "text-ink-200 hover:text-gold-300"
              )}
            >
              <span>All jewelry</span>
              <span className="text-[11px] text-ink-500">{PRODUCTS.length}</span>
            </button>
          </li>
          {CATEGORIES.map((c) => {
            const count = PRODUCTS.filter((p) => p.category === c.slug).length;
            const active = category === c.slug;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => setCategory(c.slug)}
                  className={cn(
                    "flex w-full items-center justify-between font-sans text-[13px] transition-colors",
                    active ? "text-gold-300" : "text-ink-200 hover:text-gold-300"
                  )}
                >
                  <span>{c.label}</span>
                  <span className="text-[11px] text-ink-500">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Eyebrow tone="gold">Price</Eyebrow>
        <ul className="mt-5 space-y-3">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setPrice(b.id)}
                className={cn(
                  "flex w-full items-center gap-3 font-sans text-[13px] transition-colors",
                  price === b.id ? "text-gold-300" : "text-ink-200 hover:text-gold-300"
                )}
              >
                <span
                  className={cn(
                    "flex h-3.5 w-3.5 items-center justify-center rounded-full border",
                    price === b.id
                      ? "border-gold-400 bg-gold-400"
                      : "border-ink-600"
                  )}
                >
                  {price === b.id && (
                    <span className="h-1 w-1 rounded-full bg-ink-950" />
                  )}
                </span>
                <span>{b.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Eyebrow tone="gold">Material</Eyebrow>
        <ul className="mt-5 space-y-3">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("all")}
              className={cn(
                "flex w-full items-center gap-3 font-sans text-[13px] transition-colors",
                material === "all" ? "text-gold-300" : "text-ink-200 hover:text-gold-300"
              )}
            >
              <span
                className={cn(
                  "flex h-3.5 w-3.5 items-center justify-center rounded-full border",
                  material === "all" ? "border-gold-400 bg-gold-400" : "border-ink-600"
                )}
              >
                {material === "all" && <span className="h-1 w-1 rounded-full bg-ink-950" />}
              </span>
              <span>All materials</span>
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m.slug}>
              <button
                type="button"
                onClick={() => setMaterial(m.slug)}
                className={cn(
                  "flex w-full items-center gap-3 font-sans text-[13px] transition-colors",
                  material === m.slug ? "text-gold-300" : "text-ink-200 hover:text-gold-300"
                )}
              >
                <span
                  className={cn(
                    "flex h-3.5 w-3.5 items-center justify-center rounded-full border",
                    material === m.slug ? "border-gold-400 bg-gold-400" : "border-ink-600"
                  )}
                >
                  {material === m.slug && <span className="h-1 w-1 rounded-full bg-ink-950" />}
                </span>
                <span>{m.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Shop header — solid nav variant */}
      <section className="bg-ink-950 pt-28 md:pt-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Eyebrow tone="gold">Shop</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-serif text-[44px] font-light leading-[1.05] text-ink-100 md:text-[72px]">
            All Jewelry
          </h1>
          <p className="mt-5 max-w-xl font-sans text-[14px] leading-relaxed text-ink-300">
            Demi-fine pieces, crafted in small batches. Each design is plated in
            18K gold and made to be lived in.
          </p>
        </div>
      </section>

      <section className="bg-ink-950 pb-24 pt-12 md:pb-32">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:grid-cols-[260px_1fr] md:gap-16 md:px-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-ink-800 pb-4">
              <p className="font-sans text-[12px] text-ink-300">
                <span className="text-ink-100">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="inline-flex items-center gap-2 border border-ink-700 px-4 py-2 font-sans text-[11px] uppercase tracking-widest2 text-ink-200 transition-colors hover:border-gold-500 hover:text-gold-300 md:hidden"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.6} />
                  Filters
                </button>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none border border-ink-700 bg-transparent py-2 pl-4 pr-9 font-sans text-[11px] uppercase tracking-widest2 text-ink-200 transition-colors hover:border-gold-500 focus:border-gold-500 focus:outline-none"
                    aria-label="Sort"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id} className="bg-ink-950 text-ink-100">
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400">↓</span>
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="mt-20 text-center">
                <p className="font-serif text-[28px] font-light text-ink-100">
                  No pieces match your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    setMaterial("all");
                    setPrice("all");
                  }}
                  className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-gold-300"
                >
                  Clear all filters →
                </button>
              </div>
            ) : (
              <>
                <span id="velmora-product-card" className="sr-only">
                  Velmora demi-fine jewelry
                </span>
                <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} productId={p.id} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          filtersOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!filtersOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-500",
            filtersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-ink-950 shadow-soft transition-transform duration-500 ease-out",
            filtersOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-ink-800 px-6">
            <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink-100">
              Filters
            </span>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ink-200"
              aria-label="Close filters"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="px-6 py-8">{FilterPanel}</div>
        </div>
      </div>
    </>
  );
}
