import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
    });
  };

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-champagne-pale overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] [${product.descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes("bestseller") && (
              <span className="bg-champagne text-obsidian font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags.includes("new") && (
              <span className="bg-obsidian text-ivory font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <button
            onClick={handleAdd}
            className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <div className="space-y-1">
          <p id={product.titleId} className="product-name text-xs text-obsidian leading-snug">
            {product.name}
          </p>
          <p id={product.descId} className="font-sans text-xs text-stone hidden">
            {product.shortDesc}
          </p>
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? "fill-champagne text-champagne" : "text-stone-light"}
                strokeWidth={1}
              />
            ))}
            <span className="font-sans text-[10px] text-stone ml-1">({product.reviewCount})</span>
          </div>
          <p className="font-sans text-sm font-semibold text-obsidian mt-1">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-3">
          Most Loved
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-champagne mx-auto mt-5" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}
