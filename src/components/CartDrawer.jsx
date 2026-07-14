import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

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
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold uppercase tracking-widest">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <span id="cart-item-context" className="hidden">jewelry luxury product</span>
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-serif">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn-outline px-8"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-brand-beige overflow-hidden">
                       {/* data-strk-img here or just placeholder */}
                       <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                        data-strk-img={`[cart-item-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}-title] [cart-item-context]`}
                        data-strk-img-id={`cart-item-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        alt={item.name}
                        className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 id={`cart-item-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}-title`} className="uppercase font-bold tracking-widest text-xs">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-muted-foreground hover:text-red-500"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{item.variant}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-3 border px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.variant, -1)} className="hover:text-accent">
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.variant, 1)} className="hover:text-accent">
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-serif text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="uppercase tracking-widest text-[10px] font-bold text-muted-foreground">Subtotal</span>
                  <span className="text-xl font-serif font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-muted-foreground italic">Shipping and taxes calculated at checkout.</p>
                <button className="btn-premium w-full py-4 uppercase tracking-[0.2em] text-xs">
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
