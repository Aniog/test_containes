import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetFooter
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { ScrollArea } from '@/components/ui/scroll-area';

const CartDrawer = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background border-l border-border">
        <SheetHeader className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif tracking-widest text-lg uppercase flex items-center">
              Your Bag ({cart.length})
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X size={20} />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 py-20 text-center">
              <ShoppingBag size={48} className="opacity-20" />
              <p className="font-serif text-lg opacity-60">Your bag is empty.</p>
              <Button 
                variant="outline" 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 uppercase tracking-widest text-xs"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-20 h-24 bg-muted overflow-hidden flex items-center justify-center">
                    <ShoppingBag size={24} className="opacity-10" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h4 id={`cart-item-title-${item.id}`} className="text-xs font-serif tracking-widest uppercase truncate max-w-[150px]">
                          {item.name}
                        </h4>
                        <span className="text-sm font-medium">${item.price}</span>
                      </div>
                      <p id={`cart-item-desc-${item.id}`} className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                        {item.variant}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-1 hover:bg-muted"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-1 hover:bg-muted"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t border-border bg-muted/30">
            <div className="w-full space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs font-serif uppercase tracking-widest text-muted-foreground">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-center text-muted-foreground hover:underline cursor-pointer tracking-widest">
                SHIPPING & TAXES CALCULATED AT CHECKOUT
              </p>
              <Button className="w-full py-6 uppercase tracking-[0.2em] text-xs font-bold bg-accent hover:bg-accent/90">
                Proceed to Checkout
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
