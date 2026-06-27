import React from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

const PRICE_RANGES = [
  { label: `${formatPrice(0)} - ${formatPrice(50)}`, min: 0, max: 50 },
  { label: `${formatPrice(50)} - ${formatPrice(80)}`, min: 50, max: 80 },
  { label: `${formatPrice(80)} - ${formatPrice(120)}`, min: 80, max: 120 },
];

const MATERIALS = ["gold-plated", "sterling-silver"];

export default function FilterSidebar({
  filters,
  setFilters,
  sort,
  setSort,
  isOpen,
  setIsOpen,
}) {
  const toggleCategory = (cat) => {
    setFilters((f) => ({
      ...f,
      category: f.category === cat ? "" : cat,
    }));
  };

  const togglePrice = (range) => {
    const active =
      f.priceMin === range.min && f.priceMax === range.max;
    setFilters((f) => ({
      ...f,
      priceMin: active ? null : range.min,
      priceMax: active ? null : range.max,
    }));
  };

  const toggleMaterial = (mat) => {
    setFilters((f) => ({
      ...f,
      material: f.material === mat ? "" : mat,
    }));
  };

  const clearFilters = () => {
    setFilters({ category: "", priceMin: null, priceMax: null, material: "" });
    setSort("featured");
  };

  return (
    <>
      {/* Mobile drawer backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-velmora-dark/30 backdrop-blur-sm transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-80 transform overflow-y-auto border-r border-velmora-border bg-velmora-cream p-6 transition-transform duration-300 md:static md:z-0 md:w-64 md:transform-none md:border-none md:p-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between md:hidden">
          <h2 className="font-serif text-2xl">Filters</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close filters">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden items-center justify-between md:mb-8 md:flex">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em]">
            Filter By
          </h2>
          {(filters.category || filters.priceMin != null || filters.material) && (
            <button
              onClick={clearFilters}
              className="text-xs text-velmora-muted underline-offset-4 hover:text-velmora-dark hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em]">
              Category
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => toggleCategory(cat)}
                    className={cn(
                      "flex w-full items-center justify-between py-1 text-sm capitalize transition-colors",
                      filters.category === cat
                        ? "text-velmora-dark"
                        : "text-velmora-muted hover:text-velmora-dark"
                    )}
                  >
                    {cat}
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full border",
                        filters.category === cat
                          ? "border-velmora-dark bg-velmora-dark"
                          : "border-velmora-border"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em]">
              Price
            </h3>
            <ul className="space-y-2">
              {PRICE_RANGES.map((range) => {
                const active =
                  filters.priceMin === range.min && filters.priceMax === range.max;
                return (
                  <li key={range.label}>
                    <button
                      onClick={() => togglePrice(range)}
                      className={cn(
                        "flex w-full items-center justify-between py-1 text-sm transition-colors",
                        active
                          ? "text-velmora-dark"
                          : "text-velmora-muted hover:text-velmora-dark"
                      )}
                    >
                      {range.label}
                      <span
                        className={cn(
                          "h-4 w-4 rounded-full border",
                          active
                            ? "border-velmora-dark bg-velmora-dark"
                          : "border-velmora-border"
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em]">
              Material
            </h3>
            <ul className="space-y-2">
              {MATERIALS.map((mat) => (
                <li key={mat}>
                  <button
                    onClick={() => toggleMaterial(mat)}
                    className={cn(
                      "flex w-full items-center justify-between py-1 text-sm capitalize transition-colors",
                      filters.material === mat
                        ? "text-velmora-dark"
                        : "text-velmora-muted hover:text-velmora-dark"
                    )}
                  >
                    {mat.replace("-", " ")}
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full border",
                        filters.material === mat
                          ? "border-velmora-dark bg-velmora-dark"
                          : "border-velmora-border"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
