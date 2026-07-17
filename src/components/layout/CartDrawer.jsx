import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="text-sm tracking-[0.2em] font-medium uppercase font-serif">Shopping Bag</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground font-light mb-8">Your bag is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-primary text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-opacity-90 transition-all font-medium"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cart.map((item) => {
                const fields = item.data || item;
                return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-gray-50 overflow-hidden">
                      <img 
                        src={fields.images?.[0] || item.images?.[0]} 
                        alt={fields.name || item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-serif tracking-widest uppercase">{fields.name || item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4 font-light italic">
                        Tone: {item.variant}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border rounded-full px-3 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-medium tracking-tight">
                          ${((fields.price || item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-[#FAF9F6]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs tracking-widest uppercase font-medium">Subtotal</span>
              <span className="text-lg font-serif tracking-tighter">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center mb-6">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-white py-4 text-sm tracking-[0.2em] uppercase hover:bg-opacity-90 transition-all font-medium mb-4">
              Checkout
            </button>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full py-2 text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
