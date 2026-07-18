import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories, priceRanges } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function applySort(list, sortId) {
  const copy = [...list];
  switch (sortId) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    default:
      return copy;
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCats, setSelectedCats] = useState(
    params.get("category") ? [params.get("category")] : []
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const containerRef = useRef(null);

  // Sync category into URL when present initially
  useEffect(() => {
    if (params.get("category")) {
      setSelectedCats([params.get("category")]);
    }
  }, [params]);

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCats.length > 0) {
      list = list.filter((p) => selectedCats.includes(p.category));
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    return applySort(list, sort);
  }, [selectedCats, selectedPrice, sort]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filtered.length, sort]);

  const toggleCat = (id) => {
    setSelectedCats((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const clearAll = () => {
    setSelectedCats([]);
    setSelectedPrice(null);
    setParams({});
  };

  const FilterPanel = (
    <div className="space-y-10">
      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-espresso mb-4 font-medium">
          Category
        </h3>
        <ul className="space-y-3">
          {categories.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer text-sm text-taupe hover:text-espresso transition-colors">
                <span
                  className={`h-3.5 w-3.5 border ${
                    selectedCats.includes(c.id)
                      ? "border-espresso bg-espresso"
                      : "border-dune bg-canvas"
                  } flex items-center justify-center transition-colors`}
                >
                  {selectedCats.includes(c.id) && (
                    <span className="h-1.5 w-1.5 bg-canvas" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedCats.includes(c.id)}
                  onChange={() => toggleCat(c.id)}
                />
                {c.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-espresso mb-4 font-medium">
          Price
        </h3>
        <ul className="space-y-3">
          {priceRanges.map((r) => (
            <li key={r.id}>
              <label className="flex items-center gap-3 cursor-pointer text-sm text-taupe hover:text-espresso transition-colors">
                <span
                  className={`h-3.5 w-3.5 rounded-full border ${
                    selectedPrice === r.id
                      ? "border-espresso bg-espresso"
                      : "border-dune bg-canvas"
                  } flex items-center justify-center transition-colors`}
                >
                  {selectedPrice === r.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-canvas" />
                  )}
                </span>
                <input
                  type="radio"
                  name="price"
                  className="sr-only"
                  checked={selectedPrice === r.id}
                  onChange={() => setSelectedPrice(r.id)}
                />
                {r.label}
              </label>
            </li>
          ))}
        </ul>
        {selectedPrice && (
          <button
            type="button"
            onClick={() => setSelectedPrice(null)}
            className="mt-3 text-[11px] uppercase tracking-widest2 text-taupe hover:text-espresso transition-colors"
          >
            Clear price
          </button>
        )}
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-widest2 text-espresso mb-4 font-medium">
          Material
        </h3>
        <ul className="space-y-3">
          {["18K Gold Plated", "Sterling Silver", "Rose Gold"].map((m) => (
            <li key={m} className="text-sm text-taupe">
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] text-taupe/80">
          All Velmora pieces are 18K gold-plated brass.
        </p>
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
      >
        Clear all
      </button>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-canvas">
      {/* Page header */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16">
        <div className="max-w-editorial mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso tracking-tight">
            Shop All
          </h1>
          <p className="mt-4 text-taupe max-w-xl mx-auto text-sm md:text-base">
            Demi-fine jewelry, made in small batches. Every piece is hypoallergenic and
            designed to be layered.
          </p>
        </div>
      </section>

      <section className="max-w-editorial mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="flex items-center justify-between border-t border-b border-dune py-4 mb-10">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-espresso"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.25} />
            Filter
          </button>
          <span className="text-[11px] uppercase tracking-widest2 text-taupe">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </span>
          <label className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-espresso">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-espresso text-[11px] uppercase tracking-widest2 border-none focus:ring-0 pr-7 cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Sidebar */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <div className="sticky top-28">{FilterPanel}</div>
          </aside>

          {/* Product grid */}
          <div className="md:col-span-9 lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-espresso mb-2">
                  Nothing here yet
                </p>
                <p className="text-taupe mb-6">
                  Try a different category or clear your filters.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-0.5"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-1/4 min-h-screen bg-canvas p-6 transform transition-transform duration-500 ${
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl tracking-[0.2em]">Filter</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          {FilterPanel}
        </div>
      </div>
    </div>
  );
}
