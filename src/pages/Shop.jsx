import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { cn } from "@/lib/utils";

const PRICE_RANGES = {
  all: { min: 0, max: Infinity },
  "under-50": { min: 0, max: 49.99 },
  "50-80": { min: 50, max: 80 },
  "80-plus": { min: 80.01, max: Infinity },
};

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const [category, setCategory] = useState(params.get("category") || "all");
  const [priceRange, setPriceRange] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category from URL when navigating from navbar
  useEffect(() => {
    const c = new URLSearchParams(location.search).get("category");
    if (c) setCategory(c);
  }, [location.search]);

  const onCategoryChange = (next) => {
    setCategory(next);
    if (next === "all") {
      navigate("/shop", { replace: true });
    } else {
      navigate(`/shop?category=${next}`, { replace: true });
    }
  };

  const toggleMaterial = (id) => {
    setMaterials((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  };

  const filtered = useMemo(() => {
    let list = products.slice();
    if (category !== "all") list = list.filter((p) => p.category === category);
    const range = PRICE_RANGES[priceRange];
    if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    // material filter is a soft "match-any-tag" — our catalog maps to 18K gold
    if (materials.length) {
      list = list.filter((p) => {
        const text = `${p.name} ${p.shortDescription} ${(p.details || []).join(" ")}`.toLowerCase();
        return materials.some((m) => {
          if (m === "18k-gold") return text.includes("18k") || text.includes("gold");
          if (m === "sterling-silver") return text.includes("silver");
          if (m === "hypoallergenic") return text.includes("hypoallergenic");
          return false;
        });
      });
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "newest") list.reverse();
    return list;
  }, [category, priceRange, materials, sort]);

  const heading = useMemo(() => {
    const map = {
      earrings: "Earrings",
      necklaces: "Necklaces",
      huggies: "Huggies",
      all: "All Pieces",
    };
    return map[category] || "Shop";
  }, [category]);

  return (
    <>
      {/* Page header */}
      <section className="bg-ivory border-b border-hairline">
        <div className="container-wide py-14 md:py-20 text-center">
          <p className="eyebrow mb-3">Shop</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
            {heading}
          </h1>
          <p className="mt-4 text-sm md:text-base text-taupe max-w-md mx-auto">
            Demi-fine, designed to layer. Hand-finished and shipped in velvet
            from our studio in Lisbon.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-ivory">
        <div className="container-wide flex items-start gap-10 lg:gap-16">
          {/* Desktop sidebar */}
          <div className="hidden md:block">
            <FilterSidebar
              category={category}
              onCategoryChange={onCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              materials={materials}
              onMaterialToggle={toggleMaterial}
              resultCount={filtered.length}
            />
          </div>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-[60] md:hidden">
              <div
                className="absolute inset-0 bg-espresso/40"
                onClick={() => setFiltersOpen(false)}
              />
              <div className="absolute inset-y-0 left-0 right-1/3 bg-ivory p-6 overflow-y-auto animate-fade-in">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-2xl">Filter</span>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(false)}
                    aria-label="Close filters"
                    className="p-2 -mr-2"
                  >
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
                <FilterSidebar
                  category={category}
                  onCategoryChange={(c) => {
                    onCategoryChange(c);
                  }}
                  priceRange={priceRange}
                  onPriceChange={setPriceRange}
                  materials={materials}
                  onMaterialToggle={toggleMaterial}
                  resultCount={filtered.length}
                />
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="btn-primary w-full mt-8"
                >
                  Show {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
                </button>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border border-hairline px-4 py-2.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
                Filter
              </button>
              <span className="hidden md:block text-[11px] uppercase tracking-widest2 text-taupe">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
              </span>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-3xl mb-3">No pieces match your filters</p>
                <p className="text-sm text-taupe mb-8">
                  Try a different category or clear your filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    setPriceRange("all");
                    setMaterials([]);
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={cn(
                  "grid gap-x-4 md:gap-x-6 gap-y-12",
                  "grid-cols-2 lg:grid-cols-3"
                )}
              >
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
