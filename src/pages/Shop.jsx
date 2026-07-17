import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/hooks/useStrkImages";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const categoryOptions = ["Earrings", "Necklaces", "Huggies"];
const priceBands = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
];
const materialOptions = ["gold", "silver"];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useStrkImages([]);
  const revealRef = useReveal();

  const initialCategory = searchParams.get("category");
  const [selectedCats, setSelectedCats] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category from URL when it changes (e.g. nav clicks)
  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCats(cat ? [cat] : []);
  }, [searchParams]);

  const toggle = (list, setList, value) => {
    setList((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    );
  };

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false;
      if (selectedMaterials.length && !selectedMaterials.includes(p.tone)) return false;
      if (selectedPrices.length) {
        const inBand = selectedPrices.some((id) => {
          const band = priceBands.find((b) => b.id === id);
          return band && p.price >= band.min && p.price < band.max;
        });
        if (!inBand) return false;
      }
      return true;
    });

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [selectedCats, selectedMaterials, selectedPrices, sort]);

  const clearAll = () => {
    setSelectedCats([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const activeCount =
    selectedCats.length + selectedPrices.length + selectedMaterials.length;

  const FilterPanel = () => (
    <div className="space-y-9">
      <div>
        <h3 className="text-xs uppercase tracking-[0.18em] text-ink mb-4">Category</h3>
        <div className="space-y-2.5">
          {categoryOptions.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCats.includes(cat)}
                onChange={() => toggle(selectedCats, setSelectedCats, cat)}
                className="w-4 h-4 accent-gold border-line"
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.18em] text-ink mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceBands.map((band) => (
            <label key={band.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(band.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, band.id)}
                className="w-4 h-4 accent-gold border-line"
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition-colors">{band.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.18em] text-ink mb-4">Material</h3>
        <div className="space-y-2.5">
          {materialOptions.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggle(selectedMaterials, setSelectedMaterials, mat)}
                className="w-4 h-4 accent-gold border-line"
              />
              <span className="text-sm text-ink-soft capitalize group-hover:text-ink transition-colors">{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.16em] text-gold hover:text-gold-deep transition-colors"
        >
          Clear All ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <div ref={revealRef} className="pt-16 md:pt-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-content mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Shop All Jewelry</h1>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            Demi-fine gold pieces, hand-finished and made for everyday wear.
          </p>
        </div>
      </div>

      <div ref={ref} className="max-w-content mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-56 shrink-0">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ink"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeCount > 0 && <span className="text-gold">({activeCount})</span>}
              </button>
              <p className="hidden md:block text-xs uppercase tracking-[0.16em] text-stone">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-[0.16em] text-stone">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border-b border-line text-sm text-ink py-1 pr-6 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-xs uppercase tracking-[0.18em] text-gold hover:text-gold-deep"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-[80]">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-editorial flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-serif text-xl text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="px-6 py-4 border-t border-line">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-cream text-xs uppercase tracking-[0.18em] py-4 hover:bg-gold-deep transition-colors"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
