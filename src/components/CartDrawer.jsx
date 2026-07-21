import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="relative w-full max-w-md bg-cream h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-400">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5 text-stone hover:text-charcoal transition-colors" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="font-serif text-lg text-stone mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-stone-light">Add something beautiful.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variantName}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-border rounded-sm flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-border" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm tracking-wide truncate">{item.name}</p>
                        {item.variantName !== 'Default' && (
                          <p className="font-sans text-xs text-stone mt-0.5">{item.variantName}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variantName)}
                        className="text-stone-light hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variantName, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-border transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="px-2 font-sans text-xs min-w-[1.5rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variantName, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-border transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-sans text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-stone">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone-light mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
