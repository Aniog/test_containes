import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS = [
  { id: "all", label: "All Jewelry" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u40", label: "Under $40", min: 0, max: 39.99 },
  { id: "40-70", label: "$40 — $70", min: 40, max: 70 },
  { id: "70-100", label: "$70 — $100", min: 70, max: 100 },
  { id: "100p", label: "$100 and up", min: 100, max: Infinity },
];

const MATERIAL_OPTIONS = ["18k Gold Vermeil", "18k Gold Plated", "18k Gold Plated Brass"];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get("category") || "all";
  const initialCollection = searchParams.get("collection") || "";

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("all");
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep URL in sync with category
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (category && category !== "all") next.set("category", category);
    else next.delete("category");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  });

  const toggleMaterial = (m) => {
    setMaterials((cur) => (cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m]));
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (initialCollection === "bestsellers") {
      list = list.filter((p) => p.bestseller);
    }
    if (initialCollection === "new") {
      list = list.filter((p) => p.isNew);
    }
    const range = PRICE_RANGES.find((r) => r.id === priceRange);
    if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    if (materials.length > 0) list = list.filter((p) => materials.includes(p.material));

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
      case "new":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        break;
    }
    return list;
  }, [category, priceRange, materials, sort, initialCollection]);

  const clearAll = () => {
    setCategory("all");
    setPriceRange("all");
    setMaterials([]);
    setSort("featured");
  };

  const activeCount =
    (category !== "all" ? 1 : 0) + (priceRange !== "all" ? 1 : 0) + materials.length;

  const headerTitle =
    initialCollection === "bestsellers"
      ? "Bestsellers"
      : initialCollection === "new"
        ? "New Arrivals"
        : category !== "all"
          ? CATEGORY_OPTIONS.find((c) => c.id === category)?.label
          : "The Collection";

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Page header */}
        <section className="bg-velmora-ivory border-b border-velmora-line">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-velmora-mocha">
              Shop Velmora
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-velmora-espresso font-light leading-[1.05]">
              {headerTitle}
            </h1>
            <p className="mt-5 text-[15px] text-velmora-mocha max-w-xl mx-auto">
              Hand-finished demi-fine pieces, plated in 18k gold, made to be lived in.
            </p>
          </div>
        </section>

        {/* Toolbar */}
        <div className="sticky top-16 md:top-20 z-20 bg-velmora-cream/95 backdrop-blur-sm border-b border-velmora-line">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between py-4 gap-4">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-velmora-espresso"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} /> Filter
              {activeCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-velmora-espresso text-velmora-cream text-[10px]">
                  {activeCount}
                </span>
              )}
            </button>
            <span className="hidden lg:block text-[11px] uppercase tracking-[0.24em] text-velmora-mocha">
              {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
            </span>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent pr-7 pl-3 py-2 border border-velmora-line text-[11px] uppercase tracking-[0.22em] text-velmora-espresso focus:border-velmora-espresso outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.id} value={o.id}>
                    Sort: {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-velmora-mocha"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar */}
            <aside
              className={cn(
                "lg:col-span-3 lg:block",
                mobileOpen
                  ? "fixed inset-0 z-50 bg-velmora-cream overflow-y-auto p-6 lg:p-0 lg:static lg:overflow-visible"
                  : "hidden",
              )}
            >
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="font-serif text-2xl text-velmora-espresso font-light">Filters</h3>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 text-velmora-espresso"
                  aria-label="Close filters"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <FilterGroup title="Category">
                <ul className="flex flex-col gap-2">
                  {CATEGORY_OPTIONS.map((opt) => (
                    <li key={opt.id}>
                      <button
                        onClick={() => setCategory(opt.id)}
                        className={cn(
                          "text-left text-[13px] py-1 transition-colors",
                          category === opt.id
                            ? "text-velmora-espresso font-medium"
                            : "text-velmora-mocha hover:text-velmora-espresso",
                        )}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup title="Price">
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((r) => (
                    <li key={r.id}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          checked={priceRange === r.id}
                          onChange={() => setPriceRange(r.id)}
                          className="accent-velmora-gold"
                        />
                        <span
                          className={cn(
                            "text-[13px]",
                            priceRange === r.id
                              ? "text-velmora-espresso"
                              : "text-velmora-mocha group-hover:text-velmora-espresso",
                          )}
                        >
                          {r.label}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              <FilterGroup title="Material">
                <ul className="flex flex-col gap-2">
                  {MATERIAL_OPTIONS.map((m) => (
                    <li key={m}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={materials.includes(m)}
                          onChange={() => toggleMaterial(m)}
                          className="accent-velmora-gold"
                        />
                        <span
                          className={cn(
                            "text-[13px]",
                            materials.includes(m)
                              ? "text-velmora-espresso"
                              : "text-velmora-mocha group-hover:text-velmora-espresso",
                          )}
                        >
                          {m}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterGroup>

              {activeCount > 0 && (
                <button
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.24em] text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-espresso hover:border-velmora-espresso transition-colors"
                >
                  Clear All Filters
                </button>
              )}

              {/* Apply (mobile only) */}
              <div className="lg:hidden mt-10">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-velmora-espresso text-velmora-cream py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-velmora-gold transition-colors duration-500"
                >
                  Show {filtered.length} Results
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-9">
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-velmora-espresso">No pieces match your filters.</p>
                  <button
                    onClick={clearAll}
                    className="mt-6 text-[11px] uppercase tracking-[0.24em] text-velmora-espresso border-b border-velmora-espresso pb-1 hover:text-velmora-gold hover:border-velmora-gold"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-6 gap-y-10 md:gap-y-14">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} eager={i < 4} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="py-5 border-b border-velmora-line">
      <h4 className="text-[11px] uppercase tracking-[0.28em] text-velmora-espresso mb-4">
        {title}
      </h4>
      {children}
    </div>
  );
}
