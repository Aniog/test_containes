import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '101%' }}
            animate={{ x: 0 }}
            exit={{ x: '101%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-velmora-charcoal/5">
              <h2 className="text-sm font-sans uppercase tracking-ultra-wide font-semibold">Shopping Bag ({cart.reduce((acc, i) => acc + i.quantity, 0)})</h2>
              <button 
                onClick={onClose}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto px-8 py-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={48} strokeWidth={1} className="text-velmora-charcoal/20 mb-6" />
                  <p className="font-serif text-xl mb-6">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-xs uppercase tracking-ultra-wide font-sans underline underline-offset-8 hover:text-gold transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="w-20 h-24 bg-velmora-cream flex-shrink-0">
                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-serif uppercase tracking-wider">{item.name}</h3>
                          <button onClick={() => onRemove(item.id)} className="text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors">
                            <X size={14} />
                          </button>
                        </div>
                        <p className="text-xs text-velmora-charcoal/50 mb-4">{item.category}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-velmora-charcoal/10 rounded-sm">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Minus size={12} strokeWidth={3} />
                            </button>
                            <span className="px-2 text-xs font-sans min-w-[20px] text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Plus size={12} strokeWidth={3} />
                            </button>
                          </div>
                          <span className="text-sm font-sans">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-8 py-8 border-t border-velmora-charcoal/5 bg-velmora-cream/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-widest font-sans font-semibold">Subtotal</span>
                  <span className="text-lg font-sans font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-velmora-charcoal/50 text-center mb-6 uppercase tracking-widest">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full bg-velmora-charcoal text-white py-4 text-xs uppercase tracking-ultra-wide font-semibold hover:bg-gold transition-colors duration-500">
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
