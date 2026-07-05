import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import useCartStore from '@/lib/store';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, cartTotal } = useCartStore();
  const navigate = useNavigate();

  // Handle closing when clicking ESC or outside
  const handleOpenChange = (open) => {
    if (!open) {
      closeCart();
    }
  };

  const handleCheckout = () => {
    closeCart();
    // navigate('/checkout');
    alert('Checkout flow to be implemented');
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="w-[100vw] sm:max-w-md flex flex-col h-full right-0">
        <button
          onClick={closeCart}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="font-serif text-2xl tracking-wide uppercase">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <p className="text-muted-foreground">Your cart is currently empty.</p>
            <Button onClick={() => { closeCart(); navigate('/shop'); }} className="uppercase tracking-widest text-xs px-8">
              Discover Jewelry
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
            <div className="flex-1 flex flex-col justify-between ml-2">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg leading-tight pr-4">{item.name}</h3>
                        <p className="font-medium">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.variant}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-input rounded-sm">
                        <button 
                          className="p-1.5 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          className="p-1.5 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        onClick={() => removeItem(item.id, item.variant)}
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mt-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4 text-center">Shipping & taxes calculated at checkout.</p>
              <Button onClick={handleCheckout} className="w-full uppercase tracking-widest h-12">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}