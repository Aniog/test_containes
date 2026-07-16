import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CartDrawer = () => {
  const { items, isDrawerOpen, setIsDrawerOpen, updateQuantity, removeItem, cartTotal } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background border-l shadow-xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-serif text-2xl font-semibold">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsDrawerOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
              <ShoppingBag className="w-12 h-12" />
              <p>Your cart is empty.</p>
              <Button onClick={() => setIsDrawerOpen(false)} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary flex-shrink-0">
                    <img 
                      src={item.image || ""} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif uppercase tracking-widest text-sm font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-input">
                        <button 
                          className="px-2 py-1 hover:bg-secondary"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 hover:bg-secondary"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-background">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-serif text-lg font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full h-12 text-base tracking-wider uppercase">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
