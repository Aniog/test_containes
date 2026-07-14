import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent ref={drawerRef} className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-6 border-b">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-sm uppercase tracking-widest font-serif">Shopping Bag</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          {cart.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-velmora-border" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <Button 
                variant="outline" 
                className="rounded-none uppercase tracking-widest text-[10px]"
                onClick={() => setIsCartOpen(false)}
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-24 h-32 bg-velmora-border overflow-hidden">
                    <img 
                      data-strk-img-id={`cart-img-${item.imgId}`}
                      data-strk-img={`[${item.titleId}] jewelry`}
                      data-strk-img-ratio="3x4"
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-serif mb-1" id={item.titleId}>{item.name}</h3>
                      <p className="text-[10px] text-velmora-muted uppercase tracking-wider mb-2">Tone: {item.variant}</p>
                      <p className="text-sm font-light">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-velmora-border">
                        <button 
                          className="p-1"
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs px-2 min-w-[24px] text-center">{item.quantity}</span>
                        <button 
                          className="p-1"
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-velmora-muted hover:text-[#1A1A1A] transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t block">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest font-serif">Subtotal</span>
              <span className="text-lg font-light">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-velmora-muted uppercase tracking-widest mb-6 text-center italic">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full rounded-none bg-velmora-fg text-white hover:bg-velmora-gold transition-colors py-6 uppercase tracking-[0.2em] text-xs">
              Proceed to Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
