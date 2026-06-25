import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import { products } from "@/data/products";
import { useStrkImages } from "@/lib/useStrkImages";

function matchesCategory(product, category) {
  return category === "all" || product.category === category;
}

function matchesPrice(product, priceRange) {
  if (priceRange === "all") return true;
  if (priceRange === "under-50") return product.price < 50;
  if (priceRange === "50-75") return product.price >= 50 && product.price <= 75;
  if (priceRange === "over-75") return product.price > 75;
  return true;
}

function matchesMaterial(product, material) {
  if (material === "all") return true;
  const m = (product.material || "").toLowerCase();
  if (material === "18k-gold") return m.includes("18k");
  if (material === "crystal") return m.includes("crystal");
  if (material === "filigree") return m.includes("filigree");
  return true;
}

function sortProducts(list, sort) {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case "newest":
      return copy.reverse();
    case "featured":
    default:
      return copy;
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const containerRef = useRef(null);

  const category = params.get("category") || "all";
  const priceRange = params.get("price") || "all";
  const material = params.get("material") || "all";
  const sort = params.get("sort") || "featured";

  const filtered = useMemo(() => {
    return sortProducts(
      products.filter(
        (p) =>
          matchesCategory(p, category) &&
          matchesPrice(p, priceRange) &&
          matchesMaterial(p, material)
      ),
      sort
    );
  }, [category, priceRange, material, sort]);

  // Re-scan stock images whenever filter results change.
  useStrkImages(containerRef, [filtered]);

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === "all" || !value) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const clearAll = () => setParams(new URLSearchParams(), { replace: true });

  return (
    <section ref={containerRef} className="bg-bone">
      {/* Page header */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
          The Edit
        </p>
        <h1
          id="shop-heading"
          className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-espresso"
        >
          Shop the Collection
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
          Demi-fine gold jewelry crafted in small batches. Designed for daily wear,
          for keepsake gifting, and for the quiet luxury of pieces that last.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <div className="md:flex md:gap-10">
          <FilterSidebar
            category={category}
            priceRange={priceRange}
            material={material}
            onCategoryChange={(v) => setParam("category", v)}
            onPriceChange={(v) => setParam("price", v)}
            onMaterialChange={(v) => setParam("material", v)}
            onClear={clearAll}
          />

          <div className="flex-1 mt-10 md:mt-0">
            <div className="flex items-center justify-between border-b border-bone/80 pb-4 mb-8">
              <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal">
                {filtered.length}{" "}
                {filtered.length === 1 ? "Piece" : "Pieces"}
              </p>
              <SortDropdown
                value={sort}
                onChange={(v) => setParam("sort", v)}
              />
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">
                  Nothing matches just yet.
                </p>
                <p className="mt-2 text-sm text-charcoal">
                  Try clearing a filter to see more pieces.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-[11px] tracking-[0.22em] uppercase text-accent hover:text-espresso transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}