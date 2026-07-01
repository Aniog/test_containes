import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { isOpen, items, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50 animate-fade-in" onClick={closeCart} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--color-cream)] z-50 animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-velmora-200)]">
          <h2 className="heading-serif text-2xl">Your Bag ({totalItems})</h2>
          <button onClick={closeCart} className="p-2 hover:bg-[var(--color-velmora-100)] rounded-full transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="heading-serif text-xl text-[var(--color-velmora-500)] mb-2">Your bag is empty</p>
              <p className="text-sm text-[var(--color-velmora-400)]">Discover pieces you'll love</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-[var(--color-velmora-100)] flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-[var(--color-velmora-500)] capitalize mb-2">{item.variant} tone</p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[var(--color-velmora-300)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-[var(--color-velmora-100)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--color-velmora-100)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1.5 text-[var(--color-velmora-400)] hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-velmora-200)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="heading-serif text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--color-velmora-500)]">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">Checkout</button>
            <button onClick={closeCart} className="btn-outline w-full text-xs">Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
}
