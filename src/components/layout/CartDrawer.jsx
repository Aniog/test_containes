import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full max-w-md bg-white p-0 flex flex-col">
        <SheetHeader className="border-b border-brand-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-lg tracking-wide">Your Cart</SheetTitle>
            <button onClick={onClose} className="p-1 text-ink-500 hover:text-ink-900" aria-label="Close cart">
              <X className="h-5 w-5" />
            </button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-10 w-10 text-brand-300 mb-3" />
              <p className="text-sm text-ink-500">Your cart is empty.</p>
              <Button variant="outline" className="mt-4" onClick={onClose} asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-brand-100">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-ink-400">No image</div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-ink-900">{item.name}</p>
                        <p className="text-xs text-ink-500 capitalize">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium text-ink-900">${item.price}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-200 text-ink-600 hover:bg-brand-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm text-ink-900 w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-200 text-ink-600 hover:bg-brand-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-ink-500 underline underline-offset-4 hover:text-ink-900"
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

        {items.length > 0 && (
          <div className="border-t border-brand-200 px-6 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-600">Subtotal</span>
              <span className="font-medium text-ink-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-ink-500">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full">Checkout</Button>
            <button onClick={clearCart} className="w-full text-center text-xs text-ink-500 hover:text-ink-900">
              Clear cart
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
