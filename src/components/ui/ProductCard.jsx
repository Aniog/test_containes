import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] ?? null);
  };

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-warm-gray-pale aspect-[3/4]">
        {/* Primary image */}
        <div
          data-strk-bg-id={product.imgId}
          data-strk-bg={`[${product.descId}] [${product.titleId}]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-400 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hover image */}
        <div
          data-strk-bg-id={product.hoverImgId}
          data-strk-bg={`[${product.titleId}] gold jewelry worn on model`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-espresso text-cream font-inter text-xs tracking-widest uppercase py-3 hover:bg-charcoal transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <p
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-widest text-espresso leading-tight group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-inter text-sm text-espresso font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-inter text-xs text-warm-gray">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
