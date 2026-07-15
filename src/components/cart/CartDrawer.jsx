import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl tracking-ultra-wide text-charcoal">
            YOUR BAG ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-400 hover:text-charcoal transition-colors"
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
              <p className="font-serif text-xl text-charcoal-400 mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-charcoal-300 mb-6">Discover our collection of fine jewelry</p>
              <button onClick={closeCart} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-charcoal-100/50 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-charcoal-50 flex-shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <span className="font-serif text-gold text-lg">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal-400 mt-1">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-2">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal-400 hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal-400 hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="font-sans text-xs text-charcoal-400 underline hover:text-charcoal transition-colors"
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
          <div className="px-6 py-5 border-t border-charcoal-100 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-charcoal-500 uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-sans text-xs text-charcoal-400">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary py-4">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center font-sans text-xs text-charcoal-400 underline hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
