import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={closeCart} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-cream)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading text-xl">
            Shopping Bag ({itemCount})
          </h2>
          <button onClick={closeCart} className="p-2 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag className="w-12 h-12 text-[var(--velmora-text-light)] mb-4" />
              <p className="velmora-heading text-lg mb-2">Your bag is empty</p>
              <p className="text-sm text-muted mb-6">Discover our collection of demi-fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="velmora-btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--velmora-border-light)]">
              {items.map((item) => (
                <li key={item.id} className="p-6 flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-[var(--velmora-bg-secondary)] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-muted capitalize mb-2">{item.variant} tone</p>
                    <p className="text-sm font-medium mb-3">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[var(--velmora-border)]">
                        <button
                          className="p-1.5 hover:text-[var(--velmora-gold)] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          className="p-1.5 hover:text-[var(--velmora-gold)] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        className="text-xs text-muted hover:text-red-500 transition-colors ml-auto"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="text-lg font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted">Shipping & taxes calculated at checkout</p>
            <button className="velmora-btn-primary w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-sm text-muted hover:text-[var(--velmora-gold)] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
