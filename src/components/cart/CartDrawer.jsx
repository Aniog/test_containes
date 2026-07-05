import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal-800/50 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream-50 z-50 shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
            <h2 className="font-serif text-xl font-medium text-charcoal-700">
              Your Cart ({items.length})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-charcoal-400 hover:text-charcoal-700 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-cream-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-700 mb-2">
                  Your cart is empty
                </p>
                <p className="text-charcoal-400 text-sm mb-6">
                  Looks like you haven't added any jewelry yet.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant.id}`}
                    className="flex gap-4"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 bg-cream-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-cream-400 text-xs">Image</span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-charcoal-700 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-charcoal-400 text-xs mt-1">
                        {item.variant.name}
                      </p>
                      <p className="text-charcoal-700 font-medium mt-1">
                        {formatPrice(item.product.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant.id,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 border border-cream-300 rounded flex items-center justify-center text-charcoal-400 hover:text-charcoal-700 hover:border-charcoal-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium text-charcoal-700 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant.id,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 border border-cream-300 rounded flex items-center justify-center text-charcoal-400 hover:text-charcoal-700 hover:border-charcoal-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant.id)}
                          className="ml-auto text-xs text-charcoal-400 hover:text-red-500 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-cream-200 px-6 py-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-charcoal-400 uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-medium text-charcoal-700">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-charcoal-400 text-xs text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-sm text-charcoal-400 hover:text-charcoal-700 transition-colors underline"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
