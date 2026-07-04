import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Hairline from "@/components/ui/Hairline.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";
import { products, categories, materials } from "@/data/products.js";

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over75", label: "Over $75", min: 75, max: Infinity },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to high" },
  { id: "price-desc", label: "Price: High to low" },
  { id: "rating", label: "Top rated" },
];

const ShopPage = () => {
  const [params, setParams] = useSearchParams();

  const initialCat = params.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [activePrice, setActivePrice] = useState("all");
  const [activeMaterial, setActiveMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  // Sync URL when category changes
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (activeCat === "all") next.delete("cat");
    else next.set("cat", activeCat);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCat]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === activePrice) || PRICE_BUCKETS[0];
    let list = products.filter((p) => {
      if (activeCat !== "all" && p.category !== activeCat) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      if (activeMaterial !== "all" && p.material !== activeMaterial) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCat, activePrice, activeMaterial, sort]);

  const Filters = (
    <div className="space-y-8">
      <div>
        <h4 className="eyebrow mb-4">Category</h4>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => setActiveCat("all")}
              className={`font-sans text-[0.92rem] hover:text-bronze ${
                activeCat === "all" ? "text-ink" : "text-mute"
              }`}
            >
              All
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setActiveCat(c.id)}
                className={`font-sans text-[0.92rem] hover:text-bronze ${
                  activeCat === c.id ? "text-ink" : "text-mute"
                }`}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow mb-4">Price</h4>
        <ul className="space-y-2">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setActivePrice(b.id)}
                className={`font-sans text-[0.92rem] hover:text-bronze ${
                  activePrice === b.id ? "text-ink" : "text-mute"
                }`}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow mb-4">Material</h4>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => setActiveMaterial("all")}
              className={`font-sans text-[0.92rem] hover:text-bronze ${
                activeMaterial === "all" ? "text-ink" : "text-mute"
              }`}
            >
              All
            </button>
          </li>
          {materials.map((m) => (
            <li key={m}>
              <button
                type="button"
                onClick={() => setActiveMaterial(m)}
                className={`font-sans text-[0.92rem] hover:text-bronze ${
                  activeMaterial === m ? "text-ink" : "text-mute"
                }`}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Page header — solid cream, no hero over it */}
      <div className="bg-cream pt-28 sm:pt-32 pb-10 sm:pb-14">
        <Container>
          <p className="eyebrow">The edit</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Shop <span className="italic font-light">all</span>
          </h1>
          <p className="mt-4 font-sans text-[0.95rem] text-mute max-w-xl">
            Demi-fine gold pieces, hand-finished. Earrings, necklaces, and huggies —
            made to be worn every day.
          </p>
        </Container>
      </div>

      <section className="bg-cream pb-24">
        <Container>
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block sticky top-24 self-start">
              {Filters}
            </aside>

            {/* Main */}
            <div>
              <div className="flex items-center justify-between border-t border-b border-ink/10 py-4 mb-8">
                <button
                  type="button"
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 font-sans uppercase tracking-wider2 text-[0.78rem] text-ink"
                >
                  <SlidersHorizontal size={14} /> Filters
                </button>
                <p className="font-sans text-[0.85rem] text-mute hidden lg:block">
                  Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>
                <label className="inline-flex items-center gap-3 ml-auto">
                  <span className="sr-only">Sort by</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent border border-ink/15 rounded-sm h-9 px-3 font-sans text-[0.85rem] text-ink focus:outline-none focus:border-ink"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-2xl text-ink">No pieces match.</p>
                  <p className="mt-3 font-sans text-[0.92rem] text-mute">
                    Try adjusting your filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCat("all");
                      setActivePrice("all");
                      setActiveMaterial("all");
                    }}
                    className="mt-6 font-sans uppercase tracking-wider2 text-[0.78rem] text-ink hover:text-bronze"
                  >
                    Clear all
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile filter sheet */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden ${
          filterOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!filterOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            filterOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setFilterOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-cream p-6 overflow-y-auto transition-transform duration-300 ${
            filterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-sans uppercase tracking-wider2 text-[0.78rem]">
              Filters
            </h2>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="p-2 -mr-2"
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          </div>
          {Filters}
          <button
            type="button"
            onClick={() => setFilterOpen(false)}
            className="mt-10 w-full inline-flex items-center justify-center bg-ink text-cream h-12 font-sans uppercase tracking-wider2 text-[0.78rem] rounded-sm"
          >
            Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
