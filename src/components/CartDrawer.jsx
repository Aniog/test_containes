import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-dark/40" onClick={closeCart} />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-out-expo ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
          <span className="font-serif text-lg tracking-widest uppercase">Your Cart</span>
          <button onClick={closeCart} aria-label="Close cart">
            <X size={22} className="text-dark" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-taupe">
              <ShoppingBag size={40} strokeWidth={1} className="mb-4" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-sm font-medium underline hover:text-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-cream-dark rounded-sm overflow-hidden shrink-0 border border-border flex items-center justify-center">
                    <span className="font-serif text-lg text-taupe">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-wider truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-taupe mt-0.5 capitalize">
                      {item.variant} Tone
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          className="px-2 py-1 hover:bg-cream-dark transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 hover:bg-cream-dark transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                    <button
                      className="text-xs text-taupe hover:text-dark mt-1 underline"
                      onClick={() => removeItem(item.id, item.variant)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 shrink-0 bg-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-taupe">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice}</span>
            </div>
            <p className="text-xs text-taupe mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-dark text-cream py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-dark/90 transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 py-2 text-sm text-taupe hover:text-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
