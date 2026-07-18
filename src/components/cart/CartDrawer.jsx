import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="h-full ml-auto w-full md:max-w-md rounded-none border-l border-stone-200">
        <DrawerHeader className="px-6 flex justify-between items-center bg-white border-b border-stone-100">
          <DrawerTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            Cart ({items.length})
          </DrawerTitle>
          <DrawerClose asChild>
            <button className="p-2 hover:bg-stone-50 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <ScrollArea className="flex-grow px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="w-12 h-12 text-stone-200 mb-4" />
              <p className="text-stone-500 text-sm italic">Your cart is empty</p>
              <Button 
                onClick={() => setIsOpen(false)}
                variant="link" 
                className="mt-4 text-accent uppercase tracking-widest text-xs"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="py-6 flex flex-col gap-8">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-stone-100 relative overflow-hidden flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs uppercase font-bold tracking-widest mb-1">{item.name}</h3>
                        <p className="text-[10px] text-stone-400 uppercase tracking-widest">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-stone-300 hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-stone-200">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-stone-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-xs tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-stone-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium tracking-tight">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <DrawerFooter className="px-6 py-8 border-t border-stone-100 bg-stone-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest font-bold">Subtotal</span>
              <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center mb-6">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest text-xs h-auto">
              Checkout
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
