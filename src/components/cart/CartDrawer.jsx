import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-cream)] z-50 animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
            <h2 className="font-serif-display text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[var(--color-gold)] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-[var(--color-light-gray)] mb-4" />
                <p className="font-serif-display text-lg text-[var(--color-soft-gray)]">Your cart is empty</p>
                <p className="text-sm text-[var(--color-soft-gray)] mt-2">Discover our beautiful collection</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 btn-outline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-[var(--color-warm-white)] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="product-name text-sm">{item.name}</h3>
                      <p className="text-xs text-[var(--color-soft-gray)] mt-1 capitalize">{item.variant} tone</p>
                      <p className="text-sm font-medium mt-2">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-gold)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-xs text-[var(--color-soft-gray)] hover:text-red-500 transition-colors"
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
          {cartItems.length > 0 && (
            <div className="border-t border-[var(--color-border)] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-soft-gray)]">Subtotal</span>
                <span className="font-serif-display text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[var(--color-soft-gray)]">Shipping & taxes calculated at checkout</p>
              <button className="w-full btn-accent">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs tracking-widest uppercase text-[var(--color-soft-gray)] hover:text-[var(--color-charcoal)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
