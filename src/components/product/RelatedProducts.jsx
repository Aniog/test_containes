import React from "react";
import { Link } from "react-router-dom";
import { getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function RelatedProducts({ currentId }) {
  const items = getRelatedProducts(currentId, 4);

  return (
    <section className="border-t border-velmora-border bg-velmora-cream px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2
          id="related-heading"
          className="mb-10 text-center font-serif text-3xl font-medium md:text-4xl"
        >
          You May Also Like
        </h2>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <article key={product.id} className="group">
              <Link
                to={`/product/${product.id}`}
                className="relative aspect-[3/4] block overflow-hidden bg-velmora-stone"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="mt-4 text-center">
                <h3 className="product-name text-sm font-medium">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium">
                  {formatPrice(product.price)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
