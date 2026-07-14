import React, { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../../components/ui/sheet';
import { Button } from '../../components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Separator } from '../../components/ui/separator';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        if (drawerRef.current) {
          ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
         <div ref={drawerRef} className="flex flex-col h-full">
            <SheetHeader className="px-6 py-4 border-b border-border/50">
              <SheetTitle className="font-serif text-2xl font-normal bg-background">Your Cart</SheetTitle>
            </SheetHeader>


        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground">
              <p>Your cart is empty.</p>
              <Button variant="outline" onClick={closeCart}>Continue Shopping</Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="h-24 w-24 rounded-md overflow-hidden bg-accent flex-shrink-0">
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-img-${item.id}-${item.variant}`}
                      data-strk-img={`[cart-item-${item.id}-${item.variant}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h3 id={`cart-item-${item.id}-${item.variant}-name`} className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1 text-transform capitalize">{item.variant}</p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        className="p-1 px-2 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        className="p-1 px-2 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      onClick={() => removeItem(item.id, item.variant)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-background border-t border-border/50 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full h-12 text-md tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90">
              Checkout
            </Button>
          </div>
        )}
        </div>
      </SheetContent>
    </Sheet>
  );
}