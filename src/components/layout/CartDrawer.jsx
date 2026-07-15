import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, cartTotal, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="font-serif text-xl tracking-wide text-brand-charcoal">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:text-brand-gold transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-brand-muted mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-muted mb-6">Discover our collection of demi-fine jewelry.</p>
              <Link to="/shop" className="btn-primary" onClick={() => setCartOpen(false)}>
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-warm rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-brand-muted uppercase tracking-wider">Image</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-brand-muted uppercase tracking-wider mb-2">{item.variant}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-brand-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-brand-gold transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-brand-gold transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-brand-muted hover:text-red-500 transition-colors duration-300 underline"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm font-medium text-brand-charcoal mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-brand-border bg-brand-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-brand-charcoal">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full">Checkout</button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full mt-3 text-center text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-brand-charcoal transition-colors duration-300"
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
