import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, getTotal } = useCartStore();
  
  const total = getTotal();

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl transition-transform duration-500 ease-in-out px-6 py-8 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-serif uppercase tracking-widest transition-opacity">Your Cart ({items.length})</h2>
          <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-6">
          {items.length === 0 ? (
            <div className="h-40 flex flex-col items-center justify-center gap-4 text-muted-foreground">
              <p className="font-sans italic">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-widest underline underline-offset-4 hover:text-foreground"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 group">
                <div className="w-20 h-24 bg-muted overflow-hidden">
                   <img 
                    src={item.data.images?.[0] || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'} 
                    alt={item.data.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-serif uppercase tracking-widest">{item.data.name}</h3>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-muted"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-muted"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="text-sm font-sans">${item.data.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-border mt-6 space-y-4">
            <div className="flex justify-between items-center text-lg font-serif">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-accent text-white py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-foreground transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
