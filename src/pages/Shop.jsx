import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const PRICE_BANDS = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function applyFilters(products, filters) {
  let list = products.slice();
  if (filters.category) {
    list = list.filter((p) => p.category === filters.category);
  }
  if (filters.material) {
    list = list.filter((p) => p.material === filters.material);
  }
  if (filters.priceBand) {
    const band = PRICE_BANDS.find((b) => b.id === filters.priceBand);
    if (band) list = list.filter((p) => p.price >= band.min && p.price <= band.max);
  }
  switch (filters.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // featured — keep input order (bestsellers first naturally)
      list.sort((a, b) => Number(b.isBestseller) - Number(a.isBestseller));
  }
  return list;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [filters, setFilters] = useState({
    category: initialCategory,
    material: "",
    priceBand: "",
    sort: "featured",
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") || "";
    setFilters((f) => ({ ...f, category: cat }));
  }, [searchParams]);

  const updateFilter = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
    if (key === "category") {
      const next = new URLSearchParams(searchParams);
      if (value) next.set("category", value);
      else next.delete("category");
      setSearchParams(next, { replace: true });
    }
  };

  const clearFilters = () => {
    setFilters({ category: "", material: "", priceBand: "", sort: "featured" });
    setSearchParams({}, { replace: true });
  };

  const products = useMemo(() => applyFilters(PRODUCTS, filters), [filters]);
  const activeCount =
    Number(!!filters.category) +
    Number(!!filters.material) +
    Number(!!filters.priceBand);

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-line py-6">
      <h3 className="text-[11px] uppercase tracking-eyebrow text-ink mb-4">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );

  const RadioRow = ({ name, value, current, onChange, label }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
          current === value
            ? "border-ink"
            : "border-line group-hover:border-ink-soft"
        )}
      >
        {current === value && <span className="w-2 h-2 rounded-full bg-ink" />}
      </span>
      <span
        className={cn(
          "text-sm transition-colors",
          current === value ? "text-ink" : "text-ink-soft group-hover:text-ink"
        )}
      >
        {label}
      </span>
    </label>
  );

  return (
    <>
      {/* Editorial page header */}
      <section className="bg-bone pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container-velmora text-center">
          <p className="eyebrow mb-4">The Collection</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-ink">
            Shop
            <span className="italic"> everything.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink-soft max-w-xl mx-auto">
            Demi-fine 18K gold plated jewelry — every piece, hand-finished.
          </p>
        </div>
      </section>

      <div className="container-velmora py-8 md:py-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center gap-2 border border-ink text-ink px-5 py-2.5 text-[11px] uppercase tracking-eyebrow font-medium"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filter{activeCount > 0 ? ` (${activeCount})` : ""}
          </button>
          <p className="hidden md:block text-sm text-ink-soft">
            Showing <span className="text-ink">{products.length}</span>{" "}
            {products.length === 1 ? "piece" : "pieces"}
          </p>
          <label className="flex items-center gap-3 ml-auto md:ml-0">
            <span className="hidden md:inline text-[11px] uppercase tracking-eyebrow text-ink-soft">
              Sort
            </span>
            <select
              value={filters.sort}
              onChange={(e) => updateFilter("sort", e.target.value)}
              className="bg-bone border border-line px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-ink"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] uppercase tracking-eyebrow text-ink">
                  Filter
                </p>
                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[11px] uppercase tracking-eyebrow text-ink-soft hover:text-ink underline underline-offset-4"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterGroup title="Category">
                <RadioRow
                  name="category"
                  value=""
                  current={filters.category}
                  onChange={(v) => updateFilter("category", v)}
                  label="All"
                />
                {CATEGORIES.map((c) => (
                  <RadioRow
                    key={c.id}
                    name="category"
                    value={c.id}
                    current={filters.category}
                    onChange={(v) => updateFilter("category", v)}
                    label={c.label}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Material">
                <RadioRow
                  name="material"
                  value=""
                  current={filters.material}
                  onChange={(v) => updateFilter("material", v)}
                  label="All"
                />
                {MATERIALS.map((m) => (
                  <RadioRow
                    key={m.id}
                    name="material"
                    value={m.id}
                    current={filters.material}
                    onChange={(v) => updateFilter("material", v)}
                    label={m.label}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Price">
                <RadioRow
                  name="price"
                  value=""
                  current={filters.priceBand}
                  onChange={(v) => updateFilter("priceBand", v)}
                  label="All"
                />
                {PRICE_BANDS.map((b) => (
                  <RadioRow
                    key={b.id}
                    name="price"
                    value={b.id}
                    current={filters.priceBand}
                    onChange={(v) => updateFilter("priceBand", v)}
                    label={b.label}
                  />
                ))}
              </FilterGroup>
            </div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9 lg:col-span-9">
            {products.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl text-ink mb-4">
                  Nothing matches — yet.
                </p>
                <p className="text-sm text-ink-soft mb-8">
                  Try widening your filters to discover more.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
                {products.map((p, idx) => (
                  <ProductCard key={p.id} product={p} priority={idx < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[55] transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-bone text-ink transition-transform duration-500 ease-soft-out",
            mobileOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-line">
            <p className="text-[11px] uppercase tracking-eyebrow text-ink">
              Filter
            </p>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="px-6">
            <FilterGroup title="Category">
              <RadioRow
                name="category"
                value=""
                current={filters.category}
                onChange={(v) => updateFilter("category", v)}
                label="All"
              />
              {CATEGORIES.map((c) => (
                <RadioRow
                  key={c.id}
                  name="category"
                  value={c.id}
                  current={filters.category}
                  onChange={(v) => updateFilter("category", v)}
                  label={c.label}
                />
              ))}
            </FilterGroup>
            <FilterGroup title="Material">
              <RadioRow
                name="material"
                value=""
                current={filters.material}
                onChange={(v) => updateFilter("material", v)}
                label="All"
              />
              {MATERIALS.map((m) => (
                <RadioRow
                  key={m.id}
                  name="material"
                  value={m.id}
                  current={filters.material}
                  onChange={(v) => updateFilter("material", v)}
                  label={m.label}
                />
              ))}
            </FilterGroup>
            <FilterGroup title="Price">
              <RadioRow
                name="price"
                value=""
                current={filters.priceBand}
                onChange={(v) => updateFilter("priceBand", v)}
                label="All"
              />
              {PRICE_BANDS.map((b) => (
                <RadioRow
                  key={b.id}
                  name="price"
                  value={b.id}
                  current={filters.priceBand}
                  onChange={(v) => updateFilter("priceBand", v)}
                  label={b.label}
                />
              ))}
            </FilterGroup>
          </div>
          <div className="sticky bottom-0 bg-bone border-t border-line p-6 flex gap-3">
            <button
              type="button"
              onClick={clearFilters}
              className="btn-outline flex-1"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="btn-primary flex-1"
            >
              Show {products.length}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}