import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CartItem from './CartItem';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        ref={containerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transition-transform duration-500 ease-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 border-b border-velmora-border flex items-center justify-between">
          <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-5 h-5 text-velmora-dark" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-velmora-border" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-widest font-semibold border-b border-velmora-dark pb-1"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-32 bg-velmora-beige flex-shrink-0">
                   <img
                    data-strk-img-id={`product-${item.id}-main`}
                    data-strk-img={`[cart-item-name-${item.id}] jewelry luxury`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 id={`cart-item-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)}>
                      <X className="w-4 h-4 text-velmora-muted" />
                    </button>
                  </div>
                  <p className="text-xs text-velmora-muted mb-4">${item.price}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-velmora-border px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium font-serif">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-border bg-velmora-cream">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal}</span>
            </div>
            <button className="w-full bg-velmora-dark text-white py-4 text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold transition-colors duration-300">
              Checkout
            </button>
            <p className="text-[10px] text-center text-velmora-muted mt-4 uppercase tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
