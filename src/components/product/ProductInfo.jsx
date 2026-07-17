import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const variants = [
  { label: "18K Gold Plated", value: "18K Gold Plated" },
  { label: "14K Silver Tone", value: "14K Silver Tone" },
];

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0].value);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selectedVariant);
  };

  return (
    <div>
      {/* Product name */}
      <h1 className="font-serif text-xl md:text-2xl text-clay-900 uppercase tracking-wide-xl">
        {product.name}
      </h1>

      {/* Price */}
      <p className="mt-2 font-sans text-lg text-clay-700">
        ${product.price}
      </p>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? "text-gold-500 fill-gold-500"
                  : "text-cream-300"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-clay-500 font-sans">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-sm text-clay-600 font-sans leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mt-8">
        <label className="block text-xs font-sans uppercase tracking-wider text-clay-700 mb-3">
          Finish: <span className="font-medium">{selectedVariant}</span>
        </label>
        <div className="flex gap-2">
          {variants.map((v) => (
            <button
              key={v.value}
              onClick={() => setSelectedVariant(v.value)}
              className={`px-5 py-2.5 text-xs font-sans uppercase tracking-wider rounded-full border transition-all duration-300 ${
                selectedVariant === v.value
                  ? "border-clay-800 bg-clay-800 text-cream-50"
                  : "border-cream-300 text-clay-600 hover:border-clay-400"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-sans uppercase tracking-wider text-clay-700">
            Qty
          </span>
          <div className="flex items-center border border-cream-300 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 text-clay-500 hover:text-clay-800 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-10 text-center text-sm font-sans text-clay-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 text-clay-500 hover:text-clay-800 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <button onClick={handleAdd} className="btn-primary w-full text-xs">
          Add to Cart — ${product.price}
        </button>
      </div>
    </div>
  );
}