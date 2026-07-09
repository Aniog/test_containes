import React, { useRef, useEffect } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cartItems]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] transition-opacity duration-500',
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={containerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-[#FDFCFB] z-[101] shadow-2xl transition-transform duration-500 ease-in-out px-8 py-10 flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-serif">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="w-12 h-12 text-[#9D8C70]/30 mb-4" />
            <p className="text-sm font-sans text-muted-foreground uppercase tracking-wider">Your cart is empty</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-8 bg-[#1A1A1A] text-white px-8 py-4 uppercase text-xs tracking-luxury hover:opacity-90 active:scale-95 transition-all"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-8 no-scrollbar">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex space-x-4 border-b border-[#E5E5E5]/50 pb-8">
                  <div className="w-24 h-32 bg-[#F9F8F6] flex-shrink-0">
                     <img
                      data-strk-img-id={`cart-thumb-${item.id}`}
                      data-strk-img={`[cart-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 id={`cart-title-${item.id}`} className="text-sm font-serif uppercase tracking-luxury mb-1">{item.name}</h3>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.tone} Tone</p>
                      </div>
                      <span className="text-sm font-sans">${item.price}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-[#E5E5E5]">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-2 hover:bg-[#F9F8F6]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-2 hover:bg-[#F9F8F6]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[#1A1A1A]/10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-sans uppercase tracking-widest">Subtotal</span>
                <span className="text-xl font-serif">${cartTotal}</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-8 text-center italic">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-[#1A1A1A] text-white py-5 uppercase text-xs tracking-luxury hover:opacity-90 active:scale-[0.98] transition-all">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
