import { useCart } from '../hooks/useCart';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../lib/utils';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-large animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-100">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6 text-neutral-800" />
              <h2 className="text-xl font-serif font-semibold text-neutral-900">
                Your Cart
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4" />
                <h3 className="text-lg font-serif font-semibold text-neutral-800 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-neutral-500 mb-6">
                  Looks like you haven't added any jewelry yet.
                </p>
                <button
                  onClick={onClose}
                  className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.color}`}
                    className="flex space-x-4 bg-neutral-50 rounded-lg p-4"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 bg-neutral-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-neutral-400 text-xs">Image</span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif font-semibold text-neutral-900 text-sm uppercase tracking-wider">
                            {item.name}
                          </h3>
                          <p className="text-neutral-500 text-sm capitalize">
                            {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium text-neutral-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-semibold text-neutral-900">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-neutral-100 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="text-xl font-serif font-semibold text-neutral-900">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-neutral-500 text-sm">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 rounded-lg transition-colors">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-neutral-500 hover:text-neutral-800 font-medium py-2 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}