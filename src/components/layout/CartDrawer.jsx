import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { cn, formatPrice } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, getTotal } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div 
        ref={containerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-primary-bg shadow-2xl z-[70] transition-transform duration-500 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-stone">
          <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
          <button onClick={closeCart} className="p-1 hover:opacity-50 transition-opacity">
            <X size={24} className="stroke-1" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <ShoppingBag size={48} className="text-stone stroke-1" />
              <p className="text-muted text-sm tracking-widest uppercase">Your bag is empty</p>
              <button 
                onClick={closeCart}
                className="text-accent underline underline-offset-4 tracking-widest uppercase text-xs hover:opacity-70"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex space-x-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-24 h-32 bg-stone/20 overflow-hidden">
                  <img 
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={item.data?.images?.[0] || item.data?.name}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.data?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif uppercase text-sm tracking-widest">{item.data?.name}</h3>
                      <p className="text-sm">{formatPrice(item.data?.price)}</p>
                    </div>
                    <p className="text-[10px] text-muted uppercase tracking-wider mt-1">{item.variant}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-stone">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-2 hover:bg-stone/10 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-2 hover:bg-stone/10 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-[10px] uppercase tracking-wider text-muted hover:text-accent underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-widest font-serif">Subtotal</span>
              <span className="text-lg">{formatPrice(getTotal())}</span>
            </div>
            <button className="w-full bg-accent text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-black transition-all mb-4">
              Checkout
            </button>
            <p className="text-[10px] text-center text-muted uppercase tracking-wider">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
