import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext.jsx';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeCart} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-brand-line px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-brand-ink" />
                <h2 className="font-serif text-xl font-semibold text-brand-ink">Your Bag</h2>
                <span className="text-xs text-brand-muted">({cartCount})</span>
              </div>
              <button onClick={closeCart} className="p-2 text-brand-muted hover:text-brand-ink transition-colors" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-subtle mb-4" />
                  <p className="font-serif text-lg text-brand-ink">Your bag is empty</p>
                  <p className="mt-2 text-sm text-brand-muted">Discover our collection and find something you love.</p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:bg-brand-accentHover transition-colors"
                  >
                    Shop the Collection
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                        <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">{item.name}</p>
                              <p className="mt-1 text-xs text-brand-muted capitalize">{item.variant}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id, item.variant)}
                              className="text-brand-subtle hover:text-brand-ink transition-colors"
                              aria-label="Remove item"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-brand-line">
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="px-3 text-xs font-semibold text-brand-ink">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-2 text-brand-muted hover:text-brand-ink transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-brand-line px-6 py-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-muted">Subtotal</span>
                  <span className="font-semibold text-brand-ink">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
                <button className="w-full rounded-full bg-brand-accent py-3.5 text-sm font-semibold text-white hover:bg-brand-accentHover transition-colors">
                  Checkout
                </button>
                <button onClick={closeCart} className="w-full text-center text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-brand-ink transition-colors">
                  Continue Shopping
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
