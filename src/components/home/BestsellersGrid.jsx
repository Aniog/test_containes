import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone/30">
          <img
            data-strk-img-id={`product-${product.id}-img-0`}
            data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] ${product.category} jewelry gold elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.displayName}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovered ? "scale-105" : "scale-100"
            }`}
          />
          {hovered && (
            <img
              data-strk-img-id={`product-${product.id}-img-1`}
              data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] ${product.category} jewelry worn model elegant`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.displayName} alternate`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
            />
          )}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-champagne text-charcoal text-[10px] uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>
        <span id={`product-${product.id}-title`} className="sr-only">
          {product.displayName}
        </span>
        <span id={`product-${product.id}-desc`} className="sr-only">
          {product.description}
        </span>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="font-serif text-xs tracking-widest uppercase text-charcoal">
            {product.name}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[11px] text-taupe">
              ({product.reviews})
            </span>
          </div>
        </div>
        <p className="text-sm font-medium text-charcoal">${product.price}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product, product.variants[0], 1);
        }}
        className="mt-3 w-full border border-charcoal text-charcoal py-2 text-[11px] uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function BestsellersGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            Bestsellers
          </h2>
          <p className="text-sm text-taupe mt-2 tracking-wide">
            Our most-loved pieces, chosen by you
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
