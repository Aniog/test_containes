import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { useStrkImageLoader } from "@/components/ui/StrkImage";
import { PRODUCTS, CATEGORIES, PRICE_BUCKETS } from "@/data/products";

const EMPTY_FILTERS = {
  category: new Set(),
  material: new Set(),
  price: new Set(),
};

function sortItems(items, sort) {
  const arr = [...items];
  if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
  else if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
  else if (sort === "newest") arr.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
  return arr;
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category");
  const [filters, setFilters] = useState(() => {
    const init = { ...EMPTY_FILTERS, category: new Set() };
    if (initialCategory && CATEGORIES.some((c) => c.id === initialCategory)) {
      init.category.add(initialCategory);
    }
    return init;
  });
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Sync URL when category filter changes
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (filters.category.size === 1) {
      next.set("category", [...filters.category][0]);
    } else {
      next.delete("category");
    }
    if (next.toString() !== params.toString()) {
      setParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.category.size && !filters.category.has(p.category)) return false;
      if (filters.material.size && !filters.material.has(p.material)) return false;
      if (filters.price.size) {
        const inAny = [...filters.price].some((id) => {
          const b = PRICE_BUCKETS.find((bb) => bb.id === id);
          return p.price >= b.min && p.price < b.max;
        });
        if (!inAny) return false;
      }
      return true;
    });
  }, [filters]);

  const sorted = useMemo(() => sortItems(filtered, sort), [filtered, sort]);

  const ref = useStrkImageLoader([sorted.length, sort]);

  const activeCategory =
    filters.category.size === 1
      ? CATEGORIES.find((c) => c.id === [...filters.category][0])?.label
      : "All Jewelry";

  return (
    <>
      {/* Editorial header */}
      <section className="bg-cream-soft border-b border-line pt-28 md:pt-32 pb-10 md:pb-14">
        <div className="mx-auto max-w-editorial px-5 md:px-10 text-center">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
            {activeCategory}
          </h1>
          <p className="mt-4 text-sm md:text-base text-ink-soft max-w-md mx-auto">
            Demi-fine jewelry, made in small batches. Filter by category, material,
            or price to find your next piece.
          </p>
        </div>
      </section>

      <section
        ref={ref}
        className="bg-cream py-10 md:py-14"
      >
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
            {/* Sidebar — desktop */}
            <div className="hidden md:block">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                products={PRODUCTS}
              />
            </div>

            {/* Sidebar — mobile sheet */}
            {showFilters && (
              <div className="md:hidden fixed inset-0 z-[55] bg-ink-deep/55 backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 max-h-[90vh] overflow-y-auto bg-cream-soft p-6 shadow-soft animate-fadeUp">
                  <FilterSidebar
                    filters={filters}
                    setFilters={setFilters}
                    products={PRODUCTS}
                    onClose={() => setShowFilters(false)}
                  />
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setShowFilters(false)}
                      className="btn-primary btn-gold w-full"
                    >
                      View {filtered.length} pieces
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1">
              <div className="flex items-center justify-between pb-5 border-b border-line">
                <p className="text-sm text-ink-soft">
                  <span className="text-ink font-medium">{sorted.length}</span> pieces
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowFilters(true)}
                    className="md:hidden inline-flex items-center gap-1.5 border border-line px-3.5 py-2 text-sm text-ink"
                  >
                    <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                    Filter
                  </button>
                  <SortDropdown value={sort} onChange={setSort} />
                </div>
              </div>

              {sorted.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-display text-2xl">No pieces match your filters.</p>
                  <button
                    type="button"
                    onClick={() => setFilters({ ...EMPTY_FILTERS })}
                    className="mt-4 btn-outline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-7">
                  {sorted.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
