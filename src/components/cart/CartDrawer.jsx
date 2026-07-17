import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-surface border-l border-divider transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2 className="font-serif text-xl tracking-wide text-cream">
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={closeCart}
              className="w-10 h-10 flex items-center justify-center text-cream-muted hover:text-cream transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-cream-dim mb-4" />
                <p className="font-serif text-lg text-cream mb-2">Your cart is empty</p>
                <p className="text-sm text-cream-muted mb-6">Discover pieces crafted to be treasured.</p>
                <Link
                  to="/collection"
                  onClick={closeCart}
                  className="btn-gold text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 animate-fade-in"
                  >
                    {/* Product thumbnail */}
                    <div className="w-20 h-24 bg-surface-2 rounded overflow-hidden flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-cream-dim text-xs font-serif">VELMORA</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wider text-cream truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-cream-muted mt-0.5">{item.variant}</p>
                      <p className="text-sm text-gold mt-1">${item.price}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-divider rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-cream-muted hover:text-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center text-sm text-cream">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-cream-muted hover:text-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-cream-dim hover:text-cream transition-colors underline underline-offset-2"
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
            <div className="px-6 py-5 border-t border-divider space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-cream-muted">Subtotal</span>
                <span className="font-serif text-lg text-cream">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-cream-dim">Shipping & taxes calculated at checkout.</p>
              <button className="btn-gold w-full text-xs">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-cream-muted hover:text-cream transition-colors underline underline-offset-2 py-1"
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
