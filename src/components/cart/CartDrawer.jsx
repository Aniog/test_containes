import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

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
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground opacity-20" />
                  <p className="text-muted-foreground font-serif text-lg tracking-wide">Your drawer is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-charcoal text-white text-xs uppercase tracking-widest hover:bg-velmora-gold transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-cream overflow-hidden">
                      <img 
                         data-strk-img-id={`cart-item-${item.id}`}
                         data-strk-img={`[cart-item-title-${item.id}]`}
                         data-strk-img-ratio="2x3"
                         data-strk-img-width="200"
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                         alt={item.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 id={`cart-item-title-${item.id}`} className="text-sm font-serif uppercase tracking-wider">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">{item.variant} Tone</p>
                        <div className="flex items-center border border-border w-max">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-cream transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-cream transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm font-medium tracking-wide">${item.price * item.quantity}.00</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-border bg- cream/30 space-y-6">
                <div className="flex justify-between items-center text-lg font-serif">
                  <span className="uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="font-bold tracking-wider">${cartTotal}.00</span>
                </div>
                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full py-4 bg-charcoal text-white text-xs uppercase tracking-widest hover:bg-velmora-gold transition-colors">
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
