import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? "text-gold fill-gold" : "text-taupe-light"}
          strokeWidth={1}
        />
      ))}
      <span className="font-sans text-[10px] text-taupe ml-1">{rating}</span>
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory-dark aspect-[3/4]">
        <img
          data-strk-img-id={hovered ? product.img2Id : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[10px] uppercase tracking-widest px-2 py-1">
            {product.badge}
          </span>
        )}
        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
          <span className="font-sans text-[10px] uppercase tracking-widest text-obsidian">Quick Add</span>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="bg-obsidian text-ivory p-2 hover:bg-gold transition-colors border-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <p id={product.titleId} className="font-serif text-sm uppercase tracking-widest2 text-obsidian leading-tight">
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-xs text-taupe mt-0.5 leading-snug">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-sm font-semibold text-obsidian">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-sans text-xs uppercase tracking-widest px-10 py-4 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
