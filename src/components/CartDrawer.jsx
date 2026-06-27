import React, { useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = {};

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Need a slight delay to allow the sheet to render before scanning for images
      const timer = setTimeout(() => {
         const sheetContent = document.querySelector('[role="dialog"]');
         if (sheetContent) {
           ImageHelper.loadImages(strkImgConfig, sheetContent);
         }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent ref={drawerRef} className="w-full sm:max-w-md flex flex-col pt-12 pb-6 px-6 sm:px-8 border-l border-border bg-background z-50">
        <SheetHeader className="text-left space-y-1 mb-4">
          <SheetTitle className="font-serif tracking-wide text-2xl uppercase">Your Bag</SheetTitle>
          <SheetDescription className="text-muted-foreground font-sans text-sm">
            {items.length === 0 ? "Your bag is currently empty." : "Review your selections below."}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto pr-2 -mr-2">
          {items.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-border py-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-muted shrink-0 relative">
                <img
                  data-strk-img-id={`cart-thumb-${item.id}-${item.variant}`}
                  data-strk-img={`${item.imageQuery || item.name} simple product shot`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-serif font-medium text-lg leading-tight uppercase tracking-wider">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.variant}</p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="mt-auto flex justify-between items-end">
                  <div className="flex items-center border border-border">
                    <button 
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-medium tracking-wide">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-border mt-auto">
            <div className="flex justify-between items-center mb-6 font-serif text-xl tracking-wider">
              <span>SUBTOTAL</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <Button className="w-full h-12 rounded-none uppercase tracking-widest text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}