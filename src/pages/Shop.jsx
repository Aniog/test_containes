import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import FilterSidebar, { PRICE_RANGES, MATERIAL_OPTIONS } from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import Reveal from "@/components/ui/Reveal";
import { useCart, useUI } from "@/context/CartContext";

const DEFAULT_FILTERS = {
  category: "",
  priceRange: "all",
  material: "",
};

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState(() => ({
    category: params.get("category") || "",
    priceRange: params.get("price") || "all",
    material: params.get("material") || "",
  }));
  const [sort, setSort] = useState("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { add } = useCart();
  const { showToast } = useUI();

  // Keep URL in sync with category filter for shareable links
  useEffect(() => {
    const next = new URLSearchParams();
    if (filters.category) next.set("category", filters.category);
    if (filters.priceRange !== "all") next.set("price", filters.priceRange);
    if (filters.material) next.set("material", filters.material);
    setParams(next, { replace: true });
  }, [filters, setParams]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = useMemo(() => {
    const price = PRICE_RANGES.find((r) => r.id === filters.priceRange) || PRICE_RANGES[0];
    return PRODUCTS.filter((p) => {
      if (filters.category) {
        const inCat = (p.categories || [p.category]).includes(filters.category);
        if (!inCat) return false;
      }
      if (p.price < price.min || p.price > price.max) return false;
      if (filters.material) {
        // "18k" / "ss" / "mix" — map from material string
        const m = (p.material || "").toLowerCase();
        if (filters.material === "18k" && !m.includes("18k")) return false;
        if (filters.material === "ss"  && !m.includes("sterling")) return false;
        if (filters.material === "mix" && m.includes("18k")) return false;
      }
      return true;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === "price-asc")  arr.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    if (sort === "newest")     arr.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    if (sort === "rating")     arr.sort((a, b) => b.rating - a.rating);
    if (sort === "featured")   arr.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    return arr;
  }, [filtered, sort]);

  const handleQuickAdd = (product) => {
    add(product, { tone: product.tone, qty: 1 });
    showToast(`${product.name} added to your bag`);
  };

  const updateFilters = (patch) => setFilters((f) => ({ ...f, ...patch }));
  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  const activeCategory = CATEGORIES.find((c) => c.slug === filters.category);

  return (
    <div className="vm-page">
      {/* Page header */}
      <header className="pt-12 md:pt-20 pb-10 md:pb-14 bg-cream-50 border-b border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">
              {activeCategory ? activeCategory.label : "The Full Edit"}
            </p>
            <h1 className="vm-display text-ink mt-3 text-5xl md:text-7xl leading-[1.02]">
              {activeCategory ? (
                <>
                  Shop{" "}
                  <span className="italic font-light">{activeCategory.label}.</span>
                </>
              ) : (
                <>
                  Every piece,{" "}
                  <span className="italic font-light">carefully chosen.</span>
                </>
              )}
            </h1>
            <p className="mt-5 max-w-2xl text-ink-muted text-sm md:text-base leading-relaxed">
              {activeCategory
                ? activeCategory.description
                : "Browse our full edit of demi-fine jewelry — each piece hand-finished in 18K gold plating over brass or sterling silver, made to be layered, gifted, and worn forever."}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Toolbar */}
      <div className="border-b border-ink/8 bg-cream-50 sticky top-0 md:top-[64px] z-30">
        <div className="mx-auto max-w-page px-5 md:px-10 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex md:hidden items-center gap-2 text-sm text-ink hover:text-gold-dark"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.4} />
            Filters
          </button>
          <p className="hidden md:block text-sm text-ink-muted">
            Showing <span className="text-ink font-medium">{sorted.length}</span> of {PRODUCTS.length} pieces
          </p>
          <SortDropdown value={sort} onChange={setSort} />
        </div>
      </div>

      {/* Grid */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-page px-5 md:px-10 py-12 md:py-16 grid md:grid-cols-[240px_1fr] gap-10 md:gap-14">
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onChange={updateFilters}
              onReset={resetFilters}
              resultCount={sorted.length}
            />
          </div>

          <div>
            {sorted.length === 0 ? (
              <div className="text-center py-24">
                <p className="vm-serif text-3xl text-ink">Nothing matches — yet.</p>
                <p className="text-ink-muted mt-3">Try adjusting your filters.</p>
                <button type="button" onClick={resetFilters} className="vm-btn vm-btn--outline mt-8">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
                {sorted.map((p) => (
                  <ProductCard key={p.id} product={p} onQuickAdd={handleQuickAdd} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-ink/60" onClick={() => setDrawerOpen(false)}>
          <div
            className="absolute inset-y-0 left-0 right-10 bg-cream-50 overflow-y-auto px-5 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="vm-eyebrow text-ink">Filters</p>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close filters" className="text-ink">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              onChange={(patch) => { updateFilters(patch); }}
              onReset={resetFilters}
              resultCount={sorted.length}
            />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="vm-btn vm-btn--primary w-full mt-6"
            >
              Show {sorted.length} pieces
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
