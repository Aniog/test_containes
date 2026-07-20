import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal-950/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-brand-50 z-[70] shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionDuration: '400ms' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200/40">
          <h2 className="heading-serif text-xl tracking-wide text-charcoal-950">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-brand-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal-700" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag className="w-12 h-12 text-brand-300 mb-4" />
              <p className="heading-serif text-lg text-charcoal-700 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-500">Discover our curated collection of fine jewelry.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-brand-200/30 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-24 bg-brand-100 rounded-lg flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-brand-300" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[11px] tracking-ultra-wide uppercase text-charcoal-900 font-semibold truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal-900 mt-2">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-brand-300 flex items-center justify-center hover:bg-brand-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-charcoal-700" />
                      </button>
                      <span className="text-sm text-charcoal-900 font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-brand-300 flex items-center justify-center hover:bg-brand-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-charcoal-700" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-charcoal-500 hover:text-red-500 underline transition-colors"
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
          <div className="px-6 py-5 border-t border-brand-200/40 bg-brand-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal-700">Subtotal</span>
              <span className="text-lg font-semibold text-charcoal-950">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-500 mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-3.5 bg-charcoal-950 text-brand-100 text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-charcoal-800 transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2.5 mt-2 text-xs tracking-wide uppercase text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
