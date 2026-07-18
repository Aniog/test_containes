import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') closeCart();
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md animate-slideInRight bg-paper shadow-2xl"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-ink" />
              <h2 className="font-sans text-sm font-medium uppercase tracking-wider text-ink">
                Your Bag ({itemCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="rounded-full p-2 text-ink-muted hover:bg-cream hover:text-ink"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="mb-4 text-ink-subtle" strokeWidth={1} />
              <p className="font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-ink-muted">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-8 bg-ink px-8 py-3 text-xs font-medium uppercase tracking-widest text-cream transition hover:bg-ink/90"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="flex aspect-[4/5] w-24 shrink-0 items-center justify-center bg-cream">
                        <span className="font-serif text-2xl text-gold">
                          {item.product.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-sans text-xs font-medium uppercase tracking-wider text-ink">
                              {item.product.name}
                            </p>
                            <p className="mt-1 text-xs capitalize text-ink-muted">
                              {item.variant}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-ink-subtle hover:text-ink"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-hairline">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-ink-muted hover:text-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm text-ink">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-ink-muted hover:text-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-ink">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-hairline px-6 py-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-ink-muted">Subtotal</span>
                  <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-5 text-xs text-ink-muted">
                  Shipping & taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-gold py-4 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-gold-dark"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-3 w-full border border-ink py-3 text-xs font-medium uppercase tracking-widest text-ink transition hover:bg-ink hover:text-cream"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
