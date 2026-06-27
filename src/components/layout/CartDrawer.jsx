import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-[#FBFAF8] z-[70] transition-transform duration-500 transform overflow-hidden flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E5E1DB] flex items-center justify-between">
          <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:opacity-60">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">Your bag is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="font-sans text-xs uppercase tracking-widest underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-32 bg-[#E5E1DB] flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-sm uppercase tracking-widest leading-snug">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-primary">
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="font-sans text-sm mt-1">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center border border-[#E5E1DB] w-fit">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-[#E5E1DB] transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-10 text-center font-sans text-xs">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-[#E5E1DB] transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#E5E1DB] space-y-4">
            <div className="flex justify-between items-center font-serif text-lg">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest text-center">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full bg-[#1A1A1A] text-white py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
