import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <main>
      <div className="section-container py-10 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-ink">Your Bag</h1>

        {items.length === 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-white p-10 text-center">
            <p className="text-sm text-ink-secondary">Your bag is empty.</p>
            <Link to="/shop" className="btn-primary mt-4">Continue Shopping</Link>
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 rounded-2xl border border-border bg-white p-4">
                  <div className="h-28 w-24 overflow-hidden rounded-xl bg-background">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-ultra text-ink">{item.name}</p>
                      <p className="mt-1 text-xs text-ink-secondary capitalize">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="inline-flex h-8 w-8 items-center justify-center text-ink hover:bg-black/5"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-3 text-xs font-medium text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="inline-flex h-8 w-8 items-center justify-center text-ink hover:bg-black/5"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-ink">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-ink-muted hover:text-ink"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-border bg-white p-6 h-fit">
              <h2 className="text-sm font-semibold uppercase tracking-ultra text-ink">Summary</h2>
              <div className="mt-4 flex items-center justify-between text-sm text-ink-secondary">
                <span>Subtotal</span>
                <span className="font-semibold text-ink">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-xs text-ink-muted">Shipping and taxes calculated at checkout.</p>
              <button type="button" className="btn-primary mt-5 w-full">
                Checkout
              </button>
              <Link to="/shop" className="mt-3 block text-center text-xs font-medium text-ink-secondary hover:text-ink">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
