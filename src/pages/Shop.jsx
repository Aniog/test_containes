import { useEffect, useMemo, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import FilterSidebar, { bucketForPrice } from "@/components/shop/FilterSidebar";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

const EMPTY_FILTERS = {
  categories: [],
  materials: [],
  priceBuckets: [],
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => {
    const cat = searchParams.get("category");
    return {
      ...EMPTY_FILTERS,
      categories: cat ? [cat] : [],
    };
  });
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const ref = useRef(null);
  useReveal(ref);
  // Re-scan on filter / sort changes so newly mounted product cards
  // get their strk images resolved.
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filters, sort]);

  // Keep URL in sync with category filter
  useEffect(() => {
    const current = searchParams.get("category");
    const desired = filters.categories[0] || null;
    if (current !== desired) {
      const next = new URLSearchParams(searchParams);
      if (desired) next.set("category", desired);
      else next.delete("category");
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories]);

  // Counts (for sidebar chips — based on the *unfiltered* set so users can
  // see what's available, but only counts shown if there is data).
  const counts = useMemo(() => {
    const byCategory = {};
    const byMaterial = {};
    PRODUCTS.forEach((p) => {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
      p.material.forEach((m) => {
        byMaterial[m] = (byMaterial[m] || 0) + 1;
      });
    });
    return { byCategory, byMaterial };
  }, []);

  // Apply filters + sort
  const visible = useMemo(() => {
    const filtered = PRODUCTS.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) {
        return false;
      }
      if (filters.materials.length && !p.material.some((m) => filters.materials.includes(m))) {
        return false;
      }
      if (filters.priceBuckets.length) {
        const bucket = bucketForPrice(p.price);
        if (!bucket || !filters.priceBuckets.includes(bucket.id)) return false;
      }
      return true;
    });
    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    else if (sort === "newest")
      sorted.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
    return sorted;
  }, [filters, sort]);

  const clearAll = () => setFilters(EMPTY_FILTERS);

  // Page title text
  const activeCat = CATEGORIES.find((c) => c.id === filters.categories[0]);

  return (
    <>
      {/* Page header */}
      <section className="bg-cream pt-32 md:pt-40 pb-12 md:pb-16 border-b border-espresso/10">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <Eyebrow>The Collection</Eyebrow>
          <SectionTitle className="mt-3 max-w-2xl">
            {activeCat ? activeCat.label : "All Pieces"}
          </SectionTitle>
          <p className="mt-5 text-sm md:text-base text-taupe max-w-lg leading-relaxed">
            {activeCat
              ? `Every ${singularize(activeCat.label.toLowerCase())} in the current edit, hand-finished in 18K gold plate.`
              : "Demi-fine jewelry, designed in small batches. Free worldwide shipping over $75."}
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 xl:gap-16">
            {/* Sidebar — desktop */}
            <div className="hidden lg:block">
              <FilterSidebar
                filters={filters}
                onChange={setFilters}
                counts={counts}
                onClear={clearAll}
                totalCount={visible.length}
              />
            </div>

            {/* Results column */}
            <div>
              {/* Toolbar */}
              <div className="reveal flex items-center justify-between border-y border-espresso/10 py-4 mb-8 md:mb-10">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-label text-espresso"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.6} />
                  Filter
                </button>

                <div className="hidden lg:block text-xs text-taupe">
                  Showing <span className="text-espresso">{visible.length}</span> of {PRODUCTS.length}
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen((o) => !o)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-label text-espresso"
                    aria-haspopup="listbox"
                    aria-expanded={sortOpen}
                  >
                    Sort: {SORTS.find((s) => s.id === sort)?.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        sortOpen ? "rotate-180" : "",
                      )}
                      strokeWidth={1.6}
                    />
                  </button>
                  {sortOpen && (
                    <ul
                      role="listbox"
                      className="absolute right-0 top-full mt-2 w-56 bg-ivory border border-espresso/10 shadow-soft z-20"
                    >
                      {SORTS.map((s) => (
                        <li key={s.id}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={sort === s.id}
                            onClick={() => {
                              setSort(s.id);
                              setSortOpen(false);
                            }}
                            className={cn(
                              "block w-full text-left px-4 py-2.5 text-xs uppercase tracking-label transition-colors",
                              sort === s.id
                                ? "bg-cream-deep text-espresso"
                                : "text-espresso-soft hover:bg-cream-deep hover:text-espresso",
                            )}
                          >
                            {s.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Active filter chips (mobile + desktop) */}
              {hasActiveChips(filters) && (
                <div className="reveal flex flex-wrap gap-2 mb-6 -mt-3">
                  {filters.categories.map((id) => {
                    const cat = CATEGORIES.find((c) => c.id === id);
                    if (!cat) return null;
                    return (
                      <Chip
                        key={id}
                        label={cat.label}
                        onRemove={() =>
                          setFilters((f) => ({
                            ...f,
                            categories: f.categories.filter((v) => v !== id),
                          }))
                        }
                      />
                    );
                  })}
                </div>
              )}

              {/* Grid or empty */}
              {visible.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-3xl font-light text-espresso">
                    Nothing here, yet.
                  </p>
                  <p className="mt-3 text-sm text-taupe max-w-sm mx-auto">
                    Try a different filter — or browse the full edit.
                  </p>
                  <Button
                    onClick={clearAll}
                    variant="ghost"
                    size="md"
                    className="mt-6"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
                  {visible.map((p, i) => (
                    <div
                      key={p.id}
                      className="reveal"
                      style={{ transitionDelay: `${Math.min(i, 8) * 40}ms` }}
                    >
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-500 ease-elegant",
          mobileFilterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileFilterOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileFilterOpen(false)}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 max-h-[88vh] bg-cream shadow-drawer",
            "transition-transform duration-500 ease-elegant overflow-y-auto",
            mobileFilterOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="sticky top-0 bg-cream z-10 flex items-center justify-between px-5 h-14 border-b border-espresso/10">
            <h3 className="font-serif text-xl font-light text-espresso">Filter</h3>
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="p-2 text-espresso"
              aria-label="Close filters"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-5">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              counts={counts}
              onClear={clearAll}
              totalCount={visible.length}
            />
          </div>
          <div className="sticky bottom-0 bg-cream border-t border-espresso/10 p-5">
            <Button
              size="block"
              onClick={() => setMobileFilterOpen(false)}
            >
              Show {visible.length} {visible.length === 1 ? "Piece" : "Pieces"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function Chip({ label, onRemove }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-1.5 bg-cream-deep text-espresso px-3 py-1.5 text-[11px] uppercase tracking-eyebrow hover:bg-champagne-soft transition-colors"
    >
      {label}
      <X className="h-3 w-3" strokeWidth={1.6} />
    </button>
  );
}

function hasActiveChips(filters) {
  return (
    filters.categories.length ||
    filters.materials.length ||
    filters.priceBuckets.length
  );
}

const SINGULAR_BY_CATEGORY = {
  earrings: "earring",
  necklaces: "necklace",
  huggies: "huggie",
  sets: "set",
};

function singularize(word) {
  // Hardcoded mapping for the four known category labels so we get
  // "huggie" (not "huggy") and don't fall back to brittle English rules.
  const key = word.toLowerCase();
  if (SINGULAR_BY_CATEGORY[key]) return SINGULAR_BY_CATEGORY[key];
  return word;
}
