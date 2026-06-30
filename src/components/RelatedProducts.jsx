import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function RelatedProducts({ currentId }) {
  const { addItem } = useCart();
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-10 text-center font-serif text-2xl font-light text-foreground">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-foreground/90 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-background opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-3">
                <h3 className="product-name text-xs font-medium text-foreground md:text-sm">
                  {product.name}
                </h3>
                <p className="mt-0.5 font-serif text-sm font-medium text-foreground">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}