import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

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
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-border">
              <h2 className="text-xl font-serif uppercase tracking-widest">Shopping Bag</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <p className="font-serif italic text-lg text-foreground/60">Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-secondary flex-shrink-0 relative overflow-hidden">
                      <img 
                        data-strk-img-id={`cart-img-${item.id}`}
                        data-strk-img={`[cart-name-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.data?.name || item.name}
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 id={`cart-name-${item.id}`} className="font-serif uppercase tracking-wider text-sm">
                            {item.data?.name || item.name}
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-foreground/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-foreground/60 mt-1">
                          Tone: {item.variant}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-border px-2 py-1 space-x-4">
                          <button onClick={() => updateQuantity(item.id, item.variant, -1)} className="hover:text-accent">
                            <Minus size={12} />
                          </button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.variant, 1)} className="hover:text-accent">
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-serif text-sm">
                          \${((item.data?.price || item.price || 0) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-border space-y-6">
                <div className="flex justify-between items-center text-sm uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="font-serif text-lg font-medium">\${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-foreground text-white py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500">
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
