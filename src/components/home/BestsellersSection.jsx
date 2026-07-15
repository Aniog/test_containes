import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={0}
          fill={s <= Math.round(rating) ? "#C9A96E" : "#E8E0D0"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
          {/* Primary image */}
          <img
            id={product.imgId}
            className="product-img-primary w-full h-full object-cover"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
          {/* Secondary image (hover) */}
          <img
            className="product-img-secondary w-full h-full object-cover"
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gold-light text-umber font-inter text-[10px] uppercase tracking-widest px-2 py-0.5">
              {product.badge}
            </span>
          )}

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-espresso/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full flex items-center justify-center gap-2 font-inter text-xs uppercase tracking-widest text-ivory hover:text-gold transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/product/${product.id}`}>
            <h3
              id={product.titleId}
              className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight hover:text-gold transition-colors"
            >
              {product.name}
            </h3>
          </Link>
          <span className="font-inter text-sm font-medium text-espresso flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <p
          id={product.descId}
          className="font-inter text-xs text-stone-warm mt-1"
        >
          {product.shortDesc}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[10px] text-stone-warm">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-2">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-espresso"
            >
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
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
