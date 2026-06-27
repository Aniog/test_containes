import React from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function Bestsellers() {
  const { addItem } = useCart();

  return (
    <section className="bg-velmora-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold">
            Most Loved
          </p>
          <h2
            id="bestsellers-heading"
            className="font-serif text-4xl font-medium md:text-5xl"
          >
            Bestsellers
          </h2>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <article key={product.id} className="group relative flex flex-col">
              <Link
                to={`/product/${product.id}`}
                className="relative aspect-[3/4] overflow-hidden bg-velmora-stone"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate view`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product, "gold", 1);
                }}
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-velmora-cream/90 text-velmora-dark opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-dark group-hover:opacity-100"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="h-4 w-4" />
              </button>

              <div className="mt-4 text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-sm font-medium">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center justify-center gap-1 text-velmora-gold">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs text-velmora-muted">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">{formatPrice(product.price)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
