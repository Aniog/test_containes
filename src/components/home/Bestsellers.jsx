import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <img
          id={product.imgId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant={product.badge === "New" ? "dark" : "gold"}>
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-cream/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
          <span className="font-sans text-xs tracking-widest uppercase text-ink">Quick Add</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-7 h-7 bg-ink text-cream flex items-center justify-center hover:bg-gold hover:text-ink transition-colors duration-200"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="pt-3 pb-1">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm tracking-wider uppercase text-ink hover:text-gold transition-colors duration-200 leading-tight mb-1"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-stone-warm mb-2 leading-snug">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} count={product.reviewCount} />
          <span className="font-sans text-sm font-medium text-ink">${product.price}</span>
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
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Curated for You</p>
            <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-taupe hover:text-gold transition-colors duration-200 border-b border-taupe/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
