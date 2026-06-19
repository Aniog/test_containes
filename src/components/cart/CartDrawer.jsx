import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 bottom-0 w-full max-w-[420px] bg-cream-50 shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100/30">
          <h2 className="font-serif text-xl tracking-wider text-charcoal-800">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" />
              <p className="font-serif text-lg text-charcoal-600 mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-charcoal-400">
                Discover our collection of fine jewelry
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.tone}`}
                  className="flex gap-4 pb-6 border-b border-charcoal-100/20 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-charcoal-100/30 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl">✦</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-wider text-charcoal-800">
                          {item.name}
                        </p>
                        <p className="text-xs text-charcoal-400 mt-0.5 capitalize">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-charcoal-400 hover:text-charcoal-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-charcoal-200/40 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-2.5 py-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-charcoal-800 min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-2.5 py-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-charcoal-800">
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
        {items.length > 0 && (
          <div className="border-t border-charcoal-100/30 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg font-medium text-charcoal-800">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-charcoal-400">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-charcoal-800 text-cream-50 text-sm font-medium tracking-wider uppercase hover:bg-charcoal-700 transition-colors duration-300 rounded-sm">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2 text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors tracking-wider uppercase"
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
