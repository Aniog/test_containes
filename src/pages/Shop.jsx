import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
  { id: "100-plus", label: "$100 +", min: 100, max: Infinity },
];

const MATERIALS = [
  { id: "all", label: "All materials" },
  { id: "gold", label: "18K Gold Plated" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [priceBucket, setPriceBucket] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  // Sync category to URL when changed
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category && category !== "all") next.set("category", category);
    else next.delete("category");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // Update local category when URL changes externally
  useEffect(() => {
    const urlCat = params.get("category") || "all";
    if (urlCat !== category) setCategory(urlCat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.toString()]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket) || PRICE_BUCKETS[0];
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (material !== "all" && p.tone !== material) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      return true;
    });
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
      default:
        break;
    }
    return list;
  }, [category, priceBucket, material, sort]);

  const clearAll = () => {
    setCategory("all");
    setPriceBucket("all");
    setMaterial("all");
  };

  return (
    <div className="bg-cream pt-24 md:pt-28">
      {/* Header */}
      <div className="container-editorial">
        <div className="py-10 md:py-16 border-b border-hairline">
          <div className="eyebrow mb-3">All pieces</div>
          <h1 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05] text-balance">
            The Collection
          </h1>
          <p className="mt-4 text-taupe text-sm md:text-base max-w-2xl leading-relaxed">
            Considered demi-fine jewelry — designed to be worn with everything, and kept for a
            lifetime. Filter by category, price or material to find your piece.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="container-editorial sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-hairline">
        <div className="flex items-center justify-between py-4 gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              className="inline-flex items-center gap-2 lg:hidden text-[11px] uppercase tracking-widest2 text-ink hover:text-gold-600 transition-colors border border-hairline px-4 py-2.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filter
            </button>
            <div className="hidden lg:block text-[11px] uppercase tracking-widest2 text-taupe">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <label className="hidden sm:block text-[11px] uppercase tracking-widest2 text-taupe">
              Sort
            </label>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-hairline pl-4 pr-9 py-2.5 text-[11px] uppercase tracking-widest2 text-ink focus:border-ink outline-none cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="w-3.5 h-3.5 text-ink absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-editorial py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <FiltersPanel
              category={category}
              setCategory={setCategory}
              priceBucket={priceBucket}
              setPriceBucket={setPriceBucket}
              material={material}
              setMaterial={setMaterial}
              onClear={clearAll}
            />
          </aside>

          {/* Grid */}
          <div className="lg:col-span-9">
            <div className="text-[11px] uppercase tracking-widest2 text-taupe mb-6 lg:hidden">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button onClick={clearAll} className="btn-outline mt-6">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-500",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!filterOpen}
      >
        <div className="absolute inset-0 bg-ink/50" onClick={() => setFilterOpen(false)} />
        <aside
          className={cn(
            "absolute top-0 left-0 h-full w-[88%] max-w-sm bg-cream flex flex-col transition-transform duration-500 ease-elegant",
            filterOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <span className="text-[11px] uppercase tracking-widest2 font-medium text-ink">Filter</span>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FiltersPanel
              category={category}
              setCategory={setCategory}
              priceBucket={priceBucket}
              setPriceBucket={setPriceBucket}
              material={material}
              setMaterial={setMaterial}
              onClear={clearAll}
            />
          </div>
          <div className="border-t border-hairline p-6">
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="btn-gold w-full"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="py-6 border-b border-hairline last:border-b-0">
      <div className="eyebrow mb-4">{title}</div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function RadioRow({ checked, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 text-left text-sm text-ink hover:text-gold-600 transition-colors py-1"
    >
      <span
        className={cn(
          "w-4 h-4 border flex-shrink-0 flex items-center justify-center",
          checked ? "border-ink bg-ink" : "border-hairline bg-cream"
        )}
      >
        {checked && <span className="w-1.5 h-1.5 bg-cream rounded-full" />}
      </span>
      <span>{label}</span>
    </button>
  );
}

function FiltersPanel({ category, setCategory, priceBucket, setPriceBucket, material, setMaterial, onClear }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="font-serif text-2xl text-ink">Refine</div>
        <button
          type="button"
          onClick={onClear}
          className="text-[10px] uppercase tracking-widest2 text-taupe hover:text-ink transition-colors"
        >
          Clear all
        </button>
      </div>

      <FilterGroup title="Category">
        <RadioRow
          checked={category === "all"}
          onClick={() => setCategory("all")}
          label="All jewelry"
        />
        {categories.map((c) => (
          <RadioRow
            key={c.id}
            checked={category === c.id}
            onClick={() => setCategory(c.id)}
            label={c.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <RadioRow
            key={b.id}
            checked={priceBucket === b.id}
            onClick={() => setPriceBucket(b.id)}
            label={b.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            checked={material === m.id}
            onClick={() => setMaterial(m.id)}
            label={m.label}
          />
        ))}
      </FilterGroup>
    </div>
  );
}
