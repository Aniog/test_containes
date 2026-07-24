import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] bg-background shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="font-heading text-2xl tracking-widest">YOUR CART</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:text-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 font-sans">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                      <div className="w-24 h-24 bg-muted overflow-hidden">
                        {item.images && item.images[0] ? (
                          <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            data-strk-img={item.images[0].query}
                            data-strk-img-id={`${item.images[0].id}-cart`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="150"
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <ShoppingBag className="w-6 h-6 text-muted-foreground opacity-50" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 id={`cart-item-title-${item.id}`} className="font-heading uppercase tracking-wider text-sm">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id, item.tone)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-muted-foreground capitalize mt-1 text-xs">{item.tone} Tone</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-border">
                            <button 
                              onClick={() => updateQuantity(item.id, item.tone, 'dec')}
                              className="p-1 px-2 hover:bg-muted transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm px-2 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.tone, 'inc')}
                              className="p-1 px-2 hover:bg-muted transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-background">
                <div className="flex justify-between mb-4 font-heading text-lg">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground text-center mb-6 font-sans">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors font-medium">
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
