import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-surface)] z-50 shadow-2xl flex flex-col slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--velmora-border-light)]">
          <h2 className="serif-heading text-xl tracking-wide">
            Shopping Bag ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-[var(--velmora-accent)] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-[var(--velmora-border)] mb-4" />
              <p className="serif-heading text-lg text-[var(--velmora-text-muted)] mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-[var(--velmora-text-light)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="product-name text-sm tracking-wider">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-1">
                      {item.variant === 'gold' ? 'Gold' : 'Silver'} Tone
                    </p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] rounded hover:border-[var(--velmora-accent)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[var(--velmora-border)] rounded hover:border-[var(--velmora-accent)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[var(--velmora-text-light)] hover:text-red-500 transition-colors underline"
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
          <div className="border-t border-[var(--velmora-border-light)] px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[var(--velmora-text-muted)]">Subtotal</span>
              <span className="serif-heading text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-light)] mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-accent)] transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
