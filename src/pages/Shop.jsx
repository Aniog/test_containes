import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, priceBands } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";

const EMPTY_FILTERS = { categories: [], prices: [], materials: [] };

function matchesPrice(product, ids) {
  if (ids.length === 0) return true;
  return ids.some((id) => {
    const band = priceBands.find((b) => b.id === id);
    if (!band) return false;
    return product.price >= band.min && product.price <= band.max;
  });
}

function matchesMaterials(product, list) {
  if (list.length === 0) return true;
  return list.some((m) =>
    (product.material || "").toLowerCase().includes(m.toLowerCase()),
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);

  // Sync from URL on mount
  useEffect(() => {
    const cat = searchParams.get("category");
    const sortParam = searchParams.get("sort");
    if (cat && categories.some((c) => c.id === cat)) {
      setFilters((f) => ({ ...f, categories: [cat] }));
    }
    if (sortParam) setSort(sortParam);
  }, []); // eslint-disable-line

  // Counts per filter value
  const counts = useMemo(() => {
    const byCategory = {};
    const byPrice = {};
    const byMaterial = {};
    products.forEach((p) => {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
      priceBands.forEach((b) => {
        if (p.price >= b.min && p.price <= b.max) {
          byPrice[b.id] = (byPrice[b.id] || 0) + 1;
        }
      });
      if (p.material) {
        const head = p.material.split("·")[0].trim();
        byMaterial[head] = (byMaterial[head] || 0) + 1;
      }
    });
    return { byCategory, byPrice, byMaterial };
  }, []);

  const filtered = useMemo(() => {
    let out = products.filter(
      (p) =>
        (filters.categories.length === 0 ||
          filters.categories.includes(p.category)) &&
        matchesPrice(p, filters.prices) &&
        matchesMaterials(p, filters.materials),
    );
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
    if (sort === "newest") out = [...out].reverse();
    return out;
  }, [filters, sort]);

  const activeChipCount =
    filters.categories.length + filters.prices.length + filters.materials.length;

  return (
    <>
      {/* Page header */}
      <section className="bg-ivory-soft border-b border-hairline">
        <div className="container-page py-12 md:py-16">
          <p className="eyebrow text-taupe mb-3">The Edit</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-ink">
            Shop the Collection
          </h1>
          <p className="mt-3 text-sm md:text-base text-taupe max-w-xl">
            Every piece, hand-finished in 18K gold plate. Slow-made in small
            batches — never restocked twice in exactly the same way.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-page py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="md:col-span-3">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                counts={counts}
                onClear={() => setFilters(EMPTY_FILTERS)}
                mobileOpen={mobileFilters}
                onCloseMobile={() => setMobileFilters(false)}
              />
            </div>

            {/* Main column */}
            <div className="md:col-span-9">
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-3 mb-6 md:mb-8 pb-4 border-b border-hairline">
                <p className="text-sm text-taupe">
                  <span className="text-ink font-medium">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "piece" : "pieces"}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileFilters(true)}
                    className="md:hidden inline-flex items-center gap-2 text-xs tracking-eyebrow uppercase text-ink border border-hairline px-4 py-2.5"
                  >
                    <SlidersHorizontal
                      className="w-3.5 h-3.5"
                      strokeWidth={1.5}
                    />
                    Filter
                    {activeChipCount > 0 && (
                      <span className="bg-ink text-ivory w-4 h-4 text-[10px] leading-4 text-center rounded-full">
                        {activeChipCount}
                      </span>
                    )}
                  </button>
                  <SortDropdown value={sort} onChange={setSort} />
                </div>
              </div>

              {/* Active filter chips */}
              {activeChipCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {filters.categories.map((id) => {
                    const c = categories.find((x) => x.id === id);
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() =>
                          setFilters((f) => ({
                            ...f,
                            categories: f.categories.filter((x) => x !== id),
                          }))
                        }
                        className="inline-flex items-center gap-2 bg-ivory-soft border border-hairline px-3 py-1.5 text-xs text-ink hover:border-ink transition-colors"
                      >
                        {c?.label}
                        <X className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    );
                  })}
                  {filters.prices.map((id) => {
                    const b = priceBands.find((x) => x.id === id);
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() =>
                          setFilters((f) => ({
                            ...f,
                            prices: f.prices.filter((x) => x !== id),
                          }))
                        }
                        className="inline-flex items-center gap-2 bg-ivory-soft border border-hairline px-3 py-1.5 text-xs text-ink hover:border-ink transition-colors"
                      >
                        {b?.label}
                        <X className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    );
                  })}
                  {filters.materials.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() =>
                        setFilters((f) => ({
                          ...f,
                          materials: f.materials.filter((x) => x !== m),
                        }))
                      }
                      className="inline-flex items-center gap-2 bg-ivory-soft border border-hairline px-3 py-1.5 text-xs text-ink hover:border-ink transition-colors"
                    >
                      {m}
                      <X className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              )}

              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-3xl text-ink mb-2">
                    Nothing here yet
                  </p>
                  <p className="text-sm text-taupe">
                    Try removing a filter to see more pieces.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                  {filtered.map((p) => (
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
