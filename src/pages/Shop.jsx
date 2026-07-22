import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/product/ProductCard";
import { cn, formatPrice } from "@/lib/utils";

const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Mixed"];
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
  const [priceMax, setPriceMax] = useState(120);
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync state -> URL
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category === "all") next.delete("category");
    else next.set("category", category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // Re-trigger image loading when filters change (since visible product cards may change)
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const root = document.getElementById("shop-root");
      if (root) ImageHelper.loadImages(strkImgConfig, root);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [category, sort, priceMax, material]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (material !== "all") {
      list = list.filter((p) =>
        p.material.toLowerCase().includes(material.toLowerCase())
      );
    }
    list = list.filter((p) => p.price <= priceMax);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, material, priceMax, sort]);

  const activeFiltersCount =
    (category !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0) +
    (priceMax < 120 ? 1 : 0);

  return (
    <div id="shop-root" className="bg-cream pt-24 md:pt-28">
      {/* Editorial header */}
      <header className="border-b border-ink/10">
        <div className="container-shell py-14 md:py-20 text-center">
          <span className="eyebrow">The Edit</span>
          <h1 className="font-display text-5xl md:text-7xl mt-3 text-ink">
            Shop All
          </h1>
          <p className="mt-5 text-ink-soft text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Demure, demi-fine, and made for everyday rituals.
          </p>
        </div>
      </header>

      <div className="container-shell py-10 md:py-14">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 lg:w-64 flex-shrink-0">
            <Filters
              category={category}
              setCategory={setCategory}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              material={material}
              setMaterial={setMaterial}
            />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-ink/10">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[11px] font-medium tracking-wider-3 uppercase text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.25} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-1 text-champagne-deep">
                    ({activeFiltersCount})
                  </span>
                )}
              </button>
              <p className="hidden md:block text-[11px] tracking-wider-3 uppercase text-mute">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <label
                  htmlFor="sort"
                  className="text-[10px] tracking-wider-3 uppercase text-mute"
                >
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent text-[11px] tracking-wider-2 uppercase text-ink border-b border-ink/20 py-1 pr-6 outline-none cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-3xl text-ink">Nothing here yet</p>
                <p className="mt-3 text-ink-soft">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 pt-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/50"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute bottom-0 inset-x-0 max-h-[85vh] overflow-y-auto bg-cream text-ink p-6 transition-transform duration-500 ease-out-soft",
            mobileOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[11px] tracking-wider-3 uppercase font-medium">
              Filter
            </h2>
            <button onClick={() => setMobileOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
          <Filters
            category={category}
            setCategory={setCategory}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
            material={material}
            setMaterial={setMaterial}
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full mt-8"
          >
            Show {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </button>
        </aside>
      </div>
    </div>
  );
}

function Filters({ category, setCategory, priceMax, setPriceMax, material, setMaterial }) {
  return (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="text-[10px] tracking-wider-3 uppercase text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          <li>
            <FilterRow
              active={category === "all"}
              onClick={() => setCategory("all")}
              label="All Pieces"
            />
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <FilterRow
                active={category === c.id}
                onClick={() => setCategory(c.id)}
                label={c.name}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[10px] tracking-wider-3 uppercase text-ink">
            Price
          </h3>
          <span className="text-[10px] tracking-wider-2 uppercase text-mute tabular-nums">
            Up to {formatPrice(priceMax)}
          </span>
        </div>
        <input
          type="range"
          min="30"
          max="120"
          step="5"
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-champagne cursor-pointer"
        />
        <div className="flex items-center justify-between mt-2 text-[10px] tracking-wider-2 uppercase text-mute tabular-nums">
          <span>$30</span>
          <span>$120</span>
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[10px] tracking-wider-3 uppercase text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          <li>
            <FilterRow
              active={material === "all"}
              onClick={() => setMaterial("all")}
              label="All Materials"
            />
          </li>
          {MATERIALS.map((m) => (
            <li key={m}>
              <FilterRow
                active={material === m}
                onClick={() => setMaterial(m)}
                label={m}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FilterRow({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 text-left text-sm transition-colors duration-300 group",
        active ? "text-ink" : "text-ink-soft hover:text-ink"
      )}
    >
      <span
        className={cn(
          "w-3.5 h-3.5 border transition-colors duration-300 flex-shrink-0",
          active ? "border-ink bg-ink" : "border-ink/30 group-hover:border-ink/50"
        )}
      >
        {active && (
          <span className="block w-full h-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-champagne" />
          </span>
        )}
      </span>
      <span className={cn(active && "font-medium")}>{label}</span>
    </button>
  );
}
