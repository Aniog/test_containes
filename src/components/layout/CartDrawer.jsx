import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
  const { cart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-glow flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-serif text-xl tracking-widest text-ink">Your Cart ({cartCount})</h2>
              <button onClick={onClose} className="p-2 text-ink hover:text-accent transition-colors" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-10 w-10 text-ink-secondary mb-4" />
                  <p className="text-sm text-ink-secondary">Your cart is empty.</p>
                  <Button variant="outline" className="mt-6" onClick={onClose} asChild>
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-background">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-ink">{item.name}</p>
                            <p className="text-xs text-ink-secondary mt-1 uppercase tracking-widest">{item.variant}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-ink-secondary hover:text-accent transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                              className="h-7 w-7 flex items-center justify-center border border-border rounded-full hover:border-accent transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs text-ink">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="h-7 w-7 flex items-center justify-center border border-border rounded-full hover:border-accent transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-ink">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.items.length > 0 && (
              <div className="border-t border-border px-6 py-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-secondary">Subtotal</span>
                  <span className="font-medium text-ink">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-ink-secondary">Shipping and taxes calculated at checkout.</p>
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/checkout" onClick={onClose}>Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose} asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
