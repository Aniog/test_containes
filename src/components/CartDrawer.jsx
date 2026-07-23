import React, { useEffect, useRef } from 'react';
import { useCart } from '@/lib/cart';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, cartTotal, cartCount } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-foreground hover:bg-secondary/50">
          <ShoppingBag className="w-5 h-5" />
          {cartCount() > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              {cartCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent ref={containerRef} className="flex w-full flex-col sm:max-w-lg pr-0 p-0 border-l border-border">
        <SheetHeader className="px-6 py-4 border-b border-border/50 text-left">
          <SheetTitle className="font-serif text-2xl font-medium tracking-wide text-foreground">YOUR CART ({cartCount()})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              <p className="text-lg font-medium text-foreground">Your cart is empty.</p>
              <Button onClick={() => setIsOpen(false)} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 font-medium tracking-wide uppercase text-sm">
                Shop Our Collection
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex items-start gap-4 py-2 border-b border-border/30 pb-6">
                  <div className="relative aspect-[3/4] w-20 overflow-hidden bg-secondary">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between h-full min-h-[5rem]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-foreground font-serif text-lg tracking-wide uppercase">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => removeItem(item.id, item.variant)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <div className="flex items-center border border-border">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none hover:bg-secondary/50"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none hover:bg-secondary/50"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border bg-background p-6">
            <div className="flex justify-between text-base font-medium mb-4">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal())}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 font-medium tracking-widest uppercase text-sm">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}