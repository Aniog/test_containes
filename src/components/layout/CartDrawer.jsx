import React, { useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useStore } from '@/store/useStore';
import { X, Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity } = useStore();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (cartOpen && drawerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            try {
              ImageHelper.loadImages(strkImgConfig, drawerRef.current);
            } catch (e) {
              // Ignore if no images to load
            }
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [cartOpen, cart.length]);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent ref={drawerRef} className="w-full sm:max-w-md border-l-0 shadow-2xl flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border border-solid text-left">
          <SheetTitle className="font-serif text-2xl font-normal">Your Bag</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground pt-12">
              <p className="font-serif text-xl">Your bag is empty</p>
              <Button variant="outline" onClick={() => setCartOpen(false)}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
// Removed stock image plugin from drawer items, using generic jewelry placeholder for simplicity.

                <div key={`${item.id}-${item.tone}`} className="flex gap-4 group">
                  <div className="w-24 h-24 bg-muted overflow-hidden relative border border-border/50">
                    <img 
                      src={`https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?q=80&w=150&h=150&auto=format&fit=crop`}
                      alt={item.name}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm max-w-[80%] uppercase tracking-wider">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.tone)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.tone} Tone</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                       <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-1 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-1 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-serif text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border p-6 bg-background space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium uppercase tracking-wider text-sm">Subtotal</span>
              <span className="font-serif text-2xl">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full uppercase tracking-widest h-12" size="lg">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}