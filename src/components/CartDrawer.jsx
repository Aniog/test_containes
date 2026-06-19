import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-brand-sand z-50 shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-black/10">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-charcoal/60">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-serif text-xl">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-primary hover:underline uppercase tracking-wider text-sm mt-4 inline-block"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-white rounded overflow-hidden flex-shrink-0 border border-black/5">
                    <img src={item.images ? item.images[0] : item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg leading-tight pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-brand-charcoal/50 hover:text-black mt-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      {item.variant && (
                        <p className="text-xs text-brand-charcoal/60 mt-1 capitalize">{item.variant}</p>
                      )}
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-black/20 rounded-full overflow-hidden h-8">
                        <button 
                          className="w-8 h-full flex items-center justify-center hover:bg-black/5 text-brand-charcoal"
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          className="w-8 h-full flex items-center justify-center hover:bg-black/5 text-brand-charcoal"
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-black/10 p-6 bg-white shrink-0">
            <div className="flex justify-between items-center mb-6 font-serif text-xl">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-center text-brand-charcoal/60 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-brand-charcoal text-white tracking-widest uppercase py-4 rounded hover:bg-primary transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}