import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => {
        document.body.style.overflow = 'auto';
        window.cancelAnimationFrame(frameId);
      };
    }
  }, [isCartOpen, cart]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] transition-visibility duration-300",
        isCartOpen ? "visible" : "invisible"
      )}
      ref={containerRef}
    >
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={cn(
          "absolute top-0 right-0 h-full w-full max-w-md bg-stone-50 transition-transform duration-500 flex flex-col shadow-2xl",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-stone-200">
          <h2 className="serif-caps text-lg">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-stone-500 hover:text-stone-900">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-serif italic">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-outline py-2"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-stone-100 flex-shrink-0">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[item-name-${item.id}] jewelry piece`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between">
                      <h3 id={`item-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-stone-400 hover:text-stone-900"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">{item.variant} Tone</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-stone-200 px-2 py-1 space-x-4">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                        className="text-stone-400 hover:text-stone-900"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                        className="text-stone-400 hover:text-stone-900"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-serif text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-stone-100 space-y-4">
            <div className="flex justify-between items-center font-serif">
              <span className="text-stone-500">Subtotal</span>
              <span className="text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary py-4">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
