import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();
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
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
            ref={containerRef}
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2 className="text-sm font-semibold uppercase tracking-widest flex items-center">
                Shopping Bag <span className="ml-2 text-neutral-400">({cart.length})</span>
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-12 h-12 text-neutral-200 mb-4" />
                  <p className="text-sm text-neutral-500 uppercase tracking-widest mb-8">Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn-premium w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-neutral-100 relative overflow-hidden flex-shrink-0">
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          data-strk-bg-id={`${item.imgId}-cart`}
                          data-strk-bg={`[ci-desc-${item.id}] [ci-title-${item.id}] jewelry`}
                          data-strk-bg-ratio="3x4"
                          data-strk-bg-width="200"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between mb-1">
                          <h3 id={`ci-title-${item.id}`} className="text-xs uppercase tracking-widest font-semibold">{item.name}</h3>
                          <span className="text-xs font-semibold">${item.price}</span>
                        </div>
                        <p id={`ci-desc-${item.id}`} className="text-[10px] text-neutral-500 uppercase tracking-tighter mb-4">{item.material}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-neutral-200">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-neutral-50"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-neutral-50"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-neutral-400 hover:text-black transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-neutral-100 bg-[#FAF9F6]">
                <div className="flex justify-between mb-6">
                  <span className="text-sm uppercase tracking-widest font-semibold">Subtotal</span>
                  <span className="text-sm font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest text-center mb-6">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="btn-premium w-full text-center">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
