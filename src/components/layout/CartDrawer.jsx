import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Drawer from '../ui/Drawer';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { isOpen, setCartOpen, items, removeItem, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <Drawer open={isOpen} onClose={() => setCartOpen(false)}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-xl text-ink">Your Cart</h2>
          <button type="button" onClick={() => setCartOpen(false)} className="p-2 text-ink-secondary transition-colors hover:text-ink" aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag size={32} className="text-ink-tertiary" />
              <p className="text-sm text-ink-secondary">Your cart is empty.</p>
              <button type="button" onClick={() => setCartOpen(false)} className="btn-outline mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-background">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium text-ink">{item.name}</p>
                      <p className="text-xs text-ink-tertiary">{item.variant === 'gold' ? 'Gold' : 'Silver'} · ${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 text-ink-secondary transition-colors hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs font-medium text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 text-ink-secondary transition-colors hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id, item.variant)} className="text-xs text-ink-tertiary transition-colors hover:text-ink">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between text-sm font-medium text-ink">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-tertiary">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="btn-primary mt-4 w-full">
              Checkout
            </button>
            <button type="button" onClick={clearCart} className="mt-3 w-full text-center text-xs text-ink-tertiary transition-colors hover:text-ink">
              Clear cart
            </button>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
