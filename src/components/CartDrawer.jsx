import React, { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { 
  cartAtom, 
  isCartOpenAtom, 
  cartTotalAtom, 
  removeFromCartAtom, 
  updateQuantityAtom 
} from '@/lib/store';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useAtom(isCartOpenAtom);
  const [cart] = useAtom(cartAtom);
  const [total] = useAtom(cartTotalAtom);
  const [, removeFromCart] = useAtom(removeFromCartAtom);
  const [, updateQuantity] = useAtom(updateQuantityAtom);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        if (contentRef.current) {
          ImageHelper.loadImages(strkImgConfig, contentRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, cart]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0" ref={contentRef}>
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="font-serif text-xl uppercase tracking-widest flex items-center justify-between">
            Your Bag
            <span className="text-xs font-sans font-light tracking-wide text-muted-foreground italic">
              ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-grow">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-10 text-center gap-6">
              <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground opacity-30" />
              <p className="text-muted-foreground font-light italic">Your bag is empty.</p>
              <Button 
                variant="outline" 
                className="w-full font-serif uppercase tracking-widest text-xs"
                onClick={() => setIsOpen(false)}
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full">
              <div className="p-6 flex flex-col gap-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-24 bg-secondary overflow-hidden shrink-0">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`${item.imageQuery} closeup`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={item.name}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-wider font-semibold">{item.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-black/10">
                          <button 
                            className="p-1 hover:bg-black/5 transition-colors disabled:opacity-30"
                            onClick={() => updateQuantity({ productId: item.id, quantity: item.quantity - 1 })}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button 
                            className="p-1 hover:bg-black/5 transition-colors"
                            onClick={() => updateQuantity({ productId: item.id, quantity: item.quantity + 1 })}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t flex-col sm:flex-col gap-4">
            <div className="w-full flex justify-between items-center bg-secondary/50 p-4">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold">Subtotal</span>
              <span className="font-sans text-lg font-bold">${total.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground italic text-center w-full">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full h-14 font-serif uppercase tracking-[0.2em] text-xs">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
