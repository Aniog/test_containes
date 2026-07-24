import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../cart/CartItem';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

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
            className="fixed inset-0 bg-black/30 z-[100] backdrop-blur-sm"
          />
          
          {/* Side Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-charcoal/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl tracking-widest-editorial uppercase">Your Bag</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:text-gold transition-colors p-2"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <p className="font-serif text-2xl text-charcoal/40">Your bag is currently empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="font-sans text-xs tracking-[0.3em] uppercase font-bold border-b-2 border-charcoal pb-1 hover:text-gold hover:border-gold transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <CartItem 
                      key={`${item.id}-${item.variant}`}
                      item={item}
                      removeFromCart={removeFromCart}
                      updateQuantity={updateQuantity}
                    />
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-charcoal/5 space-y-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-serif text-lg text-charcoal/60">Subtotal</span>
                  <span className="font-serif text-2xl font-bold text-charcoal tracking-tight">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <p className="font-sans text-[10px] tracking-widest-editorial uppercase text-charcoal/40 text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <button className="w-full bg-charcoal text-white font-sans text-sm font-bold tracking-[0.3em] uppercase py-5 hover:bg-gold transition-colors duration-500 rounded-sm shadow-lg shadow-charcoal/10">
                    Proceed to Checkout
                  </button>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full text-charcoal/60 hover:text-charcoal font-sans text-[10px] font-bold tracking-[0.3em] uppercase transition-colors"
                  >
                    Or Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
