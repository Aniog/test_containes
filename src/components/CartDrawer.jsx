import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    count,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        onClick={closeCart}
        className="fixed inset-0 z-40 bg-espresso/40 backdrop-blur-sm"
        aria-label="Close cart overlay"
      />
      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-soft">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-xl font-medium uppercase tracking-widest text-espresso">
            Your Cart ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-taupe transition-colors hover:text-espresso"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="mb-4 text-border-strong" />
            <p className="font-serif text-lg text-espresso">Your cart is empty</p>
            <p className="mt-2 font-sans text-sm text-taupe">
              Discover something beautiful to treasure.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-espresso px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-cream transition-colors hover:bg-gold"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-6">
                {items.map(item => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center bg-warm-gray">
                      <ShoppingBag size={24} className="text-taupe" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm font-medium uppercase tracking-widest text-espresso">
                          {item.name}
                        </p>
                        <p className="mt-0.5 font-sans text-xs capitalize text-taupe">
                          {item.variant} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 text-taupe hover:text-espresso"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-sans text-sm text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 text-taupe hover:text-espresso"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-taupe transition-colors hover:text-terracotta"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-sans text-sm font-medium text-espresso">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-6 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-sans text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg font-medium text-espresso">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="mb-6 font-sans text-xs text-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-gold py-4 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-gold-hover"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
