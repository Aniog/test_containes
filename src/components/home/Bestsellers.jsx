import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes("bestseller") && (
            <span className="bg-espresso text-cream font-inter text-[9px] uppercase tracking-[0.15em] px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes("new") && (
            <span className="bg-gold text-espresso font-inter text-[9px] uppercase tracking-[0.15em] px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-espresso/90 backdrop-blur-sm text-cream font-inter text-[10px] uppercase tracking-[0.15em] py-3 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={9}
              className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-warm-gray-light"}
              strokeWidth={0}
              fill={i < Math.floor(product.rating) ? "#C9A96E" : "#D4CFC8"}
            />
          ))}
          <span className="font-inter text-[10px] text-warm-gray ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-[0.12em] text-espresso hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-inter text-sm font-medium text-charcoal mt-1">${product.price}</p>
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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Curated for You</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
