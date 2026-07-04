import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories, priceRanges } from "@/data/products";
import { cn } from "@/lib/utils";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "Newest" },
];

function useFilters(searchParams, setSearchParams) {
  const category = searchParams.get("category") || "all";
  const material = searchParams.get("material") || "all";
  const price = searchParams.get("price") || "all";
  const setCategory = (v) => {
    const next = new URLSearchParams(searchParams);
    if (v && v !== "all") next.set("category", v);
    else next.delete("category");
    setSearchParams(next, { replace: true });
  };
  const setMaterial = (v) => {
    const next = new URLSearchParams(searchParams);
    if (v && v !== "all") next.set("material", v);
    else next.delete("material");
    setSearchParams(next, { replace: true });
  };
  const setPrice = (v) => {
    const next = new URLSearchParams(searchParams);
    if (v && v !== "all") next.set("price", v);
    else next.delete("price");
    setSearchParams(next, { replace: true });
  };
  return { category, material, price, setCategory, setMaterial, setPrice };
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-t border-hairline py-6 first:border-t-0 first:pt-0">
      <h4 className="label-cap text-muted mb-4">{title}</h4>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function FilterPill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "block w-full text-left text-[13px] py-1 transition-colors",
        active ? "text-ink" : "text-ink/65 hover:text-ink"
      )}
    >
      <span className="inline-flex items-center gap-2.5">
        <span
          className={cn(
            "inline-block w-3 h-3 border transition-colors",
            active ? "border-gold bg-gold" : "border-hairline"
          )}
        />
        {children}
      </span>
    </button>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, material, price, setCategory, setMaterial, setPrice } =
    useFilters(searchParams, setSearchParams);
  const [sort, setSort] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    const priceRange = priceRanges.find((p) => p.id === price) || priceRanges[0];
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (material !== "all" && p.material !== material) return false;
      if (p.price < priceRange.min || p.price > priceRange.max) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "newest") list = [...list].sort((a, b) => (a.badge === "New" ? -1 : 1));
    return list;
  }, [category, material, price, sort]);

  useEffect(() => {
    setMobileOpen(false);
  }, [category, material, price]);

  const activeFilters = [category !== "all" && category, material !== "all" && material, price !== "all" && price].filter(Boolean);

  return (
    <>
      {/* Hero strip */}
      <section className="bg-cream border-b border-hairline">
        <div className="container-x py-14 md:py-20 text-center">
          <p className="eyebrow mb-3">All Jewelry</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            The Collection
          </h1>
          <p className="mt-4 text-[14px] text-muted max-w-md mx-auto">
            Earrings, necklaces, huggies and gift sets — designed to live in.
          </p>
        </div>
      </section>

      <section className="container-x py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-hairline">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex items-center gap-2 label-cap text-ink"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filter
            {activeFilters.length > 0 && (
              <span className="ml-1 inline-flex items-center justify-center w-5 h-5 bg-ink text-bg text-[10px]">
                {activeFilters.length}
              </span>
            )}
          </button>
          <p className="hidden md:block text-[12px] text-muted">
            Showing {filtered.length} of {products.length} pieces
          </p>
          <p className="md:hidden text-[12px] text-muted">
            {filtered.length} results
          </p>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((s) => !s)}
              className="inline-flex items-center gap-2 label-cap text-ink"
            >
              Sort · {sortOptions.find((o) => o.id === sort)?.label}
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 transition-transform",
                  sortOpen ? "rotate-180" : ""
                )}
                strokeWidth={1.5}
              />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-ivory border border-hairline shadow-sm w-56 z-30">
                {sortOptions.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => {
                      setSort(o.id);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "block w-full text-left text-[13px] px-4 py-2.5 hover:bg-cream transition-colors",
                      sort === o.id ? "text-ink" : "text-ink/70"
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="font-serif text-2xl mb-5">Refine</h3>
              <FilterGroup title="Category">
                <FilterPill
                  active={category === "all"}
                  onClick={() => setCategory("all")}
                >
                  All
                </FilterPill>
                {categories.map((c) => (
                  <FilterPill
                    key={c.id}
                    active={category === c.id}
                    onClick={() => setCategory(c.id)}
                  >
                    {c.label}
                  </FilterPill>
                ))}
              </FilterGroup>
              <FilterGroup title="Material">
                <FilterPill
                  active={material === "all"}
                  onClick={() => setMaterial("all")}
                >
                  All
                </FilterPill>
                <FilterPill
                  active={material === "18k-gold-plated"}
                  onClick={() => setMaterial("18k-gold-plated")}
                >
                  18K Gold Plated
                </FilterPill>
                <FilterPill
                  active={material === "sterling-silver"}
                  onClick={() => setMaterial("sterling-silver")}
                >
                  Sterling Silver
                </FilterPill>
                <FilterPill
                  active={material === "gold-vermeil"}
                  onClick={() => setMaterial("gold-vermeil")}
                >
                  Gold Vermeil
                </FilterPill>
              </FilterGroup>
              <FilterGroup title="Price">
                {priceRanges.map((p) => (
                  <FilterPill
                    key={p.id}
                    active={price === p.id}
                    onClick={() => setPrice(p.id)}
                  >
                    {p.label}
                  </FilterPill>
                ))}
              </FilterGroup>
            </div>
          </aside>

          {/* Grid */}
          <div className="md:col-span-9 lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl mb-2">No matches</p>
                <p className="text-[13px] text-muted">
                  Try removing a filter to see more pieces.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-bg animate-fade-up flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
            <h3 className="font-serif text-xl">Filter</h3>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2"
              aria-label="Close filter"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5">
            <FilterGroup title="Category">
              <FilterPill
                active={category === "all"}
                onClick={() => setCategory("all")}
              >
                All
              </FilterPill>
              {categories.map((c) => (
                <FilterPill
                  key={c.id}
                  active={category === c.id}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </FilterPill>
              ))}
            </FilterGroup>
            <FilterGroup title="Material">
              <FilterPill
                active={material === "all"}
                onClick={() => setMaterial("all")}
              >
                All
              </FilterPill>
              <FilterPill
                active={material === "18k-gold-plated"}
                onClick={() => setMaterial("18k-gold-plated")}
              >
                18K Gold Plated
              </FilterPill>
              <FilterPill
                active={material === "sterling-silver"}
                onClick={() => setMaterial("sterling-silver")}
              >
                Sterling Silver
              </FilterPill>
            </FilterGroup>
            <FilterGroup title="Price">
              {priceRanges.map((p) => (
                <FilterPill
                  key={p.id}
                  active={price === p.id}
                  onClick={() => setPrice(p.id)}
                >
                  {p.label}
                </FilterPill>
              ))}
            </FilterGroup>
          </div>
          <div className="px-5 py-4 border-t border-hairline">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </div>
      )}
    </>
  );
}
