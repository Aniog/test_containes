import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { CURRENCY } from '@/config';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h2 className="text-sm font-serif tracking-[0.2em] uppercase font-bold">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:opacity-40 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <ShoppingBag className="w-10 h-10 mb-4 opacity-10" />
                  <p className="font-serif italic text-lg">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-[10px] uppercase tracking-widest border-b border-primary pb-1 hover:opacity-60 transition-opacity"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-5">
                      <div className="w-24 h-32 bg-muted flex-shrink-0 overflow-hidden">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] leading-snug max-w-[160px]">{item.name}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-primary transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground font-serif italic">{CURRENCY}{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-black/10 rounded-full px-3 py-1.5">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-0.5 hover:opacity-50 transition-opacity">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs w-8 text-center font-medium">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-0.5 hover:opacity-50 transition-opacity">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-black/5 bg-white space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="text-xl font-serif text-accent">{CURRENCY}{cartTotal.toFixed(2)}</span>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest text-center italic">
                    Shipping and taxes calculated at checkout
                  </p>
                  <button className="w-full bg-primary text-white py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-neutral-800 transition-all shadow-lg active:scale-[0.98]">
                    Checkout
                  </button>
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
