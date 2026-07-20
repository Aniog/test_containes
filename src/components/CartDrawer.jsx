import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

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
            className="fixed inset-0 bg-velmora-dark/30 backdrop-blur-[2px] z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-velmora-stone shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-velmora-dark/5">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-velmora-dark hover:text-velmora-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto px-6 py-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
                  <p className="text-velmora-muted italic">Your bag is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs uppercase tracking-exclusive font-sans border-b border-velmora-dark pb-1 text-velmora-dark hover:text-velmora-gold hover:border-velmora-gold transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedColor}`} className="flex gap-4">
                      {/* Image */}
                      <div className="w-20 h-24 bg-velmora-dark/5 overflow-hidden shrink-0">
                        <img
                          src={item.images?.[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif uppercase text-sm tracking-widest text-velmora-dark">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id, item.selectedColor)}
                              className="text-velmora-muted hover:text-velmora-dark transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          {item.selectedColor && (
                            <p className="text-[10px] text-velmora-muted uppercase tracking-widest mt-1">
                              {item.selectedColor}
                            </p>
                          )}
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          {/* Qty Controls */}
                          <div className="flex items-center border border-velmora-dark/10 px-2 py-1 space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedColor, -1)}
                              className="text-velmora-dark hover:text-velmora-gold transition-colors disabled:opacity-30"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-[11px] font-sans font-medium w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedColor, 1)}
                              className="text-velmora-dark hover:text-velmora-gold transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="text-sm font-sans font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-velmora-dark/10 space-y-4">
                <div className="flex justify-between items-center text-velmora-dark">
                  <span className="uppercase tracking-widest text-xs font-sans font-semibold">Subtotal</span>
                  <span className="font-sans font-semibold text-lg">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-velmora-muted italic text-center">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  className="w-full bg-velmora-dark text-velmora-stone py-4 uppercase tracking-exclusive text-[11px] font-sans font-semibold hover:bg-velmora-gold transition-colors duration-500"
                >
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
