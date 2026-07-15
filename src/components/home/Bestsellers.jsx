import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const Bestsellers = () => {
  const { addItem, openDrawer } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Curated for you</p>
          <h2 className="section-heading mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden text-xs font-semibold tracking-[0.14em] uppercase text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] sm:block">
          View all
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <article key={product.id} className="group card">
            <Link to={`/product/${product.id}`} className="block overflow-hidden">
              <div className="relative aspect-[3x4] overflow-hidden bg-[var(--color-surface-alt)]">
                <img
                  src={product.images.gold[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <img
                  src={product.images.gold[1]}
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

      <div className="mt-6 sm:hidden">
        <Link to="/shop" className="btn-outline w-full">View all</Link>
      </div>
    </section>
  );
};

export default Bestsellers;
