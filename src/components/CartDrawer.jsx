import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setDrawer(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--warm-white)] z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--cream-dark)]">
          <h2 className="font-serif text-xl tracking-wide text-[var(--charcoal)]">Your Cart</h2>
          <button
            onClick={() => setDrawer(false)}
            className="text-[var(--charcoal)]/60 hover:text-[var(--charcoal)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--charcoal)]/20 mb-4" />
              <p className="font-serif text-lg text-[var(--charcoal)]/60">Your cart is empty</p>
              <p className="text-sm text-[var(--charcoal)]/40 mt-1">Discover our collection</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--cream)] rounded overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[var(--cream-dark)]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wide text-[var(--charcoal)] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--charcoal)]/50 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-[var(--charcoal)] mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        className="w-6 h-6 rounded-full border border-[var(--cream-dark)] flex items-center justify-center text-[var(--charcoal)]/60 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        className="w-6 h-6 rounded-full border border-[var(--cream-dark)] flex items-center justify-center text-[var(--charcoal)]/60 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="ml-auto text-xs text-[var(--charcoal)]/40 hover:text-red-500 transition-colors underline"
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
          <div className="px-6 py-6 border-t border-[var(--cream-dark)] bg-[var(--cream)]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-[var(--charcoal)]/60">Subtotal</span>
              <span className="font-serif text-lg text-[var(--charcoal)]">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--charcoal)]/40 mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-[var(--charcoal)] text-white font-sans text-sm uppercase tracking-[0.15em] py-4 hover:bg-[var(--gold)] transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setDrawer(false)}
              className="w-full mt-3 font-sans text-xs uppercase tracking-[0.15em] text-[var(--charcoal)]/60 hover:text-[var(--charcoal)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
