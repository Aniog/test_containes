import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { priceBands } from "@/components/shop/FilterSidebar";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductCard from "@/components/product/ProductCard";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

const getCategoryLabel = (catId) => {
  const map = {
    earrings: "Earrings",
    necklaces: "Necklaces",
    huggies: "Huggies",
    sets: "Gift Sets",
  };
  return map[catId] || null;
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    price: "all",
  });
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const gridRef = useRef(null);

  // Sync URL when category changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && !filters.categories.includes(cat)) {
      setFilters((prev) => ({
        ...prev,
        categories: [cat],
      }));
    } else if (!cat && filters.categories.length === 1) {
      // keep filter when user came from elsewhere
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, gridRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filters, sort]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.categories.length) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.materials.length) {
      list = list.filter((p) => filters.materials.includes(p.material));
    }
    const band = priceBands.find((b) => b.id === filters.price) ?? priceBands[0];
    list = list.filter((p) => p.price >= band.min && p.price < band.max);

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
        list.reverse();
        break;
      default:
        // featured — keep seeded order, with isBestseller first
        list.sort((a, b) => Number(b.isBestseller) - Number(a.isBestseller));
    }
    return list;
  }, [filters, sort]);

  const productCounts = useMemo(() => {
    const byCategory = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return { byCategory };
  }, []);

  const headingCategory =
    filters.categories.length === 1 ? getCategoryLabel(filters.categories[0]) : null;

  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-ivory border-b border-hairline pt-32 md:pt-36 pb-12">
        <div className="container-editorial">
          <p className="eyebrow mb-4">{headingCategory ? "Collection" : "All pieces"}</p>
          <h1 className="display-1 text-balance max-w-3xl">
            {headingCategory ? headingCategory : "Every piece, in one place."}
          </h1>
          <p className="mt-5 text-ink-muted max-w-xl text-[15px] leading-relaxed">
            {headingCategory
              ? `Our most-loved ${headingCategory.toLowerCase()}, hand-finished and made to be lived in.`
              : "Demi-fine gold jewelry, hand-finished in small batches. Free worldwide shipping over $75."}
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="container-editorial">
        <div className="flex items-center justify-between gap-4 py-5 border-b border-hairline">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-ink border border-hairline px-4 py-2.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.6} />
              Filters
            </button>
            <span className="hidden md:inline text-[12px] text-taupe">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </span>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-ink border border-hairline px-4 py-2.5 hover:border-ink transition-colors"
              aria-expanded={sortOpen}
            >
              Sort: {sortOptions.find((o) => o.id === sort)?.label}
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} />
                <ul className="absolute right-0 top-full mt-1 z-40 bg-ivory border border-hairline min-w-[220px] py-2 shadow-soft">
                  {sortOptions.map((o) => (
                    <li key={o.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSort(o.id);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-sand transition-colors ${
                          sort === o.id ? "text-ink font-medium" : "text-ink-muted"
                        }`}
                      >
                        {o.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container-editorial py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Sidebar (desktop) */}
          <div className="hidden md:block md:col-span-3 lg:col-span-3">
            <div className="sticky top-28">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                productCounts={productCounts}
                resultCount={filtered.length}
              />
            </div>
          </div>

          {/* Grid */}
          <div ref={gridRef} className="md:col-span-9 lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl text-ink mb-3">Nothing here yet</p>
                <p className="text-sm text-ink-muted">Try removing a filter.</p>
                <button
                  type="button"
                  onClick={() =>
                    setFilters({ categories: [], materials: [], price: "all" })
                  }
                  className="mt-6 btn-outline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-[65] md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 w-[88%] max-w-[400px] bg-cream shadow-2xl overflow-y-auto transition-transform duration-500 ease-out ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline sticky top-0 bg-cream z-10">
            <span className="font-serif text-xl">Filters</span>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 -mr-2"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="px-5 pb-8">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              productCounts={productCounts}
              resultCount={filtered.length}
              onClose={() => setMobileFiltersOpen(false)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
