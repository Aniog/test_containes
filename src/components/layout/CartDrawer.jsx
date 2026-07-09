import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Right Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-stone-100">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-stone-50 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[50vh] space-y-6">
                <p className="text-stone-500 font-sans uppercase tracking-widest text-sm">Your bag is empty</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-charcoal text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-300"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-stone-50 relative overflow-hidden group">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-${item.id}-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.data.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-${item.id}-title`} className="text-sm font-medium uppercase tracking-widest">{item.data.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-stone-400 hover:text-charcoal transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">{item.variant}</p>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border border-stone-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-stone-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-stone-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">${item.data.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-stone-200 p-6 space-y-6">
              <div className="flex justify-between text-base font-medium uppercase tracking-widest">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <p className="text-xs text-stone-400 text-center uppercase tracking-widest">Shipping and taxes calculated at checkout</p>
              <button className="w-full bg-charcoal text-white py-4 text-xs uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-gold transition-colors duration-300">
                Checkout
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
