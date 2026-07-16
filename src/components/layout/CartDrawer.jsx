import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-brand-deep" />
              <span className="text-sm tracking-[0.15em] uppercase font-medium">
                Cart ({items.length})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="text-brand-muted hover:text-brand-deep transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-border mb-4" />
                <p className="text-brand-muted text-sm">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-sm text-brand-gold hover:text-brand-gold-dark transition-colors uppercase tracking-[0.1em]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-brand-ivory flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-sm uppercase tracking-[0.15em] text-brand-deep">
                            {item.name}
                          </h4>
                          <p className="text-xs text-brand-muted mt-0.5 capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-brand-muted hover:text-brand-deep transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-brand-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="px-2 py-1 text-brand-muted hover:text-brand-deep transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-xs font-medium text-brand-deep border-x border-brand-border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="px-2 py-1 text-brand-muted hover:text-brand-deep transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-brand-deep">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-brand-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.1em] text-brand-muted">
                  Subtotal
                </span>
                <span className="text-lg font-serif text-brand-deep">
                  ${totalPrice.toFixed(0)}
                </span>
              </div>
              <p className="text-xs text-brand-muted">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-brand-deep text-white py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-black transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-brand-muted hover:text-brand-deep transition-colors uppercase tracking-[0.1em]"
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