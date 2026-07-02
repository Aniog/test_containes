import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <p className="font-serif text-xl text-muted-foreground">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                <div className="w-24 h-32 bg-muted relative overflow-hidden bg-secondary">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-title-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`cart-item-title-${item.id}`} className="font-serif text-lg leading-tight mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.tone} tone</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.tone)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border border-border rounded-sm">
                    <button 
                      className="px-3 py-1 text-muted-foreground hover:text-foreground"
                      onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button 
                      className="px-3 py-1 text-muted-foreground hover:text-foreground"
                      onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="font-medium">${item.price * item.quantity}</span>
                </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
              <span className="font-serif text-2xl">${cartTotal}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 rounded text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;