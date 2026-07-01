import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories, toneOptions } from "@/data/products";
import { cn } from "@/lib/cn";

const priceBuckets = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over75", label: "Over $75", min: 75, max: Infinity },
];

const materialFilters = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "crystal", label: "Crystal" },
  { id: "filigree", label: "Filigree" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "priceAsc", label: "Price: low to high" },
  { id: "priceDesc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
];

function applySort(items, sort) {
  const copy = [...items];
  switch (sort) {
    case "priceAsc":
      return copy.sort((a, b) => a.price - b.price);
    case "priceDesc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    default:
      return copy;
  }
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [priceBucket, setPriceBucket] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  const filtered = useMemo(() => {
    const bucket = priceBuckets.find((b) => b.id === priceBucket) || priceBuckets[0];
    let result = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      if (materials.length > 0) {
        const matches = materials.some((m) =>
          (p.material || "").toLowerCase().includes(m.toLowerCase()),
        );
        if (!matches) return false;
      }
      return true;
    });
    return applySort(result, sort);
  }, [category, priceBucket, materials, sort]);

  const toggleMaterial = (id) =>
    setMaterials((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));

  const setCategoryAndUrl = (c) => {
    setCategory(c);
    const next = new URLSearchParams(searchParams);
    if (c === "all") next.delete("category");
    else next.set("category", c);
    setSearchParams(next, { replace: true });
  };

  const resetFilters = () => {
    setCategory("all");
    setPriceBucket("all");
    setMaterials([]);
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="bg-ivory-50">
      {/* Header */}
      <header className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-ivory-100">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 text-center">
          <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-400 mb-4">
            Shop
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-espresso-200">
            {category === "all"
              ? "The full collection"
              : categories.find((c) => c.id === category)?.name}
          </h1>
          <p className="mt-5 text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Demi-fine pieces designed in-house, finished in 18K gold plate, made to wear on
            repeat.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block sticky top-28 self-start">
            <FilterPanel
              category={category}
              setCategory={setCategoryAndUrl}
              priceBucket={priceBucket}
              setPriceBucket={setPriceBucket}
              materials={materials}
              toggleMaterial={toggleMaterial}
              resetFilters={resetFilters}
            />
          </aside>

          {/* Main column */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <p className="text-[11px] tracking-widest2 uppercase text-muted">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-3 py-2 border hairline-dark text-[11px] tracking-wider2 uppercase"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.4} />
                  Filter
                </button>
                <label className="hidden sm:flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-muted">
                  Sort
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent border hairline-dark px-3 py-2 text-espresso-200 text-[11px] tracking-wider2 uppercase focus:outline-none focus:border-gold-300"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center text-muted">
                <p className="font-serif text-2xl text-espresso-200 mb-3">No pieces match those filters</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-[11px] tracking-widest2 uppercase link-underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-10">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden transition-opacity duration-300",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!filterOpen}
      >
        <div className="absolute inset-0 bg-espresso-300/60" onClick={() => setFilterOpen(false)} />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[88%] max-w-[380px] bg-ivory-50 shadow-soft-lg transition-transform duration-500 ease-editorial overflow-y-auto",
            filterOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b hairline-dark">
            <span className="text-[11px] tracking-widest2 uppercase">Filter</span>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFilterOpen(false)}
              className="p-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="p-6">
            <FilterPanel
              category={category}
              setCategory={(c) => {
                setCategoryAndUrl(c);
              }}
              priceBucket={priceBucket}
              setPriceBucket={setPriceBucket}
              materials={materials}
              toggleMaterial={toggleMaterial}
              resetFilters={() => {
                resetFilters();
                setFilterOpen(false);
              }}
            />
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({ category, setCategory, priceBucket, setPriceBucket, materials, toggleMaterial, resetFilters }) {
  return (
    <div className="space-y-10 text-espresso-200">
      <div>
        <div className="text-[10px] tracking-widest2 uppercase text-muted mb-4">Category</div>
        <ul className="space-y-2.5 text-sm">
          <li>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "link-underline",
                category === "all" ? "text-espresso-200" : "text-muted",
              )}
            >
              All jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "link-underline",
                  category === c.id ? "text-espresso-200" : "text-muted",
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-[10px] tracking-widest2 uppercase text-muted mb-4">Price</div>
        <ul className="space-y-2.5 text-sm">
          {priceBuckets.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setPriceBucket(b.id)}
                className={cn(
                  "link-underline",
                  priceBucket === b.id ? "text-espresso-200" : "text-muted",
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-[10px] tracking-widest2 uppercase text-muted mb-4">Material</div>
        <ul className="space-y-2.5 text-sm">
          {materialFilters.map((m) => {
            const active = materials.includes(m.id);
            return (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => toggleMaterial(m.id)}
                  className="flex items-center gap-3 group"
                >
                  <span
                    className={cn(
                      "w-4 h-4 border flex items-center justify-center transition-colors",
                      active ? "bg-espresso-200 border-espresso-200" : "border-muted/40",
                    )}
                  >
                    {active && (
                      <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory-50" fill="none">
                        <path d="M2 6.5L5 9.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                  <span className={cn("link-underline", active ? "text-espresso-200" : "text-muted")}>
                    {m.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className="text-[10px] tracking-widest2 uppercase text-muted mb-4">Tone</div>
        <ul className="space-y-2.5 text-sm">
          {toneOptions.map((t) => (
            <li key={t.id} className="flex items-center gap-3 text-muted">
              <span
                className="w-3.5 h-3.5 rounded-full border border-muted/30"
                style={{ background: t.swatch }}
              />
              {t.label}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={resetFilters}
        className="text-[11px] tracking-widest2 uppercase text-muted hover:text-espresso-200 link-underline"
      >
        Clear all
      </button>
    </div>
  );
}
