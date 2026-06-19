import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const CartDrawer = ({ isOpen, onClose }) => {
  // Temporary mock data for cart
  const cartItems = [];

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={cn(
        "fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full uppercase tracking-[0.1em]">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-border">
            <h2 className="text-xl font-serif lowercase py-1">Your Bag</h2>
            <button onClick={onClose} className="hover:opacity-60 transition-opacity">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-grow overflow-y-auto p-8">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                <p className="text-muted-foreground font-light normal-case">Your bag is currently empty.</p>
                <button 
                  onClick={onClose}
                  className="bg-foreground text-background px-8 py-3 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-90"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Cart items would go here */}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-8 border-t border-border space-y-6">
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <p className="text-[10px] text-muted-foreground normal-case italic">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-foreground text-background py-4 text-sm font-medium uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
