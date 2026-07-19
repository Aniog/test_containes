import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" onClick={() => setIsCartOpen(false)}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl font-medium tracking-widest uppercase">
            Your Bag
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-warmgray">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-muted rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-sm font-medium tracking-wider uppercase truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-velmora-warmgray mt-0.5 capitalize">
                          {item.variant} Tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-0.5 hover:text-velmora-gold transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 border border-velmora-border rounded-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-velmora-muted transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-velmora-muted transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border bg-velmora-ivory">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-warmgray">Subtotal</span>
              <span className="font-serif text-lg font-medium">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-warmgray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-velmora-espresso text-white font-sans text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold transition-colors duration-300 rounded-sm">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 mt-2 border border-velmora-espresso text-velmora-espresso font-sans text-xs font-semibold tracking-widest uppercase hover:bg-velmora-espresso hover:text-white transition-colors duration-300 rounded-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
