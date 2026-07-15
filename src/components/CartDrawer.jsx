import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import strkImgConfig from '@/strk-img-config.json';

function getCartImageUrl(imageId) {
  const entry = strkImgConfig[imageId];
  if (!entry?.results?.length) return null;
  const picked = entry.results.find((r) => String(r.id) === String(entry.picked));
  return (picked || entry.results[0])?.url || null;
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQty, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-cream h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-charcoal hover:opacity-60">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-warm-gray">
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm">Add something beautiful.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-hairline/50 flex-shrink-0 overflow-hidden">
                    {getCartImageUrl(item.imageId) ? (
                      <img
                        src={getCartImageUrl(item.imageId)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-hairline/50" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-ultra-wide truncate">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-warm-gray capitalize mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        className="w-6 h-6 border border-hairline flex items-center justify-center hover:bg-hairline/50"
                        onClick={() => updateQty(item.id, item.variant, item.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.qty}</span>
                      <button
                        className="w-6 h-6 border border-hairline flex items-center justify-center hover:bg-hairline/50"
                        onClick={() => updateQty(item.id, item.variant, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        className="ml-auto text-light-gray hover:text-red-500 transition-colors"
                        onClick={() => removeItem(item.id, item.variant)}
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

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-hairline bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-accent text-white py-3.5 text-sm font-medium tracking-ultra-wide uppercase hover:bg-accent-hover transition-colors">
              Checkout
            </button>
            <p className="text-center text-xs text-light-gray mt-3">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
