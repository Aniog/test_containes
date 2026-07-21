import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/data/products";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-120", label: "$75 – $120", min: 75, max: 120 },
];

function useFilteredProducts({ category, material, priceBucket, sort }) {
  return useMemo(() => {
    let list = [...PRODUCTS];
    if (category && category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (material && material !== "all") {
      list = list.filter((p) => p.material === material);
    }
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket) || PRICE_BUCKETS[0];
    list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max);

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
        list.sort((a, b) => (a.badge === "New In" ? -1 : 1));
        break;
      default:
        break;
    }
    return list;
  }, [category, material, priceBucket, sort]);
}

function FilterPanel({
  category,
  setCategory,
  material,
  setMaterial,
  priceBucket,
  setPriceBucket,
  onClear,
  totalCount,
}) {
  return (
    <div className="space-y-9">
      <div>
        <p className="eyebrow mb-4">Category</p>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "text-sm link-underline",
                category === "all" ? "text-espresso font-medium" : "text-mocha hover:text-espresso"
              )}
            >
              All
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={cn(
                  "text-sm link-underline",
                  category === c.id ? "text-espresso font-medium" : "text-mocha hover:text-espresso"
                )}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="eyebrow mb-4">Material</p>
        <ul className="space-y-2">
          <li>
            <button
              type="button"
              onClick={() => setMaterial("all")}
              className={cn(
                "text-sm link-underline",
                material === "all" ? "text-espresso font-medium" : "text-mocha hover:text-espresso"
              )}
            >
              All
            </button>
          </li>
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setMaterial(m.id)}
                className={cn(
                  "text-sm link-underline",
                  material === m.id ? "text-espresso font-medium" : "text-mocha hover:text-espresso"
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="eyebrow mb-4">Price</p>
        <ul className="space-y-2">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => setPriceBucket(b.id)}
                className={cn(
                  "text-sm link-underline",
                  priceBucket === b.id ? "text-espresso font-medium" : "text-mocha hover:text-espresso"
                )}
              >
                {b.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onClear}
        className="text-[11px] uppercase tracking-[0.24em] text-mocha hover:text-espresso link-underline"
      >
        Clear filters
      </button>

      <p className="text-xs text-mocha pt-2">
        {totalCount} {totalCount === 1 ? "piece" : "pieces"}
      </p>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [material, setMaterial] = useState("all");
  const [priceBucket, setPriceBucket] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const c = searchParams.get("category") || "all";
    setCategory(c);
  }, [searchParams]);

  useEffect(() => {
    if (category && category !== "all") {
      setSearchParams({ category }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [category, setSearchParams]);

  const list = useFilteredProducts({ category, material, priceBucket, sort });

  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [list.length]);

  const clearAll = () => {
    setCategory("all");
    setMaterial("all");
    setPriceBucket("all");
  };

  const activeFilters =
    (category !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0) +
    (priceBucket !== "all" ? 1 : 0);

  return (
    <main ref={ref} className="bg-ivory pt-24 sm:pt-28 pb-20">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 sm:mb-12">
          <p className="eyebrow mb-3">Shop</p>
          <h1
            id="shop-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso"
          >
            {category === "all"
              ? "All Jewelry"
              : CATEGORIES.find((c) => c.id === category)?.name || "Collection"}
          </h1>
          <p
            id="shop-subtitle"
            className="mt-3 text-sm sm:text-base text-mocha max-w-xl"
          >
            Quietly essential demi-fine gold pieces, hand-finished in our
            atelier. Filter by category, material or price to find your
            forever piece.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <FilterPanel
                category={category}
                setCategory={setCategory}
                material={material}
                setMaterial={setMaterial}
                priceBucket={priceBucket}
                setPriceBucket={setPriceBucket}
                onClear={clearAll}
                totalCount={list.length}
              />
            </div>
          </aside>

          {/* Main */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between border-t border-b border-espresso/10 py-4 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-espresso"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                Filters {activeFilters > 0 && `(${activeFilters})`}
              </button>

              <div className="hidden lg:block text-[11px] uppercase tracking-[0.24em] text-mocha">
                {list.length} {list.length === 1 ? "piece" : "pieces"}
              </div>

              <div className="relative ml-auto">
                <label
                  htmlFor="sort"
                  className="sr-only"
                >
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-[11px] uppercase tracking-[0.24em] text-espresso pr-7 pl-2 py-1.5 border border-espresso/15 focus:border-espresso focus:outline-none cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-espresso"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {list.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl mb-3">Nothing here — yet.</p>
                <p className="text-sm text-mocha mb-6">
                  Try a different filter combination.
                </p>
                <button type="button" onClick={clearAll} className="btn btn-primary">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-14">
                {list.map((p) => (
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
          "fixed inset-0 z-[70] lg:hidden transition-opacity duration-500",
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!filtersOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-ivory text-espresso transition-transform duration-500 ease-velmora max-h-[88vh] overflow-y-auto",
            filtersOpen ? "translate-y-0" : "-translate-y-full"
          )}
          role="dialog"
          aria-label="Filters"
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-espresso/10">
            <p className="product-title text-sm">Filter</p>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="p-5 sm:p-6">
            <FilterPanel
              category={category}
              setCategory={setCategory}
              material={material}
              setMaterial={setMaterial}
              priceBucket={priceBucket}
              setPriceBucket={setPriceBucket}
              onClear={clearAll}
              totalCount={list.length}
            />
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="btn btn-primary w-full mt-8"
            >
              View {list.length} {list.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
