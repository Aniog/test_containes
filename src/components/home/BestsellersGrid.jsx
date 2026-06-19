import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden rounded-sm bg-velmora-sand/40 aspect-[3/4]">
        <img
          src={product.image_primary}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
        />
        <img
          src={product.image_secondary}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product, product.variants?.[0]);
        }}
        className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-2.5 bg-white/95 text-velmora-ink text-[11px] font-medium tracking-[0.15em] uppercase shadow-sm transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Quick Add
      </button>
      <div className="mt-3 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-[15px] tracking-[0.08em] uppercase">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-velmora-mocha">${product.price}</p>
      </div>
    </div>
  );
}

export default function BestsellersGrid() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">Bestsellers</h2>
          <p className="mt-3 text-sm text-velmora-mocha max-w-md mx-auto">
            Our most-loved pieces, handcrafted in 18K gold plate.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
