import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-6 bg-background">
        <SheetHeader className="pb-6 border-b">
          <SheetTitle className="text-xl font-serif tracking-widest uppercase text-center">Your Bag</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <p className="font-serif text-muted-foreground italic">Your bag is empty</p>
            <Button 
              onClick={() => setIsCartOpen(false)}
              variant="outline"
              className="rounded-none px-8 tracking-widest uppercase text-[12px]"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-6 pt-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-secondary flex-shrink-0 relative overflow-hidden">
                       <img 
                        data-strk-img-id="cart-item-image"
                        data-strk-img={item.imageSearch}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.name}
                       />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm uppercase tracking-wider">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-1 tracking-widest uppercase">{item.variant}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border hairline">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="p-1 px-2 hover:bg-secondary transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-[12px] px-2 min-w-[20px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="p-1 px-2 hover:bg-secondary transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-[13px] font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="pt-6 border-t space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif uppercase tracking-widest text-sm">Subtotal</span>
                <span className="text-lg font-medium font-serif">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-muted-foreground italic text-center text-xs">Shipping & taxes calculated at checkout</p>
              <Button className="w-full rounded-none h-12 bg-primary text-primary-foreground uppercase tracking-widest text-[13px] hover:bg-accent hover:text-accent-foreground transition-luxury">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
