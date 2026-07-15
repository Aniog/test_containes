import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [category, setCategory] = useState(initialCategory);
  const [material, setMaterial] = useState("");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { addItem, openDrawer } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];
    if (category) result = result.filter((p) => p.category === category);
    if (material) result = result.filter((p) => p.material === material);
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [category, material, sort]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Velmora</p>
          <h1 className="section-heading mt-1">Shop</h1>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-sm border border-[var(--color-border)] bg-white px-3 py-2 text-xs"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <button type="button" onClick={() => setFiltersOpen((prev) => !prev)} className="btn-outline hidden sm:inline-flex">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
        <aside className={cn("hidden lg:block", filtersOpen && "block")}>
          <div className="sticky top-24 space-y-6">
            <div>
              <p className="eyebrow">Category</p>
              <ul className="mt-2 space-y-2 text-sm text-[var(--color-ink-secondary)]">
                <li>
                  <button type="button" onClick={() => updateCategory("")} className={cn(!category && "font-semibold text-[var(--color-ink)]")}>
                    All
                  </button>
                </li>
                {categories.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => updateCategory(c.id)}
                      className={cn(category === c.id && "font-semibold text-[var(--color-ink)]")}
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Material</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["gold", "silver"].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setMaterial((prev) => (prev === tone ? "" : tone))}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase",
                      material === tone ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white" : "border-[var(--color-border)]"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {filtered.map((product) => (
              <article key={product.id} className="group card">
                <Link to={`/product/${product.id}`} className="block overflow-hidden">
                  <div className="relative aspect-[3x4] overflow-hidden bg-[var(--color-surface-alt)]">
                    <img
                      src={product.images[product.material][0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <img
                      src={product.images[product.material][1]}
                      alt={`${product.name} alternate`}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/40 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product, product.material);
                          openDrawer();
                        }}
                        className="btn-primary w-full py-2 text-[0.7rem]"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="p-3">
                  <p className="product-name text-[0.8rem]">{product.name}</p>
                  <p className="mt-1 text-sm font-medium">${product.price}</p>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="mt-10 text-center text-sm text-[var(--color-ink-secondary)]">No products match your filters.</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
