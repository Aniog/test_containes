import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import {
  PRODUCTS,
  CATEGORIES,
  PRICE_BUCKETS,
  MATERIALS,
} from "@/data/products";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, children }) {
  return (
    <div className="py-6 border-b border-hairline last:border-b-0">
      <h3 className="font-sans text-[11px] uppercase tracking-editorial text-ink mb-4 font-medium">
        {title}
      </h3>
      {children}
    </div>
  );
}

function CheckboxRow({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
      <span
        className={
          "w-4 h-4 border flex items-center justify-center transition-colors " +
          (checked
            ? "bg-ink border-ink"
            : "border-hairline group-hover:border-gold")
        }
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-bone">
            <path
              d="M2 6.5L4.7 9 10 3.5"
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
      <span className="flex-1 font-sans text-sm text-ink">{label}</span>
      {typeof count === "number" && (
        <span className="font-sans text-[11px] text-muted-light">{count}</span>
      )}
    </label>
  );
}

function FilterPanel({
  selectedCategories,
  selectedMaterials,
  selectedPrice,
  onToggleCategory,
  onToggleMaterial,
  onSetPrice,
  onReset,
  counts,
  total,
}) {
  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="font-sans text-[11px] uppercase tracking-editorial text-muted-light">
          {total} pieces
        </p>
        <button
          type="button"
          onClick={onReset}
          className="font-sans text-[11px] uppercase tracking-editorial text-ink hover:text-gold transition-colors"
        >
          Reset
        </button>
      </div>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <CheckboxRow
            key={c.id}
            checked={selectedCategories.includes(c.id)}
            onChange={() => onToggleCategory(c.id)}
            label={c.label}
            count={counts.byCategory[c.id] ?? 0}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <CheckboxRow
            key={m.id}
            checked={selectedMaterials.includes(m.id)}
            onChange={() => onToggleMaterial(m.id)}
            label={m.label}
            count={counts.byMaterial[m.id] ?? 0}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <CheckboxRow
            key={b.id}
            checked={selectedPrice === b.id}
            onChange={() => onSetPrice(selectedPrice === b.id ? null : b.id)}
            label={b.label}
            count={counts.byPrice[b.id] ?? 0}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}

export default function CollectionPage() {
  const params = useParams();
  const initialCategory = params.category || null;

  const [selectedCategories, setSelectedCategories] = useState(() =>
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategories(initialCategory ? [initialCategory] : []);
  }, [initialCategory]);

  const toggleCategory = (id) =>
    setSelectedCategories((c) =>
      c.includes(id) ? c.filter((x) => x !== id) : [...c, id]
    );
  const toggleMaterial = (id) =>
    setSelectedMaterials((c) =>
      c.includes(id) ? c.filter((x) => x !== id) : [...c, id]
    );
  const setPrice = (id) => setSelectedPrice(id);
  const reset = () => {
    setSelectedCategories(initialCategory ? [initialCategory] : []);
    setSelectedMaterials([]);
    setSelectedPrice(null);
  };

  const counts = useMemo(() => {
    const byCategory = {};
    const byMaterial = {};
    const byPrice = {};
    for (const p of PRODUCTS) {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
      byMaterial[p.material] = (byMaterial[p.material] || 0) + 1;
      const bucket = PRICE_BUCKETS.find(
        (b) => p.price >= b.min && p.price <= b.max
      );
      if (bucket) byPrice[bucket.id] = (byPrice[bucket.id] || 0) + 1;
    }
    return { byCategory, byMaterial, byPrice };
  }, []);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPrice) {
      const b = PRICE_BUCKETS.find((x) => x.id === selectedPrice);
      if (b) list = list.filter((p) => p.price >= b.min && p.price <= b.max);
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
        // featured — keep seed order
        break;
    }
    return list;
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const headingTitle =
    CATEGORIES.find((c) => c.id === initialCategory)?.label || "The Collection";
  const headingSubtitle =
    initialCategory === "earrings"
      ? "From huggies to statement drops — the pieces that finish the look."
      : initialCategory === "necklaces"
      ? "Layering pieces and singular statements, in warm 18K gold."
      : initialCategory === "huggies"
      ? "Our cult-favorite dome huggies, in every finish we love."
      : "Demi-fine jewelry, hand-finished in warm 18K gold. Made to wear every day.";

  return (
    <>
      <AnnouncementBar tone="light" />
      {/* spacer for fixed nav */}
      <div className="pt-16 md:pt-20" />
      <section className="bg-bone text-ink">
        <div className="container-editorial pt-12 md:pt-16 pb-10 md:pb-14 text-center">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-light leading-[1.05]">
            {headingTitle}
          </h1>
          <p className="mt-4 font-sans text-sm md:text-base text-muted-light max-w-xl mx-auto">
            {headingSubtitle}
          </p>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="flex items-center justify-between border-t border-hairline py-4 mb-8">
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-editorial text-ink hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filter
            {(selectedCategories.length +
              selectedMaterials.length +
              (selectedPrice ? 1 : 0) >
              0) && (
              <span className="ml-1 px-1.5 bg-gold text-ink text-[10px] rounded-full">
                {selectedCategories.length +
                  selectedMaterials.length +
                  (selectedPrice ? 1 : 0)}
              </span>
            )}
          </button>
          <label className="inline-flex items-center gap-3">
            <span className="hidden md:inline font-sans text-[11px] uppercase tracking-editorial text-muted-light">
              Sort
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-hairline px-3 py-2 font-sans text-[11px] uppercase tracking-editorial text-ink focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Desktop filters */}
          <div className="hidden md:block md:col-span-3">
            <div className="sticky top-24">
              <FilterPanel
                selectedCategories={selectedCategories}
                selectedMaterials={selectedMaterials}
                selectedPrice={selectedPrice}
                onToggleCategory={toggleCategory}
                onToggleMaterial={toggleMaterial}
                onSetPrice={setPrice}
                onReset={reset}
                counts={counts}
                total={filtered.length}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">
                  No pieces match those filters.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 editorial-link"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} priority={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={
          "fixed inset-0 z-[65] transition-opacity duration-500 md:hidden " +
          (filterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none")
        }
        aria-hidden={!filterOpen}
      >
        <button
          type="button"
          onClick={() => setFilterOpen(false)}
          aria-label="Close filters"
          className="absolute inset-0 bg-ink/40"
        />
        <div
          className={
            "absolute bottom-0 left-0 right-0 max-h-[85vh] bg-bone text-ink rounded-t-2xl p-6 overflow-y-auto transition-transform duration-500 ease-editorial " +
            (filterOpen ? "translate-y-0" : "translate-y-full")
          }
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif text-xl tracking-[0.18em] uppercase">
              Filter
            </h2>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              aria-label="Close filters"
              className="p-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <FilterPanel
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            selectedPrice={selectedPrice}
            onToggleCategory={toggleCategory}
            onToggleMaterial={toggleMaterial}
            onSetPrice={setPrice}
            onReset={reset}
            counts={counts}
            total={filtered.length}
          />
          <button
            type="button"
            onClick={() => setFilterOpen(false)}
            className="mt-6 w-full btn-primary"
          >
            Show {filtered.length} pieces
          </button>
        </div>
      </div>
    </>
  );
}
