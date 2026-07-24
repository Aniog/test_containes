import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-warm">
          <h2 className="font-serif text-xl text-velmora-ink">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-brown hover:text-velmora-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-stone mb-4" />
              <p className="font-serif text-lg text-velmora-brown mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-velmora-taupe">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-sand rounded-sm flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-velmora-warm flex items-center justify-center">
                      <span className="text-velmora-taupe text-xs">IMG</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-wider text-velmora-ink truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-velmora-taupe mt-0.5 capitalize">
                          {item.variant} Tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-velmora-taupe hover:text-velmora-brown transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-warm rounded-sm">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                          className="p-1.5 text-velmora-brown hover:text-velmora-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-velmora-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                          className="p-1.5 text-velmora-brown hover:text-velmora-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium text-sm text-velmora-ink">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-velmora-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-brown">Subtotal</span>
              <span className="font-serif text-lg text-velmora-ink">
                ${subtotal}
              </span>
            </div>
            <p className="text-xs text-velmora-taupe mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-ink text-velmora-cream py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-velmora-charcoal transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
