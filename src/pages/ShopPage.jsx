import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";
import { cn } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75to100", label: "$75 – $100", min: 75, max: 100 },
  { id: "100plus", label: "$100+", min: 100, max: Infinity },
];

const MATERIALS = ["18K Gold Plated", "Sterling Silver"];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-taupe py-5">
      <h3 className="text-[12px] uppercase tracking-wider-2 font-medium text-espresso mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function CheckboxRow({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
      <span
        className={cn(
          "w-4 h-4 grid place-items-center border transition-colors flex-shrink-0",
          checked ? "bg-espresso border-espresso" : "border-taupe group-hover:border-espresso"
        )}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="2,6 5,9 10,3" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-espresso/85 group-hover:text-espresso transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function ShopPage() {
  const [params, setParams] = useSearchParams();

  const initialCategory = params.get("category") || null;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category from query string
  useEffect(() => {
    setSelectedCategory(params.get("category") || null);
  }, [params]);

  const toggleSet = (set, value) => {
    return set.includes(value) ? set.filter((v) => v !== value) : [...set, value];
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);

    if (selectedPrice.length > 0) {
      list = list.filter((p) =>
        selectedPrice.some((id) => {
          const bucket = PRICE_BUCKETS.find((b) => b.id === id);
          return p.price >= bucket.min && p.price < bucket.max;
        })
      );
    }

    if (selectedMaterial.length > 0) {
      list = list.filter((p) => selectedMaterial.includes(p.material));
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "newest") list.reverse();
    return list;
  }, [selectedCategory, selectedPrice, selectedMaterial, sort]);

  const activeFilters = [
    selectedCategory && { kind: "category", label: categories.find((c) => c.id === selectedCategory)?.name, clear: () => setSelectedCategory(null) },
    ...selectedPrice.map((id) => ({
      kind: "price",
      label: PRICE_BUCKETS.find((b) => b.id === id)?.label,
      clear: () => setSelectedPrice((s) => s.filter((v) => v !== id)),
    })),
    ...selectedMaterial.map((m) => ({
      kind: "material",
      label: m,
      clear: () => setSelectedMaterial((s) => s.filter((v) => v !== m)),
    })),
  ].filter(Boolean);

  const clearAll = () => {
    setSelectedCategory(null);
    setSelectedPrice([]);
    setSelectedMaterial([]);
    setParams({});
  };

  return (
    <div className="bg-ivory pt-24 md:pt-32 pb-24">
      <div className="container-x">
        {/* Header */}
        <div className="text-center pb-10 md:pb-14 border-b border-taupe">
          <span className="eyebrow mb-3 block">The Edit</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Shop All
          </h1>
          <p className="text-mocha mt-4 max-w-md mx-auto text-[15px]">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name
              : "Every piece, all in one place."}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 py-5 border-b border-taupe sticky top-16 md:top-20 bg-ivory z-30">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-2 font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.4} />
            Filter{activeFilters.length > 0 && ` · ${activeFilters.length}`}
          </button>
          <p className="text-sm text-mocha hidden md:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-[12px] uppercase tracking-wider-2 font-medium pr-7 pl-3 py-2 cursor-pointer focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.4} />
          </div>
        </div>

        {/* Active filter chips */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 py-4">
            {activeFilters.map((f, i) => (
              <button
                key={`${f.kind}-${f.label}-${i}`}
                type="button"
                onClick={f.clear}
                className="inline-flex items-center gap-2 bg-cream border border-taupe px-3 py-1.5 text-[11px] uppercase tracking-wider-2 hover:border-espresso transition-colors"
              >
                {f.label}
                <X className="w-3 h-3" strokeWidth={1.6} />
              </button>
            ))}
            <button
              type="button"
              onClick={clearAll}
              className="ml-1 text-[11px] uppercase tracking-wider-2 text-mocha hover:text-espresso underline underline-offset-2"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 pt-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <FilterGroup title="Category">
              <CheckboxRow
                checked={selectedCategory === null}
                onChange={() => setSelectedCategory(null)}
                label="All"
              />
              {categories.map((c) => (
                <CheckboxRow
                  key={c.id}
                  checked={selectedCategory === c.id}
                  onChange={() => setSelectedCategory(c.id)}
                  label={c.name}
                />
              ))}
            </FilterGroup>
            <FilterGroup title="Price">
              {PRICE_BUCKETS.map((b) => (
                <CheckboxRow
                  key={b.id}
                  checked={selectedPrice.includes(b.id)}
                  onChange={() => setSelectedPrice((s) => toggleSet(s, b.id))}
                  label={b.label}
                />
              ))}
            </FilterGroup>
            <FilterGroup title="Material">
              {MATERIALS.map((m) => (
                <CheckboxRow
                  key={m}
                  checked={selectedMaterial.includes(m)}
                  onChange={() => setSelectedMaterial((s) => toggleSet(s, m))}
                  label={m}
                />
              ))}
            </FilterGroup>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl mb-3">Nothing matches just yet.</p>
                <p className="text-mocha mb-6">Try removing a filter or two.</p>
                <button onClick={clearAll} className="btn-outline">Reset Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-7">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <>
          <div
            onClick={() => setFiltersOpen(false)}
            className="fixed inset-0 z-50 bg-espresso/40"
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-ivory overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
              <h2 className="font-serif text-2xl">Filter</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="p-1 -mr-1">
                <X className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="px-6">
              <FilterGroup title="Category">
                <CheckboxRow checked={selectedCategory === null} onChange={() => setSelectedCategory(null)} label="All" />
                {categories.map((c) => (
                  <CheckboxRow
                    key={c.id}
                    checked={selectedCategory === c.id}
                    onChange={() => setSelectedCategory(c.id)}
                    label={c.name}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Price">
                {PRICE_BUCKETS.map((b) => (
                  <CheckboxRow
                    key={b.id}
                    checked={selectedPrice.includes(b.id)}
                    onChange={() => setSelectedPrice((s) => toggleSet(s, b.id))}
                    label={b.label}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Material">
                {MATERIALS.map((m) => (
                  <CheckboxRow
                    key={m}
                    checked={selectedMaterial.includes(m)}
                    onChange={() => setSelectedMaterial((s) => toggleSet(s, m))}
                    label={m}
                  />
                ))}
              </FilterGroup>
            </div>
            <div className="sticky bottom-0 bg-ivory border-t border-taupe p-6 flex gap-3">
              <button onClick={clearAll} className="btn-outline flex-1">Reset</button>
              <button onClick={() => setFiltersOpen(false)} className="btn-primary flex-1">View {filtered.length}</button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
