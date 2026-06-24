import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"];
const MATERIALS = ["18K Gold Plated", "Silver Plated"];
const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 — $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80 and up", min: 80, max: Infinity },
];
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = params.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [priceBucket, setPriceBucket] = useState("all");
  const [material, setMaterial] = useState("All");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  // Sync category back to URL for shareable links
  useEffect(() => {
    if (category && category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    setParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket);
    const result = products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (material !== "All" && p.material !== material) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    return result;
  }, [category, priceBucket, material, sort]);

  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [filtered.length, category, priceBucket, material, sort]);

  const reset = () => {
    setCategory("All");
    setPriceBucket("all");
    setMaterial("All");
    setSort("featured");
  };

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14 border-b border-[#E5DCCD]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="eyebrow mb-3">The Collection</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-[#13100E] leading-[1.02]">
            {category === "All" ? "All Jewelry" : category}
          </h1>
          <p className="text-[#8A7A66] mt-5 max-w-xl mx-auto">
            Demi-fine pieces in 18K gold plate. Wear every day, treasure for years.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 lg:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 lg:mb-10">
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-medium text-[#2A211B] border border-[#E5DCCD] px-4 py-2.5 hover:border-[#B8935C] transition"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>
          <p className="hidden lg:block text-sm text-[#8A7A66]">
            <span className="text-[#13100E] font-medium">{filtered.length}</span> {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="hidden sm:inline text-[11px] uppercase tracking-[0.2em] text-[#8A7A66] font-medium">
              Sort
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-[#E5DCCD] text-[12px] uppercase tracking-[0.18em] font-medium text-[#2A211B] pl-4 pe-10 py-2.5 hover:border-[#B8935C] transition focus:outline-none focus:border-[#B8935C]"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
              <ChevronDown size={14} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#2A211B]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block">
            <FilterPanel
              category={category}
              setCategory={setCategory}
              priceBucket={priceBucket}
              setPriceBucket={setPriceBucket}
              material={material}
              setMaterial={setMaterial}
              onReset={reset}
            />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl text-[#13100E] mb-3">Nothing here yet.</p>
                <p className="text-[#8A7A66] mb-6">Try clearing your filters to see more pieces.</p>
                <button
                  type="button"
                  onClick={reset}
                  className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#13100E] border-b border-[#13100E] hover:border-[#B8935C] hover:text-[#B8935C] transition pb-1"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setFilterOpen(false)}
            className="absolute inset-0 bg-[#13100E]/40 fade-in"
          />
          <aside className="absolute left-0 top-0 h-full w-[88%] max-w-[360px] bg-[#FAF7F2] flex flex-col" style={{ animation: "slideInLeft 280ms ease-out both" }}>
            <div className="flex items-center justify-between px-5 h-16 border-b border-[#E5DCCD]">
              <span className="font-serif text-2xl text-[#13100E]">Filter</span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setFilterOpen(false)}
                className="w-9 h-9 flex items-center justify-center"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-6 flex-1">
              <FilterPanel
                category={category}
                setCategory={setCategory}
                priceBucket={priceBucket}
                setPriceBucket={setPriceBucket}
                material={material}
                setMaterial={setMaterial}
                onReset={reset}
              />
            </div>
            <div className="border-t border-[#E5DCCD] p-5">
              <button
                type="button"
                onClick={() => setFilterOpen(false)}
                className="w-full bg-[#13100E] text-white text-[12px] uppercase tracking-[0.22em] font-medium py-4 hover:bg-[#2A211B] transition"
              >
                View {filtered.length} pieces
              </button>
            </div>
          </aside>
          <style>{`@keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>
        </div>
      )}
    </div>
  );
}

function FilterPanel({
  category, setCategory,
  priceBucket, setPriceBucket,
  material, setMaterial,
  onReset,
}) {
  return (
    <div className="space-y-9">
      <FilterGroup title="Category">
        {["All", ...CATEGORIES].map((c) => (
          <FilterRadio key={c} name="cat" label={c} value={c} checked={category === c} onChange={setCategory} />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <FilterRadio key={b.id} name="price" label={b.label} value={b.id} checked={priceBucket === b.id} onChange={setPriceBucket} />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {["All", ...MATERIALS].map((m) => (
          <FilterRadio key={m} name="material" label={m} value={m} checked={material === m} onChange={setMaterial} />
        ))}
      </FilterGroup>

      <button
        type="button"
        onClick={onReset}
        className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#8A7A66] hover:text-[#13100E] transition border-b border-[#E5DCCD] hover:border-[#13100E] pb-1"
      >
        Reset filters
      </button>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#13100E] mb-4 font-sans">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function FilterRadio({ name, label, value, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition ${checked ? "border-[#B8935C]" : "border-[#C6BFB0] group-hover:border-[#8A7A66]"}`}>
        {checked && <span className="w-1.5 h-1.5 rounded-full bg-[#B8935C]" />}
      </span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span className={`text-sm transition ${checked ? "text-[#13100E]" : "text-[#2A211B] group-hover:text-[#13100E]"}`}>
        {label}
      </span>
    </label>
  );
}
