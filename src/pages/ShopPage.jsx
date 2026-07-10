import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";

const PRICE_BANDS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "$80+", min: 80.01, max: Infinity },
];

const MATERIALS = ["Gold", "Crystal", "Brass", "Filigree"];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "low-high", label: "Price: Low to High" },
  { id: "high-low", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";

  const [selectedCategories, setSelectedCategories] = useState(
    initialCat !== "all" ? [initialCat] : []
  );
  const [priceBand, setPriceBand] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category param
  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategories(cat && cat !== "all" ? [cat] : []);
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories((curr) => {
      const next = curr.includes(id) ? curr.filter((c) => c !== id) : [...curr, id];
      // Reflect in URL (single value support)
      if (next.length === 0) {
        setSearchParams({});
      } else {
        setSearchParams({ category: next[0] });
      }
      return next;
    });
  };

  const toggleMaterial = (id) => {
    setMaterials((curr) =>
      curr.includes(id) ? curr.filter((m) => m !== id) : [...curr, id]
    );
  };

  const filtered = useMemo(() => {
    const band = PRICE_BANDS.find((b) => b.id === priceBand);
    let list = PRODUCTS.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
        return false;
      }
      if (band && (p.price < band.min || p.price > band.max)) return false;
      if (materials.length > 0) {
        const matches = materials.some((m) =>
          (p.material || "").toLowerCase().includes(m.toLowerCase())
        );
        if (!matches) return false;
      }
      return true;
    });

    switch (sort) {
      case "low-high":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategories, priceBand, materials, sort]);

  const clearAll = () => {
    setSelectedCategories([]);
    setPriceBand("all");
    setMaterials([]);
    setSearchParams({});
  };

  const activeCount =
    (selectedCategories.length > 0 ? 1 : 0) +
    (priceBand !== "all" ? 1 : 0) +
    materials.length;

  return (
    <>
      {/* Header */}
      <div className="bg-ink-950 text-textondark">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <span className="label-cap text-champagne-300">Collection</span>
          <h1
            id="shop-title"
            className="mt-4 font-serif text-5xl md:text-6xl font-light"
          >
            Shop All
          </h1>
          <p
            id="shop-subtitle"
            className="mt-4 text-textmuteondark max-w-md"
          >
            Our full edit — hand-finished in 18K gold, made to be kept and worn.
          </p>
        </div>
      </div>

      <section className="bg-sand-50">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-10 md:py-16">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-sand-200 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 label-cap text-ink-950"
              >
                <SlidersHorizontal size={14} strokeWidth={1.4} />
                Filter{activeCount > 0 ? ` (${activeCount})` : ""}
              </button>
              <span className="hidden md:inline text-xs text-textmute">
                {filtered.length} piece{filtered.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="hidden sm:inline label-cap text-textmute">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent text-sm text-ink-950 border border-sand-300 px-3 py-2 focus:border-ink-950 outline-none editorial-transition"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar - desktop */}
            <aside className="hidden md:block md:col-span-3">
              <FiltersPanel
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceBand={priceBand}
                setPriceBand={setPriceBand}
                materials={materials}
                toggleMaterial={toggleMaterial}
                clearAll={clearAll}
                activeCount={activeCount}
              />
            </aside>

            {/* Grid */}
            <div className="md:col-span-9">
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-3xl font-light text-ink-950">
                    Nothing here — yet.
                  </p>
                  <p className="mt-3 text-sm text-textmute">
                    Try removing a filter to see more.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-6 label-cap text-ink-950 underline underline-offset-4 hover:text-champagne-600 editorial-transition"
                  >
                    Clear all filters
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
        </div>
      </section>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden editorial-transition",
          mobileFiltersOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/50 editorial-transition",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[88%] max-w-sm bg-sand-50 flex flex-col editorial-transition",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-sand-200">
            <h3 className="font-serif text-2xl font-light">Filter</h3>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="p-2 text-ink-950"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6">
            <FiltersPanel
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              priceBand={priceBand}
              setPriceBand={setPriceBand}
              materials={materials}
              toggleMaterial={toggleMaterial}
              clearAll={clearAll}
              activeCount={activeCount}
            />
          </div>
          <div className="px-6 py-4 border-t border-sand-200">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-ink-950 text-textondark py-4 label-cap editorial-transition hover:bg-champagne-500 hover:text-ink-950"
            >
              Show {filtered.length} Result{filtered.length === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function FiltersPanel({
  selectedCategories,
  toggleCategory,
  priceBand,
  setPriceBand,
  materials,
  toggleMaterial,
  clearAll,
  activeCount,
}) {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="label-cap text-ink-950">Filter</h3>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-textmute hover:text-ink-950 underline underline-offset-4 editorial-transition"
          >
            Clear ({activeCount})
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer text-sm text-ink-950 hover:text-champagne-600 editorial-transition">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="w-4 h-4 accent-ink-950"
                />
                <span>{c.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BANDS.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 cursor-pointer text-sm text-ink-950 hover:text-champagne-600 editorial-transition">
                <input
                  type="radio"
                  name="price"
                  checked={priceBand === b.id}
                  onChange={() => setPriceBand(b.id)}
                  className="w-4 h-4 accent-ink-950"
                />
                <span>{b.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 cursor-pointer text-sm text-ink-950 hover:text-champagne-600 editorial-transition">
                <input
                  type="checkbox"
                  checked={materials.includes(m)}
                  onChange={() => toggleMaterial(m)}
                  className="w-4 h-4 accent-ink-950"
                />
                <span>{m}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 className="label-cap text-textmute mb-4">{title}</h4>
      {children}
    </div>
  );
}
