import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/30 z-[60] transition-opacity duration-500',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-sm font-bold uppercase tracking-widest">Your Bag ({cart.length})</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:text-[#C5A059] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-neutral-500 font-serif italic text-lg">Your bag is currently empty.</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-[#C5A059] text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-transform hover:scale-105"
              >
                Shop New Arrivals
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-neutral-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-serif uppercase tracking-widest text-neutral-800">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id, item.variant)}>
                        <Trash2 className="w-4 h-4 text-neutral-400 hover:text-red-500 transition-colors" />
                      </button>
                    </div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">{item.variant} Tone</p>
                    <p className="text-xs font-bold mt-2">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-600">
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, -1)}
                      className="w-6 h-6 border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, 1)}
                      className="w-6 h-6 border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-neutral-100 space-y-4">
            <div className="flex justify-between items-center uppercase tracking-widest text-xs font-bold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-[#C5A059] text-white py-4 uppercase tracking-widest text-xs font-bold transition-transform hover:scale-[1.02] active:scale-100 shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
