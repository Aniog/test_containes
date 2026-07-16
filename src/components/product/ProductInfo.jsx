import { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductInfo = ({ product }) => {
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div className="flex flex-col">
      {/* Product name */}
      <h1
        id={product.titleId}
        className="font-sans text-sm font-medium uppercase tracking-widest text-charcoal mb-2"
      >
        {product.name}
      </h1>

      {/* Price */}
      <p className="font-serif text-3xl text-charcoal mb-4">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-warm'}`}
            />
          ))}
        </div>
        <span className="text-xs text-taupe">({product.reviewCount} reviews)</span>
      </div>

      {/* Description */}
      <p id={product.descId} className="text-taupe leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Tone</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-sans font-medium border transition-colors ${
                variant === v
                  ? 'border-charcoal bg-charcoal text-white'
                  : 'border-warm text-charcoal hover:border-charcoal'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Quantity</p>
        <div className="flex items-center border border-warm w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-charcoal border-x border-warm">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-gold text-white py-4 text-sm tracking-wider uppercase font-sans font-medium hover:bg-gold-dark transition-colors"
      >
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>
    </div>
  );
};

export default ProductInfo;
