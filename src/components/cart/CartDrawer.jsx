import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-cream)] z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="serif-heading text-xl tracking-wide">
            Your Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-2 hover:opacity-70 transition-opacity" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-[var(--velmora-text-light)] mb-4" />
              <p className="serif-heading text-lg mb-2">Your bag is empty</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] capitalize mb-2">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[var(--velmora-border)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[var(--velmora-text-light)] hover:text-[var(--velmora-text)] underline transition-colors"
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
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Subtotal</span>
              <span className="serif-heading text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-dark w-full">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
