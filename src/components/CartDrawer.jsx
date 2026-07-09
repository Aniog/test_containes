import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    if (isCartOpen && cart.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, document.body);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
              <p className="text-muted-foreground font-sans">Your bag is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm uppercase tracking-widest underline underline-offset-4 font-medium"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-24 h-32 bg-muted relative overflow-hidden group">
                   <img
                    alt={item.name}
                    data-strk-img-id={`cart-img-${item.id}`}
                    data-strk-img={`[cart-item-title-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="/placeholder.svg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col py-1">
                  <div className="flex justify-between">
                    <h3 id={`cart-item-title-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wide">{item.name}</h3>
                    <p className="font-sans text-sm">${item.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.variant}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                        className="p-1 px-2 hover:bg-muted"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm font-sans">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                        className="p-1 px-2 hover:bg-muted"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-muted-foreground hover:text-destructive flex items-center gap-1 text-xs uppercase tracking-tighter"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-background space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-sans text-muted-foreground">Subtotal</span>
              <span className="font-sans font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center italic">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-primary/90 transition-colors">
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};
