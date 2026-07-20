import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const Bestsellers = () => {
  const { addItem, toggleDrawer } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleAdd = (e, product) => {
    e.preventDefault();
    addItem(product, "gold");
    toggleDrawer();
  };

  return (
    <section className="section-container py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Curated for you</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:inline-flex text-sm font-medium text-ink-secondary hover:text-ink transition-colors">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
            <div className="relative aspect-[3/4] overflow-hidden bg-background">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 hidden group-hover:flex items-center justify-center p-3 bg-gradient-to-t from-black/40 to-transparent">
                <button
                  type="button"
                  onClick={(e) => handleAdd(e, product)}
                  className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-sm hover:bg-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-3 md:p-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">{product.category}</p>
              <h3 className="mt-1 font-serif text-base md:text-lg text-ink">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-ink">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/shop" className="md:hidden mt-8 block text-center text-sm font-medium text-ink-secondary hover:text-ink">
        View all
      </Link>
    </section>
  );
};

export default Bestsellers;
