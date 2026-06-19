import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getTotal } = useCart();

  const subtotal = getTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag ({items.length})</h2>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-60">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4">
                  <ShoppingBag className="w-12 h-12 stroke-[1px]" />
                  <p className="font-sans text-xs uppercase tracking-widest">Your bag is empty</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-primary text-primary-foreground px-8 py-3 text-[10px] uppercase tracking-[0.2em]"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-secondary overflow-hidden">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-title-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => setIsOpen(false)}
                          id={`cart-item-title-${item.id}`}
                          className="font-serif text-sm uppercase tracking-wide hover:opacity-60"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                        {item.variant}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:bg-secondary"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-sans">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:bg-secondary"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-sans">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t bg-secondary/30">
                <div className="flex justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Subtotal</span>
                  <span className="font-sans font-medium text-lg">${subtotal}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
                <p className="text-center text-[8px] uppercase tracking-widest text-muted-foreground mt-4">
                  Shipping & taxes calculated at checkout
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
