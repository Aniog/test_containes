import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <header className="flex items-center justify-between border-b border-brand-border px-6 py-5">
          <div className="flex items-center gap-2 text-brand-ink">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-serif text-xl">Your Bag</h2>
            <span className="text-sm text-brand-muted">({cartCount})</span>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-brand-muted transition-colors hover:bg-brand-warm hover:text-brand-ink"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle" />
              <p className="font-serif text-lg text-brand-ink">Your bag is empty</p>
              <p className="text-sm text-brand-muted">Discover pieces crafted to be treasured.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-brand-subtle">
                        Jewelry
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="product-name text-sm">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-brand-muted">
                        {item.variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-brand-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 text-brand-muted transition-colors hover:text-brand-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 text-brand-muted transition-colors hover:text-brand-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-brand-ink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-brand-subtle underline transition-colors hover:text-brand-accent"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-brand-border px-6 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-serif text-xl text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary mt-4 w-full">Checkout</button>
            <button
              onClick={closeCart}
              className="btn-outline mt-3 w-full"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
