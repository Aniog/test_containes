import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCartDispatch } from "@/hooks/useCart";

const Bestsellers = () => {
  const dispatch = useCartDispatch();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-stone-900">Bestsellers</h2>
          <p className="mt-2 text-sm text-stone-500">The pieces our community wears most.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
