import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-background z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-hairline border-accent/20 flex items-center justify-between">
              <h2 className="font-serif text-2xl tracking-tight uppercase">Bag</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} strokeWidth={0.5} className="text-muted-foreground" />
                  <p className="font-serif text-xl">Your bag is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs uppercase tracking-widest text-accent border-b border-accent py-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-secondary flex-shrink-0">
                      <img
                        src={`https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-lg tracking-tight leading-tight uppercase">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                          Tone: {item.variant}
                        </p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-hairline border-accent/20">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="p-1 px-2 hover:bg-secondary"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs px-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="p-1 px-2 hover:bg-secondary"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-serif text-lg">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-hairline border-accent/20 bg-secondary/30 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest">Subtotal</span>
                  <span className="font-serif text-2xl">${cartTotal}</span>
                </div>
                <p className="text-[10px] text-muted-foreground italic text-center">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-foreground text-background py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent transition-colors">
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
