import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, cartTotal } =
    useCart();

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm transition-opacity"
          onClick={closeDrawer}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-cream shadow-lift transition-transform duration-300 ease-in-out',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-base-200 px-5 py-4">
            <h2 className="font-serif text-xl font-semibold text-ink">Your Cart</h2>
            <button
              type="button"
              onClick={closeDrawer}
              className="p-2 text-ink/70 hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="h-10 w-10 text-base-300 mb-3" />
                <p className="font-serif text-lg text-ink/70">Your cart is empty</p>
                <p className="mt-1 text-sm text-ink/50">
                  Discover our collection and find something you love.
                </p>
                <Button className="mt-5" onClick={closeDrawer}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-base-100">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-ink">
                            {item.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeItem({ id: item.id, variant: item.variant })}
                            className="text-ink/40 hover:text-ink transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs text-ink/60 capitalize">{item.variant}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-base-300">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                { id: item.id, variant: item.variant },
                                item.quantity - 1,
                              )
                            }
                            className="p-1.5 text-ink/70 hover:text-ink transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                { id: item.id, variant: item.variant },
                                item.quantity + 1,
                              )
                            }
                            className="p-1.5 text-ink/70 hover:text-ink transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-ink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-base-200 px-5 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-ink/70">Subtotal</span>
                <span className="font-serif text-lg font-semibold text-ink">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="mb-4 text-xs text-ink/50">Shipping and taxes calculated at checkout.</p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
