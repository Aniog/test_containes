import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CATEGORIES, products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const MATERIALS = ["18K Gold Plated", "Sterling Silver Tone"];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterSection({ title, children }) {
  return (
    <div className="border-b border-line py-6">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-noir">
        {title}
      </h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function CheckRow({ label, checked, onChange, count }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center border transition-all duration-200",
          checked ? "border-gold bg-gold" : "border-line bg-transparent group-hover:border-gold"
        )}
      >
        {checked && (
          <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-none stroke-ivory" strokeWidth="1.5">
            <path d="M1 4l2.5 2.5L9 1" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="flex-1 text-sm text-taupe transition-colors group-hover:text-noir">
        {label}
      </span>
      {count != null && <span className="text-xs text-stone">({count})</span>}
    </label>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategories(cat ? [cat] : []);
  }, [searchParams]);

  const toggle = (list, setList, value) => {
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrices.length) {
      list = list.filter((p) =>
        selectedPrices.some((id) => PRICE_RANGES.find((r) => r.id === id)?.test(p))
      );
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
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
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller));
    }
    return list;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategories, sort, filtered.length]);

  const hasFilters =
    selectedCategories.length || selectedPrices.length || selectedMaterials.length;

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filterPanel = (
    <>
      <FilterSection title="Category">
        {CATEGORIES.map((cat) => (
          <CheckRow
            key={cat.id}
            label={cat.label}
            count={products.filter((p) => p.category === cat.id).length}
            checked={selectedCategories.includes(cat.id)}
            onChange={() =>
              toggle(selectedCategories, setSelectedCategories, cat.id)
            }
          />
        ))}
      </FilterSection>
      <FilterSection title="Price">
        {PRICE_RANGES.map((range) => (
          <CheckRow
            key={range.id}
            label={range.label}
            count={products.filter(range.test).length}
            checked={selectedPrices.includes(range.id)}
            onChange={() => toggle(selectedPrices, setSelectedPrices, range.id)}
          />
        ))}
      </FilterSection>
      <FilterSection title="Material">
        {MATERIALS.map((mat) => (
          <CheckRow
            key={mat}
            label={mat}
            count={products.filter((p) => p.material === mat).length}
            checked={selectedMaterials.includes(mat)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials, mat)}
          />
        ))}
      </FilterSection>
      {hasFilters ? (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      ) : null}
    </>
  );

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden bg-noir md:h-72"
        data-strk-bg-id="shop-banner-bg"
        data-strk-bg="[shop-title] elegant flat lay of gold earrings necklaces on dark silk, editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-noir/55" />
        <div className="relative z-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-goldlight">
            The Collection
          </p>
          <h1
            id="shop-title"
            className="mt-3 font-serif text-4xl font-medium text-ivory md:text-6xl"
          >
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10 md:px-10 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 border border-line px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-noir transition-colors hover:border-noir lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
            {hasFilters ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] text-ivory">
                {selectedCategories.length + selectedPrices.length + selectedMaterials.length}
              </span>
            ) : null}
          </button>

          <p className="hidden text-sm text-taupe lg:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative">
            <label htmlFor="sort" className="sr-only">
              Sort products
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-line bg-transparent py-3 pl-5 pr-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-noir focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-noir"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-line">{filterPanel}</div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
                <p className="font-serif text-2xl text-noir">No pieces match</p>
                <p className="text-sm text-taupe">
                  Try clearing a filter or two.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-2 bg-noir px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory hover:bg-espresso"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={Math.min(i, 5) * 60}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 lg:hidden",
          filtersOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-noir/50"
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-4/5 max-w-xs flex-col bg-ivory transition-transform duration-500 ease-out",
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-6 h-16">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-noir">
              Filters
            </span>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
              className="p-2 -mr-2 text-noir"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6">{filterPanel}</div>
          <div className="border-t border-line p-6">
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="w-full bg-noir py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory"
            >
              View {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
