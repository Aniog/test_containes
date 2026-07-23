import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { shopCatalog, categories } from "@/data/products";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";

const PRICE_BUCKETS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80plus", label: "$80 +", min: 80, max: Infinity },
];

const MATERIALS = [
  { id: "all", label: "All" },
  { id: "gold", label: "18K Gold" },
  { id: "crystal", label: "Crystal" },
  { id: "pearl", label: "Pearl" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "priceAsc", label: "Price · Low to High" },
  { id: "priceDesc", label: "Price · High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "new", label: "Newest" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("cat") || "all";
  const initialSort = params.get("sort") || "featured";
  const initialPrice = params.get("price") || "all";
  const initialMaterial = params.get("material") || "all";

  const [cat, setCat] = useState(initialCat);
  const [price, setPrice] = useState(initialPrice);
  const [material, setMaterial] = useState(initialMaterial);
  const [sort, setSort] = useState(initialSort);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setCat(params.get("cat") || "all");
    setSort(params.get("sort") || "featured");
    setPrice(params.get("price") || "all");
    setMaterial(params.get("material") || "all");
  }, [params]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === price) || PRICE_BUCKETS[0];
    let list = shopCatalog.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      if (material !== "all") {
        const mat = p.material?.toLowerCase() || "";
        if (material === "gold" && !mat.includes("gold")) return false;
        if (material === "crystal" && !mat.includes("crystal")) return false;
        if (material === "pearl" && !mat.includes("pearl")) return false;
      }
      return true;
    });

    switch (sort) {
      case "priceAsc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "new":
        list = [...list].reverse();
        break;
      default:
        break;
    }
    return list;
  }, [cat, price, material, sort]);

  const setQueryParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const clearFilters = () => {
    setParams({}, { replace: true });
    setCat("all");
    setPrice("all");
    setMaterial("all");
  };

  const activeCategory = categories.find((c) => c.id === cat);

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-cream-100 border-b border-cream-200">
        <div className="container-editorial py-12 md:py-20">
          <p className="eyebrow mb-3">The Collection</p>
          <h1 className="font-serif font-light text-ink-900 text-[44px] md:text-[72px] leading-[1.02]">
            {activeCategory ? activeCategory.name : "Shop all"}
          </h1>
          <p className="mt-4 text-ink-700 text-base md:text-lg max-w-xl font-light">
            {activeCategory
              ? activeCategory.description
              : "Every Velmora piece — demi-fine 18K gold plated, hypoallergenic, made to be worn."}
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="bg-cream-50 border-b border-cream-200 sticky top-16 md:top-[72px] z-30">
        <div className="container-editorial py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-btn text-ink-900"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.4} />
            Filters
          </button>
          <p className="text-[11px] uppercase tracking-btn text-ink-700">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <label className="flex items-center gap-2 text-[11px] uppercase tracking-btn text-ink-700">
            <span className="hidden sm:inline">Sort</span>
            <span className="sm:hidden">Sort</span>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setQueryParam("sort", e.target.value);
              }}
              className="bg-transparent border-0 text-ink-900 text-[11px] uppercase tracking-btn focus:ring-0 focus:outline-none cursor-pointer pr-1"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id} className="text-ink-900 normal-case tracking-normal">
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Filters — desktop sidebar */}
          <aside className="hidden md:block md:col-span-3">
            <Filters
              cat={cat}
              setCat={(v) => {
                setCat(v);
                setQueryParam("cat", v);
              }}
              price={price}
              setPrice={(v) => {
                setPrice(v);
                setQueryParam("price", v);
              }}
              material={material}
              setMaterial={(v) => {
                setMaterial(v);
                setQueryParam("material", v);
              }}
              onClear={clearFilters}
            />
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink-900 mb-3">
                  Nothing matches — yet.
                </p>
                <p className="text-ink-700 mb-6">Try widening your filters.</p>
                <button type="button" onClick={clearFilters} className="btn-outline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      <MobileFilters
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        cat={cat}
        setCat={(v) => {
          setCat(v);
          setQueryParam("cat", v);
        }}
        price={price}
        setPrice={(v) => {
          setPrice(v);
          setQueryParam("price", v);
        }}
        material={material}
        setMaterial={(v) => {
          setMaterial(v);
          setQueryParam("material", v);
        }}
        onClear={clearFilters}
      />
    </div>
  );
}

function Filters({ cat, setCat, price, setPrice, material, setMaterial, onClear }) {
  return (
    <div className="space-y-10">
      <FilterGroup label="Category">
        <ul className="space-y-2">
          <li>
            <FilterRadio
              checked={cat === "all"}
              onChange={() => setCat("all")}
              label="All"
            />
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <FilterRadio
                checked={cat === c.id}
                onChange={() => setCat(c.id)}
                label={c.name}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Price">
        <ul className="space-y-2">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <FilterRadio
                checked={price === b.id}
                onChange={() => setPrice(b.id)}
                label={b.label}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup label="Material">
        <ul className="space-y-2">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <FilterRadio
                checked={material === m.id}
                onChange={() => setMaterial(m.id)}
                label={m.label}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <button
        type="button"
        onClick={onClear}
        className="text-[11px] font-medium uppercase tracking-btn text-ink-700 hover:text-ink-900 transition-colors underline underline-offset-4"
      >
        Clear all filters
      </button>
    </div>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      {children}
    </div>
  );
}

function FilterRadio({ checked, onChange, label }) {
  return (
    <label
      className={cn(
        "flex items-center gap-3 cursor-pointer text-sm transition-colors duration-200",
        checked ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
      )}
    >
      <span
        className={cn(
          "w-3.5 h-3.5 rounded-full border transition-colors duration-200",
          checked ? "border-ink-900 bg-ink-900" : "border-cream-300"
        )}
        aria-hidden="true"
      >
        {checked ? (
          <span className="block w-full h-full rounded-full scale-50 bg-cream-50" />
        ) : null}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}

function MobileFilters({
  open,
  onClose,
  cat,
  setCat,
  price,
  setPrice,
  material,
  setMaterial,
  onClear,
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-cocoa-900/40" onClick={onClose} />
      <aside
        className={cn(
          "absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-cream-50 flex flex-col transition-transform duration-500 ease-luxury",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-cream-200">
          <p className="eyebrow">Filters</p>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-ink-900"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <Filters
            cat={cat}
            setCat={setCat}
            price={price}
            setPrice={setPrice}
            material={material}
            setMaterial={setMaterial}
            onClear={onClear}
          />
        </div>
        <div className="border-t border-cream-200 p-5">
          <button type="button" onClick={onClose} className="btn-primary w-full">
            Show results
          </button>
        </div>
      </aside>
    </div>
  );
}
