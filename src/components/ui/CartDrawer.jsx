import React, { useEffect, useRef } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Button } from './Button';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalAmount } = useCart();
  const drawerRef = useRef(null);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div ref={drawerRef} className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 stroke-1" />
              <p>Your cart is empty.</p>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Continue Shopping</Button>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="h-24 w-20 bg-muted shrink-0 relative">
                   <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img-id={`product-${item.id}-img-1`}
                      data-strk-img={`[cart-thumb-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      alt={item.title}
                      className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex flex-col flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`cart-thumb-title-${item.id}`} className="font-serif tracking-wide uppercase text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-border rounded-sm">
                      <button 
                        className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-sm select-none">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      className="text-xs text-muted-foreground underline hover:text-foreground"
                      onClick={() => removeItem(item.id, item.variant)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between mb-4 text-lg">
              <span className="font-serif">Subtotal</span>
              <span>${totalAmount}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full" size="lg">Checkout</Button>
          </div>
        )}
      </div>
    </>
  );
}