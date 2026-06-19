import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X, ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import {
  PRODUCTS,
  CATEGORIES,
  MATERIALS,
} from "@/data/products";
import { cn } from "@/lib/utils";

const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "$75 and up", min: 75, max: Infinity },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const initialCategory = params.get("category") || "";
  const initialMaterial = params.get("material") || "";
  const initialPrice = params.get("price") || "all";
  const initialSort = params.get("sort") || "featured";

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedMaterials, setSelectedMaterials] = useState(
    initialMaterial ? [initialMaterial] : [],
  );
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [sort, setSort] = useState(initialSort);

  // Keep URL in sync — for shareability
  useEffect(() => {
    const next = new URLSearchParams();
    if (selectedCategories.length === 1)
      next.set("category", selectedCategories[0]);
    if (selectedMaterials.length === 1)
      next.set("material", selectedMaterials[0]);
    if (selectedPrice !== "all") next.set("price", selectedPrice);
    if (sort !== "featured") next.set("sort", sort);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === selectedPrice) ||
      PRICE_RANGES[0];
    let list = PRODUCTS.filter((p) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(p.category)
      )
        return false;
      if (
        selectedMaterials.length > 0 &&
        !selectedMaterials.includes(p.material)
      )
        return false;
      if (p.price < range.min || p.price > range.max) return false;
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
      case "newest":
        list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // featured — leave as authored order
        break;
    }
    return list;
  }, [selectedCategories, selectedMaterials, selectedPrice, sort]);

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice("all");
    setSort("featured");
  };

  const activeFilterCount =
    selectedCategories.length +
    selectedMaterials.length +
    (selectedPrice !== "all" ? 1 : 0);

  return (
    <div className="bg-cream pt-24 md:pt-28">
      {/* Header band */}
      <header className="border-b border-hairline">
        <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-16">
          <p className="eyebrow text-muted mb-4">Shop</p>
          <h1 className="text-display text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-espresso">
            The <span className="text-display-italic">Collection.</span>
          </h1>
          <p className="mt-5 font-serif italic text-[1.0625rem] md:text-[1.1875rem] text-ink/75 max-w-[52ch]">
            Demi-fine pieces designed for everyday rituals and the moments worth gifting.
          </p>
        </div>
      </header>

      {/* Toolbar + grid */}
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="md:hidden inline-flex items-center gap-2 eyebrow text-ink border border-hairline px-4 py-2.5"
          >
            <Filter className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 w-5 h-5 rounded-full bg-espresso text-ivory text-[10px] flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <p className="hidden md:block eyebrow text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <SortDropdown value={sort} onChange={setSort} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside
            className={cn(
              "md:block",
              filtersOpen
                ? "fixed inset-0 z-[70] bg-cream overflow-y-auto p-6 md:p-0 md:static md:bg-transparent md:overflow-visible"
                : "hidden",
            )}
          >
            <div className="md:sticky md:top-28">
              <div className="flex items-center justify-between md:justify-start mb-8 md:mb-10">
                <p className="eyebrow text-ink">Filters</p>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  aria-label="Close filters"
                  className="md:hidden w-9 h-9 rounded-full border border-hairline flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-ink" strokeWidth={1.5} />
                </button>
              </div>

              <FilterGroup title="Category">
                {CATEGORIES.map((c) => (
                  <FilterCheckbox
                    key={c.slug}
                    label={c.label}
                    checked={selectedCategories.includes(c.slug)}
                    onChange={() =>
                      setSelectedCategories((prev) =>
                        prev.includes(c.slug)
                          ? prev.filter((x) => x !== c.slug)
                          : [...prev, c.slug],
                      )
                    }
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Material">
                {MATERIALS.map((m) => (
                  <FilterCheckbox
                    key={m.slug}
                    label={m.label}
                    checked={selectedMaterials.includes(m.slug)}
                    onChange={() =>
                      setSelectedMaterials((prev) =>
                        prev.includes(m.slug)
                          ? prev.filter((x) => x !== m.slug)
                          : [...prev, m.slug],
                      )
                    }
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Price">
                {PRICE_RANGES.map((p) => (
                  <FilterRadio
                    key={p.id}
                    name="price"
                    label={p.label}
                    checked={selectedPrice === p.id}
                    onChange={() => setSelectedPrice(p.id)}
                  />
                ))}
              </FilterGroup>

              <button
                type="button"
                onClick={clearAll}
                disabled={activeFilterCount === 0 && sort === "featured"}
                className="mt-2 eyebrow text-muted hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Clear all
              </button>

              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="md:hidden mt-8 btn-primary w-full"
              >
                Apply ({filtered.length})
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink mb-3">
                  No pieces match these filters.
                </p>
                <p className="font-serif italic text-muted mb-6">
                  Try widening your search — quiet things, like good gifts, often hide.
                </p>
                <button onClick={clearAll} className="btn-outline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-14">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} eager={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-9 md:mb-10">
      <p className="eyebrow text-ink mb-4">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <li>
      <label className="group flex items-center gap-3 cursor-pointer py-1">
        <span
          className={cn(
            "relative w-4 h-4 border transition-colors",
            checked ? "bg-espresso border-espresso" : "border-hairline group-hover:border-ink",
          )}
        >
          {checked && (
            <svg
              viewBox="0 0 16 16"
              className="absolute inset-0 w-full h-full text-ivory"
              aria-hidden="true"
            >
              <path
                d="M3 8.5l3 3 7-7"
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
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <span className="font-serif text-[1.0625rem] text-ink/85 group-hover:text-ink transition-colors">
          {label}
        </span>
      </label>
    </li>
  );
}

function FilterRadio({ name, label, checked, onChange }) {
  return (
    <li>
      <label className="group flex items-center gap-3 cursor-pointer py-1">
        <span
          className={cn(
            "relative w-4 h-4 rounded-full border transition-colors",
            checked ? "border-espresso" : "border-hairline group-hover:border-ink",
          )}
        >
          {checked && (
            <span className="absolute inset-1 rounded-full bg-espresso" />
          )}
        </span>
        <input
          type="radio"
          name={name}
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <span className="font-serif text-[1.0625rem] text-ink/85 group-hover:text-ink transition-colors">
          {label}
        </span>
      </label>
    </li>
  );
}

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const current = SORT_OPTIONS.find((s) => s.id === value) || SORT_OPTIONS[0];
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 eyebrow text-ink border border-hairline px-4 py-2.5 hover:border-ink transition-colors"
        aria-expanded={open}
      >
        Sort: <span className="text-gold-deep">{current.label}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul className="absolute right-0 top-full mt-2 z-40 bg-ivory shadow-medium border border-hairline min-w-[220px] py-2">
            {SORT_OPTIONS.map((opt) => (
              <li key={opt.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2.5 font-serif text-[1rem] transition-colors",
                    opt.id === value
                      ? "text-espresso bg-sand"
                      : "text-ink/80 hover:bg-sand hover:text-ink",
                  )}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}