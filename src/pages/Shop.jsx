import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const categoryOptions = [
  { value: "all", label: "All Jewelry" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceOptions = [
  { value: "all", label: "All Prices" },
  { value: "under-50", label: "Under $50" },
  { value: "50-75", label: "$50 – $75" },
  { value: "over-75", label: "Over $75" },
];

const materialOptions = [
  { value: "all", label: "All Materials" },
  { value: "gold", label: "18k Gold Plated" },
  { value: "silver", label: "Silver Tone" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function matchesPrice(product, price) {
  if (price === "under-50") return product.price < 50;
  if (price === "50-75") return product.price >= 50 && product.price <= 75;
  if (price === "over-75") return product.price > 75;
  return true;
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-line py-6 last:border-b-0">
      <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {options.map((opt) => (
          <li key={opt.value}>
            <button
              onClick={() => onChange(opt.value)}
              className={cn(
                "text-sm transition-colors duration-300",
                value === opt.value
                  ? "font-medium text-gold-deep"
                  : "text-muted hover:text-ink"
              )}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [price, setPrice] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setCategory = (value) => {
    if (value === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: value }, { replace: true });
    }
  };

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        matchesPrice(p, price) &&
        (material === "all" || p.material === material)
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, price, material, sort]);

  const activeCategory = categoryOptions.find((c) => c.value === category);

  const filters = (
    <>
      <FilterGroup
        title="Category"
        options={categoryOptions}
        value={category}
        onChange={setCategory}
      />
      <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
      <FilterGroup
        title="Material"
        options={materialOptions}
        value={material}
        onChange={setMaterial}
      />
    </>
  );

  return (
    <div className="bg-ivory pt-16 md:pt-20">
      <header className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-[0.12em] text-ink md:text-5xl">
            {activeCategory?.label || "All Jewelry"}
          </h1>
          <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-muted">
            Demi-fine pieces in warm 18k gold — plated over recycled brass,
            finished by hand, and made for every day.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filters}</div>
          </aside>

          <div>
            <div className="mb-8 flex items-center justify-between gap-4">
              <button
                className="flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink lg:hidden"
                onClick={() => setFiltersOpen(true)}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
              </button>
              <p className="hidden text-xs uppercase tracking-[0.18em] text-muted lg:block">
                {visible.length} {visible.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border border-line bg-transparent py-2.5 pl-4 pr-10 text-[11px] font-medium uppercase tracking-[0.18em] text-ink focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>
            </div>

            {visible.length === 0 ? (
              <div className="flex flex-col items-center border border-dashed border-line px-8 py-24 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match</p>
                <p className="mt-2 text-sm text-muted">
                  Try widening your filters to see more of the collection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {visible.map((p, i) => (
                  <Reveal key={p.id} delay={i * 70}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setFiltersOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-ivory px-6 pb-10 animate-fade-in">
            <div className="flex items-center justify-between border-b border-line py-5">
              <h2 className="font-serif text-xl uppercase tracking-product text-ink">
                Filters
              </h2>
              <button
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
                className="text-muted hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {filters}
            <button className="btn-gold mt-6 w-full" onClick={() => setFiltersOpen(false)}>
              View {visible.length} {visible.length === 1 ? "Piece" : "Pieces"}
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
