import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

export const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Close drawer if click outside (handled in a wrapper usually, but adding basic overlay click here)
  const handleOverlayClick = (e) => {
    if (e.target.id === 'cart-overlay') {
      setIsCartOpen(false);
    }
  };

  return (
    <>
      <div 
        id="cart-overlay"
        onClick={handleOverlayClick}
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-accent transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <ShoppingBag size={48} className="text-muted-foreground/30" />
              <p className="text-muted-foreground">Your cart is gently empty.</p>
              <Button 
                onClick={() => setIsCartOpen(false)}
                variant="outline"
                className="mt-4"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted flex-shrink-0 overflow-hidden rounded-sm">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-lg tracking-wide uppercase hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Finish: {item.variant}</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-border rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:bg-muted transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} className={item.quantity <= 1 ? 'text-muted-foreground/30' : ''} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:bg-muted transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <Button className="w-full text-lg h-14 uppercase tracking-widest" variant="accent">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
