import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import ProductCard from "@/components/home/ProductCard";
import FilterSidebar from "@/components/shop/FilterSidebar";
import {
  products,
  categories,
  materials,
  priceRanges,
} from "@/data/products";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const sortFn = {
  featured: () => 0,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
};

export default function Shop() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState({
    categories: [],
    materials: [],
    prices: [],
  });
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sync ?category= to filter state on first load
  useEffect(() => {
    const cat = params.get("category");
    if (cat && categories.some((c) => c.id === cat)) {
      setFilters((f) => ({
        ...f,
        categories: [cat],
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When user clicks nav links, re-sync filters
  useEffect(() => {
    const cat = params.get("category");
    if (cat && categories.some((c) => c.id === cat)) {
      setFilters((f) => ({ ...f, categories: [cat] }));
    } else if (!cat && filters.categories.length === 1) {
      // keep
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const counts = useMemo(() => {
    const byCategory = {};
    const byMaterial = {};
    const byPrice = {};
    products.forEach((p) => {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
      byMaterial[p.material] = (byMaterial[p.material] || 0) + 1;
      priceRanges.forEach((r) => {
        if (p.price >= r.min && p.price <= r.max) {
          byPrice[r.id] = (byPrice[r.id] || 0) + 1;
        }
      });
    });
    return { byCategory, byMaterial, byPrice };
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) {
        return false;
      }
      if (filters.materials.length && !filters.materials.includes(p.material)) {
        return false;
      }
      if (filters.prices.length) {
        const matches = priceRanges.filter(
          (r) =>
            filters.prices.includes(r.id) &&
            p.price >= r.min &&
            p.price <= r.max
        );
        if (!matches.length) return false;
      }
      return true;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    return [...filtered].sort(sortFn[sort] || sortFn.featured);
  }, [filtered, sort]);

  const clearAll = () => {
    setFilters({ categories: [], materials: [], prices: [] });
    const next = new URLSearchParams(params);
    next.delete("category");
    navigate({ search: next.toString() }, { replace: true });
  };

  const activeChips = useMemo(() => {
    const chips = [];
    filters.categories.forEach((id) => {
      const c = categories.find((c) => c.id === id);
      if (c) chips.push({ group: "categories", id, label: c.label });
    });
    filters.materials.forEach((id) => {
      const m = materials.find((m) => m.id === id);
      if (m) chips.push({ group: "materials", id, label: m.label });
    });
    filters.prices.forEach((id) => {
      const r = priceRanges.find((r) => r.id === id);
      if (r) chips.push({ group: "prices", id, label: r.label });
    });
    return chips;
  }, [filters]);

  const removeChip = (chip) => {
    setFilters((f) => ({
      ...f,
      [chip.group]: f[chip.group].filter((x) => x !== chip.id),
    }));
  };

  return (
    <div className="bg-ivory pt-24 md:pt-28 pb-20">
      <Container>
        {/* Header */}
        <div className="pb-10 border-b border-hairline">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl font-light text-ink leading-[1.05]">
            The Collection
          </h1>
          <p className="mt-3 text-[15px] text-taupe max-w-md">
            {sorted.length} {sorted.length === 1 ? "piece" : "pieces"} — all
            hand-finished, all 18K gold plated.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-4 border-b border-hairline sticky top-16 md:top-20 bg-ivory/95 backdrop-blur z-20 -mx-6 md:-mx-10 px-6 md:px-10">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-[12px] uppercase tracking-ui text-ink"
          >
            <Filter size={14} strokeWidth={1.4} />
            Filter
            {activeChips.length > 0 && (
              <span className="ml-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-ink text-paper text-[10px] px-1">
                {activeChips.length}
              </span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {activeChips.length === 0 ? (
              <span className="text-[12px] text-taupe">All pieces</span>
            ) : (
              activeChips.map((chip) => (
                <button
                  key={`${chip.group}-${chip.id}`}
                  type="button"
                  onClick={() => removeChip(chip)}
                  className="inline-flex items-center gap-1.5 h-7 pl-3 pr-2 border border-hairline text-[11px] uppercase tracking-ui text-ink hover:bg-paper transition-colors"
                >
                  {chip.label}
                  <X size={12} strokeWidth={1.4} />
                </button>
              ))
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-ui text-ink"
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
            >
              Sort
              <span className="text-taupe normal-case">
                {SORT_OPTIONS.find((s) => s.id === sort)?.label}
              </span>
            </button>
            {sortOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 w-56 bg-paper border border-hairline shadow-soft z-30"
              >
                {SORT_OPTIONS.map((opt) => (
                  <li key={opt.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={sort === opt.id}
                      onClick={() => {
                        setSort(opt.id);
                        setSortOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-3 text-[13px] hover:bg-ivory transition-colors",
                        sort === opt.id ? "text-ink" : "text-taupe"
                      )}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-10">
          <div className="hidden md:block md:col-span-3">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              counts={counts}
              onClear={clearAll}
            />
          </div>

          <div className="md:col-span-9">
            {sorted.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl text-ink">Nothing matches just yet.</p>
                <p className="mt-2 text-[14px] text-taupe">
                  Try removing a filter or two.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 inline-flex items-center justify-center h-11 px-6 border border-ink text-ink uppercase tracking-ui text-[11px] font-medium hover:bg-ink hover:text-paper transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-6">
                {sorted.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          aria-label="Close filters"
          onClick={() => setDrawerOpen(false)}
          className="absolute inset-0 bg-ink/40"
        />
        <aside
          className={cn(
            "absolute left-0 bottom-0 w-full max-h-[85vh] bg-ivory border-t border-hairline p-6 overflow-y-auto transition-transform duration-400",
            drawerOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl">Filter</h2>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="p-2 -mr-2"
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            counts={counts}
            onClear={clearAll}
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="mt-6 w-full inline-flex items-center justify-center h-12 bg-ink text-paper uppercase tracking-ui text-[12px] font-medium hover:bg-ink-soft transition-colors"
          >
            View {sorted.length} Pieces
          </button>
        </aside>
      </div>
    </div>
  );
}
