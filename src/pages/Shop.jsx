import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/Reveal";
import { CATEGORIES, PRODUCTS, formatPrice } from "@/data/products";

const PRICE_BANDS = [
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const MATERIALS = ["18K Gold Plated", "Crystal Accents", "Gift Boxed"];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const materialMatch = (product, material) => {
  if (material === "Gift Boxed") return product.category === "Sets";
  if (material === "Crystal Accents")
    return /crystal/i.test(product.short + product.description);
  return true; // everything is 18K gold plated
};

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-hairline py-6 last:border-0">
      <h3 className="mb-4 text-xs font-semibold tracking-[0.28em] uppercase text-espresso">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const [prices, setPrices] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);

  const setCategory = (cat) => {
    if (cat === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: cat }, { replace: true });
    }
  };

  const toggle = (list, setList, value) =>
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => activeCategory === "All" || p.category === activeCategory
    );
    if (prices.length) {
      list = list.filter((p) =>
        prices.some((id) => PRICE_BANDS.find((b) => b.id === id)?.test(p))
      );
    }
    if (materials.length) {
      list = list.filter((p) =>
        materials.some((m) => materialMatch(p, m))
      );
    }
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [activeCategory, prices, materials, sort]);

  const activeFilterCount =
    prices.length + materials.length + (activeCategory !== "All" ? 1 : 0);

  const clearAll = () => {
    setPrices([]);
    setMaterials([]);
    setCategory("All");
  };

  const filterPanel = (
    <>
      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setCategory(cat)}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeCategory === cat
                    ? "font-semibold text-gold"
                    : "text-cocoa hover:text-gold"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BANDS.map((band) => (
            <li key={band.id}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-cocoa transition-colors hover:text-espresso">
                <input
                  type="checkbox"
                  checked={prices.includes(band.id)}
                  onChange={() => toggle(prices, setPrices, band.id)}
                  className="h-4 w-4 accent-[#A5824A]"
                />
                {band.label}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {MATERIALS.map((m) => (
            <li key={m}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-cocoa transition-colors hover:text-espresso">
                <input
                  type="checkbox"
                  checked={materials.includes(m)}
                  onChange={() => toggle(materials, setMaterials, m)}
                  className="h-4 w-4 accent-[#A5824A]"
                />
                {m}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      {activeFilterCount > 0 && (
        <button
          onClick={clearAll}
          className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-taupe transition-colors hover:text-gold"
        >
          <X size={13} /> Clear all filters
        </button>
      )}
    </>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
      {/* Page header */}
      <header className="border-b border-hairline py-12 text-center md:py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">
          The Collection
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium uppercase tracking-[0.06em] text-espresso md:text-5xl">
          {activeCategory === "All" ? "All Jewelry" : activeCategory}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
          Demi-fine essentials in 18K gold plate — designed in-house, priced
          from {formatPrice(Math.min(...PRODUCTS.map((p) => p.price)))}.
        </p>
      </header>

      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-hairline py-4">
        <button
          onClick={() => setMobileFilters(true)}
          className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-espresso md:hidden"
        >
          <SlidersHorizontal size={15} className="text-gold" />
          Filters
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] text-ivory">
              {activeFilterCount}
            </span>
          )}
        </button>
        <p className="hidden text-xs tracking-[0.2em] uppercase text-taupe md:block">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none border border-hairline bg-ivory py-2.5 pl-4 pr-10 text-xs tracking-[0.15em] uppercase text-espresso focus:border-gold focus:outline-none"
            aria-label="Sort products"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-taupe"
          />
        </div>
      </div>

      <div className="grid gap-10 pt-10 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-28">{filterPanel}</div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <p className="font-serif text-3xl text-espresso">
                No pieces match
              </p>
              <p className="text-sm text-taupe">
                Try removing a filter or two.
              </p>
              <button
                onClick={clearAll}
                className="mt-2 border border-espresso/30 px-8 py-3 text-xs tracking-[0.25em] uppercase text-espresso transition-all hover:border-gold hover:text-gold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6">
              {filtered.map((product, i) => (
                <Reveal key={product.id} delay={Math.min(i, 4) * 60}>
                  <ProductCard product={product} eager={i < 4} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileFilters ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-espresso/50 transition-opacity duration-400 ${
            mobileFilters ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileFilters(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto bg-ivory px-6 pb-10 pt-6 transition-transform duration-500 ease-out ${
            mobileFilters ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-espresso">Filters</h2>
            <button
              onClick={() => setMobileFilters(false)}
              className="p-2 -mr-2 text-cocoa"
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          </div>
          {filterPanel}
          <button
            onClick={() => setMobileFilters(false)}
            className="mt-8 w-full bg-gold py-4 text-xs font-semibold tracking-[0.3em] uppercase text-ivory transition-colors hover:bg-gold-deep"
          >
            View {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </button>
        </div>
      </div>
    </div>
  );
}
