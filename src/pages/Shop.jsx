import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter as FilterIcon, X } from "lucide-react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import useImageLoader from "@/lib/useImageLoader";
import { cn } from "@/lib/utils";

const priceBands = {
  all: [0, Infinity],
  u50: [0, 50],
  "50to75": [50, 75],
  o75: [75, Infinity],
};

const initialFilters = {
  categories: [],
  priceBand: "all",
  materials: [],
};

function readCategoryFromUrl(value) {
  if (!value) return [];
  // support ?category=earrings or ?category=earrings,huggies
  return value.split(",").filter(Boolean);
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategories = readCategoryFromUrl(searchParams.get("category"));

  const [filters, setFilters] = useState({
    ...initialFilters,
    categories: urlCategories,
  });
  const [sort, setSort] = useState("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // When the URL category changes, sync the filter state.
  useEffect(() => {
    setFilters((prev) => ({ ...prev, categories: urlCategories }));
  }, [searchParams.get("category")]); // eslint-disable-line react-hooks/exhaustive-deps

  const gridRef = useRef(null);
  useImageLoader(gridRef, [
    filters.categories.join(","),
    filters.priceBand,
    filters.materials.join(","),
    sort,
  ]);

  const filtered = useMemo(() => {
    const [min, max] = priceBands[filters.priceBand] || priceBands.all;
    let list = products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) {
        return false;
      }
      if (p.price < min || p.price > max) return false;
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
      case "newest":
        list = [...list].reverse();
        break;
      default:
        // featured = original order
        break;
    }
    return list;
  }, [filters, sort]);

  const onClear = () => {
    setFilters(initialFilters);
    setSearchParams({});
  };

  const activeCategoryLabel =
    filters.categories.length === 1
      ? categories.find((c) => c.id === filters.categories[0])?.name
      : "All Jewelry";

  return (
    <section className="pt-24 md:pt-28 bg-cream-100 min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <div className="pb-8 md:pb-12 border-b border-hairline/60">
          <p className="eyebrow">Shop</p>
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1
              id="shop-title"
              className="font-serif text-4xl md:text-5xl text-espresso-300 leading-[1.05] tracking-tight"
            >
              {activeCategoryLabel}
            </h1>
            <p className="text-sm text-muted">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-5 gap-3">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 border border-hairline/80 font-sans text-[12px] uppercase tracking-widest2 text-espresso-300"
          >
            <FilterIcon className="h-4 w-4" strokeWidth={1.5} />
            Filter
          </button>
          <div className="hidden md:block text-[11px] uppercase tracking-widest2 text-muted">
            Demi-fine, hand-finished, made to last.
          </div>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-24">
          {/* Sidebar (desktop) */}
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-28">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                onClear={onClear}
                resultCount={filtered.length}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="md:col-span-9" ref={gridRef}>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl text-espresso-300">
                  No pieces match those filters
                </p>
                <button
                  type="button"
                  onClick={onClear}
                  className="mt-4 btn-outline-dark"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        aria-hidden={!drawerOpen}
        className={cn(
          "fixed inset-0 z-[55] md:hidden transition-opacity duration-500",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-espresso-300/40"
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-cream-100 shadow-drawer transition-transform duration-500 ease-smooth flex flex-col",
            drawerOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline/60">
            <span className="font-sans text-[12px] uppercase tracking-widest2 text-espresso-300">
              Filter
            </span>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="p-2 -mr-2 text-espresso-300"
              aria-label="Close filters"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              onClear={onClear}
              resultCount={filtered.length}
            />
          </div>
          <div className="p-5 border-t border-hairline/60">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="w-full btn-primary"
            >
              Show {filtered.length} Pieces
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
