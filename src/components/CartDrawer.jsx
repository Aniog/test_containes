import React from 'react';
import { useCartStore } from '@/store/cartStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCartStore();

  const total = cartTotal();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-background px-0 py-6 flex flex-col h-full border-l border-brand-border">
        <SheetHeader className="px-6 pb-6">
          <SheetTitle className="font-serif text-2xl tracking-widest uppercase font-medium flex items-center justify-between">
            Your Cart
          </SheetTitle>
        </SheetHeader>
        
        <Separator className="bg-brand-border" />

        <div className="flex-1 overflow-y-auto py-6 px-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 pt-12">
              <ShoppingBag className="w-12 h-12 text-brand-muted mb-4" />
              <p className="text-lg font-serif">Your cart is empty.</p>
              <Button 
                onClick={closeCart}
                className="bg-brand-charcoal text-white hover:bg-brand-black rounded-none tracking-widest text-xs uppercase px-8"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-stone-100 flex-shrink-0 relative overflow-hidden">
                     {/* Using a placeholder for now, would connect to strk-img later if needed, but simple img is fine for cart */}
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      style={{backgroundColor: '#e5e5e5'}}
                    />
                  </div>
                  <div className="flex-1 flex flex-col pt-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-sm uppercase tracking-widest leading-snug pr-4">{item.name}</h4>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-brand-muted hover:text-brand-charcoal transition-colors p-1 -mr-1 -mt-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {item.variant && <p className="text-xs text-brand-muted mt-1">{item.variant}</p>}
                    <div className="flex items-end justify-between mt-auto pb-1">
                      <div className="flex items-center border border-brand-border">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="px-2 py-1 text-brand-muted hover:text-brand-charcoal transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-6 text-center tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-brand-muted hover:text-brand-charcoal transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm">${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 pt-6 bg-background mt-auto">
            <Separator className="bg-brand-border mb-6" />
            <div className="flex items-center justify-between mb-6">
              <span className="uppercase text-xs tracking-widest text-brand-muted">Subtotal</span>
              <span className="font-serif text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-6 text-center">Shipping, taxes, and discount codes calculated at checkout.</p>
            <Button className="w-full bg-brand-charcoal text-white hover:bg-brand-black rounded-none py-6 tracking-[0.2em] text-xs uppercase cursor-pointer">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;