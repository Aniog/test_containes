import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex justify-between items-center">
              <h2 className="text-xl font-serif uppercase tracking-widest">Your Bag ({cartItems.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-muted/30" strokeWidth={1} />
                  <p className="text-muted-foreground font-light">Your bag is currently empty.</p>
                  <Link
                    to="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="border-b border-black pb-1 uppercase tracking-widest text-xs font-bold hover:text-accent hover:border-accent transition-all"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 aspect-[3/4] bg-muted overflow-hidden flex-shrink-0">
                      {item.id === 'vivid-aura-jewels' && (
                        <img
                          data-strk-img-id="p-main-vivid-aura-jewels"
                          data-strk-img="[cart-item-name-vivid-aura-jewels] jewelry piece elegant view"
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      )}
                      {item.id === 'majestic-flora-nectar' && (
                        <img
                          data-strk-img-id="p-main-majestic-flora-nectar"
                          data-strk-img="[cart-item-name-majestic-flora-nectar] jewelry piece elegant view"
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      )}
                      {item.id === 'golden-sphere-huggies' && (
                        <img
                          data-strk-img-id="p-main-golden-sphere-huggies"
                          data-strk-img="[cart-item-name-golden-sphere-huggies] jewelry piece elegant view"
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      )}
                      {item.id === 'amber-lace-earrings' && (
                        <img
                          data-strk-img-id="p-main-amber-lace-earrings"
                          data-strk-img="[cart-item-name-amber-lace-earrings] jewelry piece elegant view"
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      )}
                      {item.id === 'royal-heirloom-set' && (
                        <img
                          data-strk-img-id="p-main-royal-heirloom-set"
                          data-strk-img="[cart-item-name-royal-heirloom-set] jewelry piece elegant view"
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      )}
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-name-${item.id}`} className="text-xs uppercase tracking-widest font-bold max-w-[150px]">{item.name}</h3>
                        <p className="text-sm font-serif">${item.price}</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">18K Gold Plated</p>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center border border-black/5">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-accent"><Minus size={12} /></button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-accent"><Plus size={12} /></button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-widest underline decoration-black/20 underline-offset-4 hover:decoration-accent hover:text-accent transition-all"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-black/5 space-y-6">
                <div className="flex justify-between items-center uppercase tracking-widest text-sm font-bold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">Shipping & taxes calculated at checkout</p>
                <button className="w-full bg-accent text-white py-5 uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all">
                  Proceed to Checkout
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
