import React, { useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent ref={containerRef} className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-sm font-bold uppercase tracking-widestest flex items-center">
            <ShoppingBag className="mr-2" size={18} />
            Your Shopping Bag ({cart.length})
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center p-12 text-center space-y-4">
            <ShoppingBag size={48} className="text-muted-foreground/30" />
            <p className="font-serif text-lg italic">Your bag is currently empty.</p>
            <Button
              variant="outline"
              className="uppercase tracking-widestest text-xs"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-grow p-6">
              <div className="space-y-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-secondary flex-shrink-0 relative overflow-hidden">
                      <img
                         data-strk-img-id={item.strkImg1}
                         data-strk-img="[cart-item-name] jewelry"
                         data-strk-img-ratio="3x4"
                         data-strk-img-width="150"
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                         alt={item.name}
                         className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 id="cart-item-name" className="text-xs font-bold uppercase tracking-widest leading-tight pr-4">
                            {item.name}
                          </h4>
                          <span className="text-sm font-medium">${item.price}</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                          {item.variant || 'Standard'}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border">
                          <button
                            className="p-1 hover:bg-secondary transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button
                            className="p-1 hover:bg-secondary transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest font-bold">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                Shipping & taxes calculated at checkout
              </p>
              <Button className="w-full uppercase tracking-widestest text-xs h-12">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
