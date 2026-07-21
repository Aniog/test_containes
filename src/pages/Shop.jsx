import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products, categories } from "../data/products";
import { priceBuckets } from "../components/shop/FilterSidebar";
import FilterSidebar from "../components/shop/FilterSidebar";
import SortDropdown from "../components/shop/SortDropdown";
import ProductCard from "../components/product/ProductCard";

const initialFilters = {
  category: "all",
  price: "all",
  material: "all",
};

const initialSort = "featured";

function applyFilters(list, filters) {
  const bucket = priceBuckets.find((p) => p.id === filters.price);
  return list.filter((p) => {
    if (filters.category !== "all" && p.category !== filters.category) {
      return false;
    }
    if (filters.material !== "all" && p.material !== filters.material) {
      return false;
    }
    if (bucket) {
      if (p.price < bucket.min) return false;
      if (bucket.max !== Infinity && p.price > bucket.max) return false;
    }
    return true;
  });
}

function applySort(list, sort) {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "featured":
    default:
      // Bestseller badge first, then price descending as a sensible default
      return copy.sort((a, b) => {
        const aB = a.badge === "Bestseller" ? 0 : 1;
        const bB = b.badge === "Bestseller" ? 0 : 1;
        if (aB !== bB) return aB - bB;
        return b.price - a.price;
      });
  }
}

export default function Shop() {
  const { category } = useParams();
  const [filters, setFilters] = useState(initialFilters);
  const [sort, setSort] = useState(initialSort);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync the URL category param into filter state
  useEffect(() => {
    setFilters((current) => ({
      ...current,
      category: category && categories.some((c) => c.id === category)
        ? category
        : "all",
    }));
  }, [category]);

  const filtered = useMemo(
    () => applyFilters(products, filters),
    [filters],
  );
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);

  const headingTitle =
    filters.category === "all"
      ? "The Collection"
      : categories.find((c) => c.id === filters.category)?.name ||
        "The Collection";

  const headingTagline =
    filters.category === "all"
      ? "Demi-fine pieces, designed in small batches."
      : categories.find((c) => c.id === filters.category)?.tagline;

  const handleReset = () => {
    setFilters({ ...initialFilters, category: filters.category });
  };

  return (
    <div className="bg-ivory pt-24 md:pt-28 pb-20">
      {/* Editorial header */}
      <div className="container-velmora">
        <div className="text-center max-w-2xl mx-auto pt-8 md:pt-12 pb-10 md:pb-14">
          <p className="eyebrow">Shop</p>
          <h1
            id="shop-heading"
            className="heading-display text-4xl md:text-6xl mt-3"
          >
            {headingTitle}
          </h1>
          {headingTagline && (
            <p className="mt-4 font-sans text-base text-ink-soft">
              {headingTagline}
            </p>
          )}
        </div>
      </div>

      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <div className="hidden md:block md:col-span-3">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={handleReset}
              totalCount={sorted.length}
              isOpen={mobileFilterOpen}
              onClose={() => setMobileFilterOpen(false)}
            />
          </div>

          {/* Grid */}
          <div className="md:col-span-9">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border border-espresso/40 px-4 py-2.5 hover:bg-espresso hover:text-ivory transition-colors duration-300"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.4} />
                Filter
              </button>
              <p className="hidden md:block font-sans text-xs text-ink-soft">
                {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
              </p>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {sorted.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-espresso">
                  Nothing matches just yet.
                </p>
                <p className="mt-2 font-sans text-sm text-ink-soft">
                  Try widening the price or material filters.
                </p>
                <button
                  type="button"
                  onClick={() => setFilters(initialFilters)}
                  className="btn-outline mt-6"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-7 gap-y-10 md:gap-y-14">
                {sorted.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    eager={idx < 3}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer (portaled at the page root) */}
      <div className="md:hidden">
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          onReset={handleReset}
          totalCount={sorted.length}
          isOpen={mobileFilterOpen}
          onClose={() => setMobileFilterOpen(false)}
        />
      </div>
    </div>
  );
}
