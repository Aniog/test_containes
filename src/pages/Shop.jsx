import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard.jsx";
import { useStrkImages } from "@/lib/use-strk-images.js";
import { products, categories } from "@/data/products.js";

const priceRanges = [
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling", label: "Sterling Silver Base" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-ink/10 py-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-espresso">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-taupe transition-colors hover:text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-gold"
      />
      {label}
    </label>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [activePrices, setActivePrices] = useState([]);
  const [activeMaterials, setActiveMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggle = (list, setList, id) =>
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activePrices.length > 0) {
      const tests = priceRanges.filter((r) => activePrices.includes(r.id)).map((r) => r.test);
      result = result.filter((p) => tests.some((t) => t(p)));
    }
    if (activeMaterials.length > 0) {
      result = result.filter((p) => activeMaterials.includes(p.material));
    }
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [activeCategory, activePrices, activeMaterials, sort]);

  const containerRef = useStrkImages([filtered.length, activeCategory]);

  const filters = (
    <>
      <FilterGroup title="Category">
        <CheckRow
          label="All Jewelry"
          checked={activeCategory === "all"}
          onChange={() => setSearchParams({})}
        />
        {categories.map((c) => (
          <CheckRow
            key={c.id}
            label={c.label}
            checked={activeCategory === c.id}
            onChange={() => setSearchParams({ category: c.id })}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {priceRanges.map((r) => (
          <CheckRow
            key={r.id}
            label={r.label}
            checked={activePrices.includes(r.id)}
            onChange={() => toggle(activePrices, setActivePrices, r.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {materials.map((m) => (
          <CheckRow
            key={m.id}
            label={m.label}
            checked={activeMaterials.includes(m.id)}
            onChange={() => toggle(activeMaterials, setActiveMaterials, m.id)}
          />
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pt-36">
      <header className="mb-10 border-b border-ink/10 pb-8 md:mb-14">
        <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
          Shop <span className="italic">Velmora</span>
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-taupe">
          Demi-fine pieces in warm 18k gold — designed for layering, gifting,
          and living in.
        </p>
      </header>

      <div className="flex gap-12">
        <aside className="hidden w-56 shrink-0 lg:block">{filters}</aside>

        <div className="flex-1">
          <div className="mb-8 flex items-center justify-between gap-4">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:border-gold hover:text-gold lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
              Filters
            </button>
            <p className="hidden text-sm text-taupe lg:block">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-ink/20 bg-transparent py-2.5 pl-4 pr-10 text-xs font-semibold uppercase tracking-[0.18em] text-espresso focus:border-gold focus:outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" strokeWidth={1.5} />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 border border-dashed border-ink/15 py-24 text-center">
              <p className="font-serif text-2xl text-espresso">No pieces found</p>
              <p className="text-sm text-taupe">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 animate-overlay-in bg-ink/50"
            onClick={() => setFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] animate-overlay-in overflow-y-auto bg-ivory px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-serif text-xl font-semibold uppercase tracking-wide2 text-ink">
                Filters
              </p>
              <button
                aria-label="Close filters"
                onClick={() => setFiltersOpen(false)}
                className="text-espresso hover:text-gold"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            {filters}
            <button
              onClick={() => setFiltersOpen(false)}
              className="mt-6 w-full bg-gold py-4 text-xs font-semibold uppercase tracking-luxe text-ivory hover:bg-gold-dark"
            >
              View {filtered.length} Pieces
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
