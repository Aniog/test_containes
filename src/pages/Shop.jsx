import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ProductCard from "@/components/product/ProductCard";
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/lib/products";
import { cn } from "@/lib/utils";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price · Low to High" },
  { value: "price-desc", label: "Price · High to Low" },
  { value: "rating", label: "Top Rated" },
];

const PRICE_BUCKETS = [
  { value: "0-50", label: "Under $50", min: 0, max: 50 },
  { value: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { value: "80-120", label: "$80 – $120", min: 80, max: 120 },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || null;
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategories((current) =>
        current.includes(cat) ? current : [cat]
      );
    }
  }, [searchParams]);

  const toggleCategory = (slug) => {
    setSelectedCategories((current) =>
      current.includes(slug) ? current.filter((c) => c !== slug) : [...current, slug]
    );
  };
  const toggleMaterial = (slug) => {
    setSelectedMaterials((current) =>
      current.includes(slug) ? current.filter((m) => m !== slug) : [...current, slug]
    );
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPrice) {
      const bucket = PRICE_BUCKETS.find((b) => b.value === selectedPrice);
      if (bucket) {
        list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max);
      }
    }
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
      default:
        break;
    }
    return list;
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0);

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice(null);
    setSearchParams({});
  };

  return (
    <>
      <Navbar transparent={false} />
      <CartDrawer />

      <main className="bg-cream">
        {/* Page header */}
        <header className="container-page pt-32 md:pt-40 pb-10 md:pb-14">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 font-serif font-light text-5xl md:text-7xl text-ink leading-[1] text-balance">
            The Collection
          </h1>
          <p className="mt-5 font-serif text-lg md:text-xl text-mushroom-dark italic max-w-xl">
            Demi-fine pieces, designed to be worn every day and treasured for years.
          </p>
        </header>

        <div className="container-page pb-24 md:pb-32">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 py-4 border-y border-line">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-ink"
              >
                <Filter className="w-3.5 h-3.5" strokeWidth={1.4} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-ink text-ivory text-[9px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <span className="hidden md:inline font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="sr-only">
                Sort by
              </label>
              <div className="relative">
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-[11px] uppercase tracking-widest2 text-ink pr-7 pl-2 py-2 border border-line focus:outline-none focus:border-ink cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-ink"
                  strokeWidth={1.4}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mt-10">
            {/* Sidebar — desktop */}
            <aside className="hidden md:block md:col-span-3">
              <FilterPanel
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                selectedMaterials={selectedMaterials}
                toggleMaterial={toggleMaterial}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                onClear={clearAll}
                activeCount={activeFilterCount}
              />
            </aside>

            {/* Grid */}
            <div className="md:col-span-9">
              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-3xl text-ink">No pieces match.</p>
                  <p className="mt-2 font-sans text-sm text-mushroom">
                    Try removing a filter or two.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-6 link-underline text-ink"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/50 animate-fadeIn"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-ivory shadow-drawer animate-slideInRight flex flex-col">
            <div className="flex items-center justify-between h-16 px-5 border-b border-line">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-1 text-ink"
              >
                <X className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              <FilterPanel
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                selectedMaterials={selectedMaterials}
                toggleMaterial={toggleMaterial}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                onClear={clearAll}
                activeCount={activeFilterCount}
              />
            </div>
            <div className="px-5 py-5 border-t border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full btn-gold"
              >
                View {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterPanel({
  selectedCategories,
  toggleCategory,
  selectedMaterials,
  toggleMaterial,
  selectedPrice,
  setSelectedPrice,
  onClear,
  activeCount,
}) {
  return (
    <div className="space-y-10">
      {activeCount > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="font-sans text-[11px] uppercase tracking-widest2 text-gold-deep hover:text-ink transition-colors"
        >
          Clear all ({activeCount})
        </button>
      )}

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Checkbox
                label={c.label}
                checked={selectedCategories.includes(c.slug)}
                onChange={() => toggleCategory(c.slug)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.value}>
              <Checkbox
                label={b.label}
                checked={selectedPrice === b.value}
                onChange={() =>
                  setSelectedPrice(selectedPrice === b.value ? null : b.value)
                }
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m.slug}>
              <Checkbox
                label={m.label}
                checked={selectedMaterials.includes(m.slug)}
                onChange={() => toggleMaterial(m.slug)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <section>
      <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink mb-5">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="group flex items-center gap-3 cursor-pointer">
      <span
        className={cn(
          "w-4 h-4 border flex-shrink-0 transition-colors duration-300",
          checked ? "bg-ink border-ink" : "border-mushroom group-hover:border-ink"
        )}
        aria-hidden="true"
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="w-full h-full text-ivory">
            <path
              d="M2 6.5L5 9.5L10 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="font-sans text-sm text-ink group-hover:text-gold-deep transition-colors">
        {label}
      </span>
    </label>
  );
}
