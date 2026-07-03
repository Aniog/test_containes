import React from 'react';
import { useCart } from './CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, cartTotal } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-6 border-l-0 shadow-2xl bg-background">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-xl font-serif font-light text-foreground text-center">Your Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <p className="text-muted-foreground font-light">Your cart is currently empty.</p>
            <Button 
              onClick={() => setIsOpen(false)} 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none shadow-none uppercase tracking-widest text-xs py-6 px-8 transition-colors duration-300"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-secondary/30 relative flex-shrink-0">
                      <img 
                        src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"} 
                        alt={item.name}
                        className="object-cover w-full h-full"
                        data-strk-img={`[cart-item-${item.id}-name]`}
                        data-strk-img-id={`cart-thumb-${item.id}`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="200"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 id={`cart-item-${item.id}-name`} className="font-serif uppercase tracking-widest text-sm text-foreground">{item.name}</h4>
                          {item.variant && <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>}
                          <p className="text-sm font-medium mt-2">${item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-3 border border-border w-fit px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="text-muted-foreground hover:text-foreground p-1 disabled:opacity-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="text-muted-foreground hover:text-foreground p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="pt-6 mt-auto">
              <Separator className="mb-4" />
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif text-lg">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-4">Taxes and shipping calculated at checkout.</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none shadow-none uppercase tracking-widest py-6 transition-colors duration-300">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}