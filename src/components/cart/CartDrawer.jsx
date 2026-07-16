import React from 'react';
import { X, ShoppingBag, Trash2, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-black/5">
              <h2 className="text-sm uppercase tracking-[0.2em] font-medium">Your Bag (0)</h2>
              <button onClick={onClose} className="hover:opacity-70">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="text-muted-foreground" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Your treasure chest is empty</h3>
                <p className="text-sm text-muted-foreground">Discover pieces to cherish forever.</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-primary text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-all"
              >
                Start Shopping
              </button>
            </div>
            
            <div className="p-6 border-t border-black/5 bg-[#FAF9F6]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Subtotal</span>
                <span className="text-lg font-serif">$0.00</span>
              </div>
              <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest mb-6">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-accent text-white py-5 uppercase tracking-widest text-sm font-bold shadow-lg hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
