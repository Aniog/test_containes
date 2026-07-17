import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="serif-heading text-xl tracking-wide">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="btn-ghost p-2" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mb-4" />
              <p className="serif-heading text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">Discover pieces you'll love</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.variant}</p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border hover:border-primary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border hover:border-primary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors underline"
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
          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-widest uppercase">Subtotal</span>
              <span className="serif-heading text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-ghost w-full text-sm tracking-widest uppercase"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
