import React from 'react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-white p-0 border-l border-border">
        <SheetHeader className="p-6 border-b border-border bg-background">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl tracking-wide uppercase">Your Cart</SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
              <p className="font-serif text-xl">Your cart is empty.</p>
              <Button onClick={() => setIsOpen(false)} variant="outline" className="mt-4 uppercase tracking-wider rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 p-4 border border-border rounded-sm bg-background">
                <div className="w-20 h-24 bg-secondary overflow-hidden rounded-sm flex-shrink-0 relative">
                  <img
                    alt={item.name}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    data-strk-img={`cart-item-${item.id}`}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif uppercase tracking-widest text-sm mb-1">{item.name}</h3>
                      <p className="text-muted-foreground text-xs">{item.variant}</p>
                    </div>
                    <button onClick={() => removeItem(item.id, item.variant)} className="text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-border rounded-sm bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-sm w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background space-y-4 flex-shrink-0">
            <div className="flex justify-between text-lg font-serif">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full h-12 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-sm transition-colors">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;