import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import {
  products,
  categories as allCategories,
  priceRanges,
  materials as allMaterials,
  formatPrice,
} from "@/data/products.js";
import ProductCard from "@/components/product/ProductCard.jsx";
import { cn } from "@/lib/utils.js";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price · Low to High" },
  { id: "price-desc", label: "Price · High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Shop() {
  const query = useQuery();
  const navigate = useNavigate();
  const categoryParam = query.get("category") || "";
  const sortParam = query.get("sort") || "featured";

  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState(sortParam);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep the URL in sync when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) params.set("category", selectedCategories[0]);
    if (sort && sort !== "featured") params.set("sort", sort);
    const qs = params.toString();
    navigate(`/shop${qs ? `?${qs}` : ""}`, { replace: true });
  }, [selectedCategories, sort, navigate]);

  // Hydrate when URL ?category= changes (e.g. user clicks a category tile)
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories((prev) =>
        prev.length === 1 && prev[0] === categoryParam ? prev : [categoryParam]
      );
    } else if (selectedCategories.length && !categoryParam) {
      setSelectedCategories([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  useEffect(() => {
    setSort(sortParam);
  }, [sortParam]);

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((id) => {
          const r = priceRanges.find((x) => x.id === id);
          return r && p.price >= r.min && p.price < (r.max === Infinity ? 1e9 : r.max);
        })
      );
    }
    if (selectedMaterials.length > 0) {
      const matMap = {
        "18k-gold": "18K Gold Plated",
        "sterling-silver": "Sterling Silver",
        "freshwater-pearl": "Freshwater Pearl",
        crystal: "Crystal",
      };
      list = list.filter((p) =>
        selectedMaterials.some((id) =>
          (matMap[id] || "").toLowerCase().split(" ").some((tok) =>
            p.material.toLowerCase().includes(tok)
          )
        )
      );
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list = [...list].reverse();
        break;
      default:
        // featured (best sellers first, then default)
        list = [...list].sort(
          (a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0)
        );
    }
    return list;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const toggle = (list, set, id) => {
    if (list.includes(id)) set(list.filter((x) => x !== id));
    else set([...list, id]);
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
  };

  const activeCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const title = selectedCategories.length === 1
    ? allCategories.find((c) => c.id === selectedCategories[0])?.label || "Shop"
    : "All Jewelry";

  return (
    <>
      {/* Header */}
      <section className="bg-cream-100 pt-28 sm:pt-32 pb-10 sm:pb-14 border-b border-hairline/60">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10 text-center">
          <p className="eyebrow text-muted-500">Collection</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-ink-800">{title}</h1>
          <p className="mt-4 max-w-md mx-auto text-sm text-muted-500 leading-relaxed">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} —
            hand-finished demi-fine gold jewelry, made to be worn everyday.
          </p>
        </div>
      </section>

      <section className="bg-cream-100 pb-24 sm:pb-28">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Sidebar */}
            <aside
              className={cn(
                "lg:col-span-3 lg:sticky lg:top-24 lg:self-start",
                filtersOpen
                  ? "fixed inset-0 z-50 bg-cream-100 overflow-y-auto p-6 lg:p-0 lg:static lg:bg-transparent lg:overflow-visible"
                  : "hidden lg:block"
              )}
            >
              {filtersOpen && (
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h3 className="font-serif text-2xl text-ink-800">Filters</h3>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(false)}
                    aria-label="Close filters"
                    className="p-2 -mr-2"
                  >
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
              )}

              <div className="space-y-8">
                <FilterGroup title="Category">
                  {allCategories.map((c) => (
                    <CheckRow
                      key={c.id}
                      id={c.id}
                      label={c.label}
                      count={products.filter((p) => p.category === c.id).length}
                      checked={selectedCategories.includes(c.id)}
                      onChange={() => toggle(selectedCategories, setSelectedCategories, c.id)}
                    />
                  ))}
                </FilterGroup>

                <FilterGroup title="Price">
                  {priceRanges.map((p) => (
                    <CheckRow
                      key={p.id}
                      id={p.id}
                      label={p.label}
                      count={products.filter((x) => x.price >= p.min && x.price < (p.max === Infinity ? 1e9 : p.max)).length}
                      checked={selectedPrices.includes(p.id)}
                      onChange={() => toggle(selectedPrices, setSelectedPrices, p.id)}
                    />
                  ))}
                </FilterGroup>

                <FilterGroup title="Material">
                  {allMaterials.map((m) => (
                    <CheckRow
                      key={m.id}
                      id={m.id}
                      label={m.label}
                      count={products.filter((x) =>
                        x.material.toLowerCase().includes(
                          m.id === "18k-gold"
                            ? "18k"
                            : m.id === "sterling-silver"
                            ? "sterling"
                            : m.id === "freshwater-pearl"
                            ? "pearl"
                            : "crystal"
                        )
                      ).length}
                      checked={selectedMaterials.includes(m.id)}
                      onChange={() => toggle(selectedMaterials, setSelectedMaterials, m.id)}
                    />
                  ))}
                </FilterGroup>

                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-[11px] tracking-[0.32em] uppercase text-muted-500 hover:text-ink-800 underline underline-offset-4"
                  >
                    Clear All
                  </button>
                )}

                {filtersOpen && (
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(false)}
                    className="lg:hidden btn-primary w-full"
                  >
                    View {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
                  </button>
                )}
              </div>
            </aside>

            {/* Main column */}
            <div className="lg:col-span-9">
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-ink-800 border border-hairline px-4 py-2"
                >
                  <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                  Filters
                  {activeCount > 0 && (
                    <span className="ml-1 w-5 h-5 inline-flex items-center justify-center text-[10px] bg-ink-800 text-cream-100 rounded-full">
                      {activeCount}
                    </span>
                  )}
                </button>

                <div className="ml-auto flex items-center gap-3">
                  <label htmlFor="sort" className="hidden sm:inline text-[11px] tracking-[0.28em] uppercase text-muted-500">
                    Sort
                  </label>
                  <div className="relative">
                    <select
                      id="sort"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="appearance-none bg-transparent text-sm text-ink-800 pl-3 pr-9 py-2 border border-hairline focus:border-ink-800 outline-none"
                    >
                      {SORTS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-800"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              {/* Active chips */}
              {activeCount > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {[...selectedCategories, ...selectedPrices, ...selectedMaterials].map((id) => {
                    const label =
                      allCategories.find((c) => c.id === id)?.label ||
                      priceRanges.find((p) => p.id === id)?.label ||
                      allMaterials.find((m) => m.id === id)?.label ||
                      id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          if (selectedCategories.includes(id))
                            toggle(selectedCategories, setSelectedCategories, id);
                          else if (selectedPrices.includes(id))
                            toggle(selectedPrices, setSelectedPrices, id);
                          else toggle(selectedMaterials, setSelectedMaterials, id);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sand-100 text-ink-800 text-[11px] tracking-[0.18em] uppercase hover:bg-sand-200"
                      >
                        {label}
                        <X className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="font-serif text-2xl text-ink-800">No pieces match.</p>
                  <p className="mt-2 text-sm text-muted-500">
                    Try a different filter combination.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="btn-outline mt-6"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="eyebrow text-ink-800 mb-3">{title}</h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function CheckRow({ id, label, count, checked, onChange }) {
  return (
    <li>
      <label
        htmlFor={`f-${id}`}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <span
          className={cn(
            "w-4 h-4 flex-none border flex items-center justify-center transition-colors",
            checked ? "bg-ink-800 border-ink-800" : "border-hairline group-hover:border-ink-800"
          )}
        >
          {checked && (
            <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-cream-100" fill="none">
              <path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          id={`f-${id}`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <span className="text-sm text-ink-800 flex-1">{label}</span>
        <span className="text-[11px] text-muted-500">{count}</span>
      </label>
    </li>
  );
}
