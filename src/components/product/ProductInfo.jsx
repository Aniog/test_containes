import { useState } from "react";
import { Star, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const stars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 >= 0.5;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product name */}
      <div>
        <p className="text-[11px] uppercase tracking-widest text-accent-gold font-medium mb-2">
          {product.category}
        </p>
        <h1 className="text-2xl md:text-3xl font-serif text-text-primary uppercase tracking-widest leading-tight">
          {product.name}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < stars
                  ? "text-star-gold fill-star-gold"
                  : i === stars && hasHalf
                  ? "text-star-gold fill-star-gold/50"
                  : "text-border-medium"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-text-muted">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-2xl font-serif text-text-primary">${product.price}</p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-border-light" />

      {/* Description */}
      <p className="text-sm text-text-body leading-relaxed font-light">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="text-xs uppercase tracking-widest text-text-muted mb-3">
          Finish: <span className="text-text-primary">{variant}</span>
        </p>
        <div className="flex gap-3">
          {["Gold", "Silver"].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 ${
                variant === v
                  ? "bg-text-primary text-cream"
                  : "bg-transparent text-text-body border border-border-light hover:border-text-body"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs uppercase tracking-widest text-text-muted mb-3">Quantity</p>
        <div className="flex items-center gap-4 border border-border-light w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-text-body hover:text-text-primary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium w-8 text-center text-text-primary">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-text-body hover:text-text-primary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-accent-gold text-white py-4 text-sm font-medium uppercase tracking-widest 
                   transition-all duration-300 hover:bg-accent-gold-hover flex items-center justify-center gap-3"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Cart — ${(product.price * quantity).toFixed(0)}
      </button>

      <p className="text-[11px] text-text-muted text-center tracking-wider">
        Free shipping on orders over $75
      </p>
    </div>
  );
}