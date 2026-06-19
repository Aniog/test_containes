import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
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
            className="fixed inset-0 bg-brand-charcoal/20 backdrop-blur-[2px] z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-charcoal/5 flex items-center justify-between">
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold">Your Bag</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-brand-cream rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center">
                    <ShoppingBag size={24} className="text-brand-charcoal/30" />
                  </div>
                  <p className="text-sm text-brand-espresso/60 font-sans tracking-wide">
                    Your shopping bag is empty.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs uppercase tracking-widest font-bold border-b border-brand-charcoal py-1 hover:text-brand-gold hover:border-brand-gold transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const fields = item.data || item;
                  return (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-brand-cream bg-cover bg-center shrink-0" 
                        data-strk-bg={`[item-${item.id}-title]`}
                        data-strk-bg-id={`cart-item-${item.id}`}
                      />
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h3 id={`item-${item.id}-title`} className="text-xs uppercase tracking-widest font-bold text-brand-charcoal">
                            {fields.name}
                          </h3>
                          <p className="text-xs text-brand-espresso/50 mt-1 uppercase font-semibold">
                            $ {fields.price}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-brand-charcoal/10 px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-brand-gold transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-sans w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-brand-gold transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] uppercase tracking-widest text-brand-espresso/40 hover:text-red-500 transition-colors underline underline-offset-4"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-brand-cream border-t border-brand-charcoal/5 space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest font-bold">
                  <span>Subtotal</span>
                  <span>$ {cartTotal}</span>
                </div>
                <p className="text-[10px] text-brand-espresso/40 italic font-sans">
                  Tax and shipping calculated at checkout.
                </p>
                <button className="w-full bg-brand-charcoal text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-charcoal/90 transition-colors">
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
