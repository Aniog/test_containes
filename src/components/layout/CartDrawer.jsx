import React, { useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCartStore } from '@/store/cartStore';
import { Minus, Plus, X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, cartTotal } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof ImageHelper !== 'undefined') {
        const timer = setTimeout(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }, 100);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error("Image loader error", e);
    }
  }, [items, isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent ref={containerRef} className="w-full sm:max-w-md flex flex-col pt-12 pb-6 px-6">
        <SheetHeader className="text-left mb-6">
          <SheetTitle className="font-serif text-3xl font-normal">Your Bag</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto mb-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center pt-20 text-center h-full">
              <p className="text-muted-foreground mb-6">Your bag is empty.</p>
              <Button onClick={closeCart} variant="outline" className="font-sans uppercase tracking-widest text-xs px-8">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary flex-shrink-0 flex items-center justify-center">
                      <img
                        alt={item.product.name}
                        data-strk-img-id={`cart-thumb-${item.product.id}`}
                        data-strk-img={`[cart-item-${item.product.id}-title] jewelry product`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 id={`cart-item-${item.product.id}-title`} className="font-serif text-lg leading-tight uppercase tracking-wider">{item.product.name}</h4>
                        <button onClick={() => removeItem(item.product.id, item.variant)} className="text-muted-foreground hover:text-foreground transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant} Tone</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-auto border-t border-border pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Subtotal</span>
              <span className="font-serif text-2xl">${cartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full h-12 text-sm uppercase tracking-widest bg-accent hover:bg-accent/90 text-accent-foreground">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;