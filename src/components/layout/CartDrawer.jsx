import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, setCartOpen, updateQuantity, removeFromCart } = useStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cart]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />
          <motion.div
            ref={containerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-[101] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-velmora-stone">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart ({cart.length})</h2>
              <button onClick={() => setCartOpen(false)} className="hover:opacity-60 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <p className="text-velmora-charcoal/60 font-serif italic">Your cart is empty.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-xs uppercase tracking-widest font-medium border-b border-velmora-gold pb-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-velmora-stone overflow-hidden flex-shrink-0">
                      <img
                        data-strk-img-id={`c-img-${item.id}`}
                        data-strk-img={`[c-title-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect width='3' height='4' fill='%23F5F2ED'/%3E%3C/svg%3E"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 id={`c-title-${item.id}`} className="font-serif uppercase tracking-widest text-sm">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-velmora-charcoal/40 hover:text-velmora-onyx">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-velmora-charcoal/60 text-xs mt-1">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-velmora-stone px-2 py-1 gap-4">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-velmora-stone bg-velmora-stone/30">
                <div className="flex justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest font-medium">Subtotal</span>
                  <span className="text-xl font-serif font-medium">${total}</span>
                </div>
                <p className="text-[10px] text-velmora-charcoal/60 uppercase tracking-widest mb-6 text-center">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-velmora-onyx transition-colors">
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
