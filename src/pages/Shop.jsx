import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ShopFilters, { SORTS, PRICE_BUCKETS } from "@/components/product/ShopFilters";
import { useImageLoader } from "@/hooks/useImageLoader";

const DEFAULT_FILTERS = {
  categories: [],
  prices: [],
  materials: [],
};

export default function Shop() {
  const containerRef = useRef(null);
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("cat");
  const [filters, setFilters] = useState(() => {
    const f = { ...DEFAULT_FILTERS };
    const validCats = ["earrings", "necklaces", "huggies", "sets"];
    if (initialCat && validCats.includes(initialCat)) {
      f.categories = [initialCat];
    }
    return f;
  });
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);

  useImageLoader(containerRef, [filters, sort]);

  useEffect(() => {
    const cat = params.get("cat");
    setFilters((f) => {
      const valid = ["earrings", "necklaces", "huggies", "sets"];
      if (cat && valid.includes(cat) && !f.categories.includes(cat)) {
        return { ...f, categories: [cat] };
      }
      return f;
    });
  }, [params]);

  const list = useMemo(() => {
    let l = PRODUCTS.slice();
    if (filters.categories.length) {
      l = l.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.materials.length) {
      l = l.filter((p) => filters.materials.includes(p.material));
    }
    if (filters.prices.length) {
      l = l.filter((p) =>
        filters.prices.some((id) => PRICE_BUCKETS.find((b) => b.id === id)?.test(p)),
      );
    }
    if (sort === "price-asc") l.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l.sort((a, b) => b.price - a.price);
    if (sort === "rating") l.sort((a, b) => b.rating - a.rating);
    return l;
  }, [filters, sort]);

  const clear = () => {
    setFilters(DEFAULT_FILTERS);
    setParams({});
  };

  return (
    <div ref={containerRef} className="bg-ivory page-fade">
      <div className="mx-auto max-w-7.5xl px-6 sm:px-10 pt-28 sm:pt-32 pb-20">
        <div className="mb-10 sm:mb-12">
          <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl lg:text-6xl">
            Shop All
          </h1>
          <p className="mt-3 max-w-xl font-sans text-sm text-stone">
            Demi-fine gold, made for the everyday. Filter by category, material, or price — every piece is finished by hand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <ShopFilters filters={filters} onChange={setFilters} onClear={clear} />

          <div>
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <p className="font-sans text-[11px] uppercase tracking-wider-2 text-stone">
                {list.length} {list.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((s) => !s)}
                  className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-wider-2 text-espresso"
                >
                  Sort: {SORTS.find((s) => s.id === sort)?.label}
                  <ChevronDown size={14} strokeWidth={1.5} />
                </button>
                {sortOpen && (
                  <ul className="absolute right-0 top-full z-10 mt-2 w-56 border border-line bg-ivory shadow-soft">
                    {SORTS.map((s) => (
                      <li key={s.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSort(s.id);
                            setSortOpen(false);
                          }}
                          className={`block w-full px-4 py-2.5 text-left font-sans text-xs transition-colors hover:bg-bone ${
                            s.id === sort ? "text-gold-deep" : "text-espresso"
                          }`}
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {list.length === 0 ? (
              <div className="border border-line bg-bone/50 p-12 text-center">
                <p className="font-serif text-2xl text-espresso">
                  Nothing matches just yet.
                </p>
                <p className="mt-2 font-sans text-sm text-stone">
                  Try removing a filter to see more pieces.
                </p>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-6 inline-flex items-center justify-center bg-espresso px-6 py-3 font-sans text-[11px] uppercase tracking-wider-2 text-ivory"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-3">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
