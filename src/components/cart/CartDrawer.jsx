import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const CartDrawer = () => {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeDrawer} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-soft-lg flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-base/5">
              <h2 className="font-serif text-lg tracking-widest-xl text-ink">Your Cart</h2>
              <button onClick={closeDrawer} className="p-2 text-ink hover:text-gold transition-colors" aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                  <ShoppingBag className="w-10 h-10 text-ink-soft" />
                  <p className="text-sm text-ink-muted">Your cart is empty.</p>
                  <Button variant="outline" onClick={closeDrawer}>Continue Shopping</Button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => {
                    const product = products.find((p) => p.id === item.productId);
                    if (!product) return null;
                    return (
                      <li key={`${item.productId}-${item.variant}`} className="flex gap-4">
                        <div className="w-20 h-24 bg-surface-alt rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center text-ink-soft text-xs font-medium">
                          {initials(product.name)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-serif text-sm tracking-widest-xl uppercase text-ink">{product.name}</p>
                              <p className="text-xs text-ink-muted mt-1 capitalize">{item.variant}</p>
                            </div>
                            <button onClick={() => removeItem(item)} className="text-ink-soft hover:text-gold transition-colors" aria-label="Remove">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center border border-base/10 rounded-sm">
                              <button
                                onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                                className="px-2 py-1 text-ink hover:text-gold transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 text-xs text-ink">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                                className="px-2 py-1 text-ink hover:text-gold transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <p className="text-sm font-medium text-ink">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-base/5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-muted">Subtotal</span>
                  <span className="font-medium text-ink">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-ink-soft">Shipping and taxes calculated at checkout.</p>
                <Button className="w-full" size="lg">Checkout</Button>
                <button onClick={clearCart} className="w-full text-xs text-ink-muted hover:text-gold transition-colors">
                  Clear cart
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
