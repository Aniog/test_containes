import React from 'react';
import { useCart } from '@/lib/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      <div className={cn(
        "fixed right-0 top-0 h-full w-full max-w-md bg-velmora-base z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between border-b border-velmora-accent/20">
          <h2 className="text-xl font-serif tracking-widest uppercase font-medium">Your Bag</h2>
          <button onClick={() => setIsOpen(false)} className="hover:text-velmora-accent">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-velmora-muted gap-4">
              <p className="font-serif italic">Your bag is currently empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-widest border-b border-velmora-dark pb-1 text-velmora-dark font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.option}`} className="flex gap-4 group">
                <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <img 
                    src={item.data.main_image} 
                    alt={item.data.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-serif uppercase tracking-widest font-medium">{item.data.name}</h3>
                      <p className="text-[10px] uppercase text-velmora-muted tracking-wider mt-1">{item.option}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.option)}
                      className="text-velmora-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center border border-velmora-accent/30 px-2 py-1 gap-4">
                      <button onClick={() => updateQuantity(item.id, item.option, -1)}><Minus size={12} /></button>
                      <span className="text-xs font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.option, 1)}><Plus size={12} /></button>
                    </div>
                    <span className="text-sm font-medium tracking-wide">${(item.data.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-accent/20 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
              <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-velmora-muted uppercase tracking-wider mb-6 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-dark text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-velmora-accent transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
