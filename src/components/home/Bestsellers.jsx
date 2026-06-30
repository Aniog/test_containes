import React, { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Editor&apos;s Picks
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
            Bestsellers
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-primary/50" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link
                to={`/product/${product.id}`}
                className="relative aspect-[3/4] overflow-hidden bg-muted"
              >
                <img
                  src={
                    hoveredId === product.id && product.hoverImage
                      ? product.hoverImage
                      : product.images[0]
                  }
                  alt={product.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 bg-primary/90 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-primary-foreground">
                    {product.badge}
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute left-3 top-3 bg-foreground/80 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-background">
                    New
                  </span>
                )}

                {/* Quick add */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-foreground/90 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-background opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Add to Cart
                </button>
              </Link>

              {/* Info */}
              <div className="mt-3 space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-xs font-medium leading-tight text-foreground transition-colors group-hover:text-primary md:text-sm">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-[11px] text-foreground/40">
                  {product.category}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="font-sans text-[11px] text-foreground/50">
                    {product.rating}
                  </span>
                </div>
                <p className="font-serif text-sm font-medium text-foreground">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}