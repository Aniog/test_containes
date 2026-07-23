import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  // Placeholder cart items
  const cartItems = [];
  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {isCartEmpty ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground text-sm">Discover our latest additions.</p>
              </div>
              <Link 
                to="/shop" 
                onClick={onClose}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-none uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart items will go here */}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isCartEmpty && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between mb-4 font-medium">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <p className="text-muted-foreground text-xs mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;