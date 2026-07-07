import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
            <h2 className="font-serif text-xl tracking-wide uppercase text-charcoal-950">
              Your Bag
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-charcoal-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-charcoal-800" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-600">Your bag is empty</p>
                <p className="text-sm text-charcoal-400 mt-1">
                  Discover pieces crafted to be treasured.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-24 bg-charcoal-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-sm uppercase tracking-wide text-charcoal-950 truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-charcoal-500 mt-0.5">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-1 hover:bg-charcoal-100 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4 text-charcoal-400" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-charcoal-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-charcoal-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-charcoal-600" />
                          </button>
                          <span className="px-2 text-sm text-charcoal-800 min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-charcoal-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-charcoal-600" />
                          </button>
                        </div>
                        <p className="font-medium text-sm text-charcoal-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-charcoal-200 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-950">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-charcoal-400 mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-charcoal-950 text-cream-50 py-3.5 text-sm uppercase tracking-extra-wide font-medium hover:bg-charcoal-800 transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 border border-charcoal-300 text-charcoal-800 py-3 text-sm uppercase tracking-wide hover:bg-charcoal-100 transition-colors"
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
