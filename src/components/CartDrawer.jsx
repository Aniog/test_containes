import React from 'react';
import { X, Minus, Plus, Trash2, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wider text-velmora-base">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-velmora-muted hover:text-velmora-base transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-velmora-muted mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted-light">Add something beautiful.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, idx) => (
                <div key={`${item.id}-${item.variant || 'default'}-${idx}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-cream rounded-sm flex-shrink-0 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-velmora-muted-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      id={`product-name-${item.id}`}
                      className="font-serif text-sm tracking-widest uppercase text-velmora-base truncate"
                    >
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-sm font-medium text-velmora-base mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center hover:border-velmora-base transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center hover:border-velmora-base transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-velmora-muted-light hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
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
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-medium text-velmora-base">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted-light">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-gold text-white py-3.5 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-velmora-base text-velmora-base py-3.5 text-xs font-medium tracking-widest uppercase hover:bg-velmora-base hover:text-white transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
