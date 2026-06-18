import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal hover:text-gold transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-hairline mb-4" />
              <p className="font-sans text-warm-gray text-sm">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-sm font-sans text-gold hover:text-gold-dark transition-colors bg-transparent border-none underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-hairline last:border-0">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-gold-light flex-shrink-0 flex items-center justify-center">
                    <span className="text-gold text-xs font-sans">IMG</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-widest text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs font-sans text-warm-gray mt-1 capitalize">{item.variant} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-hairline flex items-center justify-center text-charcoal hover:border-gold transition-colors bg-transparent rounded-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-charcoal w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-hairline flex items-center justify-center text-charcoal hover:border-gold transition-colors bg-transparent rounded-none"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-sans font-medium text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 text-warm-gray hover:text-charcoal transition-colors bg-transparent border-none"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-hairline">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors border-none">
              Checkout
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
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
