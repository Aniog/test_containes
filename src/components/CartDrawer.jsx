import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-surface-cream shadow-2xl flex flex-col animate-in slide-in-from-right duration-400">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200">
          <h2 className="font-serif text-heading-3 tracking-wide uppercase">Your Bag</h2>
          <button onClick={closeCart} className="text-charcoal-muted hover:text-charcoal transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-brand-300 mb-4" strokeWidth={1} />
            <p className="font-serif text-heading-3 text-charcoal mb-2">Your bag is empty</p>
            <p className="text-charcoal-muted text-body mb-6">Looks like you haven't added anything yet.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary text-xs"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-brand-100 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-100 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gold/20" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base tracking-wide uppercase text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-caption text-charcoal-muted mt-0.5">{item.variant}</p>
                    <p className="text-body font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2.5 py-1 text-charcoal-muted hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-caption font-medium text-charcoal min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2.5 py-1 text-charcoal-muted hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-caption text-charcoal-muted hover:text-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-brand-200 px-6 py-5">
              <div className="flex justify-between mb-1">
                <span className="text-body text-charcoal-muted">Subtotal</span>
                <span className="text-body font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-caption text-charcoal-muted mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-xs">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-caption text-charcoal-muted hover:text-charcoal underline mt-3 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
