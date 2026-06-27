import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Star, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-card overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.id}-1`}
          data-strk-img={`[${product.id}-name] gold jewelry elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        <img
          data-strk-img-id={`bestseller-${product.id}-2`}
          data-strk-img={`[${product.id}-name] jewelry detail closeup`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-velmora-gold text-velmora-bg text-[10px] tracking-[0.15em] uppercase font-semibold">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, "Gold", 1);
          }}
          className={`absolute bottom-3 left-3 right-3 py-3 bg-velmora-cream/95 backdrop-blur-sm text-velmora-bg text-xs tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          } hover:bg-white`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>

        {/* Hidden ID for interpolation */}
        <span id={`${product.id}-name`} className="hidden">{product.name}</span>
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="font-serif text-sm md:text-base tracking-[0.15em] uppercase text-velmora-cream group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating)
                    ? "fill-velmora-star text-velmora-star"
                    : "text-velmora-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-velmora-text-secondary">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-velmora-gold font-medium mt-2 tracking-wide">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1400px] mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
          Most Loved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-cream font-light">
          Bestsellers
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
