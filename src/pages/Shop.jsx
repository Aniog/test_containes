import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import FilterSidebar from "@/components/shop/FilterSidebar";
import { CATEGORIES, MATERIALS, PRICE_BANDS, PRODUCTS } from "@/data/products";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "bestsellers", label: "Bestsellers" },
];

function priceInBand(price, band) {
  if (!band) return true;
  const b = PRICE_BANDS.find((p) => p.id === band);
  if (!b) return true;
  if (b.max == null) return price >= b.min;
  return price >= b.min && price <= b.max;
}

export default function Shop() {
  const [params, setParams] = useSearchParams();

  // State mirrored from URL — shareable, back-button friendly
  const [category, setCategory] = useState(params.get("category") || "");
  const [materials, setMaterials] = useState(
    params.get("material") ? params.get("material").split(",") : [],
  );
  const [priceBand, setPriceBand] = useState(params.get("price") || "");
  const [sort, setSort] = useState(params.get("sort") || "featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Sync state -> URL (shallow)
  useEffect(() => {
    const next = new URLSearchParams();
    if (category) next.set("category", category);
    if (materials.length) next.set("material", materials.join(","));
    if (priceBand) next.set("price", priceBand);
    if (sort && sort !== "featured") next.set("sort", sort);
    setParams(next, { replace: true });
  }, [category, materials, priceBand, sort, setParams]);

  // If user navigates back, sync URL -> state
  useEffect(() => {
    setCategory(params.get("category") || "");
    setMaterials(params.get("material") ? params.get("material").split(",") : []);
    setPriceBand(params.get("price") || "");
    setSort(params.get("sort") || "featured");
  }, [params]);

  const toggleMaterial = (id) =>
    setMaterials((cur) => (cur.includes(id) ? cur.filter((m) => m !== id) : [...cur, id]));

  // Counts for each category (respecting current materials & price filters)
  const countsByCategory = useMemo(() => {
    const counts = {};
    for (const p of PRODUCTS) {
      const matOk = !materials.length || materials.every((m) => p.materials.includes(m));
      if (!matOk) continue;
      if (!priceInBand(p.price, priceBand)) continue;
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, [materials, priceBand]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category) list = list.filter((p) => p.category === category);
    if (materials.length) {
      list = list.filter((p) => materials.every((m) => p.materials.includes(m)));
    }
    if (priceBand) list = list.filter((p) => priceInBand(p.price, priceBand));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    else if (sort === "bestsellers")
      list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    return list;
  }, [category, materials, priceBand, sort]);

  const activeCategory = CATEGORIES.find((c) => c.id === category);
  const activeSort = SORTS.find((s) => s.id === sort) || SORTS[0];
  const activeFilterCount =
    (category ? 1 : 0) + materials.length + (priceBand ? 1 : 0);

  function resetAll() {
    setCategory("");
    setMaterials([]);
    setPriceBand("");
    setSort("featured");
  }

  return (
    <main className="pt-28 sm:pt-36 pb-20 bg-cream-100 min-h-screen">
      <div className="container-wide">
        <Reveal>
          <header className="mb-10 sm:mb-14">
            <p className="eyebrow mb-3">Shop</p>
            <h1 className="font-display text-[48px] sm:text-[80px] leading-[1] text-onyx-800">
              {activeCategory ? activeCategory.label : "All jewelry"}
            </h1>
            <p className="font-display italic text-[20px] sm:text-[24px] text-mocha-500 mt-3 max-w-[60ch]">
              {activeCategory
                ? activeCategory.description
                : "Demi-fine gold, designed to be worn — not stored. Browse the full edit."}
            </p>
          </header>
        </Reveal>

        <div className="flex gap-0 lg:gap-12">
          <FilterSidebar
            category={category}
            setCategory={setCategory}
            materials={materials}
            toggleMaterial={toggleMaterial}
            priceBand={priceBand}
            setPriceBand={setPriceBand}
            countsByCategory={countsByCategory}
            totalResults={filtered.length}
            onReset={resetAll}
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
          />

          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-3 mb-6 lg:mb-8 border-t border-b border-onyx-800/15 py-3.5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-onyx-800 px-3 py-1.5 border border-onyx-800/20 hover:border-onyx-800 transition-colors"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.4} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-onyx-800 text-cream-100 text-[10px]">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <p className="hidden sm:block text-[12px] text-mocha-500">
                  Showing <span className="text-onyx-800">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "piece" : "pieces"}
                </p>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((o) => !o)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-onyx-800"
                  aria-expanded={sortOpen}
                >
                  Sort: {activeSort.label}
                  <ChevronDown
                    size={14}
                    strokeWidth={1.4}
                    className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {sortOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 z-30 bg-cream-100 border border-onyx-800/15 shadow-soft min-w-[220px]"
                    onMouseLeave={() => setSortOpen(false)}
                  >
                    {SORTS.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setSort(s.id);
                          setSortOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-[12px] tracking-wider transition-colors ${
                          s.id === sort
                            ? "bg-onyx-800 text-cream-100"
                            : "text-onyx-800 hover:bg-cream-200"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Active filter chips */}
            {(category || materials.length || priceBand) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {category && (
                  <button
                    type="button"
                    onClick={() => setCategory("")}
                    className="chip hover:border-onyx-800/40"
                  >
                    {activeCategory?.label}
                    <X size={12} strokeWidth={1.5} />
                  </button>
                )}
                {materials.map((m) => {
                  const found = MATERIALS.find((x) => x.id === m);
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => toggleMaterial(m)}
                      className="chip hover:border-onyx-800/40"
                    >
                      {found?.label || m}
                      <X size={12} strokeWidth={1.5} />
                    </button>
                  );
                })}
                {priceBand && (
                  <button
                    type="button"
                    onClick={() => setPriceBand("")}
                    className="chip hover:border-onyx-800/40"
                  >
                    {PRICE_BANDS.find((p) => p.id === priceBand)?.label}
                    <X size={12} strokeWidth={1.5} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={resetAll}
                  className="text-[11px] uppercase tracking-widest-2 text-mocha-500 hover:text-onyx-800 ml-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-[28px] text-onyx-800">
                  No pieces match.
                </p>
                <p className="mt-2 text-[14px] text-mocha-500">
                  Try adjusting your filters.
                </p>
                <button
                  type="button"
                  onClick={resetAll}
                  className="btn-outline mt-6"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                {filtered.map((p, i) => (
                  <Reveal key={p.id} delay={i * 50}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
