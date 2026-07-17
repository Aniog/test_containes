import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { Filters, defaultFilters, priceOptions, sortValueMap } from "@/components/products/Filters";
import ProductCard from "@/components/products/ProductCard";
import StrkImage from "@/components/ui/StrkImage";

const collectionCopy = {
  all: {
    eyebrow: "The Full Edit",
    title: "Shop All Jewelry",
    intro: "Our complete demi-fine edit, in 18K gold plate.",
  },
  earrings: {
    eyebrow: "Earrings",
    title: "Earrings",
    intro: "Studs, cuffs, and drops — the everyday pieces you'll reach for first.",
  },
  necklaces: {
    eyebrow: "Necklaces",
    title: "Necklaces",
    intro: "Layered or solo, all hand-set in 18K gold plate.",
  },
  huggies: {
    eyebrow: "Huggies",
    title: "Huggies",
    intro: "The everyday hoop, refined.",
  },
  sets: {
    eyebrow: "Gift Sets",
    title: "Gift Sets",
    intro: "Pre-paired pieces, gift-boxed, ready to give.",
  },
};

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState(() => ({
    ...defaultFilters,
    category: searchParams.get("category") || "all",
  }));

  useEffect(() => {
    // Sync category from URL.
    const urlCategory = searchParams.get("category") || "all";
    setFilters((prev) =>
      prev.category === urlCategory ? prev : { ...prev, category: urlCategory }
    );
  }, [searchParams]);

  const updateCategory = (cat) => {
    const next = new URLSearchParams(searchParams);
    if (cat === "all") next.delete("category");
    else next.set("category", cat);
    setSearchParams(next, { replace: true });
  };

  const handleChange = (next) => {
    if (next.category !== filters.category) {
      updateCategory(next.category);
    }
    setFilters(next);
  };

  const reset = () => {
    setFilters(defaultFilters);
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const filtered = useMemo(() => {
    let list = products;
    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }
    const priceOpt = priceOptions.find((o) => o.value === filters.price);
    if (priceOpt && priceOpt.min !== undefined) {
      list = list.filter((p) => p.price >= priceOpt.min && p.price <= priceOpt.max);
    }
    if (filters.material !== "all") {
      // We don't differentiate material in the seed data, so this is a passthrough
      // for visual completeness; real catalog would filter by tags.
    }
    const sorters = {
      featured: (a, b) => a.id.localeCompare(b.id),
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating,
    };
    list = [...list].sort(sorters[filters.sort] || sorters.featured);
    return list;
  }, [filters]);

  const copy = collectionCopy[filters.category] || collectionCopy.all;

  return (
    <div>
      {/* Editorial header */}
      <section className="border-b border-hairline bg-ivory/60">
        <div className="container-content py-16 text-center md:py-20">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
            {copy.intro}
          </p>
        </div>
      </section>

      {/* Body: filters + grid */}
      <section className="container-content py-12 md:py-16">
        <StrkImage>
          <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
            <Filters
              filters={filters}
              onChange={handleChange}
              onReset={reset}
              totalCount={filtered.length}
            />

            <div>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm text-ink-soft">
                  Showing <span className="text-ink">{filtered.length}</span>{" "}
                  piece{filtered.length === 1 ? "" : "s"}
                </p>
                {/* Desktop sort */}
                <label className="relative hidden items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink md:flex">
                  Sort
                  <span className="relative">
                    <select
                      value={filters.sort}
                      onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                      className="appearance-none border-b border-hairline bg-transparent py-1.5 pl-2 pr-7 text-[0.7rem] uppercase tracking-[0.18em] text-ink focus:border-gold focus:outline-none"
                      aria-label="Sort products"
                    >
                      {Object.entries(sortValueMap).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-1 top-1/2 h-3 w-3 -translate-y-1/2 text-ink-soft"
                      strokeWidth={1.5}
                    />
                  </span>
                </label>
              </div>

              {filtered.length === 0 ? (
                <div className="border border-hairline bg-ivory p-10 text-center">
                  <p className="font-serif text-2xl text-ink">No pieces match those filters.</p>
                  <p className="mt-2 text-sm text-ink-soft">
                    Try widening your search.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-5 inline-flex items-center justify-center gap-2 border border-ink px-7 py-3.5 cta-label text-ink transition-colors hover:bg-ink hover:text-ivory"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </StrkImage>
      </section>
    </div>
  );
}

export default Collection;
