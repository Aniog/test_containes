import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const MATERIALS = ["18K Gold Plated", "Sterling Silver"];
const PRICE_RANGES = [
  { id: "any", label: "All prices", min: 0, max: Infinity },
  { id: "u40", label: "Under $40", min: 0, max: 40 },
  { id: "40-70", label: "$40 – $70", min: 40, max: 70 },
  { id: "70p", label: "$70 and up", min: 70, max: Infinity },
];
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const [category, setCategory] = useState(
    CATEGORIES.includes(initialCat) ? initialCat : "All"
  );
  const [priceRange, setPriceRange] = useState("any");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  // keep URL in sync
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (category && category !== "All") next.set("category", category);
    else next.delete("category");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "All") list = list.filter((p) => p.category === category);
    const range = PRICE_RANGES.find((r) => r.id === priceRange);
    if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    if (materials.length > 0)
      list = list.filter((p) => materials.includes(p.material));

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
  }, [category, priceRange, materials, sort]);

  // rescan images when filters change
  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [filtered.length, category, sort]);

  const toggleMaterial = (m) => {
    setMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const clearAll = () => {
    setCategory("All");
    setPriceRange("any");
    setMaterials([]);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
            The Collection
          </p>
          <h1 className="font-serif font-light text-5xl md:text-6xl tracking-tight">
            {category === "All" ? "Shop All Jewelry" : category}
          </h1>
          <p className="mt-5 text-ink/65 max-w-xl mx-auto leading-relaxed">
            Demi-fine gold, made to be worn every day and for every occasion.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div ref={containerRef} className="max-w-7xl mx-auto px-5 md:px-10">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-10 border-b border-mist/40 pb-5">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} /> Filter
            </button>
            <p className="hidden md:block text-[12px] tracking-[0.25em] uppercase text-ink/70">
              {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
            </p>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-ink/30 text-[12px] tracking-[0.2em] uppercase pl-4 pr-10 py-2.5 cursor-pointer hover:border-gold focus:outline-none focus:border-gold transition-colors"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    Sort: {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Sidebar (desktop) */}
            <aside className="hidden md:block md:col-span-3 space-y-10 text-sm">
              <FilterGroup title="Category">
                <ul className="space-y-2.5">
                  {CATEGORIES.map((c) => (
                    <li key={c}>
                      <button
                        type="button"
                        onClick={() => setCategory(c)}
                        className={`text-left w-full text-[13px] tracking-wide transition-colors ${
                          category === c ? "text-gold" : "text-ink/80 hover:text-ink"
                        }`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup title="Price">
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((r) => (
                    <li key={r.id}>
                      <label className="flex items-center gap-3 text-[13px] text-ink/80 cursor-pointer hover:text-ink">
                        <input
                          type="radio"
                          name="price"
                          checked={priceRange === r.id}
                          onChange={() => setPriceRange(r.id)}
                          className="accent-gold"
                        />
                        {r.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup title="Material">
                <ul className="space-y-2.5">
                  {MATERIALS.map((m) => (
                    <li key={m}>
                      <label className="flex items-center gap-3 text-[13px] text-ink/80 cursor-pointer hover:text-ink">
                        <input
                          type="checkbox"
                          checked={materials.includes(m)}
                          onChange={() => toggleMaterial(m)}
                          className="accent-gold"
                        />
                        {m}
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <button
                type="button"
                onClick={clearAll}
                className="text-[11px] tracking-[0.3em] uppercase text-ink/60 hover:text-gold border-b border-ink/20 hover:border-gold pb-1.5 transition-all"
              >
                Clear All
              </button>
            </aside>

            {/* Grid */}
            <div className="md:col-span-9">
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-2xl mb-3">No pieces match your filters.</p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-[12px] tracking-[0.3em] uppercase text-gold border-b border-gold pb-1"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-8">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setFiltersOpen(false)}
          />
          <aside className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setFiltersOpen(false)}
                className="p-2"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-8">
              <FilterGroup title="Category">
                <ul className="space-y-2.5">
                  {CATEGORIES.map((c) => (
                    <li key={c}>
                      <button
                        type="button"
                        onClick={() => setCategory(c)}
                        className={`text-left w-full text-[13px] ${
                          category === c ? "text-gold" : "text-ink/80"
                        }`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup title="Price">
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((r) => (
                    <li key={r.id}>
                      <label className="flex items-center gap-3 text-[13px] text-ink/80">
                        <input
                          type="radio"
                          name="price-m"
                          checked={priceRange === r.id}
                          onChange={() => setPriceRange(r.id)}
                          className="accent-gold"
                        />
                        {r.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup title="Material">
                <ul className="space-y-2.5">
                  {MATERIALS.map((m) => (
                    <li key={m}>
                      <label className="flex items-center gap-3 text-[13px] text-ink/80">
                        <input
                          type="checkbox"
                          checked={materials.includes(m)}
                          onChange={() => toggleMaterial(m)}
                          className="accent-gold"
                        />
                        {m}
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={clearAll}
                className="py-3.5 border border-ink/30 text-[11px] tracking-[0.25em] uppercase"
              >
                Clear All
              </button>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="py-3.5 bg-ink text-cream text-[11px] tracking-[0.25em] uppercase"
              >
                Apply
              </button>
            </div>
          </aside>
        </div>
      )}
    </Layout>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[11px] tracking-[0.3em] uppercase text-ink mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
