import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      document.body.style.overflow = 'hidden';
      return () => window.cancelAnimationFrame(frameId);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        ref={containerRef}
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-md bg-[#FCFBF7] z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-8 flex items-center justify-between border-b border-zinc-100">
          <h2 className="font-serif text-2xl tracking-tight">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto no-scrollbar p-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-8">
              <ShoppingBag className="w-16 h-16 text-zinc-200" />
              <div>
                <p className="font-serif text-xl text-zinc-500 mb-4">Your bag is currently empty.</p>
                <Link 
                  to="/shop" 
                  onClick={() => setIsCartOpen(false)}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-[#1C1C1C] pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 pb-8 border-b border-zinc-50 last:border-0 last:pb-0">
                  <div className="w-24 aspect-[4/5] bg-zinc-100 flex-shrink-0 overflow-hidden">
                    <img 
                      data-strk-img-id={item.imgIdCart}
                      data-strk-img={`[${item.nameId}] [${item.descId}] gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow py-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 id={item.nameId} className="font-serif text-sm tracking-widest uppercase">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-zinc-300 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p id={item.descId} className="hidden">{item.description}</p>
                    <p className="text-zinc-400 text-xs mb-4 uppercase tracking-tighter">18K Gold Plated</p>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center gap-4 border border-zinc-100 px-3 py-1.5 rounded-full">
                        <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-zinc-400"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-zinc-400"><Plus className="w-3 h-3" /></button>
                      </div>
                      <span className="text-sm font-sans font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-8 border-t border-zinc-100 bg-white">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Subtotal</span>
              <span className="text-xl font-serif tracking-tight">${cartTotal}</span>
            </div>
            <button className="w-full bg-[#1C1C1C] text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-800 transition-colors mb-4">
              Proceed to Checkout
            </button>
            <p className="text-center text-[10px] text-zinc-400 uppercase tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
