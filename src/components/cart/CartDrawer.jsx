import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-velmora-warm z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-velmora-taupe/10 flex items-center justify-between">
              <h2 className="text-xl font-serif uppercase tracking-widest flex items-center gap-3">
                <ShoppingBag size={20} />
                Shopping Bag
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center">
                  <div className="w-16 h-16 bg-velmora-cream rounded-full flex items-center justify-center text-velmora-taupe/40">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-velmora-charcoal/60">
                    Your bag is empty
                  </p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-8 py-3 bg-velmora-charcoal text-velmora-warm text-xs uppercase tracking-widest hover:bg-velmora-gold transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-velmora-cream overflow-hidden">
                      <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-title-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-title-${item.id}`} className="text-sm font-serif uppercase tracking-wider">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-velmora-charcoal/40 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40 mb-2">
                        Metal: {item.variant}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border border-velmora-taupe/20">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="p-1 px-2 hover:bg-velmora-cream transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs px-2 w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="p-1 px-2 hover:bg-velmora-cream transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-velmora-cream border-t border-velmora-taupe/10 space-y-4">
                <div className="flex justify-between items-center uppercase tracking-widest text-xs font-semibold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(0)}</span>
                </div>
                <p className="text-[10px] text-velmora-charcoal/40 tracking-wider">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <Link 
                    to="/checkout"
                    className="w-full bg-velmora-charcoal text-velmora-warm text-center py-4 text-xs uppercase tracking-widest font-bold hover:bg-velmora-stone transition-colors"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Checkout
                  </Link>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full py-2 text-[10px] uppercase tracking-widest text-velmora-charcoal/60 hover:text-velmora-charcoal"
                  >
                    Continue Shopping
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
