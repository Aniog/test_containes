import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[200] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[201] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border/10 flex items-center justify-between">
              <h2 className="text-lg font-serif uppercase tracking-widest">Your Bag</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
                  <p className="text-muted-foreground uppercase tracking-widest text-sm">Your bag is empty</p>
                  <Button onClick={() => setIsCartOpen(false)} variant="outline">Start Shopping</Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-24 h-32 bg-muted relative overflow-hidden group">
                       <img
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-item-title-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 id={`cart-item-title-${item.id}`} className="text-xs uppercase tracking-widest font-medium">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-foreground">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-border/10 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-muted"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-muted"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-border/10 space-y-4">
                <div className="flex justify-between items-center uppercase tracking-widest text-sm">
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <Button className="w-full" size="lg">Checkout</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default CartDrawer;
