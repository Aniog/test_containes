import React, { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const categories = [
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const materials = [
  { value: "18k-gold-plated", label: "18K Gold Plated" },
  { value: "crystals", label: "Crystals" },
];

const priceRanges = [
  { value: "under-50", label: "Under $50" },
  { value: "50-75", label: "$50 — $75" },
  { value: "75-100", label: "$75 — $100" },
  { value: "over-100", label: "Over $100" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function parseParams(searchParams, key) {
  return searchParams.getAll(key);
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const selectedCategories = parseParams(searchParams, "category");
  const selectedMaterials = parseParams(searchParams, "material");
  const selectedPrices = parseParams(searchParams, "price");
  const sortBy = searchParams.get("sort") || "featured";

  const toggleFilter = (key, value) => {
    const current = searchParams.getAll(key);
    const next = new URLSearchParams(searchParams);
    next.delete(key);
    if (current.includes(value)) {
      current.filter((v) => v !== value).forEach((v) => next.append(key, v));
    } else {
      current.forEach((v) => next.append(key, v));
      next.append(key, value);
    }
    setSearchParams(next);
  };

  const setSort = (value) => {
    const next = new URLSearchParams(searchParams);
    next.set("sort", value);
    setSearchParams(next);
    setSortOpen(false);
  };

  const clearFilters = () => {
    const next = new URLSearchParams();
    if (sortBy !== "featured") next.set("sort", sortBy);
    setSearchParams(next);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.material.includes(m))
      );
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) => {
        return selectedPrices.some((range) => {
          if (range === "under-50") return p.price < 50;
          if (range === "50-75") return p.price >= 50 && p.price <= 75;
          if (range === "75-100") return p.price >= 75 && p.price <= 100;
          if (range === "over-100") return p.price > 100;
          return false;
        });
      });
    }

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedMaterials, selectedPrices, sortBy]);

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length;

  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts.length, sortBy]);

  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileFiltersOpen]);

  const FilterGroup = ({ title, options, selected, paramKey }) => (
    <div className="mb-8">
      <h4 className="mb-4 text-[11px] font-medium uppercase tracking-widest text-brand-charcoal">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-sm text-brand-charcoal/80"
            >
              <button
                type="button"
                onClick={() => toggleFilter(paramKey, option.value)}
                className={cn(
                  "flex h-5 w-5 items-center justify-center border transition-colors",
                  isSelected
                    ? "border-brand-charcoal bg-brand-charcoal"
                    : "border-brand-charcoal/20 bg-transparent hover:border-brand-charcoal/50"
                )}
              >
                {isSelected && <span className="text-xs text-brand-ivory">✓</span>}
              </button>
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );

  const SidebarContent = () => (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-serif text-2xl text-brand-charcoal">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-xs uppercase tracking-widest text-brand-taupe hover:text-brand-charcoal"
          >
            Clear all
          </button>
        )}
      </div>
      <FilterGroup
        title="Category"
        options={categories}
        selected={selectedCategories}
        paramKey="category"
      />
      <Separator className="mb-8" />
      <FilterGroup
        title="Price"
        options={priceRanges}
        selected={selectedPrices}
        paramKey="price"
      />
      <Separator className="mb-8" />
      <FilterGroup
        title="Material"
        options={materials}
        selected={selectedMaterials}
        paramKey="material"
      />
    </>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-ivory px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rose-dark">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-brand-charcoal md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-28">
              <SidebarContent />
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand-charcoal lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-charcoal text-[10px] text-brand-ivory">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <p className="hidden text-sm text-brand-taupe lg:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>

              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand-charcoal"
                >
                  Sort: {sortOptions.find((o) => o.value === sortBy)?.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      sortOpen && "rotate-180"
                    )}
                  />
                </button>
                {sortOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setSortOpen(false)}
                    />
                    <div className="absolute right-0 top-full z-40 mt-2 w-52 border border-brand-charcoal/10 bg-brand-ivory py-2 shadow-lg">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSort(option.value)}
                          className={cn(
                            "w-full px-4 py-2 text-left text-sm transition-colors hover:bg-brand-cream",
                            sortBy === option.value
                              ? "text-brand-charcoal"
                              : "text-brand-taupe"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-brand-charcoal">
                  No pieces match your filters
                </p>
                <Button onClick={clearFilters} className="mt-6">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-warm-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-lg bg-brand-ivory p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-brand-charcoal">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-brand-charcoal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarContent />
            <Button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-4 w-full"
            >
              Show {filteredProducts.length} Results
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
