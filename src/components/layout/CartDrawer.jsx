import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    // Left empty since we removed data-strk-img tags from the cart
  }, [isOpen]);

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent ref={containerRef} className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl tracking-wide">Your Cart</SheetTitle>
            <span className="text-sm text-muted-foreground">{items.length} items</span>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-hidden flex flex-col">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="bg-secondary p-6 rounded-full text-foreground/40">
                <ShoppingBag className="h-12 w-12" />
              </div>
              <p className="text-lg font-serif">Your cart is empty.</p>
              <Button 
                onClick={() => setIsOpen(false)} 
                className="mt-4 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest text-xs"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-secondary relative overflow-hidden flex-shrink-0">
                        <img
                          src={item.images && item.images.length > 0 ? item.images[0] : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 id={`cart-item-${item.id}-name`} className="font-serif tracking-wide text-lg">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-foreground transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">{item.material}</p>
                          <p className="text-sm mt-1">${item.price}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border">
                            <button 
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-2 hover:bg-secondary transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-secondary transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          
                          <p className="font-medium">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-6 bg-secondary/30 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-lg">Subtotal</span>
                  <span className="font-medium text-lg">${subtotal}</span>
                </div>
                <p className="text-xs text-muted-foreground text-center mb-6">
                  Shipping & taxes calculated at checkout
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none uppercase tracking-widest h-12"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
