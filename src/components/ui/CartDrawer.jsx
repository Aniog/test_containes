import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '../../lib/utils.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
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
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      <div
        ref={containerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-8 border-b border-gray-100 mt-14 md:mt-0">
          <h2 className="font-serif text-xl uppercase tracking-widest">Shopping Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:opacity-60 transition-opacity">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <ShoppingBag size={48} strokeWidth={1} className="text-gray-200" />
              <div>
                <p className="font-serif text-lg mb-2 text-gray-400">Your bag is empty</p>
                <button onClick={() => setIsCartOpen(false)} className="text-sm font-sans uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">Continue Shopping</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-24 h-32 bg-gray-50 flex-shrink-0">
                    {item.imgId === "1" && <img data-strk-img-id="product-img-1" data-strk-img={"[item-name-" + item.id + "] jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={item.name} className="w-full h-full object-cover" />}
                    {item.imgId === "2" && <img data-strk-img-id="product-img-2" data-strk-img={"[item-name-" + item.id + "] jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={item.name} className="w-full h-full object-cover" />}
                    {item.imgId === "3" && <img data-strk-img-id="product-img-3" data-strk-img={"[item-name-" + item.id + "] jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={item.name} className="w-full h-full object-cover" />}
                    {item.imgId === "4" && <img data-strk-img-id="product-img-4" data-strk-img={"[item-name-" + item.id + "] jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={item.name} className="w-full h-full object-cover" />}
                    {item.imgId === "5" && <img data-strk-img-id="product-img-5" data-strk-img={"[item-name-" + item.id + "] jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={item.name} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 id={'item-name-' + item.id} className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                        <p className="font-sans text-sm font-medium">{'$' + item.price}</p>
                      </div>
                      <p className="text-xs text-gray-400 font-sans uppercase tracking-widest">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 py-1 px-3 gap-4">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:opacity-60"><Minus size={14} /></button>
                        <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:opacity-60"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-[10px] font-sans uppercase tracking-widest text-gray-400 border-b border-transparent hover:border-gray-400 transition-all">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-[#faf9f6]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif uppercase tracking-widest">Subtotal</span>
              <span className="font-sans font-medium text-lg">{'$' + cartTotal}</span>
            </div>
            <p className="text-xs text-gray-400 font-sans mb-8 leading-relaxed">Shipping, taxes, and discounts calculated at checkout.</p>
            <button className="w-full bg-black text-white font-sans uppercase tracking-widest py-5 hover:bg-black/90 transition-colors">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
