import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, setIsDrawerOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/50 z-50 animate-fade-in"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-50 z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
          <h2 className="font-serif text-xl tracking-wide text-charcoal-900">
            Shopping Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:bg-charcoal-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal-700" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-400">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-charcoal-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal-900 mt-2">${item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-300 hover:bg-charcoal-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center text-charcoal-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-300 hover:bg-charcoal-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-charcoal-400 hover:text-charcoal-700 underline transition-colors"
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
          <div className="border-t border-charcoal-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg text-charcoal-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-400 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-accent">
              Checkout
            </button>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-full mt-3 text-sm text-charcoal-500 hover:text-charcoal-700 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
