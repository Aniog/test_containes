import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const priceBands = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80plus", label: "$80+", min: 80, max: Infinity },
];

const materials = [
  { id: "all", label: "All Materials" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "low", label: "Price: Low to High" },
  { id: "high", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const categoryNameById = Object.fromEntries(
  categories.map((c) => [c.id, c.label]),
);

function RadioGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h3 className="eyebrow text-ink mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {options.map((opt) => {
          const id = `${title}-${opt.id}`;
          const checked = value === opt.id;
          return (
            <li key={opt.id}>
              <label
                htmlFor={id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span
                  className={cn(
                    "w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors",
                    checked
                      ? "border-gold"
                      : "border-ink/30 group-hover:border-ink/60",
                  )}
                >
                  {checked && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </span>
                <input
                  type="radio"
                  id={id}
                  name={title}
                  value={opt.id}
                  checked={checked}
                  onChange={() => onChange(opt.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "text-[14px]",
                    checked ? "text-ink" : "text-muted",
                  )}
                >
                  {opt.label}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [priceBand, setPriceBand] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const c = searchParams.get("category") || "all";
    setCategory(c);
  }, [searchParams]);

  useEffect(() => {
    if (category === "all") {
      if (searchParams.get("category")) {
        const next = new URLSearchParams(searchParams);
        next.delete("category");
        setSearchParams(next, { replace: true });
      }
    } else if (searchParams.get("category") !== category) {
      const next = new URLSearchParams(searchParams);
      next.set("category", category);
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = useMemo(() => {
    const band = priceBands.find((b) => b.id === priceBand) || priceBands[0];
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < band.min || p.price > band.max) return false;
      if (material !== "all" && p.tone !== material) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating")
      list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, priceBand, material, sort]);

  const heading =
    category === "all" ? "Shop All" : categoryNameById[category] || "Shop";

  return (
    <div ref={containerRef} className="bg-cream-100">
      <header className="pt-28 lg:pt-36 pb-10 lg:pb-14 text-center">
        <span className="eyebrow-gold">The Collection</span>
        <h1 className="font-serif text-ink mt-3 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05]">
          {heading}
        </h1>
        <p className="mt-4 text-muted text-[14px] sm:text-[15px] max-w-md mx-auto">
          Demi-fine pieces designed to be worn every day. Free worldwide
          shipping over $80.
        </p>
      </header>

      <div className="max-w-editorial mx-auto px-5 lg:px-10 pb-20 lg:pb-28">
        <div className="flex items-center justify-between border-y border-ink/10 py-4 mb-8 lg:mb-10">
          <p className="text-[12px] tracking-[0.2em] uppercase text-muted">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-ink border border-ink/20 px-3 py-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filters
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink"
              >
                Sort: {sortOptions.find((s) => s.id === sort)?.label}
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform",
                    sortOpen && "rotate-180",
                  )}
                  strokeWidth={1.5}
                />
              </button>
              {sortOpen && (
                <ul className="absolute right-0 top-full mt-2 bg-cream-50 border border-ink/10 z-20 min-w-[200px] py-2 shadow-soft">
                  {sortOptions.map((opt) => (
                    <li key={opt.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSort(opt.id);
                          setSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2 text-[13px] hover:bg-cream-200 transition-colors",
                          sort === opt.id ? "text-ink" : "text-muted",
                        )}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-10">
              <RadioGroup
                title="Category"
                options={[{ id: "all", label: "All" }, ...categories]}
                value={category}
                onChange={setCategory}
              />
              <div className="divider-hairline" />
              <RadioGroup
                title="Price"
                options={priceBands}
                value={priceBand}
                onChange={setPriceBand}
              />
              <div className="divider-hairline" />
              <RadioGroup
                title="Material"
                options={materials}
                value={material}
                onChange={setMaterial}
              />
            </div>
          </aside>

          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl text-ink">Nothing found</p>
                <p className="mt-3 text-[14px] text-muted">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filtered.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    eager={idx < 2}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity",
          filtersOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-cream-100 max-h-[85vh] overflow-y-auto transition-transform duration-500",
            filtersOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
            <h2 className="eyebrow text-ink">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="px-6 py-6 space-y-8">
            <RadioGroup
              title="Category"
              options={[{ id: "all", label: "All" }, ...categories]}
              value={category}
              onChange={setCategory}
            />
            <div className="divider-hairline" />
            <RadioGroup
              title="Price"
              options={priceBands}
              value={priceBand}
              onChange={setPriceBand}
            />
            <div className="divider-hairline" />
            <RadioGroup
              title="Material"
              options={materials}
              value={material}
              onChange={setMaterial}
            />
          </div>
          <div className="sticky bottom-0 bg-cream-100 border-t border-ink/10 p-5">
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="btn-primary w-full"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
