import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4 py-6 border-b border-silk">
      {/* Image */}
      <div className="w-24 h-24 bg-champagne flex-shrink-0 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="product-name text-sm text-espresso">
              {product.name}
            </h3>
            {variant && (
              <p className="text-xs text-cocoa mt-1">
                {variant.name}
              </p>
            )}
          </div>
          <button
            onClick={() => removeItem(product.id, variant?.name)}
            className="text-cocoa hover:text-espresso transition-colors p-1"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center border border-silk">
            <button
              onClick={() => updateQuantity(product.id, variant?.name, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-cocoa hover:text-espresso transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm text-espresso">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, variant?.name, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-cocoa hover:text-espresso transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <p className="font-medium text-espresso">
            {formatPrice(product.price * quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
