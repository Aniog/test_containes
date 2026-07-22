import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/collection/FilterSidebar";
import SortDropdown from "@/components/collection/SortDropdown";

const initialFilters = { category: [], material: [], price: [] };

const priceBands = [
  { id: "0-50", min: 0, max: 50 },
  { id: "50-80", min: 50, max: 80 },
  { id: "80-120", min: 80, max: 120 },
];

export default function Collection() {
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState(() => {
    const cat = params.get("category");
    return {
      category: cat ? [cat] : [],
      material: [],
      price: [],
    };
  });
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filters, sort]);

  useEffect(() => {
    const cat = params.get("category");
    if (cat && filters.category.length === 1 && filters.category[0] === cat) return;
    setFilters((f) => ({ ...f, category: cat ? [cat] : f.category }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const filtered = useMemo(() => {
    let list = products;
    if (filters.category.length) {
      list = list.filter((p) => filters.category.includes(p.category));
    }
    if (filters.material.length) {
      list = list.filter((p) => filters.material.includes(p.material.toLowerCase().replace(/\s+/g, "-")));
    }
    if (filters.price.length) {
      list = list.filter((p) => {
        return filters.price.some((band) => {
          const b = priceBands.find((x) => x.id === band);
          return p.price >= b.min && p.price <= b.max;
        });
      });
    }
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    if (sort === "newest") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [filters, sort]);

  const heading =
    filters.category.length === 1
      ? categories.find((c) => c.id === filters.category[0])?.label
      : "All Jewelry";

  const setCategory = (catId) => {
    if (catId) setParams({ category: catId });
    else setParams({});
  };

  return (
    <>
      {/* Header */}
      <div className="pt-28 md:pt-32 bg-ivory">
        <Container>
          <div className="text-center flex flex-col items-center gap-3 pb-10">
            <span className="eyebrow">Velmora Atelier</span>
            <h1 className="display-1 text-espresso">{heading}</h1>
            <p className="text-sm md:text-[15px] text-graphite/75 font-light max-w-md leading-relaxed">
              {filters.category.length === 1
                ? "An edited edit of our most considered pieces, hand-finished in 18K gold plating."
                : "Demi-fine jewelry, hand-finished in our atelier. Designed to be worn every day."}
            </p>
          </div>
        </Container>
      </div>

      <section className="bg-ivory pb-24">
        <Container>
          <div className="flex gap-10 lg:gap-16">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onClear={() => {
                setFilters(initialFilters);
                setParams({});
              }}
              total={filtered.length}
              mobileOpen={mobileFilters}
              onCloseMobile={() => setMobileFilters(false)}
            />

            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-3 pb-6 border-b border-hairline">
                <button
                  type="button"
                  onClick={() => setMobileFilters(true)}
                  className="md:hidden label text-espresso inline-flex items-center gap-2 border border-hairline px-4 py-2.5"
                >
                  <SlidersHorizontal size={12} strokeWidth={1.4} />
                  Filter
                </button>
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                  {filters.category.length === 0 ? (
                    <span className="text-xs text-taupe font-light">All categories</span>
                  ) : (
                    filters.category.map((c) => {
                      const cat = categories.find((x) => x.id === c);
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setCategory(null)}
                          className="inline-flex items-center gap-2 text-[11px] tracking-label text-espresso border border-hairline px-3 py-1.5 hover:border-espresso transition-colors"
                        >
                          {cat?.label}
                          <X size={10} strokeWidth={1.4} className="text-taupe" />
                        </button>
                      );
                    })
                  )}
                </div>
                <SortDropdown value={sort} onChange={setSort} />
              </div>

              {/* Grid */}
              {filtered.length > 0 ? (
                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 pt-10">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <h3 className="font-serif text-2xl text-espresso mb-2">Nothing matches yet</h3>
                  <p className="text-sm text-taupe font-light mb-5">
                    Try removing a filter — or browse the full collection.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFilters(initialFilters);
                      setParams({});
                    }}
                    className="label text-brass hover:text-brass-deep transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
