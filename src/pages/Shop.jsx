import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, filtersConfig, sortOptions } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

function sortProducts(list, sort) {
  const arr = [...list];
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "newest":
      return arr.reverse();
    default:
      return arr;
  }
}

function matchesPrice(product, priceFilter) {
  if (priceFilter === "all") return true;
  const cfg = filtersConfig.price.find((p) => p.id === priceFilter);
  if (!cfg || cfg.min == null) return true;
  return product.price >= cfg.min && product.price <= cfg.max;
}

function matchesMaterial(product, materialFilter) {
  if (materialFilter === "all") return true;
  const mat = (product.material || "").toLowerCase();
  switch (materialFilter) {
    case "18k-gold":
      return mat.includes("18k gold");
    case "hypoallergenic":
      return mat.includes("hypoallergenic");
    case "crystal":
      return mat.includes("crystal") || mat.includes("filigree");
    default:
      return true;
  }
}

function matchesCategory(product, category) {
  if (category === "all") return true;
  if (category === "huggies") {
    return product.subcategory?.toLowerCase() === "huggies";
  }
  return product.category === category;
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";
  const initialSort = params.get("sort") || "featured";

  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState(initialSort);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync URL params when filters change so links are shareable.
  useEffect(() => {
    const next = new URLSearchParams();
    if (category !== "all") next.set("category", category);
    if (sort !== "featured") next.set("sort", sort);
    setParams(next, { replace: true });
  }, [category, sort, setParams]);

  const filtered = useMemo(() => {
    return sortProducts(
      products.filter(
        (p) =>
          matchesCategory(p, category) &&
          matchesPrice(p, price) &&
          matchesMaterial(p, material)
      ),
      sort
    );
  }, [category, price, material, sort]);

  const activeFilterCount =
    (category !== "all" ? 1 : 0) +
    (price !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0);

  return (
    <div className="bg-ivory">
      {/* Editorial header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory-soft">
        <div className="container-velmora text-center">
          <p className="eyebrow mb-4">The Collection</p>
          <h1 className="display-serif text-5xl md:text-6xl lg:text-7xl text-espresso text-balance">
            Shop all
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-base text-muted text-pretty">
            Demi-fine gold pieces, hand-finished in our atelier. Every order
            arrives in our signature keepsake packaging.
          </p>
        </div>
      </section>

      <section className="container-velmora py-10 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso border border-espresso/20 px-4 py-2.5 hover:border-espresso transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 text-bronze-deep">({activeFilterCount})</span>
              )}
            </button>
            <p className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-muted">
              {filtered.length} piece{filtered.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort-select"
              className="hidden sm:inline text-[11px] uppercase tracking-[0.2em] text-muted"
            >
              Sort
            </label>
            <select
              id="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-[12px] uppercase tracking-[0.2em] text-espresso border-b border-espresso/30 focus:border-espresso focus:outline-none py-2 pr-6 cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-10 md:gap-14">
          {/* Sidebar */}
          <aside
            className={cn(
              "md:block",
              mobileFiltersOpen
                ? "fixed inset-0 z-[60] bg-ivory p-6 overflow-y-auto md:static md:p-0 md:bg-transparent md:overflow-visible"
                : "hidden"
            )}
          >
            <div className="flex items-center justify-between mb-6 md:hidden">
              <p className="font-serif text-2xl text-espresso">Filters</p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2 -mr-2 text-espresso"
              >
                <X className="w-5 h-5" strokeWidth={1.25} />
              </button>
            </div>

            <FilterGroup
              title="Category"
              options={filtersConfig.category}
              value={category}
              onChange={setCategory}
            />
            <FilterGroup
              title="Price"
              options={filtersConfig.price}
              value={price}
              onChange={setPrice}
            />
            <FilterGroup
              title="Material"
              options={filtersConfig.material}
              value={material}
              onChange={setMaterial}
            />

            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setPrice("all");
                setMaterial("all");
              }}
              className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted hover:text-espresso transition-colors"
            >
              Reset all
            </button>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="md:hidden btn-primary w-full mt-8"
            >
              Show {filtered.length} piece{filtered.length === 1 ? "" : "s"}
            </button>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso">No pieces match.</p>
                <p className="text-sm text-muted mt-2">
                  Try removing a filter to see more.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-t border-hairline py-6">
      <h3 className="eyebrow mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {options.map((o) => {
          const active = value === o.id;
          return (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => onChange(o.id)}
                className={cn(
                  "text-left text-sm transition-colors duration-300 ease-editorial",
                  active ? "text-espresso font-medium" : "text-muted hover:text-espresso"
                )}
              >
                {o.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
