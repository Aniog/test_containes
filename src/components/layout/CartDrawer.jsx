import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } = useCart();

  return (
    <Dialog open={isOpen} onOpenChange={closeCart}>
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-full max-w-md bg-brand-surface shadow-xl animate-in slide-in-from-right">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-brand-line px-5 py-4">
              <h2 className="font-serif text-xl text-brand-ink">Your Cart</h2>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full p-2 text-brand-muted transition-colors hover:text-brand-ink"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-subtle" />
                  <p className="text-sm text-brand-muted">Your cart is empty.</p>
                  <Button variant="outline" asChild className="mt-2">
                    <Link to="/shop" onClick={closeCart}>Continue Shopping</Link>
                  </Button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.material}`} className="flex gap-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-semibold text-brand-ink">{item.name}</h3>
                          <p className="text-xs text-brand-muted capitalize">{item.material} tone</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                              className="rounded-full border border-brand-line p-1 text-brand-ink transition-colors hover:border-brand-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs font-semibold text-brand-ink">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, item.quantity + 1)}
                              className="rounded-full border border-brand-line p-1 text-brand-ink transition-colors hover:border-brand-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-brand-ink">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                              type="button"
                              onClick={() => removeItem(item)}
                              className="text-xs text-brand-muted underline underline-offset-4 transition-colors hover:text-brand-ink"
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
              <div className="border-t border-brand-line px-5 py-4">
                <div className="flex items-center justify-between text-sm font-semibold text-brand-ink">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
                <Button className="mt-4 w-full" asChild>
                  <Link to="/checkout" onClick={closeCart}>Checkout</Link>
                </Button>
                <Button variant="outline" className="mt-2 w-full" asChild>
                  <Link to="/shop" onClick={closeCart}>Continue Shopping</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CartDrawer;
