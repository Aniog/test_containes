import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

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
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="uppercase-spaced text-lg">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="hover:opacity-70 transition-soft"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-zinc-300" />
                  <p className="text-zinc-500 font-serif text-xl">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="uppercase-spaced text-primary border-b border-primary pb-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-secondary flex-shrink-0 overflow-hidden">
                       <img 
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-${item.id}-title] jewelry product`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="100"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 id={`cart-item-${item.id}-title`} className="font-serif uppercase tracking-widest text-sm">{item.title}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-zinc-400 hover:text-zinc-600 transition-soft"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-zinc-500 mt-1">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-primary transition-soft"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-primary transition-soft"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-medium ml-auto">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-serif">Subtotal</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <p className="text-xs text-zinc-500 text-center">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-primary text-white py-4 uppercase-spaced hover:bg-zinc-800 transition-soft">
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
