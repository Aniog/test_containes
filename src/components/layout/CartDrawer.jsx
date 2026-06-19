import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { S3_DOMAIN } from '@/config';

export const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transition-transform duration-500 ease-in-out px-8 py-10 flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-sm uppercase tracking-[0.2em] font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-5 h-5 text-stone-400 hover:text-[#1A1A1A] transition-colors" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto -mx-2 px-2 scrollbar-hide">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-stone-200" />
              <p className="text-stone-500 text-sm font-light">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-widest border-b border-[#1A1A1A] pb-1"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-24 h-32 bg-stone-50 flex-shrink-0">
                    {/* Simplified image for cart */}
                    <div className="w-full h-full bg-stone-100 animate-pulse" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xs uppercase tracking-widest font-bold mb-1">{item.data?.name || item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-[10px] text-stone-400 hover:text-[#1A1A1A]"
                        >
                          REMOVE
                        </button>
                      </div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-2">Variant: {item.variant}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-stone-200">
                        <button 
                          disabled={item.quantity <= 1}
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-stone-50 disabled:opacity-30"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-stone-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-serif">${(item.data?.price || item.price) * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-8 border-t border-stone-100 mt-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest text-stone-500">Subtotal</span>
              <span className="text-lg font-serif">${cartTotal}</span>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center mb-6 italic">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-[#1A1A1A] text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#333333] transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
