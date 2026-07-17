import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const drawerRef = useRef(null);
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-velmora-base z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex flex-col h-full" ref={drawerRef}>
              <div className="p-6 border-b border-velmora-surface flex items-center justify-between">
                <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="hover:rotate-90 transition-transform duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <p className="font-serif italic text-lg text-velmora-muted">Your bag is currently empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="border-b border-velmora-primary uppercase spacing py-1 text-sm font-medium hover:text-velmora-accent hover:border-velmora-accent transition-all"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 group">
                      <div className="w-24 h-32 bg-velmora-surface overflow-hidden relative">
                           <img 
                              alt={item.name}
                              className="w-full h-full object-cover"
                              data-strk-img={`gold jewelry ${item.category} ${item.name}`}
                              data-strk-img-id={`cart-img-${item.id}`}
                              data-strk-img-ratio="3x4"
                              data-strk-img-width="200"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id, item.variant)}
                              className="text-velmora-muted hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-xs text-velmora-muted mt-1">{item.variant}</p>
                          <p className="text-sm mt-2">{formatPrice(item.price)}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-velmora-surface rounded-full px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-1 hover:text-velmora-accent"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-1 hover:text-velmora-accent"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-velmora-surface bg-velmora-surface/30 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-velmora-muted text-sm uppercase tracking-widest">Subtotal</span>
                    <span className="text-xl font-serif">{formatPrice(cartTotal)}</span>
                  </div>
                  <p className="text-[10px] text-center text-velmora-muted uppercase tracking-widest">
                    Shipping and taxes calculated at checkout
                  </p>
                  <button className="w-full bg-velmora-primary text-white py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-velmora-accent transition-colors duration-300">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
