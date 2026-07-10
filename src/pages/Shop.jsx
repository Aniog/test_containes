import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, X, ChevronDown } from "lucide-react";
import { products, categories, priceRanges, materials } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const sorts = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="product-name text-cocoa">{title}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-cocoa transition-transform duration-300", open && "rotate-180")}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function FilterCheckbox({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center justify-between gap-3 py-1.5 cursor-pointer group">
      <span className="flex items-center gap-3 min-w-0">
        <span
          className={cn(
            "h-4 w-4 border flex items-center justify-center transition-colors duration-200 shrink-0",
            checked ? "bg-cocoa border-cocoa" : "border-hairline group-hover:border-cocoa"
          )}
        >
          {checked && (
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#FAF6F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <span className="text-sm text-cocoa-soft group-hover:text-cocoa transition-colors truncate">
          {label}
        </span>
      </span>
      {count != null && <span className="text-xs text-muted tabular-nums shrink-0">{count}</span>}
    </label>
  );
}

function FilterSidebar({ filters, setFilters, onClose, totalCount }) {
  const toggle = (key, value) => {
    setFilters((f) => {
      const set = new Set(f[key]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...f, [key]: set };
    });
  };
  const counts = useMemo(() => {
    const byCategory = {};
    const byPrice = {};
    const byMaterial = {};
    for (const p of products) {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
      for (const pr of priceRanges) {
        if (p.price >= pr.min && p.price <= pr.max) {
          byPrice[pr.id] = (byPrice[pr.id] || 0) + 1;
        }
      }
      for (const m of materials) {
        if (p.materials.toLowerCase().includes(m.toLowerCase().split(" ")[0])) {
          byMaterial[m] = (byMaterial[m] || 0) + 1;
        }
      }
    }
    return { byCategory, byPrice, byMaterial };
  }, []);

  const clearAll = () => {
    setFilters({ category: new Set(), price: new Set(), material: new Set() });
  };

  const activeCount =
    filters.category.size + filters.price.size + filters.material.size;

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="product-name text-cocoa">Filters {activeCount > 0 && `(${activeCount})`}</h3>
        <div className="flex items-center gap-3">
          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="text-[11px] uppercase tracking-[0.15em] text-claret hover:text-claret-dark transition-colors"
            >
              Clear all
            </button>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="md:hidden h-9 w-9 flex items-center justify-center text-cocoa"
              aria-label="Close filters"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
      <p className="text-xs text-muted mb-4">{totalCount} piece{totalCount === 1 ? "" : "s"}</p>

      <FilterGroup title="Category">
        <div className="space-y-0.5">
          {categories.map((c) => (
            <FilterCheckbox
              key={c.id}
              checked={filters.category.has(c.id)}
              onChange={() => toggle("category", c.id)}
              label={c.label}
              count={counts.byCategory[c.id] || 0}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-0.5">
          {priceRanges.map((p) => (
            <FilterCheckbox
              key={p.id}
              checked={filters.price.has(p.id)}
              onChange={() => toggle("price", p.id)}
              label={p.label}
              count={counts.byPrice[p.id] || 0}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        <div className="space-y-0.5">
          {materials.map((m) => (
            <FilterCheckbox
              key={m}
              checked={filters.material.has(m)}
              onChange={() => toggle("material", m)}
              label={m}
              count={counts.byMaterial[m] || 0}
            />
          ))}
        </div>
      </FilterGroup>
    </aside>
  );
}

function MobileFilters({ open, onClose, children }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[55] md:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-cocoa/40" onClick={onClose} />
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory-light shadow-drawer overflow-y-auto transition-transform duration-500 ease-editorial",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-6 py-8">{children}</div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: new Set(searchParams.get("category") ? [searchParams.get("category")] : []),
    price: new Set(),
    material: new Set(),
  });
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep URL in sync with category filter
  useEffect(() => {
    const cat = Array.from(filters.category);
    const next = new URLSearchParams(searchParams);
    if (cat.length === 1) next.set("category", cat[0]);
    else next.delete("category");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.category]);

  const filtered = useMemo(() => {
    let list = products;
    if (filters.category.size > 0) {
      list = list.filter((p) => filters.category.has(p.category));
    }
    if (filters.price.size > 0) {
      list = list.filter((p) => {
        for (const pr of priceRanges) {
          if (filters.price.has(pr.id) && p.price >= pr.min && p.price <= pr.max) {
            return true;
          }
        }
        return false;
      });
    }
    if (filters.material.size > 0) {
      list = list.filter((p) => {
        const lower = p.materials.toLowerCase();
        for (const m of filters.material) {
          if (lower.includes(m.toLowerCase().split(" ")[0])) return true;
        }
        return false;
      });
    }
    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
        break;
      default:
        break;
    }
    return sorted;
  }, [filters, sort]);

  const activeCategory = Array.from(filters.category)[0];
  const heroTitle = activeCategory
    ? categories.find((c) => c.id === activeCategory)?.label || "Shop"
    : "The Collection";

  return (
    <>
      {/* Hero */}
      <section className="bg-ivory-light pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12 text-center">
          <p className="editorial-eyebrow mb-3">Velmora · Fine Jewelry</p>
          <h1 className="serif-display text-4xl md:text-6xl text-cocoa">
            {heroTitle}
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted max-w-md mx-auto">
            Demi-fine 18K gold pieces, hand-finished in our Los Angeles studio. Free shipping on orders over $75.
          </p>
        </div>
      </section>

      <section className="bg-ivory-light pb-24 md:pb-32">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-10 md:gap-16">
            {/* Sidebar (desktop) */}
            <div className="hidden md:block sticky top-28 self-start">
              <FilterSidebar filters={filters} setFilters={setFilters} totalCount={filtered.length} />
            </div>

            {/* Main */}
            <div>
              {/* Toolbar */}
              <div className="flex items-center justify-between pb-6 border-b border-hairline mb-8">
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cocoa"
                >
                  <Filter className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Filter
                </button>
                <p className="hidden md:block text-xs text-muted">
                  Showing {filtered.length} of {products.length} pieces
                </p>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen(!sortOpen)}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cocoa"
                    aria-haspopup="listbox"
                    aria-expanded={sortOpen}
                  >
                    Sort: <span className="text-claret">{sorts.find((s) => s.id === sort)?.label}</span>
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", sortOpen && "rotate-180")} strokeWidth={1.5} />
                  </button>
                  {sortOpen && (
                    <ul
                      role="listbox"
                      className="absolute right-0 top-full mt-2 z-20 bg-ivory-light border border-hairline shadow-soft min-w-[200px] py-2"
                    >
                      {sorts.map((s) => (
                        <li key={s.id} role="option" aria-selected={s.id === sort}>
                          <button
                            type="button"
                            onClick={() => {
                              setSort(s.id);
                              setSortOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-4 py-2 text-sm transition-colors",
                              s.id === sort ? "text-claret" : "text-cocoa hover:bg-ivory-dark"
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

              {/* Grid */}
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="serif-display text-3xl text-cocoa">No pieces match those filters.</p>
                  <button
                    type="button"
                    onClick={() => setFilters({ category: new Set(), price: new Set(), material: new Set() })}
                    className="mt-6 btn-outline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} eager={i < 3} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      <MobileFilters open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          onClose={() => setMobileOpen(false)}
          totalCount={filtered.length}
        />
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full"
          >
            View {filtered.length} pieces
          </button>
        </div>
      </MobileFilters>
    </>
  );
}
