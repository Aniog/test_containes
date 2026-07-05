import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-velmora-cream animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-wide text-velmora-dark">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-velmora-muted hover:text-velmora-dark transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-velmora-muted/40 mb-4" />
              <p className="font-sans text-sm text-velmora-muted">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-4 btn-outline text-xs"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-border/50 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-velmora-gold/10 flex items-center justify-center">
                      <span className="text-velmora-gold/40 text-xs font-sans">Jewelry</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-sm tracking-wide text-velmora-dark">
                          {item.name}
                        </h3>
                        <p className="font-sans text-sm text-velmora-gold mt-0.5">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-velmora-muted/50 hover:text-velmora-dark transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-dark hover:bg-velmora-border/50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm w-5 text-center text-velmora-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-dark hover:bg-velmora-border/50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg text-velmora-dark">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-muted/60">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-center font-sans text-xs text-velmora-muted hover:text-velmora-dark transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}