import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] transition-opacity duration-500',
        isCartOpen ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b-[0.5px] border-slate-100">
          <h2 className="font-serif text-xl uppercase tracking-widest">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="font-sans text-slate-500 uppercase tracking-widest text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="font-sans text-xs uppercase tracking-widest underline underline-offset-8 decoration-[#C5A059]"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-32 bg-slate-50 flex-shrink-0 overflow-hidden">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-title-${item.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col pt-1">
                  <div className="flex justify-between">
                    <h3 id={`cart-item-title-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="w-4 h-4 text-slate-300 hover:text-red-400 transition-colors" />
                    </button>
                  </div>
                  <p className="text-[#C5A059] font-sans font-medium text-sm mt-1">${item.price}</p>
                  
                  <div className="mt-auto mb-1 flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 border-[0.5px] border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-sans text-xs w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 border-[0.5px] border-slate-200 flex items-center justify-center hover:bg-slate-50"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t-[0.5px] border-slate-100 space-y-4">
            <div className="flex justify-between items-end">
              <span className="font-sans text-xs uppercase tracking-widest text-slate-500">Subtotal</span>
              <span className="font-serif text-2xl font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-slate-400 font-sans tracking-tight text-center italic">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-[#1A1A1A] text-white py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
