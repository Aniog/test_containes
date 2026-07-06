import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/30" onClick={closeCart} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Cart ({count})</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 text-charcoal hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-taupe mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-warmgray mb-6">Discover something beautiful.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-8 py-3 bg-charcoal text-cream text-xs font-medium tracking-widest uppercase hover:bg-espresso transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-parchment rounded-sm flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sand to-parchment" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm text-charcoal truncate">{item.name}</p>
                        <p className="text-xs text-warmgray mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-warmgray hover:text-rose transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand rounded-sm">
                        <button
                          className="px-2 py-1 text-charcoal hover:bg-sand transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-charcoal min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 text-charcoal hover:bg-sand transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-serif text-sm text-charcoal">
                        ${(item.price * item.quantity).toFixed(0)}
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
          <div className="px-6 py-5 border-t border-sand bg-parchment/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-warmgray">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-xs text-warmgray mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-3.5 bg-charcoal text-cream text-xs font-medium tracking-widest uppercase hover:bg-espresso transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 mt-2 text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
