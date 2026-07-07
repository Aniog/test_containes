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
        className="fixed inset-0 z-50 bg-brand-espresso/40 cart-overlay-enter"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-lg tracking-wide text-brand-charcoal">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-muted">Your bag is empty</p>
              <p className="text-sm text-brand-muted-light mt-2">
                Discover our collection of fine jewelry
              </p>
              <button
                onClick={closeCart}
                className="mt-6 font-sans text-xs tracking-extra-wide uppercase px-8 py-3 bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors btn-lift"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 animate-fade-in">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-brand-warm rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-brand-sand" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1">
                      {item.variant}
                    </p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-2">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted-light hover:text-brand-charcoal transition-colors underline"
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
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted-light mb-4">Shipping calculated at checkout</p>
            <button className="w-full font-sans text-xs tracking-extra-wide uppercase py-4 bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors duration-200 btn-lift">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
