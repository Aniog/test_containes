import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cartItems]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col"
            ref={containerRef}
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl tracking-wide">Shopping Bag</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-stone-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-8 no-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="font-serif text-2xl italic text-stone-400">Your bag is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn btn-outline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-stone-100 flex-shrink-0">
                      <img 
                        data-strk-img-id={`cart-${item.id}`}
                        data-strk-img={`[cart-title-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 id={`cart-title-${item.id}`} className="font-serif uppercase tracking-widest text-sm font-medium">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-stone-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest">{item.variant}</p>
                        <p className="text-sm font-medium mt-1 font-sans">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-stone-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-stone-50"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-stone-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-stone-100 space-y-4">
                <div className="flex justify-between items-center px-2">
                  <span className="font-sans uppercase tracking-[0.2em] text-[10px] font-semibold">Subtotal</span>
                  <span className="font-serif text-xl">${cartTotal}</span>
                </div>
                <p className="text-[10px] text-stone-500 text-center uppercase tracking-widest px-2 leading-relaxed">
                  Shipping, taxes, and discounts codes calculated at checkout.
                </p>
                <button className="btn btn-primary w-full">
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
