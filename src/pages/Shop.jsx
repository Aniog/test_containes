import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const materials = ["18K Gold Plated"];
const priceBands = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, selectedPrices, selectedMaterials, sort]);

  const setCategoryParam = (cat) => {
    setCategory(cat);
    const next = new URLSearchParams(params);
    if (cat === "all") next.delete("category");
    else next.set("category", cat);
    setParams(next, { replace: true });
  };

  const toggle = (list, setList, id) => {
    setList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false;
      if (selectedPrices.length) {
        const matches = selectedPrices.some((id) => {
          const band = priceBands.find((b) => b.id === id);
          return band && p.price >= band.min && p.price < band.max;
        });
        if (!matches) return false;
      }
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
  }, [category, selectedMaterials, selectedPrices, sort]);

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <button
              type="button"
              onClick={() => setCategoryParam("all")}
              className={cn(
                "text-sm transition-colors",
                category === "all" ? "text-gold" : "text-taupe hover:text-ink"
              )}
            >
              All Jewelry
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategoryParam(c.id)}
                className={cn(
                  "text-sm transition-colors",
                  category === c.id ? "text-gold" : "text-taupe hover:text-ink"
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceBands.map((b) => (
            <li key={b.id}>
              <label className="flex items-center gap-3 text-sm text-taupe cursor-pointer hover:text-ink transition-colors">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(b.id)}
                  onChange={() => toggle(selectedPrices, setSelectedPrices, b.id)}
                  className="accent-gold w-4 h-4"
                />
                {b.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {materials.map((m) => (
            <li key={m}>
              <label className="flex items-center gap-3 text-sm text-taupe cursor-pointer hover:text-ink transition-colors">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m)}
                  onChange={() => toggle(selectedMaterials, setSelectedMaterials, m)}
                  className="accent-gold w-4 h-4"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-cream border-b border-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            {category === "all"
              ? "All Jewelry"
              : categories.find((c) => c.id === category)?.name}
          </h1>
          <p className="mt-4 text-sm text-taupe max-w-md mx-auto">
            Demi-fine gold pieces, designed to be treasured and worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink"
              >
                <SlidersHorizontal size={15} /> Filters
              </button>
              <p className="hidden md:block text-xs uppercase tracking-[0.2em] text-taupe">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-[0.2em] text-taupe">
                  Sort
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border-b border-sand text-sm text-ink py-1 pr-6 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategoryParam("all");
                    setSelectedPrices([]);
                    setSelectedMaterials([]);
                  }}
                  className="mt-4 text-gold underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div
            className="absolute inset-0 bg-espresso/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-ivory p-6 overflow-y-auto animate-fade">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-ink uppercase tracking-[0.15em]">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X size={22} />
              </button>
            </div>
            {FilterPanel}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-10 w-full py-4 bg-gold text-ivory uppercase tracking-[0.18em] text-xs"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
