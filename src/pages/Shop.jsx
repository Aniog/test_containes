import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import {
  products,
  priceRanges,
} from "@/data/products";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import ProductGrid from "@/components/shop/ProductGrid";

const initialFilters = {
  categories: [],
  prices: [],
  materials: [],
};

function toggle(arr, value) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function matchesPrice(productPrice, selectedIds) {
  if (selectedIds.length === 0) return true;
  return selectedIds.some((id) => {
    const range = priceRanges.find((p) => p.id === id);
    if (!range) return false;
    return productPrice >= range.min && productPrice <= range.max;
  });
}

function getCategoryLabel(ids) {
  if (ids.length === 0) return "All Jewelry";
  if (ids.length === 1) {
    const map = {
      earrings: "Earrings",
      necklaces: "Necklaces",
      huggies: "Huggies",
      sets: "Gift Sets",
    };
    return map[ids[0]] || "All Jewelry";
  }
  return `${ids.length} categories`;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Init from URL
  const [filters, setFilters] = useState(() => {
    const cat = searchParams.get("category");
    return {
      categories: cat ? [cat] : [],
      prices: [],
      materials: [],
    };
  });
  const [sort, setSort] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync URL when category changes
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (filters.categories.length === 1) {
      next.set("category", filters.categories[0]);
    } else {
      next.delete("category");
    }
    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories]);

  const onFilterChange = (group, value) => {
    setFilters((prev) => ({ ...prev, [group]: toggle(prev[group], value) }));
  };

  const onReset = () => setFilters(initialFilters);

  const filtered = useMemo(() => {
    let out = products.filter((p) => {
      if (filters.categories.length > 0 && !filters.categories.includes(p.category))
        return false;
      if (!matchesPrice(p.price, filters.prices)) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        out = [...out].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        out = [...out].sort((a, b) =>
          (b.tags?.includes("new") ? 1 : 0) - (a.tags?.includes("new") ? 1 : 0)
        );
        break;
      default:
        break;
    }
    return out;
  }, [filters, sort]);

  const totalCount = products.length;
  const heading = getCategoryLabel(filters.categories);

  return (
    <main className="bg-ivory pt-24 md:pt-28">
      {/* Header */}
      <header className="container-wide pt-8 md:pt-12 pb-8 md:pb-12">
        <p className="kicker mb-3">Shop</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] text-ink text-balance">
          {heading}
        </h1>
        <div className="mt-6 hairline" />
      </header>

      <section className="container-wide pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
          <FilterSidebar
            filters={filters}
            onChange={onFilterChange}
            onReset={onReset}
            resultCount={filtered.length}
            openMobile={mobileFilterOpen}
            onCloseMobile={() => setMobileFilterOpen(false)}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <p className="text-[11px] uppercase tracking-wider-2 text-ink-muted">
                {filtered.length} of {totalCount} piece{totalCount === 1 ? "" : "s"}
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-2 font-medium text-ink"
                >
                  <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                  Filter
                </button>
                <SortDropdown value={sort} onChange={setSort} />
              </div>
            </div>

            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>
    </main>
  );
}
