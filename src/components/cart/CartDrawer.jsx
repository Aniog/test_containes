import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border/50">
          <SheetTitle className="font-serif text-2xl uppercase tracking-widest text-center">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12" />
              <p className="text-lg">Your cart is empty.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary overflow-hidden shrink-0">
                    <img 
                      src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif uppercase tracking-widest text-sm mb-1">{item.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{item.variant} Tone</p>
                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center border border-border w-max">
                      <button 
                        className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 text-sm min-w-[2rem] text-center">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="p-6 bg-secondary/30 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="uppercase text-sm tracking-widest font-medium">Subtotal</span>
              <span className="text-lg font-serif">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-none uppercase tracking-widest py-6">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
