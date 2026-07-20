import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../lib/CartContext';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 className="font-serif text-xl tracking-widest uppercase">Your Bag</h2>
              <button onClick={onClose} className="p-2 hover:opacity-70 transition-opacity">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="uppercase-widest text-xs">Your bag is empty</p>
                  <button
                    onClick={onClose}
                    className="btn-outline mt-4"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="w-24 h-32 bg-zinc-100 overflow-hidden flex-shrink-0">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-sm tracking-wide uppercase">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-zinc-400 hover:text-zinc-900 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-xs text-zinc-500 mt-1">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-3 mt-4">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 border border-zinc-200 hover:border-zinc-900 transition-colors text-zinc-500 hover:text-zinc-900"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 border border-zinc-200 hover:border-zinc-900 transition-colors text-zinc-500 hover:text-zinc-900"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="uppercase-widest text-xs font-semibold">Subtotal</span>
                  <span className="font-serif text-lg tracking-wide">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn-premium w-full tracking-widest text-[10px] py-4 mb-3">
                  Proceed to Checkout
                </button>
                <p className="text-[10px] text-center text-zinc-400 uppercase-widest">
                  Shipping and taxes calculated at checkout
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
