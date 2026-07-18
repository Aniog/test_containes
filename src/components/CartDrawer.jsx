import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import strkImgConfig from '@/strk-img-config.json';

function getCartImageUrl(imageId) {
  const entry = strkImgConfig[imageId];
  if (!entry || !entry.results?.length) return null;
  const picked = entry.picked;
  const result = picked
    ? entry.results.find((r) => r.id === picked)
    : entry.results[0];
  return result?.url || null;
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] transition-opacity ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl transition-transform duration-300 flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-xl tracking-wide text-espresso">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-espresso hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBagEmpty className="w-12 h-12 text-stone-light mb-4" />
                <p className="text-stone text-sm">Your cart is empty</p>
                <p className="text-stone-light text-xs mt-1">
                  Discover something beautiful.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-parchment rounded-sm flex-shrink-0 overflow-hidden">
                      {getCartImageUrl(item.imageId) ? (
                        <img
                          src={getCartImageUrl(item.imageId)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-stone/10" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wide text-espresso truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-stone mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="text-sm font-medium text-espresso mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-parchment transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-espresso" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-parchment transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-espresso" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-1.5 text-stone hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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
            <div className="px-6 py-5 border-t border-border bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-stone">Subtotal</span>
                <span className="font-serif text-lg text-espresso">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-stone-light mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full py-3 bg-espresso text-cream text-xs tracking-widest font-medium uppercase hover:bg-espresso-light transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 mt-2 border border-espresso text-espresso text-xs tracking-widest font-medium uppercase hover:bg-espresso hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ShoppingBagEmpty({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
