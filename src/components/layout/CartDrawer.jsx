import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, cartTotal } = useCart();

  if (!drawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-velmora-cream z-[70] flex flex-col shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
          <h2 className="font-serif text-xl tracking-[0.1em]">YOUR CART</h2>
          <button onClick={closeDrawer} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-muted mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-muted mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-muted mb-6">Discover our handcrafted collection</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="inline-block bg-velmora-charcoal text-velmora-cream px-8 py-3 text-xs font-sans font-medium uppercase tracking-[0.15em] hover:bg-velmora-charcoal-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-velmora-divider/50">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream-dark rounded overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-gold/20 to-velmora-cream-dark flex items-center justify-center">
                      <span className="text-velmora-gold text-xl font-serif">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-charcoal truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-velmora-divider rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-velmora-cream-dark transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-velmora-cream-dark transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[11px] text-velmora-muted hover:text-velmora-charcoal underline underline-offset-2 transition-colors"
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
          <div className="px-6 py-5 border-t border-velmora-divider">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-velmora-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-charcoal text-velmora-cream py-3.5 text-xs font-sans font-medium uppercase tracking-[0.15em] hover:bg-velmora-charcoal-light transition-colors">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full mt-2 py-2 text-xs text-velmora-muted hover:text-velmora-charcoal transition-colors underline underline-offset-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}
