import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em]">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-[#b68860] mx-auto mt-4" />
          <p className="mt-4 font-sans text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
            Our most-loved pieces, chosen by women like you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-[hsl(var(--muted))] overflow-hidden">
                <img
                  src={
                    hoveredId === product.id && product.hoverImage
                      ? product.hoverImage
                      : product.images[0]
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                {/* Quick add button on hover */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 py-3 bg-white/90 backdrop-blur-sm text-[hsl(var(--foreground))]
                    font-sans text-[11px] tracking-[0.1em] uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </Link>

              {/* Info */}
              <div className="mt-4 space-y-1.5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-xs hover:text-[#b68860] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-xs text-[hsl(var(--muted-foreground))]">
                  {product.type}
                </p>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-current text-[#b68860]" />
                  <span className="font-sans text-xs text-[hsl(var(--muted-foreground))]">
                    {product.rating}
                  </span>
                </div>
                <p className="font-sans text-sm font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}