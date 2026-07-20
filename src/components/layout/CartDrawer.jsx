import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm-border">
          <h2 className="font-serif text-lg tracking-wide text-brand-charcoal">
            Shopping Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-brand-warm-gray hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-warm-border mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-warm-gray mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="font-sans text-xs tracking-wide uppercase bg-brand-gold text-white px-8 py-3 hover:bg-brand-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-gradient-to-br from-brand-ivory to-amber-50 flex-shrink-0 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-brand-gold/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide uppercase text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-warm-gray mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-warm-border text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-warm-border text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-warm-muted hover:text-brand-charcoal transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-warm-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-warm-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full font-sans text-xs tracking-wide uppercase bg-brand-gold text-white py-3.5 hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full font-sans text-xs tracking-wide uppercase text-brand-warm-gray mt-3 hover:text-brand-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
