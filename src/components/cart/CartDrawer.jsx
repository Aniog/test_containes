import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

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
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <h2 className="font-serif text-xl uppercase tracking-widest pt-1">Your Shopping Bag</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:rotate-90 transition-transform duration-300"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-gray-50 flex-shrink-0 relative">
                       <img
                        data-strk-img-id={`cart-img-${item.id}`}
                        data-strk-img={`[cart-item-title-${item.id}]`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-title-${item.id}`} className="font-serif text-sm uppercase-spaced font-medium">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{item.variant}</p>
                      <p className="text-sm font-medium mt-2">{formatPrice(item.price)}</p>
                      
                      <div className="mt-auto flex items-center space-x-3 border w-fit px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 hover:text-[#C5A059]"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 hover:text-[#C5A059]"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <p className="text-gray-400 font-serif italic">Your bag is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#1A1A1A] text-white px-8 py-3 uppercase-spaced text-[10px] hover:bg-[#C5A059] transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t space-y-4 bg-gray-50/50">
                <div className="flex justify-between items-center">
                  <span className="text-sm uppercase tracking-widest text-gray-500">Subtotal</span>
                  <span className="text-lg font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full bg-[#1A1A1A] text-white py-4 uppercase-spaced text-xs hover:bg-[#C5A059] transition-all duration-500">
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-[10px] uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
                >
                  Continue Shopping
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
