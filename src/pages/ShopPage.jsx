import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, priceBounds } from "@/data/products";
import { cn, formatCurrency } from "@/lib/utils";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/layout/Container";

const MATERIALS = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "crystal", label: "Crystal" },
  { id: "hypoallergenic", label: "Hypoallergenic" },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const bounds = useMemo(() => priceBounds(), []);

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const c = params.get("category");
    return c ? [c] : [];
  });
  const [priceMin, setPriceMin] = useState(bounds.min);
  const [priceMax, setPriceMax] = useState(bounds.max);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category to URL
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (selectedCategories.length === 1) {
      next.set("category", selectedCategories[0]);
    } else {
      next.delete("category");
    }
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };
  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setPriceMin(bounds.min);
    setPriceMax(bounds.max);
    setSelectedMaterials([]);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (selectedMaterials.length > 0) {
      list = list.filter((p) => {
        const mat = p.material.toLowerCase();
        return selectedMaterials.some((m) => mat.includes(m));
      });
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
      case "newest":
        list.sort((a, b) =>
          (a.badge?.toLowerCase().includes("new") ? -1 : 1) -
          (b.badge?.toLowerCase().includes("new") ? -1 : 1)
        );
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategories, priceMin, priceMax, selectedMaterials, sort]);

  const activeFilters =
    selectedCategories.length +
    selectedMaterials.length +
    (priceMin !== bounds.min || priceMax !== bounds.max ? 1 : 0);

  const FiltersPanel = (
    <div className="space-y-10">
      <div>
        <h3 className="text-label text-espresso mb-4">Category</h3>
        <ul className="space-y-3">
          {categories.map((c) => (
            <li key={c.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(c.id)}
                  onChange={() => toggleCategory(c.id)}
                  className="w-4 h-4 accent-champagne border-line"
                />
                <span className="text-sm text-espresso-soft group-hover:text-espresso transition-colors">
                  {c.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-label text-espresso mb-4">Price</h3>
        <p className="text-xs text-muted mb-3">
          {formatCurrency(priceMin)} — {formatCurrency(priceMax)}
        </p>
        <div className="space-y-3">
          <label className="block text-xs text-muted">
            Min
            <input
              type="range"
              min={bounds.min}
              max={bounds.max}
              step="1"
              value={priceMin}
              onChange={(e) => setPriceMin(Math.min(+e.target.value, priceMax))}
              className="w-full mt-2 accent-champagne"
            />
          </label>
          <label className="block text-xs text-muted">
            Max
            <input
              type="range"
              min={bounds.min}
              max={bounds.max}
              step="1"
              value={priceMax}
              onChange={(e) => setPriceMax(Math.max(+e.target.value, priceMin))}
              className="w-full mt-2 accent-champagne"
            />
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-label text-espresso mb-4">Material</h3>
        <ul className="space-y-3">
          {MATERIALS.map((m) => (
            <li key={m.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(m.id)}
                  onChange={() => toggleMaterial(m.id)}
                  className="w-4 h-4 accent-champagne border-line"
                />
                <span className="text-sm text-espresso-soft group-hover:text-espresso transition-colors">
                  {m.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilters > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-label text-espresso hover:text-champagne-deep transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="bg-bone">
      {/* Header */}
      <div className="pt-28 md:pt-32 pb-10 md:pb-14 bg-cream">
        <Container size="wide">
          <p className="text-label text-muted">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso leading-tight">
            Shop All
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-espresso-soft">
            Demi-fine pieces, finished by hand. Filter by category, finish, or price to find your next signature.
          </p>
        </Container>
      </div>

      <Container size="wide" className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">{FiltersPanel}</div>
          </aside>

          {/* Grid */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-8">
              <p className="text-sm text-espresso-soft">
                <span className="text-espresso font-medium">{filtered.length}</span> pieces
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-label text-espresso"
                >
                  <SlidersHorizontal strokeWidth={1.25} className="w-4 h-4" />
                  Filters {activeFilters > 0 && `(${activeFilters})`}
                </button>
                <label className="flex items-center gap-2">
                  <span className="sr-only sm:not-sr-only text-label text-muted">
                    Sort
                  </span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bare-select bg-transparent border-b border-line py-1.5 pr-6 text-sm text-espresso focus:border-espresso focus:outline-none"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match.</p>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-label text-espresso link-underline pb-1"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-10">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          filtersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!filtersOpen}
      >
        <div className="absolute inset-0 bg-espresso/40" onClick={() => setFiltersOpen(false)} />
        <div
          className={cn(
            "absolute bottom-0 inset-x-0 max-h-[85vh] overflow-y-auto bg-bone p-6 pb-10 transition-transform duration-500 ease-out",
            filtersOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl tracking-[0.18em] uppercase">Filters</h2>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="p-2 -mr-2 text-espresso"
            >
              <X strokeWidth={1.25} className="w-5 h-5" />
            </button>
          </div>
          {FiltersPanel}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full bg-espresso text-bone py-4 text-label"
          >
            Show {filtered.length} pieces
          </button>
        </div>
      </div>
    </main>
  );
}