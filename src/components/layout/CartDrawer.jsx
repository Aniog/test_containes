import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:opacity-60">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <p className="text-zinc-500 italic">Your bag is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const staticImgId = `shop-${item.id}`;
              return (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-zinc-100 flex-shrink-0">
                    <img
                      data-strk-img-id={staticImgId}
                      data-strk-img={`[cart-item-name-${item.id}] jewelry`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <p id={`cart-item-name-${item.id}`} className="text-sm font-serif tracking-wider uppercase">{item.name}</p>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-zinc-400 hover:text-primary"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1">{item.variant}</p>
                      <p className="text-sm mt-2">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 border w-fit px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="text-zinc-500 hover:text-primary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="text-zinc-500 hover:text-primary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t gap-4 flex flex-col bg-zinc-50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm uppercase tracking-widest">Subtotal</span>
              <span className="text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest text-center mb-2">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
