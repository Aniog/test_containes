import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-brand-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-lg tracking-wide text-brand-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="text-brand-warm-gray hover:text-brand-charcoal transition-colors p-1" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-warm-gray">Your bag is empty</p>
              <p className="text-sm text-brand-muted mt-2">Discover something you love.</p>
              <button
                onClick={closeCart}
                className="mt-6 font-sans text-xs uppercase tracking-wide text-brand-gold hover:text-brand-gold-dark transition-colors border-b border-brand-gold pb-0.5"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map(item => (
                <li key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-ivory rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-brand-sand to-brand-ivory flex items-center justify-center">
                      <span className="font-serif text-xs uppercase tracking-wide text-brand-warm-gray text-center px-2">{item.name}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wide text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-brand-muted hover:text-brand-charcoal transition-colors self-start p-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-sans text-xs uppercase tracking-wide py-3.5 transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
