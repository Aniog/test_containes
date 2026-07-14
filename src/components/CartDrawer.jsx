import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '@/lib/store';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0" ref={containerRef}>
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="font-heading text-2xl font-medium flex items-center justify-between">
            <span>Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-hidden h-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <Button onClick={() => setIsCartOpen(false)} className="w-full max-w-[200px]" variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full p-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-secondary shrink-0 relative overflow-hidden">
                      <img
                        data-strk-img-id={`cart-img-${item.id}-${item.variant.toLowerCase().replace(/\s+/g, '-')}`}
                        data-strk-img={`[cart-item-name-${item.id}-${item.variant.toLowerCase().replace(/\s+/g, '-')}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                      />
                      <span id={`cart-item-desc-${item.id}-${item.variant.toLowerCase().replace(/\s+/g, '-')}`} className="sr-only">{item.description}</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 id={`cart-item-name-${item.id}-${item.variant.toLowerCase().replace(/\s+/g, '-')}`} className="font-heading text-sm font-semibold tracking-widest">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button 
                            className="p-2 hover:bg-secondary transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            className="p-2 hover:bg-secondary transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-background mt-auto">
            <div className="flex justify-between font-heading text-xl mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full text-lg h-14 uppercase tracking-widest rounded-none">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}