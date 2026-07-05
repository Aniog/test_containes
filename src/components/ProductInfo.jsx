import { useState } from "react";
import { Star, Minus, Plus, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import ProductAccordion from "./ProductAccordion";

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].name);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Name */}
      <div>
        <h1
          className="product-name text-xl md:text-2xl text-charcoal-800 mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          {product.name}
        </h1>
        <p className="text-display-sm font-semibold text-charcoal-800 tracking-wide">
          ${product.price}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.round(product.rating) ? "#C8A55A" : "none"}
              stroke={i < Math.round(product.rating) ? "#C8A55A" : "#D1D1D1"}
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="text-body-sm text-charcoal-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-body-md text-charcoal-600 leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="text-overline uppercase text-charcoal-500 tracking-[0.1em] mb-3">
          Tone: <span className="text-charcoal-800 font-medium">{selectedVariant}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v.name}
              onClick={() => setSelectedVariant(v.name)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                selectedVariant === v.name
                  ? "border-gold bg-gold/5 text-charcoal-800"
                  : "border-cream-200 text-charcoal-600 hover:border-cream-300"
              }`}
            >
              <span
                className="w-4 h-4 rounded-full border"
                style={{
                  backgroundColor: v.color,
                  borderColor: selectedVariant === v.name ? "#C8A55A" : "#D1D1D1",
                }}
              />
              <span className="text-body-sm font-medium">{v.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-overline uppercase text-charcoal-500 tracking-[0.1em] mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border-2 border-cream-200 rounded-full">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-charcoal-600 hover:text-charcoal-800 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-body-sm font-semibold text-charcoal-800">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-charcoal-600 hover:text-charcoal-800 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-charcoal-800 text-cream-50 text-overline uppercase tracking-[0.14em] font-semibold rounded-lg hover:bg-charcoal-700 transition-colors duration-300"
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
          Add to Cart
        </button>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 transition-all duration-300 ${
            wishlisted
              ? "border-red-300 bg-red-50 text-red-400"
              : "border-cream-200 text-charcoal-400 hover:border-cream-300 hover:text-charcoal-600"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={20} fill={wishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
        </button>
      </div>

      {/* Accordion */}
      <ProductAccordion product={product} />
    </div>
  );
}
