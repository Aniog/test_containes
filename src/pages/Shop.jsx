import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { SlidersHorizontal } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/home/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const PRICE_MAX = 120;

const initialFilters = {
  category: "all",
  priceMin: 0,
  priceMax: PRICE_MAX,
  materials: [],
};

export default function Shop() {
  const containerRef = useRef(null);
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState({
    ...initialFilters,
    category: params.get("category") || "all",
  });
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep URL in sync with category
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (filters.category === "all") next.delete("category");
    else next.set("category", filters.category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const materials = useMemo(
    () => Array.from(new Set(PRODUCTS.map((p) => p.material))),
    []
  );

  const filtered = useMemo(() => {
    let out = PRODUCTS.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category)
        return false;
      if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
      if (
        filters.materials.length > 0 &&
        !filters.materials.includes(p.material)
      )
        return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        out = [...out].sort((a, b) => (a.badge === "New" ? -1 : 1));
        break;
      case "best":
        out = [...out].sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }
    return out;
  }, [filters, sort]);

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Header */}
      <div className="bg-cream pt-32 md:pt-40 pb-10 md:pb-14 border-b border-line/70">
        <div className="max-w-8xl mx-auto px-5 md:px-8 text-center">
          <p className="eyebrow text-gold-deep mb-3">The Edit</p>
          <h1 className="display-lg text-ink">Shop all jewelry</h1>
          <p className="mt-4 text-muted font-sans font-light text-[15px] max-w-lg mx-auto">
            {PRODUCTS.length} hand-finished pieces — all 18K gold plated,
            hypoallergenic, and shipped gift-ready.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10 lg:gap-14">
          <FilterSidebar
            categories={CATEGORIES}
            materials={materials}
            priceMax={PRICE_MAX}
            filters={filters}
            onChange={setFilters}
            onReset={() => setFilters(initialFilters)}
            total={PRODUCTS.length}
            mobileOpen={mobileOpen}
            onCloseMobile={() => setMobileOpen(false)}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-7 md:mb-9">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-3 font-sans font-medium text-ink"
              >
                <SlidersHorizontal strokeWidth={1.25} className="w-4 h-4" />
                Filter
              </button>
              <p className="hidden lg:block text-sm text-muted font-sans font-light">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="ml-auto">
                <SortDropdown value={sort} onChange={setSort} />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">No matches</p>
                <p className="mt-2 text-muted font-sans font-light text-sm">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
