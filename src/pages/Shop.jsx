import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const CATEGORY_OPTIONS = ["Earrings", "Necklaces", "Huggies", "Sets"];
const MATERIAL_OPTIONS = ["18K Gold Plated", "Sterling Silver", "Crystal"];
const PRICE_BUCKETS = [
  { id: "u30", label: "Under $30", min: 0, max: 30 },
  { id: "30-60", label: "$30 – $60", min: 30, max: 60 },
  { id: "60-100", label: "$60 – $100", min: 60, max: 100 },
  { id: "100+", label: "$100+", min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
];

function readArrayParam(searchParams, key) {
  const v = searchParams.get(key);
  if (!v) return [];
  return v.split(",").filter(Boolean);
}

function writeArrayParam(values) {
  return values.length ? values.join(",") : null;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [selectedCategories, setSelectedCategories] = useState(() =>
    readArrayParam(searchParams, "category"),
  );
  const [selectedMaterials, setSelectedMaterials] = useState(() =>
    readArrayParam(searchParams, "material"),
  );
  const [selectedPrice, setSelectedPrice] = useState(
    () => searchParams.get("price") || "",
  );
  const [sort, setSort] = useState(() => searchParams.get("sort") || "featured");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Sync URL whenever filters change.
  useEffect(() => {
    const next = new URLSearchParams();
    const cat = writeArrayParam(selectedCategories);
    if (cat) next.set("category", cat);
    const mat = writeArrayParam(selectedMaterials);
    if (mat) next.set("material", mat);
    if (selectedPrice) next.set("price", selectedPrice);
    if (sort && sort !== "featured") next.set("sort", sort);
    setSearchParams(next, { replace: true });
  }, [selectedCategories, selectedMaterials, selectedPrice, sort, setSearchParams]);

  // Re-hydrate from URL when search params change externally.
  useEffect(() => {
    setSelectedCategories(readArrayParam(searchParams, "category"));
    setSelectedMaterials(readArrayParam(searchParams, "material"));
    setSelectedPrice(searchParams.get("price") || "");
    setSort(searchParams.get("sort") || "featured");
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [
    selectedCategories.join(","),
    selectedMaterials.join(","),
    selectedPrice,
    sort,
  ]);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => {
        const desc = `${p.longDescription} ${p.shortDescription}`.toLowerCase();
        return selectedMaterials.some((m) => {
          const token = m.toLowerCase().split(" ")[0];
          return desc.includes(token);
        });
      });
    }
    if (selectedPrice) {
      const bucket = PRICE_BUCKETS.find((b) => b.id === selectedPrice);
      if (bucket) {
        list = list.filter((p) => p.price >= bucket.min && p.price <= bucket.max);
      }
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
        // keep original order
        break;
    }
    return list;
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const toggleValue = (value, list, setList) => {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice("");
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    Boolean(selectedPrice);

  return (
    <div className="bg-cream-100 pt-24 md:pt-28">
      {/* Editorial header */}
      <header className="border-b border-hairline">
        <div className="mx-auto max-w-editorial px-5 py-12 md:px-10 md:py-16 lg:px-14">
          <p className="eyebrow eyebrow-gold">The Edit</p>
          <h1 className="mt-3 font-serif text-4xl text-ink-300 md:text-5xl lg:text-6xl">
            All Jewelry
          </h1>
          <p className="mt-3 max-w-xl text-sm text-ink-50 md:text-base">
            Demi-fine pieces made to be lived in. Filter by category, material
            or price to find your forever piece.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-editorial px-5 md:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4 border-b border-hairline py-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-300 lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.4} />
            Filter {hasFilters ? `(${selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0)})` : ""}
          </button>

          <span className="text-xs text-ink-50">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </span>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-300"
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
            >
              Sort
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  sortOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.4}
              />
            </button>
            {sortOpen && (
              <>
                <button
                  type="button"
                  className="fixed inset-0 z-30 cursor-default"
                  onClick={() => setSortOpen(false)}
                  aria-hidden
                />
                <ul
                  className="absolute right-0 top-full z-40 mt-2 w-56 border border-hairline bg-cream-100 py-2 shadow-card"
                  role="listbox"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <li key={opt.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSort(opt.id);
                          setSortOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                          sort === opt.id
                            ? "text-ink-300"
                            : "text-ink-50 hover:text-ink-300"
                        }`}
                      >
                        {opt.label}
                        {sort === opt.id && (
                          <span className="text-gold-300">•</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 py-10 lg:grid-cols-[260px_1fr]">
          {/* Filter sidebar — desktop */}
          <aside className="hidden lg:block" aria-label="Filters">
            <FilterPanel
              selectedCategories={selectedCategories}
              selectedMaterials={selectedMaterials}
              selectedPrice={selectedPrice}
              onToggleCategory={(c) =>
                toggleValue(c, selectedCategories, setSelectedCategories)
              }
              onToggleMaterial={(m) =>
                toggleValue(m, selectedMaterials, setSelectedMaterials)
              }
              onSelectPrice={setSelectedPrice}
              onClear={clearAll}
              hasFilters={hasFilters}
            />
          </aside>

          {/* Mobile filter drawer */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 lg:hidden" aria-hidden>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setMobileOpen(false)}
                className="absolute inset-0 h-full w-full bg-ink-400/40"
              />
              <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto bg-cream-100 px-6 py-7">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl text-ink-300">Filter</h2>
                  <button
                    type="button"
                    aria-label="Close filters"
                    onClick={() => setMobileOpen(false)}
                    className="p-1 text-ink-300"
                  >
                    <X className="h-5 w-5" strokeWidth={1.4} />
                  </button>
                </div>
                <div className="mt-6">
                  <FilterPanel
                    selectedCategories={selectedCategories}
                    selectedMaterials={selectedMaterials}
                    selectedPrice={selectedPrice}
                    onToggleCategory={(c) =>
                      toggleValue(c, selectedCategories, setSelectedCategories)
                    }
                    onToggleMaterial={(m) =>
                      toggleValue(m, selectedMaterials, setSelectedMaterials)
                    }
                    onSelectPrice={setSelectedPrice}
                    onClear={clearAll}
                    hasFilters={hasFilters}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-6 w-full"
                >
                  Show {filtered.length} Pieces
                </button>
              </div>
            </div>
          )}

          {/* Grid */}
          <div ref={containerRef} className="min-w-0">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="eyebrow text-ink-50">No matches</p>
                <p className="mt-3 font-serif text-2xl text-ink-300">
                  Try removing a filter or two.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="btn-outline mt-6"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-7">
                {filtered.map((product, idx) => (
                  <ProductCard key={product.id} product={product} eager={idx < 2} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({
  selectedCategories,
  selectedMaterials,
  selectedPrice,
  onToggleCategory,
  onToggleMaterial,
  onSelectPrice,
  onClear,
  hasFilters,
}) {
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="eyebrow text-ink-50">Filter</h3>
          {hasFilters && (
            <button
              type="button"
              onClick={onClear}
              className="text-[11px] uppercase tracking-[0.22em] text-ink-50 link-underline hover:text-ink-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <FilterGroup title="Category">
        <ul className="space-y-2.5">
          {CATEGORY_OPTIONS.map((c) => (
            <li key={c}>
              <CheckboxRow
                label={c}
                checked={selectedCategories.includes(c)}
                onChange={() => onToggleCategory(c)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Material">
        <ul className="space-y-2.5">
          {MATERIAL_OPTIONS.map((m) => (
            <li key={m}>
              <CheckboxRow
                label={m}
                checked={selectedMaterials.includes(m)}
                onChange={() => onToggleMaterial(m)}
              />
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-2.5">
          {PRICE_BUCKETS.map((b) => (
            <li key={b.id}>
              <RadioRow
                label={b.label}
                checked={selectedPrice === b.id}
                onChange={() =>
                  onSelectPrice(selectedPrice === b.id ? "" : b.id)
                }
              />
            </li>
          ))}
        </ul>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <p className="eyebrow text-ink-50">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function CheckboxRow({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-300">
      <span
        className={`flex h-4 w-4 items-center justify-center border ${
          checked
            ? "border-ink-300 bg-ink-300 text-cream-100"
            : "border-hairline bg-cream-100"
        }`}
        aria-hidden
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 6.5L5 9L10 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="select-none">{label}</span>
    </label>
  );
}

function RadioRow({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-300">
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
          checked ? "border-ink-300" : "border-hairline"
        }`}
        aria-hidden
      >
        {checked && (
          <span className="h-2 w-2 rounded-full bg-ink-300" />
        )}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="select-none">{label}</span>
    </label>
  );
}
