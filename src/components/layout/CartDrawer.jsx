import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

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
            className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-[#F9F7F2] z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E5E2DA] flex justify-between items-center">
              <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag ({cartItems.length})</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:opacity-70 transition-opacity"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">
                  <ShoppingBag size={48} strokeWidth={1} className="text-[#888888]" />
                  <p className="font-serif italic text-[#555555]">Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#A68A56] text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#8D7446] transition-colors"
                  >
                    Explore Shop
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-[#E5E2DA] flex-shrink-0">
                      <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-serif uppercase tracking-widest">{item.name}</h3>
                          <p className="text-sm font-sans">${item.price}</p>
                        </div>
                        <p className="text-xs text-[#888888] mt-1 font-sans">{item.variant}</p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-[#E5E2DA] px-2 py-1 space-x-4">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="text-[#888888] hover:text-[#1C1C1C]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="text-[#888888] hover:text-[#1C1C1C]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-[10px] uppercase tracking-widest text-[#888888] hover:text-red-500 border-b border-transparent hover:border-red-500 transition-all"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#E5E2DA] space-y-6">
                <div className="flex justify-between items-center bg-white/50 p-4 rounded-sm">
                  <span className="text-sm uppercase tracking-widest font-sans">Subtotal</span>
                  <span className="text-xl font-serif">${cartTotal}</span>
                </div>
                <p className="text-[10px] text-[#888888] text-center uppercase tracking-[0.2em]">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-[#A68A56] text-white py-4 text-sm font-sans font-medium uppercase tracking-[0.2em] hover:bg-[#8D7446] transition-colors shadow-lg shadow-[#A68A56]/20">
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
