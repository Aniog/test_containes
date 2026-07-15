import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/shop/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { CATEGORIES, PRODUCTS, filterProducts, sortProducts } from "@/data/products";

const PRICE_BUCKETS = {
  "0-50": { min: 0, max: 50 },
  "50-100": { min: 50, max: 100 },
  "100-200": { min: 100, max: 1000 },
};

function categoryLabel(slug) {
  if (!slug) return null;
  return CATEGORIES.find((c) => c.slug === slug)?.label || slug;
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);

  const category = params.get("category") || null;
  const material = params.get("material") || null;
  const priceBucket = params.get("price") || null;

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value == null || value === "") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const products = useMemo(() => {
    const price = priceBucket ? PRICE_BUCKETS[priceBucket] : null;
    const filtered = filterProducts({
      category,
      material,
      priceMin: price?.min ?? null,
      priceMax: price?.max ?? null,
    });
    return sortProducts(filtered, sort);
  }, [category, material, priceBucket, sort]);

  const containerRef = useRef(null);
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, [products.length, sort, category, material, priceBucket]);

  const clearAll = () => {
    setParams(new URLSearchParams(), { replace: true });
    setSort("featured");
  };

  const title = categoryLabel(category) || "The Full Collection";
  const subtitle = category
    ? "Hand-picked pieces, refined to a single category."
    : "Demi-fine jewelry, made to be worn every day.";

  return (
    <div className="bg-cream" ref={containerRef}>
      {/* Editorial header */}
      <section className="bg-ivory border-b border-tan/40">
        <div className="container-editorial py-12 md:py-20">
          <p className="eyebrow text-gold-deep">Shop</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-ink leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-mauve text-[15px] md:text-[16px] max-w-prose">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="container-editorial py-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setMobileFilters(true)}
          className="lg:hidden inline-flex items-center gap-2 h-10 px-4 border border-ink/20 text-[12px] uppercase tracking-nav text-ink hover:border-ink transition-colors"
        >
          <SlidersHorizontal size={14} strokeWidth={1.4} />
          Filter
        </button>
        <p className="text-[12px] text-mauve">
          <span className="text-ink price font-medium">{products.length}</span>{" "}
          {products.length === 1 ? "piece" : "pieces"}
        </p>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="container-editorial pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr] gap-10 lg:gap-14">
          <div className="hidden lg:block">
            <FilterSidebar
              category={category}
              material={material}
              priceBucket={priceBucket}
              onCategory={(v) => setParam("category", v)}
              onMaterial={(v) => setParam("material", v)}
              onPriceBucket={(v) => setParam("price", v)}
              onClear={clearAll}
              total={PRODUCTS.length}
              resultCount={products.length}
              open={false}
            />
          </div>

          <div className="min-w-0">
            {products.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">
                  No pieces match those filters
                </p>
                <p className="mt-2 text-sm text-mauve">
                  Try removing a filter to see the full edit.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="btn-outline mt-6"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {products.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer (reuses FilterSidebar) */}
      <div className="lg:hidden">
        <FilterSidebar
          category={category}
          material={material}
          priceBucket={priceBucket}
          onCategory={(v) => setParam("category", v)}
          onMaterial={(v) => setParam("material", v)}
          onPriceBucket={(v) => setParam("price", v)}
          onClear={clearAll}
          total={PRODUCTS.length}
          resultCount={products.length}
          open={mobileFilters}
          onClose={() => setMobileFilters(false)}
        />
        {mobileFilters && (
          <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-ivory border-t border-tan/50">
            <button
              type="button"
              onClick={() => setMobileFilters(false)}
              className="btn-primary w-full"
            >
              Show {products.length} {products.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
