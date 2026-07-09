import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0 border-l border-border bg-background">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-serif text-2xl tracking-widest uppercase">
            Your Cart ({cart.length})
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center gap-4">
              <p className="text-muted-foreground font-sans italic">Your cart is currently empty.</p>
              <Button
                variant="outline"
                className="uppercase tracking-widest text-xs"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-muted relative overflow-hidden flex-shrink-0">
                    <img
                      src={item.data?.image_url}
                      alt={item.data?.name}
                      className="w-full h-full object-cover"
                      data-strk-img={`[cart-item-name-${item.id}]`}
                      data-strk-img-id={`cart-item-img-${item.id}`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="200"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <div className="flex justify-between items-start">
                      <h3 
                        id={`cart-item-name-${item.id}`}
                        className="font-serif text-lg tracking-wide uppercase"
                      >
                        {item.data?.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">
                      {item.data?.category}
                    </p>
                    <p className="text-sm font-sans mt-1">
                      {formatPrice(item.data?.price)}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-auto border border-border w-max px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-accent transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-accent transition-colors"
                      >
                        <Plus size={14} />
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
              <div className="flex justify-between items-center text-lg">
                <span className="font-serif uppercase tracking-widest text-sm">Subtotal</span>
                <span className="font-serif">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                Free Worldwide Shipping Applied
              </p>
              <Button className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white font-sans uppercase tracking-widest py-6 text-sm">
                Checkout
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
