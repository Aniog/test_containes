import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, materials } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price · Low to high" },
  { id: "price-desc", label: "Price · High to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "Newest" },
];

const PRICE_BANDS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u40", label: "Under $40", min: 0, max: 40 },
  { id: "40-70", label: "$40 – $70", min: 40, max: 70 },
  { id: "70-100", label: "$70 – $100", min: 70, max: 100 },
];

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get("category") || "all";

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory === "all" ? [] : [initialCategory]
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceBand, setPriceBand] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Keep URL in sync with the category filter (so category tiles link works)
  useEffect(() => {
    const cat = selectedCategories[0] || "all";
    if (cat !== (params.get("category") || "all")) {
      if (cat === "all") {
        params.delete("category");
      } else {
        params.set("category", cat);
      }
      setParams(params, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const filtered = useMemo(() => {
    const band = PRICE_BANDS.find((b) => b.id === priceBand) || PRICE_BANDS[0];
    const list = products.filter((p) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(p.category)
      ) {
        return false;
      }
      if (
        selectedMaterials.length > 0 &&
        !selectedMaterials.includes(p.material)
      ) {
        return false;
      }
      if (p.price < band.min || p.price > band.max) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => b.rating - a.rating);
      case "newest":
        return list.sort((a, b) => (b.badge === "New" ? 1 : -1));
      default:
        return list;
    }
  }, [selectedCategories, selectedMaterials, priceBand, sort]);

  const toggleCategory = (id) =>
    setSelectedCategories((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );
  const toggleMaterial = (id) =>
    setSelectedMaterials((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + (priceBand === "all" ? 0 : 1);

  return (
    <main className="bg-cream">
      <header className="border-b border-mist bg-ivory">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">The edit</p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.05] text-charcoal md:text-6xl">
            Shop all
          </h1>
          <p className="mt-3 max-w-md font-sans text-[15px] text-mocha">
            Every Velmora piece, hand-finished in 18K gold-plated brass and
            sterling silver.
          </p>
        </div>
      </header>

      <div className="container-editorial py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              className="inline-flex items-center gap-2 border border-mist px-4 py-2.5 font-sans text-[12px] font-medium uppercase tracking-product text-charcoal transition-colors hover:border-charcoal"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 inline-flex h-5 w-5 items-center justify-center bg-charcoal font-sans text-[10px] text-ivory">
                  {activeFilterCount}
                </span>
              )}
            </button>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceBand("all");
                }}
                className="inline-flex items-center gap-1 font-sans text-[12px] uppercase tracking-product text-mocha underline-offset-2 hover:text-charcoal hover:underline"
              >
                <X size={12} strokeWidth={1.5} /> Clear
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="shop-sort" className="font-sans text-[12px] uppercase tracking-product text-mocha">
              Sort
            </label>
            <select
              id="shop-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-b border-charcoal bg-transparent py-2 pr-6 font-sans text-[13px] text-charcoal focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Sidebar */}
          <aside
            className={cn(
              "md:col-span-3",
              filtersOpen ? "block" : "hidden md:block"
            )}
          >
            <FilterSection title="Category">
              <ul className="space-y-3">
                {categories.map((c) => (
                  <li key={c.id}>
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(c.id)}
                        onChange={() => toggleCategory(c.id)}
                        className="h-4 w-4 border-mist accent-charcoal"
                      />
                      <span className="font-sans text-[14px] text-charcoal">
                        {c.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </FilterSection>
            <FilterSection title="Price">
              <ul className="space-y-3">
                {PRICE_BANDS.map((b) => (
                  <li key={b.id}>
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name="price"
                        checked={priceBand === b.id}
                        onChange={() => setPriceBand(b.id)}
                        className="h-4 w-4 border-mist accent-charcoal"
                      />
                      <span className="font-sans text-[14px] text-charcoal">
                        {b.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </FilterSection>
            <FilterSection title="Material">
              <ul className="space-y-3">
                {materials.map((m) => (
                  <li key={m.id}>
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(m.id)}
                        onChange={() => toggleMaterial(m.id)}
                        className="h-4 w-4 border-mist accent-charcoal"
                      />
                      <span className="font-sans text-[14px] text-charcoal">
                        {m.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </FilterSection>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            <p className="font-sans text-[12px] uppercase tracking-product text-mocha">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            {filtered.length === 0 ? (
              <div className="mt-12 border border-dashed border-mist p-12 text-center">
                <p className="font-serif text-2xl text-charcoal">
                  No pieces match those filters.
                </p>
                <p className="mt-2 font-sans text-[14px] text-mocha">
                  Try widening your selection.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function FilterSection({ title, children }) {
  return (
    <div className="border-t border-mist py-6 first:border-t-0 first:pt-0">
      <p className="eyebrow mb-4">{title}</p>
      {children}
    </div>
  );
}
