import React from 'react';
import { useCart } from './CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg leading-tight pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Variant: {item.variant}</p>
                      <p className="mt-1">${item.price}</p>
                    </div>
                    <div className="flex items-center border border-border w-fit mt-2">
                      <button 
                        className="px-2 py-1 hover:bg-muted"
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 hover:bg-muted"
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6 font-serif text-xl">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
