import React from 'react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-xl font-serif tracking-[0.2em] flex items-center justify-between">
            YOUR CART
            <span className="text-xs font-sans tracking-normal opacity-60">({cart.length} items)</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground stroke-1" />
              <div className="space-y-1">
                <p className="font-serif text-lg tracking-wide uppercase">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">Start by picking something you love.</p>
              </div>
              <Button 
                onClick={() => setIsCartOpen(false)}
                className="rounded-none bg-velmora-charcoal text-white hover:bg-velmora-charcoal/90 uppercase tracking-widest text-xs h-12 px-8"
              >
                Shop All
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 group">
                  <div className="w-24 h-32 bg-velmora-sand overflow-hidden flex-shrink-0 relative">
                    <img 
                      src={item.image_url} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-sm tracking-[0.15em] uppercase leading-tight pr-4">
                          {item.name}
                        </h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[10px] text-velmora-gold uppercase tracking-widest">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium mt-2">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border px-2 h-8">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t border-border bg-velmora-sand/30 flex-col sm:flex-col items-stretch space-x-0">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center font-serif tracking-widest text-sm">
                <span>SUBTOTAL</span>
                <span className="font-sans font-bold tracking-normal">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                Free shipping in 18K gold packaging. Taxes and custom duties calculated at checkout.
              </p>
            </div>
            <Button className="w-full rounded-none bg-velmora-charcoal text-white hover:bg-velmora-charcoal/90 h-14 uppercase tracking-[0.2em] text-xs shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
