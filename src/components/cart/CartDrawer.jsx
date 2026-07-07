import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  // Placeholder cart data
  const cartItems = [];
  const isEmpty = cartItems.length === 0;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <SheetTitle className="font-serif uppercase tracking-widest text-lg">Your Cart</SheetTitle>
          <button onClick={onClose} className="text-muted-foreground hover:text-primary transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {isEmpty ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <Button asChild onClick={onClose} variant="outline" className="uppercase tracking-wider font-serif rounded-none border-primary hover:bg-primary hover:text-white transition-colors">
                <Link to="/collections/all">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart items will go here */}
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className="p-6 bg-secondary/20 border-t border-border space-y-4">
            <div className="flex justify-between font-serif text-lg">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full uppercase tracking-wider font-serif py-6 rounded-none bg-primary hover:bg-velmora-gold transition-colors">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;