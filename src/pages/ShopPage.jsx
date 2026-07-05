import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const PRICE_BUCKETS = {
  all: () => true,
  u50: (p) => p.price < 50,
  "50-80": (p) => p.price >= 50 && p.price < 80,
  "80+": (p) => p.price >= 80,
};

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [filters, setFilters] = useState({
    category: initialCategory,
    price: "all",
    material: "all",
  });
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [filtersOpenMobile, setFiltersOpenMobile] = useState(false);

  // Sync URL ?category=
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (filters.category === "all") next.delete("category");
    else next.set("category", filters.category);
    setSearchParams(next, { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }
    if (filters.material !== "all") {
      list = list.filter((p) => p.material === filters.material);
    }
    list = list.filter(PRICE_BUCKETS[filters.price]);
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
      default:
        break;
    }
    return list;
  }, [filters, sort]);

  return (
    <main className="pt-20 md:pt-24 bg-ivory min-h-screen">
      {/* Page header */}
      <section className="border-b border-ink/10">
        <Container className="py-14 md:py-20 text-center">
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-4">
            The Edit
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.02]">
            The Collection
          </h1>
          <p className="mt-5 text-taupe max-w-lg mx-auto leading-relaxed">
            Quiet pieces for the everyday. Filter by category, finish, or price.
          </p>
        </Container>
      </section>

      <Container className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
          {/* Desktop filter sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              totalCount={filtered.length}
            />
          </div>

          {/* Mobile filter trigger */}
          <div className="lg:hidden flex items-center justify-between border-b border-ink/10 pb-4 mb-2">
            <button
              type="button"
              onClick={() => setFiltersOpenMobile(true)}
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
              {(filters.category !== "all" || filters.price !== "all" || filters.material !== "all") && (
                <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gold" />
              )}
            </button>
            <SortDropdown
              sort={sort}
              setSort={setSort}
              open={sortOpen}
              setOpen={setSortOpen}
            />
          </div>

          {/* Main column */}
          <div>
            {/* Desktop sort + count */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-[11px] uppercase tracking-eyebrow text-taupe">
                Showing {filtered.length} of {products.length}
              </p>
              <SortDropdown
                sort={sort}
                setSort={setSort}
                open={sortOpen}
                setOpen={setSortOpen}
              />
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl text-ink mb-3">No pieces match those filters</p>
                <p className="text-taupe">Try a different category or clear the filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile filter sheet */}
      {filtersOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setFiltersOpenMobile(false)}
          />
          <div className="absolute inset-x-0 bottom-0 bg-ivory rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-2xl">Filters</h3>
              <button
                type="button"
                onClick={() => setFiltersOpenMobile(false)}
                aria-label="Close filters"
                className="p-1 text-ink"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              totalCount={filtered.length}
            />
            <button
              type="button"
              onClick={() => setFiltersOpenMobile(false)}
              className="mt-6 w-full h-12 bg-ink text-ivory font-sans text-[11px] uppercase tracking-button"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

const SortDropdown = ({ sort, setSort, open, setOpen }) => {
  const current = SORTS.find((s) => s.id === sort);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink"
      >
        Sort: <span className="text-taupe">{current.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul className="absolute right-0 top-full mt-2 z-20 bg-ivory border border-ink/10 shadow-soft min-w-[200px] py-1">
            {SORTS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSort(s.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm font-sans transition-colors",
                    sort === s.id
                      ? "text-ink bg-ink/5"
                      : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                  )}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ShopPage;
