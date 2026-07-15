import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => {
        document.body.style.overflow = 'unset';
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
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            ref={containerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5]">
              <h2 className="font-serif text-2xl tracking-widest uppercase">Your Bag</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="hover:text-gold transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-6 opacity-60">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-serif text-lg italic">Your bag is empty.</p>
                  <Button
                    variant="primary"
                    onClick={() => setIsCartOpen(false)}
                    className="tracking-widest"
                  >
                    START SHOPPING
                  </Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-[#F4F1ED] flex-shrink-0 relative overflow-hidden">
                      <img
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-name-${item.id}] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3
                            id={`cart-item-name-${item.id}`}
                            className="font-serif text-sm tracking-widest uppercase font-bold"
                          >
                            {item.name}
                          </h3>
                          <p className="text-sm font-medium font-sans">${item.price}</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
                          {item.material}
                        </p>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-[#E5E5E5]">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 px-2 hover:bg-[#F4F1ED] transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 px-2 hover:bg-[#F4F1ED] transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] flex items-center gap-1 text-muted-foreground hover:text-red-500 transition-colors uppercase tracking-widest mt-2"
                      >
                        <Trash2 size={12} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#E5E5E5] bg-[#F9F8F6]">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
                  <span className="text-xl font-serif tracking-widest">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase text-center tracking-extra-wide mb-6">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="flex flex-col gap-3">
                  <Button className="w-full tracking-[0.2em] font-bold">
                    SECURE CHECKOUT
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full border-[#1A1A1A]/10 text-[#1A1A1A]/60"
                  >
                    CONTINUE SHOPPING
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
