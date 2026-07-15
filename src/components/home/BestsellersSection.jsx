import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Star } from "lucide-react";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addToCart(product, 1, product.variants[0]?.id ?? null);
    setTimeout(() => setAdding(false), 600);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[bestseller-title-${product.id}] [bestseller-desc-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {hovered && (
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 text-stone-800 text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-3 bg-white/95 text-stone-800 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {adding ? "Added" : "Quick Add"}
        </button>
      </div>
      <h3
        id={`bestseller-title-${product.id}`}
        className="font-serif text-sm uppercase tracking-[0.15em] mb-1"
      >
        {product.name}
      </h3>
      <span id={`bestseller-desc-${product.id}`} className="sr-only">
        {product.description}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
        <div className="flex items-center gap-0.5">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-stone-500">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BestsellersSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">
            Bestsellers
          </h2>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know that subtle luxury
            speaks volumes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-stone-300 text-stone-700 text-xs tracking-[0.2em] uppercase hover:border-velmora-dark hover:text-velmora-dark transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
