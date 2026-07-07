import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl transition-transform duration-300 ease-in-out px-8 py-8 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart (0)</h2>
          <button onClick={onClose} className="p-2 -mr-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center space-y-4 text-center">
          <ShoppingBag className="w-12 h-12 text-muted/50 mb-2" />
          <p className="font-serif italic text-lg text-muted-foreground">Your jewelry box is empty.</p>
          <button
            onClick={onClose}
            className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-all"
          >
            Start Shopping
          </button>
        </div>

        <div className="border-t border-muted/30 pt-8 mt-auto space-y-4">
          <div className="flex justify-between text-sm uppercase tracking-widest">
            <span>Subtotal</span>
            <span>bash.00</span>
          </div>
          <p className="text-[10px] text-muted-foreground italic">Shipping and taxes calculated at checkout.</p>
          <button className="w-full bg-foreground text-background py-4 text-sm uppercase tracking-widest hover:bg-black/90 transition-all font-medium">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
