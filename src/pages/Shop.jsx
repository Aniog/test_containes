import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ALL_PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "all", label: "All prices", test: () => true },
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const MATERIALS = [
  { id: "all", label: "All materials" },
  { id: "18k-gold", label: "18K Gold Plated" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setCategory = (cat) => {
    if (cat === "all") searchParams.delete("category");
    else searchParams.set("category", cat);
    setSearchParams(searchParams, { replace: true });
  };

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price);
    let list = ALL_PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!range.test(p)) return false;
      if (material !== "all" && !p.material.toLowerCase().includes("gold"))
        return false;
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
  }, [category, price, material, sort]);

  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
  }, [filtered.length, category]);

  const activeHeading =
    category === "all"
      ? "All Jewelry"
      : CATEGORIES.find((c) => c.id === category)?.label ?? "All Jewelry";

  const filterContent = (
    <div className="space-y-9">
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-espresso">
          Category
        </h3>
        <ul className="mt-4 space-y-2.5">
          {[{ id: "all", label: "All Jewelry" }, ...CATEGORIES].map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "text-sm transition-colors duration-300",
                  category === c.id
                    ? "font-semibold text-gold"
                    : "text-mocha hover:text-espresso"
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-champagne pt-7">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-espresso">
          Price
        </h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setPrice(r.id)}
                className={cn(
                  "flex items-center gap-2.5 text-sm transition-colors duration-300",
                  price === r.id
                    ? "font-semibold text-gold"
                    : "text-mocha hover:text-espresso"
                )}
              >
                <span
                  className={cn(
                    "h-3 w-3 rounded-full border transition-all duration-300",
                    price === r.id
                      ? "border-gold bg-gold"
                      : "border-espresso/30"
                  )}
                />
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-champagne pt-7">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-espresso">
          Material
        </h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={cn(
                  "text-sm transition-colors duration-300",
                  material === m.id
                    ? "font-semibold text-gold"
                    : "text-mocha hover:text-espresso"
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <header className="border-b border-champagne bg-sand/60">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              The Collection
            </p>
            <h1 className="mt-3 font-display text-4xl font-medium uppercase tracking-[0.1em] text-espresso md:text-6xl">
              {activeHeading}
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-mocha">
              Demi-fine pieces plated in 18k gold over recycled metals —
              designed in limited runs, finished by hand, made to be worn daily.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-espresso/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso transition-colors hover:border-espresso lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-taupe lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="appearance-none border border-espresso/25 bg-cream py-2.5 pl-5 pr-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:border-espresso focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-mocha"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterContent}</div>
          </aside>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
              {filtered.map((product, i) => (
                <Reveal key={product.id} delay={Math.min(i, 5) * 60}>
                  <ProductCard product={product} index={i} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-champagne py-24 text-center">
              <p className="font-display text-2xl text-espresso">
                No pieces match these filters
              </p>
              <p className="mt-2 text-sm text-taupe">
                Try widening your price range or choosing another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setPrice("all");
                  setMaterial("all");
                }}
                className="mt-6 border border-espresso px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso transition-colors hover:bg-espresso hover:text-cream"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 lg:hidden",
          filtersOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-cream px-6 py-6 transition-transform duration-500 ease-out",
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-xl font-semibold uppercase tracking-[0.18em] text-espresso">
              Filters
            </span>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="p-2 text-espresso"
            >
              <X size={20} />
            </button>
          </div>
          {filterContent}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-10 w-full bg-espresso py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-cream transition-colors hover:bg-gold-deep"
          >
            View {filtered.length} pieces
          </button>
        </div>
      </div>
    </div>
  );
}
