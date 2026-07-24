import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-brand-warm-white shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-charcoal/10 px-6 py-4">
            <h2 className="font-serif text-xl text-brand-charcoal">Shopping Bag</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 text-brand-charcoal/60 transition-colors hover:text-brand-charcoal"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag size={48} className="mb-4 text-brand-warm-gray" />
                <p className="font-serif text-lg text-brand-charcoal">Your bag is empty</p>
                <p className="mt-2 text-sm text-brand-warm-gray">
                  Looks like you haven't added any treasures yet.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-brand-cream">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-widest text-brand-charcoal">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs text-brand-warm-gray capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-brand-warm-gray transition-colors hover:text-brand-charcoal"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-brand-charcoal/10">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-brand-charcoal/60 transition-colors hover:text-brand-charcoal"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm text-brand-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-brand-charcoal/60 transition-colors hover:text-brand-charcoal"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-serif text-sm text-brand-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
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
            <div className="border-t border-brand-charcoal/10 px-6 py-4">
              <div className="flex justify-between py-3">
                <span className="font-serif text-lg text-brand-charcoal">Subtotal</span>
                <span className="font-serif text-lg text-brand-charcoal">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="mb-4 text-xs text-brand-warm-gray">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={() => setCartOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg"
              >
                Checkout
              </Link>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-3 w-full text-center text-sm text-brand-warm-gray transition-colors hover:text-brand-charcoal"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
