import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();
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
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
          />
          <motion.div
            ref={containerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[110] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart ({cart.length})</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <p className="font-serif text-lg mb-4 text-muted-foreground">Your cart is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-sm font-sans underline underline-offset-4 uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`jewelry gold earring necklace necklace earring ${item.name}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif uppercase text-sm tracking-widest">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-foreground">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm font-sans font-medium">${item.price}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border px-3 py-1 gap-4">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-border bg-muted/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-sans uppercase tracking-[0.1em]">Subtotal</span>
                  <span className="text-lg font-sans font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 uppercase font-sans text-sm tracking-widest hover:opacity-90 transition-opacity">
                  Checkout
                </button>
                <p className="text-[11px] text-center text-muted-foreground mt-4 font-sans">
                  Shipping, taxes, and discounts calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
