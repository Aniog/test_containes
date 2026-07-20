import React from 'react';
import { useCartStore } from '@/lib/store';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col pt-12 pb-6 px-4 sm:px-6">
        <SheetHeader className="text-left space-y-0">
          <SheetTitle className="font-serif text-2xl">Your Bag</SheetTitle>
          <SheetDescription className="hidden">Review your items before checkout.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6 -mx-4 px-4 sm:-mx-6 sm:px-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-muted-foreground font-serif text-lg">Your bag is currently empty.</p>
              <Button onClick={closeCart} asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary/50 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-border h-8">
                        <button 
                          className="px-2 h-full text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          className="px-2 h-full text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-border space-y-4">
            <div className="flex justify-between font-serif text-xl">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground">Taxes and shipping calculated at checkout.</p>
            <Button className="w-full rounded-none h-12 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
