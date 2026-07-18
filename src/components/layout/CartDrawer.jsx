import React, { useEffect, useRef } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div 
          ref={containerRef}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out"
        >
          <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-serif tracking-widest uppercase">Your Bag</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <ShoppingBag className="w-12 h-12 text-gray-200" />
                <div>
                  <p className="text-lg font-serif mb-2">Your bag is empty</p>
                  <p className="text-sm text-gray-500 font-light">Pieces you add will appear here.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 aspect-[4/5] bg-gray-50 overflow-hidden flex-shrink-0">
                      <img
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-name-${item.id}] jewelry`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="200"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between mb-1">
                          <h3 id={`cart-item-name-${item.id}`} className="text-[10px] font-bold uppercase tracking-widest mr-4">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs font-serif text-gray-500">${item.price}.00</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-100 h-8">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-full flex items-center justify-center hover:bg-gray-50 transition-colors border-r border-gray-100"
                          >
                            <Minus className="w-2 h-2" />
                          </button>
                          <span className="w-8 text-center text-[10px] font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-full flex items-center justify-center hover:bg-gray-50 transition-colors border-l border-gray-100"
                          >
                            <Plus className="w-2 h-2" />
                          </button>
                        </div>
                        <span className="text-[10px] font-bold tracking-widest">${item.price * item.quantity}.00</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="px-6 py-8 border-t border-gray-100 space-y-6">
              <div className="flex justify-between items-center text-luxury-black">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Subtotal</span>
                <span className="text-xl font-serif">${cartTotal}.00</span>
              </div>
              <button className="w-full bg-luxury-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-luxury-black/90 transition-all flex items-center justify-center gap-2">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
