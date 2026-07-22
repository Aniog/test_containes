import { useEffect } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer({ open, onClose }) {
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-warm-700" />
              <h2 className="font-serif text-lg tracking-wider">Cart ({itemCount})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-warm-500 hover:text-warm-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-300 mb-4" />
                <p className="text-warm-500 font-serif text-lg">Your cart is empty</p>
                <p className="text-sm text-warm-400 mt-1">Discover pieces you'll love.</p>
                <button
                  onClick={onClose}
                  className="btn-outline mt-6"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 pb-5 border-b border-warm-200">
                    {/* Product image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-warm-100 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-warm-200 to-warm-100" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 id={`cart-name-${item.key}`} className="product-name text-xs">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-warm-500 mt-0.5 capitalize">{item.variant} Tone</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="p-1 text-warm-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm-300 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 text-warm-600 hover:text-warm-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium text-warm-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 text-warm-600 hover:text-warm-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-warm-900">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-warm-200 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-warm-600">Subtotal</span>
                <span className="text-lg font-semibold text-warm-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-warm-500 mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-accent w-full text-sm">
                Checkout &mdash; {formatPrice(subtotal)}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-warm-500 hover:text-warm-700 mt-3 transition-colors"
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