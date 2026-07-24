import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "priceAsc", label: "Price: Low to High" },
  { value: "priceDesc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    material: [],
  });
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setFilters((prev) => ({
        ...prev,
        category: [categoryParam],
      }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.material.length > 0) {
      result = result.filter((p) => filters.material.includes(p.material));
    }

    if (filters.price.length > 0) {
      result = result.filter((p) => {
        return filters.price.some((range) => {
          if (range === "under50") return p.price < 50;
          if (range === "50to80") return p.price >= 50 && p.price <= 80;
          if (range === "over80") return p.price > 80;
          return false;
        });
      });
    }

    switch (sort) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
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

  return (
    <div className="bg-background pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="md:w-64 lg:w-72 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium border border-border px-4 py-2"
              >
                <SlidersHorizontal size={14} /> Filter
              </button>
              <p className="hidden md:block text-sm text-muted">
                {filteredProducts.length} piece
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs text-muted uppercase tracking-wider hidden sm:block">
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border border-border text-foreground text-sm py-2 pl-3 pr-8 focus:outline-none focus:border-foreground"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
