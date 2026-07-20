import React from "react";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

export const CartDrawer = ({ open, setOpen }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-white border-l border-border">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-serif uppercase tracking-widest text-lg flex items-center gap-2">
            Your Bag ({cartCount})
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-4">
            <ShoppingBag className="w-12 h-12 text-muted-foreground stroke-[1px]" />
            <p className="text-muted-foreground font-serif italic">Your bag is empty.</p>
            <Button 
              onClick={() => setOpen(false)}
              className="accent-button w-full max-w-xs"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-6 py-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-secondary flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images[0].url}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif uppercase tracking-wider text-sm">
                            {item.name}
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-black"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.variant || "Gold Tone"}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Subtotal
                </span>
                <span className="text-xl font-serif">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                Shipping & taxes calculated at checkout
              </p>
              <Button className="accent-button w-full py-6">
                Checkout
              </Button>
              <Button 
                variant="link" 
                className="w-full text-xs uppercase tracking-widest text-muted-foreground hover:text-black p-0 h-auto"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
