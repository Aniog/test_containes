import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
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
          className={s <= Math.round(rating) ? "fill-gold text-gold" : "text-divider fill-divider"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (hover) */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close-up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes("bestseller") && (
            <span className="bg-espresso text-cream text-[9px] uppercase tracking-widest font-sans px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes("new") && (
            <span className="bg-gold text-espresso text-[9px] uppercase tracking-widest font-sans px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-espresso text-cream text-xs uppercase tracking-widest font-sans py-3 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link to={`/product/${product.id}`}>
              <p
                id={product.titleId}
                className="font-serif text-sm uppercase tracking-widest text-espresso leading-tight hover:text-gold transition-colors truncate"
              >
                {product.name}
              </p>
            </Link>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>
          </div>
          <p className="font-sans text-sm text-espresso font-medium flex-shrink-0">
            ${product.price}
          </p>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="text-[10px] font-sans text-stone">({product.reviewCount})</span>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
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
            className="inline-block border border-espresso text-espresso text-xs uppercase tracking-widest font-sans px-10 py-3.5 hover:bg-espresso hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
