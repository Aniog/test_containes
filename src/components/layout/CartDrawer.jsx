import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FDFCF8] z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-[#E5E5E5]">
              <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-[#1A1A1A]/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag className="w-12 h-12 text-[#717171] mb-4 opacity-20" />
                  <p className="text-[#717171] font-serif italic mb-8">Your cart is currently empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#1A1A1A] text-white px-8 py-3 tracking-widest text-xs font-semibold hover:bg-opacity-90 transition-luxury"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-[#F5F5F3] flex-shrink-0">
                         {/* Stock Image Placeholder */}
                         <img 
                          data-strk-img={`[cart-item-${item.id}-title]`}
                          data-strk-img-id={`cart-item-${item.id}`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          alt={item.name}
                          className="w-full h-full object-cover"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <h3 id={`cart-item-${item.id}-title`} className="font-serif text-sm tracking-widest uppercase mb-1">
                            {item.name}
                          </h3>
                          <p className="text-[#717171] text-xs mb-4">${item.price}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[#E5E5E5]">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 px-2 hover:bg-[#1A1A1A]/5 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 px-2 hover:bg-[#1A1A1A]/5 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#717171] hover:text-red-500 transition-colors"
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
              <div className="p-6 border-t border-[#E5E5E5] space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="tracking-widest uppercase text-[#717171]">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#717171] italic text-center uppercase tracking-widest leading-loose">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-[#C5A059] text-white py-4 tracking-widest text-xs font-semibold hover:bg-opacity-90 transition-luxury uppercase mt-4 shadow-lg shadow-[#C5A059]/10">
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
