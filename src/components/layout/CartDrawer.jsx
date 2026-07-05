import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] transition-opacity duration-500',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-sm uppercase tracking-[0.2em] font-medium font-serif">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-1 hover:opacity-50">
            <X size={20} strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} strokeWidth={0.5} className="text-muted-foreground" />
              <p className="text-sm tracking-wide text-muted-foreground">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-widest border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-24 h-32 bg-secondary overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <h3 className="text-xs uppercase tracking-widest leading-relaxed">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-[10px] uppercase underline opacity-50 hover:opacity-100">
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">${item.price}</p>
                    <div className="mt-auto flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border border-border hover:bg-secondary"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-border hover:bg-secondary"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-slate-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest">Subtotal</span>
              <span className="text-sm font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mb-6">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
