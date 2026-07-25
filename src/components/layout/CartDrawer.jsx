import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useCart } from '../../context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
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
      <SheetContent ref={containerRef} className="w-full sm:max-w-md bg-cream border-l border-charcoal/10 flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-charcoal/10">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-serif uppercase tracking-widest">Your Bag</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-grow">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] p-8 text-center">
              <p className="text-charcoal/60 mb-8 font-serif italic text-lg">Your bag is currently empty.</p>
              <Button
                variant="outline"
                className="rounded-none border-charcoal/20 hover:bg-charcoal hover:text-white transition-all px-8"
                onClick={() => setIsCartOpen(false)}
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="p-6 space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-taupe/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-title-${item.id}] jewelry gold`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h4 id={`cart-item-title-${item.id}`} className="font-serif uppercase text-sm tracking-wider">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-charcoal/40 hover:text-charcoal transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-charcoal/60 mt-1">{item.variant}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-charcoal/10">
                        <button
                          className="p-1 hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          className="p-1 hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-medium text-sm">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cart.length > 0 && (
          <div className="p-6 border-t border-charcoal/10 bg-white/50 space-y-4">
            <div className="flex justify-between items-center font-serif text-lg">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <p className="text-xs text-charcoal/50 italic text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full h-14 bg-charcoal text-white rounded-none uppercase tracking-[0.2em] text-sm hover:bg-gold transition-all">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
