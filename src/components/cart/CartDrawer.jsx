import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <h2 className="text-xl font-serif">Your Cart</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-50">
                  <p className="font-serif italic text-lg">Your bag is empty</p>
                  <button onClick={onClose} className="text-xs uppercase letter-spacing-wide underline">Continue Shopping</button>
                </div>
              ) : (
                cartItems.map((item) => {
                  const data = item.data || item;
                  return (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-accent flex-shrink-0 overflow-hidden">
                        <img
                          data-strk-img-id={`cart-item-${item.id}`}
                          data-strk-img={`[cart-item-${item.id}-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=200&auto=format&fit=crop"
                          alt={data.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 id={`cart-item-${item.id}-title`} className="text-sm font-serif uppercase tracking-widest">{data.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-black">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">${data.price}</p>
                        
                        <div className="mt-auto flex items-center gap-4">
                          <div className="flex items-center border border-gray-200">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="p-6 border-t space-y-4 bg-accent/30">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase letter-spacing-wide">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                disabled={cartItems.length === 0}
                className="w-full bg-primary text-white py-4 uppercase letter-spacing-wide text-xs hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
