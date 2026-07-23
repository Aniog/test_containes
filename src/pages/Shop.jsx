import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, ChevronDown } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar, { PRICE_BANDS } from "@/components/shop/FilterSidebar";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  prices: [],
};

function getActiveFiltersFromQuery(searchParams) {
  const cat = searchParams.get("cat");
  return {
    ...DEFAULT_FILTERS,
    categories: cat ? [cat] : [],
  };
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => getActiveFiltersFromQuery(searchParams));
  const [sort, setSort] = useState("featured");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Sync from URL on mount
  useEffect(() => {
    setFilters(getActiveFiltersFromQuery(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (filters.categories.length) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.materials.length) {
      list = list.filter((p) =>
        p.material?.some((m) => filters.materials.includes(m))
      );
    }
    if (filters.prices.length) {
      const bands = filters.prices
        .map((id) => PRICE_BANDS.find((b) => b.id === id))
        .filter(Boolean);
      list = list.filter((p) =>
        bands.some((b) => p.price >= b.min && p.price <= b.max)
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // No createdAt on seeds — fall back to reverse seed order
        list.reverse();
        break;
      default:
        break;
    }
    return list;
  }, [filters, sort]);

  const updateFilters = (next) => {
    setFilters(next);
    // Reflect category to URL
    const cat = next.categories[0];
    if (cat) {
      setSearchParams({ cat }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const clearAll = () => {
    setFilters({ ...DEFAULT_FILTERS });
    setSearchParams({}, { replace: true });
  };

  const currentCategoryLabel = filters.categories[0]
    ? CATEGORIES.find((c) => c.id === filters.categories[0])?.label
    : "All Jewelry";

  return (
    <>
      {/* Page header */}
      <section className="bg-editorial-alt pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p className="eyebrow mb-4">The Collection</p>
          <h1 className="font-display text-cocoa-900 text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.01em]">
            {currentCategoryLabel === "All Jewelry" ? (
              <>Shop <em className="italic font-normal">All Jewelry</em></>
            ) : (
              currentCategoryLabel
            )}
          </h1>
          <p className="mt-5 text-cocoa-700 text-[15px] max-w-xl mx-auto leading-relaxed">
            Demi-fine 18K gold-plated pieces, hand-finished in small batches.
            Every order ships in our signature velvet box.
          </p>
        </div>
      </section>

      <section className="section-tight bg-editorial">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar (desktop) */}
            <div className="hidden md:block md:col-span-3 lg:col-span-3">
              <div className="sticky top-28">
                <FilterSidebar
                  filters={filters}
                  onChange={updateFilters}
                  total={filtered.length}
                  onClear={clearAll}
                />
              </div>
            </div>

            {/* Main content */}
            <div className="md:col-span-9 lg:col-span-9">
              {/* Toolbar */}
              <div className="flex items-center justify-between border-b border-cocoa-900/10 pb-4 mb-8">
                <button
                  type="button"
                  onClick={() => setFilterDrawerOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 text-[11px] tracking-button uppercase text-cocoa-900"
                >
                  <Filter className="w-3.5 h-3.5" strokeWidth={1.6} />
                  Filter
                </button>

                <p className="hidden md:block text-[12px] text-taupe-500">
                  Showing {filtered.length} of {PRODUCTS.length}
                </p>

                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-cocoa-900/15 rounded-sm pl-4 pr-9 py-2 text-[12px] tracking-button uppercase text-cocoa-900 cursor-pointer focus:outline-none focus:border-champagne-500"
                    aria-label="Sort by"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        Sort: {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-cocoa-900 pointer-events-none"
                    strokeWidth={1.6}
                  />
                </div>
              </div>

              {/* Grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
                  {filtered.map((product, idx) => (
                    <ProductCard key={product.id} product={product} eagerImage={idx < 2} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="font-display text-3xl text-cocoa-900 mb-3">
                    Nothing matches yet
                  </p>
                  <p className="text-cocoa-700 mb-6">
                    Try removing a filter or two.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="btn-outline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          filterDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!filterDrawerOpen}
      >
        <div
          className="absolute inset-0 drawer-mask"
          onClick={() => setFilterDrawerOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory-50 flex flex-col transition-transform duration-400 ease-out",
            filterDrawerOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-cocoa-900/10">
            <span className="text-[12px] tracking-button uppercase text-cocoa-900 font-medium">
              Filter
            </span>
            <button
              type="button"
              onClick={() => setFilterDrawerOpen(false)}
              className="text-[12px] tracking-button uppercase text-taupe-500"
            >
              Done
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5">
            <FilterSidebar
              filters={filters}
              onChange={updateFilters}
              total={filtered.length}
              onClear={clearAll}
            />
          </div>
        </div>
      </div>
    </>
  );
}
