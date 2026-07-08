import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <section className="pt-28 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">Your Bag</p>
          <h1 className="section-title">Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-brand-line bg-brand-surface p-12 text-center">
            <ShoppingBag className="mx-auto h-10 w-10 text-brand-subtle mb-4" />
            <p className="text-brand-muted mb-6">Your cart is empty.</p>
            <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 rounded-2xl border border-brand-line bg-brand-surface p-4">
                  <div className="h-28 w-24 overflow-hidden rounded-xl bg-brand-warm">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-widest text-brand-ink">{item.name}</h3>
                        <p className="mt-1 text-xs text-brand-muted capitalize">{item.variant}</p>
                      </div>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-muted hover:text-brand-accent transition-colors" aria-label="Remove item">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="rounded-full border border-brand-line p-1 text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors" aria-label="Decrease quantity">
                          <span className="block h-3 w-3 text-center leading-none">−</span>
                        </button>
                        <span className="text-sm font-medium text-brand-ink w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="rounded-full border border-brand-line p-1 text-brand-ink hover:border-brand-accent hover:text-brand-accent transition-colors" aria-label="Increase quantity">
                          <span className="block h-3 w-3 text-center leading-none">+</span>
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-brand-line bg-brand-surface p-6">
                <h3 className="text-sm font-semibold text-brand-ink mb-4">Order Summary</h3>
                <div className="flex items-center justify-between mb-2 text-sm text-brand-muted">
                  <span>Subtotal</span>
                  <span className="text-brand-ink font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-muted mb-6">Shipping and taxes calculated at checkout.</p>
                <button className="btn-primary w-full">Checkout</button>
                <Link to="/shop" className="mt-3 block text-center text-sm text-brand-muted hover:text-brand-accent transition-colors">Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
