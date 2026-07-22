import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const categoryOptions = ["All", "Earrings", "Necklaces", "Huggies"];
const materialOptions = ["All", "18K Gold Plated"];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function Shop() {
  const ref = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [material, setMaterial] = useState("All");
  const [priceIdx, setPriceIdx] = useState(0);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (material !== "All" && p.material !== material) return false;
      const range = priceRanges[priceIdx];
      if (p.price < range.min || p.price >= range.max) return false;
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
  }, [category, material, priceIdx, sort]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [filtered]);

  const setCategoryAndUrl = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categoryOptions.map((c) => (
            <li key={c}>
              <button
                onClick={() => setCategoryAndUrl(c)}
                className={cn(
                  "text-sm transition-colors",
                  category === c ? "text-gold" : "text-ink/70 hover:text-ink"
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {materialOptions.map((m) => (
            <li key={m}>
              <button
                onClick={() => setMaterial(m)}
                className={cn(
                  "text-sm transition-colors",
                  material === m ? "text-gold" : "text-ink/70 hover:text-ink"
                )}
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-ink font-medium mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map((r, i) => (
            <li key={r.label}>
              <button
                onClick={() => setPriceIdx(i)}
                className={cn(
                  "text-sm transition-colors",
                  priceIdx === i ? "text-gold" : "text-ink/70 hover:text-ink"
                )}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory min-h-screen">
      {/* Header */}
      <div className="border-b border-sand/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand/40">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFiltersOpen(true)}
                  className="md:hidden text-[11px] uppercase tracking-widest2 text-ink border border-ink/25 px-4 py-2"
                >
                  Filters
                </button>
                <p className="text-xs text-sand">
                  {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-[11px] uppercase tracking-widest2 text-sand">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-ink/25 text-sm text-ink px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">
                  No pieces match your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-72 bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
                Filters
              </h2>
              <button
                onClick={() => setFiltersOpen(false)}
                className="text-[11px] uppercase tracking-widest2 text-gold"
              >
                Close
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
