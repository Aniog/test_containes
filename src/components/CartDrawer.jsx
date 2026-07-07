import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-50 shadow-xl transition-transform duration-300 ease-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-border" />
              <p className="text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-primary mt-4 border border-foreground px-6 py-3 uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border/50">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="py-6 flex gap-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-muted rounded-none overflow-hidden shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif uppercase tracking-widest text-sm leading-tight text-foreground pr-4">
                          {item.name}
                        </h3>
                        <p className="font-medium text-sm whitespace-nowrap">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button 
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, 0)}
                        className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium">Subtotal</span>
              <span className="font-serif text-xl border-b border-background">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <Link 
               to="/checkout"
               onClick={() => setIsCartOpen(false)}
               className="w-full block text-center bg-primary text-primary-foreground py-4 uppercase tracking-widest text-xs font-medium hover:bg-primary/90 transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
