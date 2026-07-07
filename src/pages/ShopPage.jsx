import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar, { PRICE_RANGES } from "@/components/shop/FilterSidebar";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  priceRange: "all",
};

export default function ShopPage() {
  const { category } = useParams();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync category param into filter state
  useEffect(() => {
    if (category && CATEGORIES.some((c) => c.id === category)) {
      setFilters((f) => ({ ...f, categories: [category] }));
    } else {
      setFilters((f) => ({ ...f, categories: [] }));
    }
  }, [category]);

  const products = useMemo(() => {
    let result = PRODUCTS.slice();
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.materials.length > 0) {
      result = result.filter((p) => filters.materials.includes(p.material));
    }
    const range = PRICE_RANGES.find((r) => r.id === filters.priceRange);
    if (range && range.id !== "all") {
      result = result.filter(
        (p) => p.price >= range.min && p.price <= range.max,
      );
    }
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [filters, sort]);

  const activeCategoryName = useMemo(() => {
    if (filters.categories.length === 1) {
      return CATEGORIES.find((c) => c.id === filters.categories[0])?.name;
    }
    return null;
  }, [filters.categories]);

  return (
    <div className="pt-24 md:pt-28 bg-ivory min-h-screen">
      {/* Editorial header */}
      <header className="border-b border-hairline">
        <div className="max-w-container mx-auto px-5 md:px-10 py-12 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-3">
            The Velmora Edit
          </p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
            {activeCategoryName || "All Jewelry"}
          </h1>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Demi-fine pieces, designed to be lived in — every day, layered or
            alone.
          </p>
        </div>
      </header>

      <div className="max-w-container mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-12 lg:gap-16">
          {/* Desktop sidebar */}
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={() => setFilters(DEFAULT_FILTERS)}
              resultCount={products.length}
            />
          </div>

          {/* Main column */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6 md:mb-8 pb-5 border-b border-hairline">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                Filter
              </button>

              <div className="hidden md:block text-[12px] uppercase tracking-editorial text-muted">
                Showing {products.length}{" "}
                {products.length === 1 ? "piece" : "pieces"}
              </div>

              <div className="relative">
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial"
                  aria-expanded={sortOpen}
                >
                  Sort: {SORTS.find((s) => s.id === sort)?.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      sortOpen && "rotate-180",
                    )}
                    strokeWidth={1.5}
                  />
                </button>
                {sortOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setSortOpen(false)}
                    />
                    <ul className="absolute right-0 top-full mt-2 z-20 bg-ivory border border-hairline min-w-[220px] shadow-lg">
                      {SORTS.map((s) => (
                        <li key={s.id}>
                          <button
                            onClick={() => {
                              setSort(s.id);
                              setSortOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-4 py-2.5 text-sm hover:bg-sand transition-colors",
                              sort === s.id && "text-champagne-deep",
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
            </div>

            {products.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl">No pieces match</p>
                <p className="mt-2 text-muted">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                  className="mt-6 text-[12px] uppercase tracking-editorial border-b border-ink pb-1"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 inset-x-0 bg-ivory text-ink p-6 rounded-t-2xl max-h-[85vh] overflow-y-auto transition-transform duration-300",
            mobileOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onReset={() => setFilters(DEFAULT_FILTERS)}
            resultCount={products.length}
            onClose={() => setMobileOpen(false)}
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="mt-6 w-full bg-ink text-ivory text-[12px] uppercase tracking-editorial py-4"
          >
            Show {products.length} results
          </button>
        </div>
      </div>
    </div>
  );
}
