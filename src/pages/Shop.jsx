import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";
import { cn } from "@/lib/utils";

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over75", label: "$75 +", min: 75, max: Infinity },
];

const materials = [
  { id: "all", label: "All Materials" },
  { id: "gold-plated", label: "18K Gold Plated" },
  { id: "sterling", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterSection({ title, children }) {
  return (
    <div className="border-b border-line py-6">
      <h3 className="text-[11px] uppercase tracking-widest font-medium text-espresso mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FilterPill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "block w-full text-left py-1.5 text-[13px] transition-colors",
        active ? "text-espresso font-medium" : "text-taupe hover:text-espresso"
      )}
    >
      {active && <span className="mr-2 text-gold-dark">—</span>}
      {children}
    </button>
  );
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(params.get("category") || "all");
  const [activePrice, setActivePrice] = useState("all");
  const [activeMaterial, setActiveMaterial] = useState("all");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    const cat = params.get("category");
    if (cat) setActiveCat(cat);
  }, [params]);

  const updateCategory = (cat) => {
    setActiveCat(cat);
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setParams(params, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = products.slice();
    if (activeCat !== "all") list = list.filter((p) => p.category === activeCat);
    const range = priceRanges.find((r) => r.id === activePrice);
    if (range) list = list.filter((p) => p.price >= range.min && p.price <= range.max);
    if (activeMaterial !== "all") {
      const m = activeMaterial;
      list = list.filter((p) =>
        p.material.toLowerCase().includes(m === "sterling" ? "sterling" : m === "crystal" ? "crystal" : "gold")
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCat, activePrice, activeMaterial, sort]);

  return (
    <>
      {/* Editorial header */}
      <section className="pt-28 sm:pt-36 pb-10 bg-ivory">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">The Edit</p>
            <h1
              id="shop-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-espresso font-light leading-[1.02]"
            >
              Shop Everything
            </h1>
            <p
              id="shop-subtitle"
              className="mt-5 text-sm sm:text-base text-taupe"
            >
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} · designed in studio, made for every day
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
            {/* Sidebar - desktop */}
            <aside className="hidden lg:block">
              <FilterSection title="Category">
                <FilterPill
                  active={activeCat === "all"}
                  onClick={() => updateCategory("all")}
                >
                  All Jewelry
                </FilterPill>
                {categories.map((c) => (
                  <FilterPill
                    key={c.id}
                    active={activeCat === c.id}
                    onClick={() => updateCategory(c.id)}
                  >
                    {c.name}
                  </FilterPill>
                ))}
              </FilterSection>
              <FilterSection title="Price">
                {priceRanges.map((p) => (
                  <FilterPill
                    key={p.id}
                    active={activePrice === p.id}
                    onClick={() => setActivePrice(p.id)}
                  >
                    {p.label}
                  </FilterPill>
                ))}
              </FilterSection>
              <FilterSection title="Material">
                {materials.map((m) => (
                  <FilterPill
                    key={m.id}
                    active={activeMaterial === m.id}
                    onClick={() => setActiveMaterial(m.id)}
                  >
                    {m.label}
                  </FilterPill>
                ))}
              </FilterSection>
            </aside>

            {/* Main column */}
            <div>
              <div className="flex items-center justify-between border-y border-line py-3 mb-8">
                <button
                  type="button"
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium text-espresso"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filter
                </button>
                <div className="hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-widest text-taupe">
                  {filtered.length} results
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <label htmlFor="sort" className="text-[10px] uppercase tracking-widest text-taupe hidden sm:inline">
                    Sort
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent text-[11px] uppercase tracking-widest font-medium text-espresso focus:outline-none cursor-pointer pr-2"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-espresso mb-3">No pieces match yet</p>
                  <p className="text-sm text-taupe mb-6">Try adjusting your filters.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCat("all");
                      setActivePrice("all");
                      setActiveMaterial("all");
                    }}
                    className="text-[11px] uppercase tracking-widest font-medium text-espresso border-b border-espresso pb-1"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <StrkImageLoader
                  deps={[activeCat, activePrice, activeMaterial, sort]}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8"
                >
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </StrkImageLoader>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          filterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!filterOpen}
      >
        <div className="absolute inset-0 bg-espresso/50" onClick={() => setFilterOpen(false)} />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory shadow-lift overflow-y-auto transition-transform duration-500 ease-smooth",
            filterOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-line">
            <span className="font-sans uppercase tracking-widest text-xs font-medium">Filter</span>
            <button onClick={() => setFilterOpen(false)} aria-label="Close filters" className="p-1">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="px-6">
            <FilterSection title="Category">
              <FilterPill active={activeCat === "all"} onClick={() => { updateCategory("all"); setFilterOpen(false); }}>
                All Jewelry
              </FilterPill>
              {categories.map((c) => (
                <FilterPill
                  key={c.id}
                  active={activeCat === c.id}
                  onClick={() => { updateCategory(c.id); setFilterOpen(false); }}
                >
                  {c.name}
                </FilterPill>
              ))}
            </FilterSection>
            <FilterSection title="Price">
              {priceRanges.map((p) => (
                <FilterPill
                  key={p.id}
                  active={activePrice === p.id}
                  onClick={() => { setActivePrice(p.id); setFilterOpen(false); }}
                >
                  {p.label}
                </FilterPill>
              ))}
            </FilterSection>
            <FilterSection title="Material">
              {materials.map((m) => (
                <FilterPill
                  key={m.id}
                  active={activeMaterial === m.id}
                  onClick={() => { setActiveMaterial(m.id); setFilterOpen(false); }}
                >
                  {m.label}
                </FilterPill>
              ))}
            </FilterSection>
            <button
              type="button"
              onClick={() => {
                setActiveCat("all");
                setActivePrice("all");
                setActiveMaterial("all");
                setFilterOpen(false);
              }}
              className="mt-6 w-full h-11 text-[11px] uppercase tracking-widest font-medium text-espresso border border-espresso hover:bg-espresso hover:text-ivory transition-colors"
            >
              Clear all
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
