import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute inset-y-0 right-0 w-full max-w-md bg-[var(--color-surface)] shadow-xl flex flex-col animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="font-serif text-lg tracking-[0.1em] text-[var(--color-text)]">
            YOUR CART
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingBag size={48} className="text-[var(--color-text-muted)] mb-4" />
              <p className="text-[var(--color-text-secondary)] mb-6">
                Your cart is empty
              </p>
              <button
                onClick={closeCart}
                className="btn-secondary text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--color-border)]">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="p-6">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-[var(--color-bg)] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-product-name text-[var(--color-text)] truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                        {item.variant}
                      </p>
                      <p className="text-sm text-[var(--color-accent)] mt-1">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[var(--color-border)]">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm text-[var(--color-text)] min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-error)] transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[var(--color-border)] p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-text-secondary)]">Subtotal</span>
              <span className="font-serif text-lg text-[var(--color-text)]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="w-full btn-primary">
              Checkout
            </button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
