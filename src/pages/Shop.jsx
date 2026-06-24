import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const MATERIALS = ["18k Gold Plated", "Sterling Silver", "Brass"];
const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"];
const PRICE_RANGES = [
  { id: "u40", label: "Under $40", test: (p) => p < 40 },
  { id: "40-70", label: "$40 – $70", test: (p) => p >= 40 && p <= 70 },
  { id: "70-100", label: "$70 – $100", test: (p) => p > 70 && p <= 100 },
  { id: "100p", label: "$100 +", test: (p) => p > 100 },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low → High" },
  { id: "price-desc", label: "Price: High → Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const initialCat = searchParams.get("cat");

  const [selectedCats, setSelectedCats] = useState(
    initialCat ? [initialCat] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync URL
  useEffect(() => {
    if (selectedCats.length === 1) {
      setSearchParams({ cat: selectedCats[0] }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [selectedCats, setSearchParams]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (selectedCats.length) {
      list = list.filter((p) => selectedCats.includes(p.category));
    }
    if (selectedPrices.length) {
      const tests = PRICE_RANGES.filter((r) => selectedPrices.includes(r.id)).map(
        (r) => r.test
      );
      list = list.filter((p) => tests.some((t) => t(p.price)));
    }
    // material filter is illustrative — products are gold-plated; if user picks
    // sterling silver only, return empty to feel real
    if (selectedMaterials.length) {
      list = list.filter((p) =>
        selectedMaterials.some((m) =>
          p.materials.toLowerCase().includes(m.toLowerCase().split(" ")[0])
        )
      );
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
  }, [selectedCats, selectedPrices, selectedMaterials, sort]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filtered.length]);

  const toggle = (setter, value) =>
    setter((arr) =>
      arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
    );

  const clearAll = () => {
    setSelectedCats([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
  };

  const FilterGroup = ({ title, items, selected, onToggle, idKey = "id", labelKey = "label" }) => (
    <div className="border-b border-hairline pb-6 mb-6">
      <h3 className="text-[11px] tracking-[0.3em] uppercase font-medium text-ink mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((it) => {
          const id = typeof it === "string" ? it : it[idKey];
          const label = typeof it === "string" ? it : it[labelKey];
          const checked = selected.includes(id);
          return (
            <li key={id}>
              <label className="flex items-center gap-3 text-sm text-ink/85 cursor-pointer hover:text-ink transition-colors">
                <span
                  className={cn(
                    "w-4 h-4 border flex items-center justify-center transition-colors",
                    checked ? "bg-ink border-ink" : "border-hairline"
                  )}
                >
                  {checked && (
                    <span className="w-2 h-2 bg-bone block" />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => onToggle(id)}
                />
                {label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-bone pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05] max-w-2xl">
            {selectedCats.length === 1
              ? selectedCats[0]
              : "Every piece, hand-finished."}
          </h1>
          <p className="mt-5 max-w-xl text-ink/75 text-[15px] leading-relaxed">
            Demi-fine gold jewelry, designed in Lisbon and made in small
            batches. Filter by category, price, or material to find your piece.
          </p>
        </div>
      </div>

      {/* Toolbar (mobile) */}
      <div className="md:hidden sticky top-16 z-30 bg-bone border-b border-hairline">
        <div className="px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase"
          >
            <SlidersHorizontal size={14} /> Filter
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-[11px] tracking-[0.25em] uppercase outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-14">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block sticky top-24 self-start">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[11px] tracking-[0.3em] uppercase text-mute">
              Filter
            </h2>
            <button
              onClick={clearAll}
              className="text-[10px] tracking-[0.25em] uppercase text-mute hover:text-ink"
            >
              Clear
            </button>
          </div>
          <FilterGroup
            title="Category"
            items={CATEGORIES}
            selected={selectedCats}
            onToggle={(v) => toggle(setSelectedCats, v)}
          />
          <FilterGroup
            title="Price"
            items={PRICE_RANGES}
            selected={selectedPrices}
            onToggle={(v) => toggle(setSelectedPrices, v)}
          />
          <FilterGroup
            title="Material"
            items={MATERIALS}
            selected={selectedMaterials}
            onToggle={(v) => toggle(setSelectedMaterials, v)}
          />
        </aside>

        {/* Grid */}
        <div>
          {/* Toolbar (desktop) */}
          <div className="hidden md:flex items-center justify-between mb-8 pb-6 border-b border-hairline">
            <p className="text-xs tracking-[0.2em] uppercase text-mute">
              {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
            </p>
            <div className="relative">
              <span className="text-[11px] tracking-[0.25em] uppercase text-mute mr-3">
                Sort by
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent pr-6 text-[11px] tracking-[0.25em] uppercase outline-none border-b border-hairline pb-0.5 hover:border-ink transition-colors"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-mute" />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <p className="font-serif text-3xl text-ink">Nothing here yet.</p>
              <p className="mt-3 text-mute text-sm">
                Try clearing your filters to see more pieces.
              </p>
              <button
                onClick={clearAll}
                className="mt-8 inline-block bg-ink text-bone hover:bg-gold-deep transition-colors px-8 py-4 text-[11px] tracking-[0.3em] uppercase"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-14">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-bone overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
              <span className="text-[11px] tracking-[0.3em] uppercase">
                Filter
              </span>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterGroup
                title="Category"
                items={CATEGORIES}
                selected={selectedCats}
                onToggle={(v) => toggle(setSelectedCats, v)}
              />
              <FilterGroup
                title="Price"
                items={PRICE_RANGES}
                selected={selectedPrices}
                onToggle={(v) => toggle(setSelectedPrices, v)}
              />
              <FilterGroup
                title="Material"
                items={MATERIALS}
                selected={selectedMaterials}
                onToggle={(v) => toggle(setSelectedMaterials, v)}
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={clearAll}
                  className="flex-1 border border-hairline py-3 text-[11px] tracking-[0.25em] uppercase"
                >
                  Clear
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 bg-ink text-bone py-3 text-[11px] tracking-[0.25em] uppercase"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
