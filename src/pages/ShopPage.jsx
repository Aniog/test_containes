import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    priceMin: null,
    priceMax: null,
    material: "",
  });

  useEffect(() => {
    const cat = searchParams.get("category") || "";
    setFilters((f) => ({ ...f, category: cat }));
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (filters.category) {
      list = list.filter((p) => p.category === filters.category);
    }

    if (filters.priceMin != null && filters.priceMax != null) {
      list = list.filter(
        (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
      );
    }

    if (filters.material) {
      list = list.filter((p) => p.material === filters.material);
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
      default:
        break;
    }

    return list;
  }, [filters, sort]);

  return (
    <div className="min-h-screen bg-velmora-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <h1
            id="shop-heading"
            className="font-serif text-4xl font-medium md:text-5xl"
          >
            {filters.category
              ? filters.category.charAt(0).toUpperCase() +
                filters.category.slice(1)
              : "Shop All"}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-velmora-muted">
            Discover our collection of demi-fine gold jewelry, designed for
            effortless everyday elegance.
          </p>
        </div>

        <div className="flex gap-10 lg:gap-16">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort}
            isOpen={filtersOpen}
            setIsOpen={setFiltersOpen}
          />

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 border border-velmora-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:border-velmora-dark md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <span className="hidden text-sm text-velmora-muted md:inline">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </span>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl">No pieces match your filters.</p>
                <button
                  onClick={() =>
                    setFilters({
                      category: "",
                      priceMin: null,
                      priceMax: null,
                      material: "",
                    })
                  }
                  className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold underline-offset-4 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
