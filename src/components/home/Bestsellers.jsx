import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? "fill-velmora-gold text-velmora-gold" : "text-velmora-sand"}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-velmora-linen aspect-[3/4] block">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-velmora-gold text-velmora-obsidian font-manrope text-[10px] tracking-widest-sm uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

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

        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-velmora-obsidian/90 text-velmora-text-light font-manrope text-xs tracking-widest-md uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 space-y-1.5">
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-text-muted">
            ({product.reviewCount})
          </span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest-sm text-velmora-obsidian font-medium hover:text-velmora-gold-muted transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-manrope text-xs text-velmora-text-muted hidden">
          {product.shortDescription}
        </p>
        <p className="font-cormorant text-lg text-velmora-obsidian font-medium">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function Bestsellers({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid border-b border-velmora-text-mid pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-200 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
