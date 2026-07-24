import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-brand-ink/40 backdrop-blur-sm transition-opacity duration-400 ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand/50">
            <h2 className="font-serif text-xl tracking-wider">
              YOUR BAG ({itemCount})
            </h2>
            <button
              onClick={closeDrawer}
              className="p-2 text-brand-warmgray hover:text-brand-ink transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-brand-warmgray mb-3">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="btn-outline text-xs"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4 py-4 border-b border-brand-sand/30">
                    {/* Product image placeholder */}
                    <div className="w-20 h-24 bg-brand-sand/40 flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm tracking-wider uppercase text-brand-ink">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brand-warmgray mt-1">{item.color}</p>
                      <p className="text-sm text-brand-gold-dark mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-brand-sand">
                          <button
                            className="p-1.5 text-brand-warmgray hover:text-brand-ink transition-colors"
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            className="p-1.5 text-brand-warmgray hover:text-brand-ink transition-colors"
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="p-1.5 text-brand-warmgray hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-brand-sand/50 px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-warmgray">Subtotal</span>
                  <span className="font-medium text-brand-ink">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-warmgray">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full text-center">
                  Checkout
                </button>
                <button
                  onClick={closeDrawer}
                  className="block w-full text-center text-xs uppercase tracking-wider text-brand-warmgray hover:text-brand-ink transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
