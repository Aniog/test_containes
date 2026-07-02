import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, formatPrice } from '../../lib/utils';
import { Link } from 'react-router-dom';

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
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-background z-[101] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 className="text-sm uppercase tracking-widest font-semibold">Your Bag ({cart.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 -mr-2 hover:opacity-70">
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <p className="text-muted italic mb-6 font-serif">Your treasury is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs uppercase tracking-widest px-8 py-3 bg-primary text-white hover:bg-zinc-800 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-zinc-50 flex-shrink-0 relative">
                      <img
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-title-${item.id}] jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        alt={item.data?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col py-1">
                      <div className="flex justify-between items-start mb-1">
                        <Link
                          to={`/product/${item.data?.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          id={`cart-title-${item.id}`}
                          className="text-xs uppercase tracking-widest font-serif font-medium hover:text-accent transition-colors"
                        >
                          {item.data?.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-muted mb-4">{formatPrice(item.data?.price)}</p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-zinc-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-zinc-50 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-zinc-50 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-xs font-semibold">
                          {formatPrice(item.data?.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-widest font-semibold">Subtotal</span>
                  <span className="text-lg font-serif">{formatPrice(cartTotal)}</span>
                </div>
                <button className="w-full bg-primary text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-zinc-800 transition-all rounded-[1px]">
                  Secure Checkout
                </button>
                <p className="text-[10px] text-center mt-4 text-muted uppercase tracking-widest">
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
