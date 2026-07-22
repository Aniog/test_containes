import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar, {
  CATEGORIES,
  PRICE_BUCKETS,
  SORTS,
} from "@/components/product/FilterSidebar";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/products";

const VALID_SORTS = new Set(SORTS.map((s) => s.id));
const VALID_CATS = new Set(CATEGORIES.map((c) => c.id));
const VALID_PRICES = new Set(PRICE_BUCKETS.map((p) => p.id));

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("cat");
  const initialPrice = params.get("price");
  const initialSort = params.get("sort");

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const raw = params.get("cat");
    if (!raw) return [];
    return raw.split(",").filter((c) => VALID_CATS.has(c));
  });
  const [selectedPrice, setSelectedPrice] = useState(
    initialPrice && VALID_PRICES.has(initialPrice) ? initialPrice : null
  );
  const [selectedMaterials] = useState([]);
  const [sort, setSort] = useState(
    initialSort && VALID_SORTS.has(initialSort) ? initialSort : "featured"
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Sync URL
  useEffect(() => {
    const next = new URLSearchParams();
    if (selectedCategories.length)
      next.set("cat", selectedCategories.join(","));
    if (selectedPrice) next.set("price", selectedPrice);
    if (sort && sort !== "featured") next.set("sort", sort);
    setParams(next, { replace: true });
  }, [selectedCategories, selectedPrice, sort, setParams]);

  // Handle "deep link" via ?cat=... on mount
  useEffect(() => {
    if (initialCat && VALID_CATS.has(initialCat) && !selectedCategories.length) {
      setSelectedCategories([initialCat]);
    }
    if (initialSort && VALID_SORTS.has(initialSort) && sort === "featured") {
      setSort(initialSort);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPrice) {
      const bucket = PRICE_BUCKETS.find((b) => b.id === selectedPrice);
      if (bucket) list = list.filter((p) => bucket.test(p.price));
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
      case "new":
        list.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
        break;
      default:
        // featured — preserve original order
    }
    return list;
  }, [selectedCategories, selectedPrice, selectedMaterials, sort]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };
  const toggleMaterial = (id) => {
    // single material for now, but keep structure
  };
  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
  };

  return (
    <>
      {/* Editorial page header */}
      <section className="bg-ivory-soft pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-container px-5 text-center md:px-10 lg:px-16">
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
            The Collection
          </span>
          <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-espresso md:text-6xl lg:text-[72px]">
            Shop <em className="italic text-gold-deep">All</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-espresso-soft">
            Demi's finest, organized. Filter by category, material, or price to
            find your next forever piece.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-24">
        <div className="mx-auto flex max-w-container flex-col gap-8 px-5 md:flex-row md:gap-12 md:px-10 lg:px-16">
          {/* Desktop sidebar */}
          <div className="hidden md:block">
            <FilterSidebar
              selectedCategories={selectedCategories}
              selectedPrice={selectedPrice}
              selectedMaterials={selectedMaterials}
              onToggleCategory={toggleCategory}
              onSelectPrice={setSelectedPrice}
              onToggleMaterial={toggleMaterial}
              onClear={clearAll}
              totalCount={filtered.length}
            />
          </div>

          {/* Main grid column */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between border-b border-cream pb-4">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-espresso md:hidden"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>
              <p className="hidden text-[12px] uppercase tracking-widest2 text-muted md:block">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <label className="ml-auto flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-espresso">
                <span className="hidden text-muted md:inline">Sort by</span>
                <span className="md:hidden">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer border-b border-cream bg-transparent py-1 pr-2 text-[11px] font-medium uppercase tracking-widest2 text-espresso focus:border-gold"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {filtered.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 border border-dashed border-cream py-20 text-center">
                <p className="font-serif text-2xl text-espresso">Nothing here yet.</p>
                <p className="max-w-sm text-sm text-espresso-soft">
                  Try removing a filter to see more of the collection.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-3 text-[11px] uppercase tracking-widest2 text-gold-deep underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <ul className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
                {filtered.map((product) => (
                  <Reveal key={product.id} as="li">
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-ivory shadow-drawer transition-transform duration-500 ease-editorial md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream px-5 py-4">
          <h2 className="font-serif text-xl text-espresso">Filter</h2>
          <button
            type="button"
            aria-label="Close filter"
            onClick={() => setDrawerOpen(false)}
            className="rounded-full p-2 text-espresso"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <div className="px-5 pb-10 pt-4">
          <FilterSidebar
            selectedCategories={selectedCategories}
            selectedPrice={selectedPrice}
            selectedMaterials={selectedMaterials}
            onToggleCategory={toggleCategory}
            onSelectPrice={setSelectedPrice}
            onToggleMaterial={toggleMaterial}
            onClear={clearAll}
            totalCount={filtered.length}
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="mt-4 block w-full bg-espresso py-4 text-center text-[11px] font-medium uppercase tracking-widest2 text-ivory"
          >
            View {filtered.length} pieces
          </button>
        </div>
      </aside>
    </>
  );
}
