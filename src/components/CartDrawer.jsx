import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />
      <div className="relative w-full max-w-md bg-velmora-bg h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-velmora-sand">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:text-velmora-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-stone gap-3">
              <ShoppingBag className="w-10 h-10" />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-5 border-b border-velmora-sand last:border-0"
                >
                  <div className="w-20 h-20 bg-velmora-cream rounded flex items-center justify-center text-velmora-stone text-xs">
                    IMG
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm tracking-wide uppercase">
                        {item.name}
                      </p>
                      <p className="text-xs text-velmora-stone mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          className="w-6 h-6 rounded-full border border-velmora-taupe flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          className="w-6 h-6 rounded-full border border-velmora-taupe flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                  <button
                    className="self-start text-velmora-taupe hover:text-velmora-rose transition-colors"
                    onClick={() => removeItem(item.id, item.variant)}
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-velmora-sand bg-velmora-cream/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg">${subtotal}</span>
            </div>
            <p className="text-xs text-velmora-stone mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-ink text-white py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-velmora-warm transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
