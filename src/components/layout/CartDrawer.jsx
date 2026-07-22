import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full max-w-md bg-brand-bg p-0 flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between px-6 py-5 border-b border-brand-line">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-ink" />
            <SheetTitle className="font-serif text-lg tracking-wide">Your Cart</SheetTitle>
            <span className="text-xs text-brand-muted">({cartCount})</span>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle mb-4" />
              <p className="font-serif text-lg text-brand-ink mb-1">Your cart is empty</p>
              <p className="text-sm text-brand-muted mb-6">Looks like you haven't added any treasures yet.</p>
              <Button asChild className="bg-brand-accent hover:bg-brand-accentHover text-white rounded-none">
                <Link to="/shop" onClick={() => setCartOpen(false)}>Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm font-medium uppercase tracking-wide text-brand-ink">{item.name}</h3>
                      <p className="text-xs text-brand-muted mt-0.5 capitalize">{item.variant} Tone</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-brand-line rounded-none">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-brand-ink hover:text-brand-accent disabled:opacity-40"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-brand-ink hover:text-brand-accent"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-brand-subtle hover:text-brand-accent transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
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
          <div className="border-t border-brand-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-muted">Subtotal</span>
              <span className="font-medium text-brand-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full bg-brand-accent hover:bg-brand-accentHover text-white rounded-none py-6 text-sm uppercase tracking-widest">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full border-brand-line text-brand-ink hover:bg-brand-warm rounded-none py-5 text-xs uppercase tracking-widest"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
