import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-full sm:w-[400px] h-full bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-border/50">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
            <h2 className="font-serif text-2xl font-medium tracking-wide">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6 px-6 hide-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
                <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
                <p className="font-serif text-xl text-foreground">Your cart is empty</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-sm border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors mt-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-20 bg-muted shrink-0 overflow-hidden relative group">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:opacity-0 transition-opacity duration-500"
                      />
                      <img 
                        src={item.imageHover || item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-1 py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif font-medium uppercase text-sm tracking-widest">{item.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-1 -mr-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="mt-auto flex justify-between items-end">
                        <div className="flex items-center border border-border">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">${item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border/50 px-6 py-6 bg-background space-y-4">
              <div className="flex justify-between text-lg font-serif">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 uppercase tracking-widest text-sm font-medium transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
