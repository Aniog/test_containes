import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-brand-black/40 backdrop-blur-sm"
        onClick={() => setCartOpen(false)}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-brand-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand-border px-6 py-4">
          <h2 className="font-serif text-xl tracking-widest text-brand-black">Your Cart</h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="p-2 text-brand-black/70 hover:text-brand-black"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-brand-muted" />
              <p className="text-sm text-brand-muted">Your cart is empty.</p>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-brand-sand">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="product-name text-sm">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-brand-muted">
                        {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-border text-brand-black hover:border-brand-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-border text-brand-black hover:border-brand-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-brand-black">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs uppercase tracking-widest text-brand-muted hover:text-brand-black"
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
          <div className="border-t border-brand-border px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-medium text-brand-black">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <Link
              to="/checkout"
              onClick={() => setCartOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
