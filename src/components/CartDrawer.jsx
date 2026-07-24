import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 text-muted-foreground">
                  <p className="font-serif italic">Your cart is empty</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-sm uppercase tracking-widest underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <div className="w-24 h-24 aspect-square bg-secondary overflow-hidden">
                      <img 
                        src={item.images?.[0]} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-serif uppercase tracking-widest">{item.name}</h3>
                          <button onClick={() => removeItem(item.id, item.variant)}>
                            <Trash2 size={14} className="text-muted-foreground hover:text-destructive" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3 border px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}>
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}>
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t space-y-4">
                <div className="flex justify-between text-lg font-serif">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-primary text-white py-4 uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors">
                  Checkout Now
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
