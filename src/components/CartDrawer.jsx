import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const { items, isOpen, setDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDrawer(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <h2 className="font-serif text-2xl text-brand-text">Your Cart ({totalItems})</h2>
          <button onClick={() => setDrawer(false)} className="p-2 hover:text-brand-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-textMuted mb-4" />
              <p className="text-brand-textMuted mb-4">Your cart is empty</p>
              <Button variant="outline" onClick={() => setDrawer(false)}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-surfaceAlt rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-brand-textMuted mt-1 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium text-brand-text mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1 hover:text-brand-gold transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1 hover:text-brand-gold transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button onClick={() => removeItem(item.id, item.variant)} className="ml-auto text-xs text-brand-textMuted hover:text-red-600 transition-colors">
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
          <div className="p-6 border-t border-brand-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-textMuted">Subtotal</span>
              <span className="text-lg font-semibold text-brand-text">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-textMuted mb-4">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full" size="lg">Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
