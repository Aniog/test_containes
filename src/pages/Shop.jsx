import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
];

const PRICE_BUCKETS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "$80+", min: 80, max: Infinity },
];

function comparePrice(a, b, dir) {
  return dir === "asc" ? a.price - b.price : b.price - a.price;
}

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline py-6">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between font-sans text-[11px] tracking-[0.32em] uppercase text-ink"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={["h-3.5 w-3.5 transition-transform duration-300", open ? "" : "-rotate-90"].join(" ")}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="mt-5 space-y-3">{children}</div>}
    </div>
  );
}

function FilterCheckbox({ id, label, checked, onChange, count }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center justify-between gap-3 font-sans text-[13px] text-charcoal hover:text-ink"
    >
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={[
            "flex h-4 w-4 items-center justify-center border transition-colors duration-200",
            checked ? "border-espresso bg-espresso" : "border-hairline bg-transparent",
          ].join(" ")}
        >
          {checked && (
            <svg viewBox="0 0 12 12" className="h-3 w-3 text-cream" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 6 L5 9 L10 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        {label}
      </span>
      {typeof count === "number" && (
        <span className="font-sans text-[11px] tracking-wide text-taupe">{count}</span>
      )}
    </label>
  );
}

function FilterSidebar({ filters, setFilters, counts }) {
  const toggle = (key, value) => {
    setFilters((f) => {
      const set = new Set(f[key]);
      set.has(value) ? set.delete(value) : set.add(value);
      return { ...f, [key]: set };
    });
  };
  return (
    <aside className="w-full">
      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <FilterCheckbox
            key={c.id}
            id={`cat-${c.id}`}
            label={c.label}
            checked={filters.category.has(c.id)}
            onChange={() => toggle("category", c.id)}
            count={counts.category[c.id] || 0}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((p) => (
          <FilterRadio
            key={p.id}
            id={`price-${p.id}`}
            label={p.label}
            name="price"
            checked={filters.price === p.id}
            onChange={() => setFilters((f) => ({ ...f, price: p.id }))}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <FilterCheckbox
            key={m.id}
            id={`mat-${m.id}`}
            label={m.label}
            checked={filters.material.has(m.id)}
            onChange={() => toggle("material", m.id)}
            count={counts.material[m.id] || 0}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}

function FilterRadio({ id, label, name, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 font-sans text-[13px] text-charcoal hover:text-ink"
    >
      <span
        aria-hidden="true"
        className={[
          "flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-200",
          checked ? "border-espresso" : "border-hairline",
        ].join(" ")}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-espresso" />}
      </span>
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCollection = searchParams.get("collection");
  const [filters, setFilters] = useState({
    category: new Set(initialCollection && CATEGORIES.some((c) => c.id === initialCollection) ? [initialCollection] : []),
    material: new Set(),
    price: "all",
  });
  const [sort, setSort] = useState("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [sort, filters]);

  // Sync URL when collection param changes externally
  useEffect(() => {
    const c = searchParams.get("collection");
    if (c && CATEGORIES.some((x) => x.id === c)) {
      setFilters((f) => ({ ...f, category: new Set([c]) }));
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === filters.price) || PRICE_BUCKETS[0];
    let list = PRODUCTS.filter((p) => {
      if (filters.category.size > 0 && !filters.category.has(p.category)) return false;
      if (filters.material.size > 0 && !filters.material.has(p.material)) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => comparePrice(a, b, "asc"));
    if (sort === "price-desc") list = [...list].sort((a, b) => comparePrice(a, b, "desc"));
    if (sort === "newest") list = [...list].reverse();
    return list;
  }, [filters, sort]);

  // Counts for filter facets (against current other filters)
  const counts = useMemo(() => {
    const c = { category: {}, material: {} };
    PRODUCTS.forEach((p) => {
      c.category[p.category] = (c.category[p.category] || 0) + 1;
      c.material[p.material] = (c.material[p.material] || 0) + 1;
    });
    return c;
  }, []);

  const clearAll = () => {
    setFilters({ category: new Set(), material: new Set(), price: "all" });
    setSearchParams({});
  };

  const activeCount =
    filters.category.size + filters.material.size + (filters.price !== "all" ? 1 : 0);

  const heading = filters.category.size === 1
    ? `${CATEGORIES.find((c) => c.id === [...filters.category][0])?.label}`
    : "All Jewelry";

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Editorial header */}
      <header className="border-b border-hairline pb-10 pt-4 md:pb-14">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
          <p className="eyebrow text-center">Velmora Edit</p>
          <h1 className="display-lg mt-4 text-center text-ink">{heading}</h1>
          <p className="mx-auto mt-3 max-w-md text-center font-serif text-[15px] italic text-taupe">
            Five pieces. Made to be worn everyday, treasured for years.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-screen-2xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-12 lg:px-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-hairline pb-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.28em] uppercase text-ink md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filter{activeCount > 0 && ` (${activeCount})`}
          </button>
          <p className="hidden font-sans text-[12px] tracking-[0.18em] uppercase text-taupe md:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <label className="relative ml-auto inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.18em] uppercase text-ink">
            <span className="hidden md:inline">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border-b border-hairline bg-transparent py-1 pr-6 text-ink focus:border-ink focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown className="-ml-5 h-3.5 w-3.5 text-taupe" strokeWidth={1.5} />
          </label>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
          {/* Sidebar (desktop) */}
          <div className="hidden md:col-span-3 md:block">
            <div className="flex items-center justify-between pb-2">
              <h2 className="font-sans text-[11px] tracking-[0.32em] uppercase text-ink">
                Filter
              </h2>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="font-sans text-[11px] tracking-[0.22em] uppercase text-taupe underline underline-offset-4 hover:text-ink"
                >
                  Clear
                </button>
              )}
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} counts={counts} />
          </div>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 link-underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-10">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-espresso/40"
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-cream p-6 shadow-soft">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <h2 className="font-sans text-[12px] tracking-[0.28em] uppercase text-ink">
                Filter
              </h2>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <FilterSidebar filters={filters} setFilters={setFilters} counts={counts} />
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={clearAll}
                className="flex-1 border border-espresso py-4 font-sans text-[11px] tracking-[0.28em] uppercase text-espresso"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex-1 bg-espresso py-4 font-sans text-[11px] tracking-[0.28em] uppercase text-cream"
              >
                View {filtered.length}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
