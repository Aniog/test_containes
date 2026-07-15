import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-200">
            <div>
              <h2 className="font-serif text-xl tracking-wider text-ink-900">Your Cart</h2>
              <p className="text-sm text-ink-500 font-sans">{totalItems} items</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-ink-500 hover:text-ink-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-ink-300 mb-4" />
                <p className="font-serif text-lg text-ink-500">Your cart is empty</p>
                <p className="text-sm text-ink-400 mt-1">Add some pieces to get started</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-6 inline-block border border-gold-500 text-gold-600 px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-gold-50 transition-all"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-ink-100 last:border-0"
                  >
                    <div className="w-20 h-20 bg-ink-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wider text-ink-900 uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-ink-500 mt-0.5">{item.variant}</p>
                      <p className="font-serif text-gold-600 text-sm mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-ink-300 rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-1 hover:bg-ink-100 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-sans">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-1 hover:bg-ink-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-ink-400 hover:text-rose-500 transition-colors uppercase tracking-wider"
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
            <div className="border-t border-ink-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-ink-700">Subtotal</span>
                <span className="font-serif text-lg text-ink-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-ink-400">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-gold-500 text-white py-3 text-sm tracking-wider uppercase hover:bg-gold-600 transition-all font-sans">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-ink-500 hover:text-ink-900 transition-colors uppercase tracking-wider"
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