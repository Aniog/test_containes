import React, { useRef, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      // Create a unique timer for each drawer open to avoid overlapping state issues
      const timerId = setTimeout(() => {
         if (containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
         }
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border" ref={containerRef}>
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-serif text-2xl font-medium tracking-wide">
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-hidden relative">
          <ScrollArea className="h-full px-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 py-20 text-center text-muted-foreground">
                <p>Your cart is empty.</p>
                <Button variant="outline" onClick={closeCart} className="rounded-none mt-4 font-serif italic text-lg hover:bg-transparent">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="py-6 space-y-6">
                {items.map((item, index) => (
                    <div key={`${item.id}-${item.variant}-${index}`}>
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-24 h-24 bg-secondary flex-shrink-0 relative overflow-hidden">
                           {item.id ? (
                              <img
                                key={`cart-img-${item.id}-${index}`}
                                data-strk-img-id={`c-thumb-${item.id}-${item.variant || 'gold'}-${index}`}
                                data-strk-img={`cart thumbnail [cart-title-${item.id}-${index}] gold detail`}
                                data-strk-img-ratio="1x1"
                                data-strk-img-width="200"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                         ) : (
                            <div className="w-full h-full animate-pulse bg-muted" />
                         )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 id={`cart-title-${item.id}-${index}`} className="font-serif uppercase tracking-widest text-sm font-medium">
                              {item.title}
                            </h3>
                            <button
                              onClick={() => removeItem(item.id, item.variant)}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="Remove item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          {item.variant && (
                            <p id={`cart-variant-${item.variant}`} className="text-sm text-muted-foreground mt-1 capitalize">
                              {item.variant}
                            </p>
                          )}
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center border border-border">
                            <button
                              className="p-1 hover:bg-secondary transition-colors"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3 text-muted-foreground" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              className="p-1 hover:bg-secondary transition-colors"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3 text-muted-foreground" />
                            </button>
                          </div>
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    {index < items.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center font-serif text-xl font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Button className="w-full rounded-none tracking-widest uppercase mt-4 h-12">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}