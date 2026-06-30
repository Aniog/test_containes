import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/data/products.js";
import ProductCard from "@/components/product/ProductCard.jsx";
import FilterSidebar, {
  ActiveChips,
  PRICE_BUCKETS,
} from "@/components/shop/FilterSidebar.jsx";
import SortDropdown from "@/components/shop/SortDropdown.jsx";
import { useStrkImages } from "@/lib/imageLoader.js";

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  priceBucket: null,
};

const DEFAULT_SORT = "featured";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => {
    const initial = { ...DEFAULT_FILTERS };
    const cat = searchParams.get("cat");
    if (cat) initial.categories = cat.split(",");
    return initial;
  });
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const ref = useRef(null);
  useStrkImages(ref);

  // Sync the URL with active category filters so links like
  // /shop?cat=earrings are honored on first load.
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setFilters((prev) => ({
        ...prev,
        categories: prev.categories.length ? prev.categories : cat.split(","),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the URL in sync as filters change.
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (filters.categories.length) {
      next.set("cat", filters.categories.join(","));
    } else {
      next.delete("cat");
    }
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories.join(",")]);

  // Counts for sidebar chips (over the *currently* filtered set so the
  // user can see how many results each filter combination would yield).
  const productCounts = useMemo(() => {
    const cats = {};
    CATEGORIES.forEach((c) => (cats[c.id] = 0));
    const mats = {};
    MATERIALS.forEach((m) => (mats[m.id] = 0));
    PRODUCTS.forEach((p) => {
      if (cats[p.category] != null) cats[p.category] += 1;
      if (mats[p.material] != null) mats[p.material] += 1;
    });
    return { categories: cats, materials: mats };
  }, []);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) {
        return false;
      }
      if (filters.materials.length && !filters.materials.includes(p.material)) {
        return false;
      }
      if (filters.priceBucket) {
        const bucket = PRICE_BUCKETS.find((b) => b.id === filters.priceBucket);
        if (bucket && (p.price < bucket.min || p.price > bucket.max)) return false;
      }
      return true;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "rating-desc":
        return list.sort((a, b) => b.rating - a.rating);
      case "name-asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list;
    }
  }, [filtered, sort]);

  const onFilterChange = (key, value) => {
    setFilters((prev) => {
      if (key === "priceBucket") return { ...prev, priceBucket: value };
      const set = new Set(prev[key]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [key]: Array.from(set) };
    });
  };

  const reset = () => setFilters({ ...DEFAULT_FILTERS });

  return (
    <div ref={ref} className="bg-cream">
      {/* Editorial header */}
      <section className="bg-surface-warm border-b border-line">
        <div className="container-wide py-16 md:py-24 flex flex-col items-center text-center gap-4">
          <span className="eyebrow">The Collection</span>
          <h1 className="font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05] max-w-2xl">
            Every piece, made to be lived in.
          </h1>
          <p className="font-sans text-base md:text-[17px] text-ink-muted max-w-xl leading-relaxed">
            Demi-fine jewelry in 18K gold plating, hypoallergenic and tarnish
            resistant. Designed to be worn, layered, and loved.
          </p>
        </div>
      </section>

      <section className="container-wide py-12 md:py-16">
        <div className="flex items-center justify-between gap-3 mb-6">
          <p className="font-sans text-sm text-ink-muted">
            <span className="text-ink font-medium">{sorted.length}</span>{" "}
            {sorted.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden inline-flex items-center gap-2 px-3 py-2 border border-line text-ink hover:border-ink font-sans text-sm"
            >
              <SlidersHorizontal strokeWidth={1.5} className="w-4 h-4" />
              Filter
            </button>
            <SortDropdown value={sort} onChange={setSort} />
          </div>
        </div>

        <ActiveChips
          filters={filters}
          onChange={onFilterChange}
          onReset={reset}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:block md:col-span-3 lg:col-span-3">
            <FilterSidebar
              filters={filters}
              onChange={onFilterChange}
              onReset={reset}
              productCounts={productCounts}
            />
          </div>

          <div className="md:col-span-9 lg:col-span-9">
            {sorted.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center gap-3">
                <p className="font-serif text-2xl text-ink font-light">
                  No pieces match those filters.
                </p>
                <p className="font-sans text-sm text-ink-muted">
                  Try removing a filter to see more.
                </p>
                <button type="button" onClick={reset} className="btn-secondary mt-2">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {sorted.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    eager={i < 3}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={[
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileFilterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileFilterOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileFilterOpen(false)}
        />
        <div
          className={[
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-cream shadow-drawer transition-transform duration-500 ease-out flex flex-col",
            mobileFilterOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <header className="px-6 py-5 flex items-center justify-between border-b border-line">
            <h2 className="font-serif text-2xl font-light text-ink">Filter</h2>
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="p-2 text-ink hover:text-gold"
              aria-label="Close filters"
            >
              <X strokeWidth={1.5} className="w-5 h-5" />
            </button>
          </header>
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <FilterSidebar
              filters={filters}
              onChange={onFilterChange}
              onReset={reset}
              productCounts={productCounts}
            />
          </div>
          <footer className="px-6 py-4 border-t border-line">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="btn-primary btn-block"
            >
              Show {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
