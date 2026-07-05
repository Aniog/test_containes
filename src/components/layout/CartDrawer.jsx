import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-secondary h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <p className="font-serif italic text-muted-foreground text-lg text-center">Your jewelry box is empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm uppercase tracking-widest underline decoration-accent underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-muted relative overflow-hidden">
                   <img
                    alt={item.name}
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-title-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 id={`cart-item-title-${item.id}`} className="font-serif tracking-widest uppercase text-sm">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id, item.variant)}>
                        <Trash2 className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                    <p className="text-sm mt-1">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      className="p-1 border border-border hover:bg-white transition-colors"
                      onClick={() => updateQuantity(item.id, item.variant, -1)}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs w-4 text-center">{item.quantity}</span>
                    <button
                      className="p-1 border border-border hover:bg-white transition-colors"
                      onClick={() => updateQuantity(item.id, item.variant, 1)}
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
          <div className="p-6 border-t border-border space-y-4 bg-white">
            <div className="flex justify-between items-center bg-transparent">
              <span className="text-sm uppercase tracking-widest text-[#1A1A1A]">Subtotal</span>
              <span className="text-lg font-serif text-[#1A1A1A]">${cartTotal}</span>
            </div>
            <p className="text-[10px] text-[#717171] uppercase tracking-widest text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-primary text-secondary text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
