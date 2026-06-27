import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-20">
                  <ShoppingBag className="w-12 h-12 mb-4 stroke-[1]" />
                  <p className="font-sans uppercase tracking-widest text-sm">Your bag is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-32 bg-muted/50 rounded-sm overflow-hidden flex-shrink-0">
                       <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={item.images[0]}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.name}
                       />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif uppercase tracking-wider text-sm">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-black/40 hover:text-black transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-black/60 text-xs font-sans mb-4">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-black/10 rounded-full px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-gold transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-gold transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-sans ml-auto">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-black/5 bg-primary/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans uppercase tracking-[0.2em] text-xs">Total</span>
                  <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-gold text-white py-4 font-sans uppercase tracking-widest text-sm hover:bg-[#C4A027] transition-colors">
                  Checkout
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-4 text-center font-sans uppercase tracking-[0.2em] text-[10px] opacity-60 hover:opacity-100 transition-opacity"
                >
                  Continue Shopping
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
import { ShoppingBag } from 'lucide-react';
