import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
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
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-background z-[101] shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-lg font-serif uppercase tracking-widest">Your Bag</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-muted rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <p className="font-serif italic text-muted-foreground">Your bag is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-accent text-white px-8 py-3 uppercase tracking-widest text-xs"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-muted overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1599643477877-530eb73bb8ec?auto=format&fit=crop&w=200&h=200&q=80"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 id={`cart-item-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                        <span className="text-sm">${item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4 uppercase tracking-tighter">{item.category}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-muted"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-muted"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive flex items-center gap-1 text-[10px] uppercase tracking-widest"
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-[#FAF9F6]">
                <div className="flex justify-between items-center mb-6">
                  <span className="uppercase tracking-widest text-xs font-semibold">Subtotal</span>
                  <span className="text-lg font-serif">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors">
                  Proceed to Checkout
                </button>
                <p className="text-center text-[10px] text-muted-foreground mt-4 uppercase tracking-widest">
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
