import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import { CATEGORIES, MATERIALS, PRODUCTS } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

const PRICE_BUCKETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 — $75", min: 50, max: 75 },
  { id: "75-plus", label: "$75 & Up", min: 75, max: Infinity },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") ?? "all";
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory !== "all" ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceBucket, setPriceBucket] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep URL in sync with category for SEO / shareable links.
  useEffect(() => {
    const cat = selectedCategories[0] ?? "all";
    if (cat === "all") {
      if (searchParams.get("category")) {
        const next = new URLSearchParams(searchParams);
        next.delete("category");
        setSearchParams(next, { replace: true });
      }
    } else if (searchParams.get("category") !== cat) {
      const next = new URLSearchParams(searchParams);
      next.set("category", cat);
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const toggleCategory = (id) => {
    setSelectedCategories((current) =>
      current.includes(id) ? current.filter((c) => c !== id) : [...current, id]
    );
  };
  const toggleMaterial = (id) => {
    setSelectedMaterials((current) =>
      current.includes(id) ? current.filter((c) => c !== id) : [...current, id]
    );
  };

  const filtered = useMemo(() => {
    const bucket = PRICE_BUCKETS.find((b) => b.id === priceBucket) ?? PRICE_BUCKETS[0];
    let list = PRODUCTS.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategories, selectedMaterials, priceBucket, sort]);

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceBucket("all");
    setSort("featured");
  };

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + (priceBucket !== "all" ? 1 : 0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20 bg-[var(--color-cream)]">
        <Container>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="text-[0.7rem] uppercase tracking-eyebrow text-[var(--color-gold-deep)] font-medium mb-4">
              The Collection
            </span>
            <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
              Shop <em className="italic text-[var(--color-gold-deep)]">all</em>
            </h1>
            <p className="mt-6 text-[var(--color-stone)] text-base sm:text-lg leading-relaxed">
              {PRODUCTS.length} demi-fine pieces — designed to layer, made to be worn.
            </p>
          </div>
        </Container>
      </section>

      {/* Toolbar */}
      <section className="border-y border-[var(--color-line)] sticky top-16 sm:top-20 bg-[var(--color-bone)]/95 backdrop-blur-md z-30">
        <Container>
          <div className="flex items-center justify-between gap-3 py-4">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)]"
            >
              <Filter size={14} strokeWidth={1.5} />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-[var(--color-gold)] text-[var(--color-bone)] text-[0.6rem] leading-none">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <p className="hidden sm:block text-xs text-[var(--color-stone)]">
              Showing <span className="text-[var(--color-ink)]">{filtered.length}</span> of {PRODUCTS.length}
            </p>

            <label className="inline-flex items-center gap-2 text-xs text-[var(--color-stone)]">
              <span className="hidden sm:inline">Sort by</span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-1 text-[var(--color-ink)] text-xs uppercase tracking-eyebrow font-medium focus:outline-none cursor-pointer"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-ink)]" />
              </div>
            </label>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterPanel
                categories={CATEGORIES}
                materials={MATERIALS}
                priceBuckets={PRICE_BUCKETS}
                selectedCategories={selectedCategories}
                selectedMaterials={selectedMaterials}
                priceBucket={priceBucket}
                onToggleCategory={toggleCategory}
                onToggleMaterial={toggleMaterial}
                onChangePrice={setPriceBucket}
                onClear={clearAll}
              />
            </aside>

            {/* Product grid */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-3xl text-[var(--color-ink)] mb-3">
                    Nothing matches yet.
                  </p>
                  <p className="text-sm text-[var(--color-stone)] mb-6">
                    Try loosening a filter or two.
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="font-sans text-[0.72rem] uppercase tracking-eyebrow text-[var(--color-ink)] link-underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-12">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn("fixed inset-0 z-50 lg:hidden", filtersOpen ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!filtersOpen}
      >
        <div
          onClick={() => setFiltersOpen(false)}
          className={cn(
            "absolute inset-0 bg-[var(--color-ink)]/50 transition-opacity duration-300",
            filtersOpen ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          className={cn(
            "absolute bottom-0 inset-x-0 max-h-[88vh] overflow-y-auto bg-[var(--color-bone)]",
            "transition-transform duration-500 ease-out p-6 sm:p-8",
            filtersOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[var(--color-ink)]">Filters</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2 text-[var(--color-ink)]"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <FilterPanel
            categories={CATEGORIES}
            materials={MATERIALS}
            priceBuckets={PRICE_BUCKETS}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            priceBucket={priceBucket}
            onToggleCategory={toggleCategory}
            onToggleMaterial={toggleMaterial}
            onChangePrice={setPriceBucket}
            onClear={clearAll}
            onApply={() => setFiltersOpen(false)}
            showApply
          />
        </aside>
      </div>
    </>
  );
}

function FilterPanel({
  categories,
  materials,
  priceBuckets,
  selectedCategories,
  selectedMaterials,
  priceBucket,
  onToggleCategory,
  onToggleMaterial,
  onChangePrice,
  onClear,
  onApply,
  showApply,
}) {
  const groupClass = "py-5 border-t border-[var(--color-line)] first:border-t-0";
  const groupTitle = "font-sans text-[0.7rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] mb-4";

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-sans text-[0.7rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)]">
          Refine
        </h2>
        <button
          type="button"
          onClick={onClear}
          className="text-xs text-[var(--color-stone)] hover:text-[var(--color-ink)] transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className={groupClass}>
        <h3 className={groupTitle}>Category</h3>
        <ul className="flex flex-col gap-2.5">
          {categories.map((c) => {
            const checked = selectedCategories.includes(c.id);
            return (
              <li key={c.id}>
                <label className="inline-flex items-center gap-3 cursor-pointer text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleCategory(c.id)}
                    className="appearance-none w-4 h-4 border border-[var(--color-ink)]/30 checked:bg-[var(--color-ink)] checked:border-[var(--color-ink)] transition-colors cursor-pointer"
                  />
                  {c.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={groupClass}>
        <h3 className={groupTitle}>Price</h3>
        <ul className="flex flex-col gap-2.5">
          {priceBuckets.map((b) => (
            <li key={b.id}>
              <label className="inline-flex items-center gap-3 cursor-pointer text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors">
                <input
                  type="radio"
                  name="price"
                  checked={priceBucket === b.id}
                  onChange={() => onChangePrice(b.id)}
                  className="appearance-none w-4 h-4 border border-[var(--color-ink)]/30 checked:bg-[var(--color-ink)] checked:border-[var(--color-ink)] transition-colors cursor-pointer rounded-full"
                />
                {b.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={groupClass}>
        <h3 className={groupTitle}>Material</h3>
        <ul className="flex flex-col gap-2.5">
          {materials.map((m) => {
            const checked = selectedMaterials.includes(m.id);
            return (
              <li key={m.id}>
                <label className="inline-flex items-center gap-3 cursor-pointer text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleMaterial(m.id)}
                    className="appearance-none w-4 h-4 border border-[var(--color-ink)]/30 checked:bg-[var(--color-ink)] checked:border-[var(--color-ink)] transition-colors cursor-pointer"
                  />
                  {m.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {showApply && (
        <button
          type="button"
          onClick={onApply}
          className="mt-6 h-12 bg-[var(--color-ink)] text-[var(--color-bone)] uppercase tracking-eyebrow text-[0.72rem] font-medium hover:bg-[var(--color-ink-soft)] transition-colors"
        >
          Show Results
        </button>
      )}
    </div>
  );
}