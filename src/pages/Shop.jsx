import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import { useCartDispatch } from "@/hooks/useCart";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useCartDispatch();
  const categoryParam = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    if (categoryParam === "all") return products;
    return products.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase());
  }, [categoryParam]);

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-serif text-3xl text-stone-900">Shop</h1>
            <p className="mt-1 text-sm text-stone-500">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
                categoryParam === "all"
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-700 border-stone-200 hover:border-stone-900"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSearchParams({ category: category.id })}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
                  categoryParam === category.id
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-900"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="group">
              <a href={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <img
                    src={product.images[1]}
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                          type: "ADD_ITEM",
                          payload: {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            images: product.images,
                            tone: product.tones[0],
                          },
                        });
                      }}
                      className="w-full bg-white/90 backdrop-blur-sm text-stone-900 py-2.5 text-xs tracking-[0.15em] uppercase hover:bg-white transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-sm tracking-wide text-stone-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-stone-600">${product.price}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
