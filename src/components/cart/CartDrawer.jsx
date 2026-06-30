import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <React.Fragment key="cart-drawer-fragment">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-background shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-muted">
              <div className="flex items-center gap-4">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em]">Your Bag</h2>
                <span className="text-[10px] text-muted-foreground italic font-serif">({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="hover:scale-110 transition-transform duration-300 p-2"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <p className="font-serif text-2xl font-light italic text-muted-foreground/40">Your bag is empty</p>
                  <Button 
                    variant="outline" 
                    className="text-[10px] tracking-[0.2em]" 
                    onClick={() => setIsCartOpen(false)}
                  >
                    Explore Shop
                  </Button>
                </div>
              ) : (
                <div className="space-y-10">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-6">
                      <div className="w-24 h-32 bg-muted flex-none overflow-hidden relative group">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-lg tracking-wide lowercase first-letter:uppercase">{item.name}</h3>
                          </div>
                          <p className="text-[10px] font-bold tracking-widest text-muted-foreground mt-1">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4">
                          <div className="flex items-center border border-muted/50 rounded-sm px-1.5 py-0.5 scale-90 origin-left">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:opacity-50 transition-opacity">
                              <Minus size={10} />
                            </button>
                            <span className="mx-3 text-[10px] font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:opacity-50 transition-opacity">
                              <Plus size={10} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-muted bg-neutral-50/50 space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Estimated Subtotal</span>
                  <span className="text-lg font-serif italic">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="space-y-3">
                  <Button className="w-full h-14 tracking-[0.2em] font-bold" variant="premium">
                    Complete Purchase
                  </Button>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] text-center font-bold">
                    Complimentary Express Shipping Included
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
