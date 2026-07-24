import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Container from "@/components/common/Container";
import ProductCard from "@/components/product/ProductCard";
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products";

const SORTS = [
  { id: "featured",  label: "Featured" },
  { id: "low-high",  label: "Price: Low to High" },
  { id: "high-low",  label: "Price: High to Low" },
  { id: "rating",    label: "Top Rated" },
];

const PRICE_BUCKETS = [
  { id: "all",   label: "All Prices",  min: 0,   max: Infinity },
  { id: "0-50",  label: "Under $50",   min: 0,   max: 50 },
  { id: "50-80", label: "$50 – $80",   min: 50,  max: 80 },
  { id: "80",    label: "$80 & Up",    min: 80,  max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";

  const [category, setCategory] = useState(initialCat);
  const [material, setMaterial] = useState("all");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("cat") || "all";
    setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === price) || PRICE_BUCKETS[0];
    let list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (material !== "all" && p.material !== material) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      return true;
    });

    if (sort === "low-high")  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high-low")  list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating")    list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, material, price, sort]);

  const setCat = (id) => {
    setCategory(id);
    const next = new URLSearchParams(searchParams);
    if (id === "all") next.delete("cat");
    else next.set("cat", id);
    setSearchParams(next);
  };

  const clearAll = () => {
    setCategory("all");
    setMaterial("all");
    setPrice("all");
    setSearchParams(new URLSearchParams());
  };

  const activeCount =
    (category !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0) +
    (price !== "all" ? 1 : 0);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-cream min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto pt-6 pb-12">
          <span className="label-eyebrow text-muted">The Collection</span>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight"
            style={{ fontWeight: 400 }}
          >
            {category === "all"
              ? "Shop All"
              : CATEGORIES.find((c) => c.id === category)?.label || "Shop"}
          </h1>
          <p className="text-muted text-sm sm:text-base mt-4">
            Demi-fine pieces designed to layer, gift, and treasure.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between border-y border-hairline py-4 mb-10">
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden inline-flex items-center gap-2 label-eyebrow text-ink"
          >
            <SlidersHorizontal size={14} />
            Filter
            {activeCount > 0 && (
              <span className="ml-1 w-5 h-5 inline-flex items-center justify-center text-[10px] bg-ink text-cream rounded-full">
                {activeCount}
              </span>
            )}
          </button>
          <p className="hidden md:block text-xs text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-xs text-muted label-eyebrow hidden sm:inline">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-xs text-ink border border-hairline px-3 py-2 focus:outline-none focus:border-ink"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <Filters
              category={category}
              setCategory={setCat}
              material={material}
              setMaterial={setMaterial}
              price={price}
              setPrice={setPrice}
              clearAll={clearAll}
              activeCount={activeCount}
            />
          </aside>

          {/* Grid */}
          <div className="md:col-span-9 lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button onClick={clearAll} className="btn btn-ghost mt-6">Clear all</button>
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

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[88vw] max-w-sm bg-cream-paper md:hidden transition-transform duration-500 ease-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h3 className="font-serif text-2xl">Filter</h3>
          <button onClick={() => setDrawerOpen(false)} aria-label="Close filters">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <Filters
            category={category}
            setCategory={(id) => { setCat(id); }}
            material={material}
            setMaterial={setMaterial}
            price={price}
            setPrice={setPrice}
            clearAll={clearAll}
            activeCount={activeCount}
            onAfterChange={() => setDrawerOpen(false)}
          />
        </div>
      </aside>
    </div>
  );
}

function Filters({ category, setCategory, material, setMaterial, price, setPrice, clearAll, activeCount, onAfterChange }) {
  return (
    <div className="space-y-10">
      <FilterGroup title="Category">
        <FilterOption
          label="All"
          active={category === "all"}
          onClick={() => { setCategory("all"); onAfterChange && onAfterChange(); }}
        />
        {CATEGORIES.map((c) => (
          <FilterOption
            key={c.id}
            label={c.label}
            active={category === c.id}
            onClick={() => { setCategory(c.id); onAfterChange && onAfterChange(); }}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        <FilterOption
          label="All Materials"
          active={material === "all"}
          onClick={() => { setMaterial("all"); onAfterChange && onAfterChange(); }}
        />
        {MATERIALS.map((m) => (
          <FilterOption
            key={m.id}
            label={m.label}
            active={material === m.id}
            onClick={() => { setMaterial(m.id); onAfterChange && onAfterChange(); }}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <FilterOption
            key={b.id}
            label={b.label}
            active={price === b.id}
            onClick={() => { setPrice(b.id); onAfterChange && onAfterChange(); }}
          />
        ))}
      </FilterGroup>

      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-xs text-muted hover:text-ink underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 className="label-eyebrow text-ink mb-4">{title}</h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FilterOption({ label, active, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`text-sm transition-colors ${
          active ? "text-ink font-medium" : "text-muted hover:text-ink"
        }`}
      >
        {active && <span className="inline-block w-3 h-px bg-gold mr-2 align-middle" />}
        {label}
      </button>
    </li>
  );
}
