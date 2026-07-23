import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import ShopToolbar, { SORTS } from "@/components/product/ShopToolbar";
import FilterSidebar, { PRICE_BANDS } from "@/components/product/FilterSidebar";
import SectionHeading from "@/components/ui/SectionHeading";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_FILTERS = { category: [], price: [], material: [] };

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState(() => {
    const f = { ...DEFAULT_FILTERS };
    const cat = params.get("category");
    if (cat) f.category = [cat];
    return f;
  });
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category from URL on mount/change
  useEffect(() => {
    const cat = params.get("category");
    setFilters((prev) => {
      const inUrl = cat ? [cat] : [];
      const same =
        prev.category.length === inUrl.length &&
        prev.category.every((c) => inUrl.includes(c));
      return same ? prev : { ...prev, category: inUrl };
    });
  }, [params]);

  const filtered = useMemo(() => {
    const cats = filters.category;
    const priceBands = (filters.price || [])
      .map((id) => PRICE_BANDS.find((p) => p.id === id))
      .filter(Boolean);

    let list = products.filter((p) => {
      if (cats.length > 0) {
        // Map huggies to earrings since the seed catalog has the huggies
        // product under "earrings" category
        const matches = cats.some((c) => {
          if (c === "huggies") return p.id === "golden-sphere-huggies";
          return p.category === c;
        });
        if (!matches) return false;
      }
      if (priceBands.length > 0) {
        const ok = priceBands.some(
          (b) => p.price >= b.min && p.price <= b.max,
        );
        if (!ok) return false;
      }
      if (filters.material?.length > 0) {
        const ok = filters.material.some((m) => p.material.includes(m));
        if (!ok) return false;
      }
      return true;
    });

    switch (sort) {
      case "price-asc":  list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "rating":     list = [...list].sort((a, b) => b.rating - a.rating); break;
      case "newest":     list = [...list].reverse(); break;
      default: break;
    }
    return list;
  }, [filters, sort]);

  function handleFiltersChange(next) {
    setFilters(next);
    // Reflect the (single) category in the URL for shareability
    const cat = next.category?.[0];
    const np = new URLSearchParams(params);
    if (cat) np.set("category", cat); else np.delete("category");
    setParams(np, { replace: true });
  }

  return (
    <div className="bg-bone-100 pt-24 sm:pt-28 pb-24 min-h-screen">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55">
            The Collection
          </p>
          <h1 className="display-serif mt-3 text-4xl sm:text-5xl">
            Shop Demi-Fine Gold
          </h1>
          <p className="mt-4 text-sm sm:text-base text-espresso/65">
            Hand-finished in small batches. Designed to live with you.
          </p>
        </div>

        <ShopToolbar
          total={products.length}
          resultCount={filtered.length}
          sort={sort}
          onSort={setSort}
          filters={filters}
          onOpenMobileFilters={() => setMobileFiltersOpen(true)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-12 mt-10">
          <FilterSidebar
            filters={filters}
            onChange={handleFiltersChange}
            resultCount={filtered.length}
          />

          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="display-serif text-3xl">No matches yet.</p>
                <p className="text-espresso/60 mt-2 text-sm">
                  Try removing a filter or two.
                </p>
                <button
                  type="button"
                  onClick={() => handleFiltersChange(DEFAULT_FILTERS)}
                  className="btn btn-outline mt-6"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters sheet */}
      <div
        aria-hidden={!mobileFiltersOpen}
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          mobileFiltersOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[88%] max-w-sm bg-bone-100",
            "shadow-drawer transition-transform duration-500 ease-out-soft",
            mobileFiltersOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <FilterSidebar
            mobile
            filters={filters}
            onChange={handleFiltersChange}
            resultCount={filtered.length}
            onClose={() => setMobileFiltersOpen(false)}
          />
          <div className="border-t border-taupe-light p-4 bg-bone-50">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="btn btn-primary w-full"
            >
              Show {filtered.length} result{filtered.length === 1 ? "" : "s"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
