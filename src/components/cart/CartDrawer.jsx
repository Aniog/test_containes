import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl uppercase tracking-widest">Your Bag</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-stone-400 uppercase tracking-widest text-xs mb-6">Your bag is empty</p>
                <Button 
                  variant="outline" 
                  className="rounded-none tracking-widest"
                  onClick={() => setIsCartOpen(false)}
                >
                  SHOP ALL
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-stone-100 flex-shrink-0 relative overflow-hidden group">
                      <img
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-title-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 id={`cart-item-title-${item.id}`} className="text-xs font-semibold uppercase tracking-widest leading-snug pr-4">
                          {item.name}
                        </h4>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-stone-400 hover:text-stone-900 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-stone-500 mb-4">{item.variant}</p>
                      
                      <div className="mt-auto flex justify-between items-end">
                        <div className="flex items-center border border-stone-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-stone-50"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-stone-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium font-sans">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t bg-stone-50 sm:flex-col gap-4">
            <div className="w-full flex justify-between items-center py-2">
              <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
              <span className="text-lg font-sans font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center">
              Shipping and taxes calculated at checkout
            </p>
            <Button className="w-full rounded-none bg-stone-900 hover:bg-stone-800 text-white tracking-[0.2em] h-12 uppercase">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
