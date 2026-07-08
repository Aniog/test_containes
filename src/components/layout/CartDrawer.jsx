import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transform transition-transform duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <h2 className="font-serif text-2xl text-charcoal">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-stone rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-warmgray mb-4" />
            <p className="font-serif text-xl text-taupe mb-2">Your cart is empty</p>
            <p className="text-sm text-warmgray mb-6">
              Discover our curated collection of demi-fine jewelry.
            </p>
            <button
              onClick={closeCart}
              className="px-8 py-3 bg-charcoal text-cream text-sm uppercase tracking-widest font-medium hover:bg-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-parchment rounded overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warmgray mt-0.5 uppercase tracking-wider">
                      {item.variant}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="px-2 py-1 hover:bg-stone transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-charcoal" />
                        </button>
                        <span className="px-2 text-sm text-charcoal font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="px-2 py-1 hover:bg-stone transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-charcoal" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 hover:bg-stone rounded transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-warmgray" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-stone px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-taupe uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-charcoal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warmgray">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full py-4 bg-charcoal text-cream text-sm uppercase tracking-widest font-medium hover:bg-espresso transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border border-charcoal text-charcoal text-sm uppercase tracking-widest font-medium hover:bg-charcoal hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
