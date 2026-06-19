import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 z-[60]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-2xl">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="p-2 hover:text-primary transition-colors hover:bg-muted rounded-full"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your cart is currently empty.</p>
                  <button 
                    onClick={closeCart}
                    className="mt-4 px-8 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium uppercase tracking-wide text-sm mb-1">{item.name}</h3>
                            <p className="text-muted-foreground text-sm">{item.variant}</p>
                          </div>
                          <p className="font-medium">${item.price}</p>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-xs text-muted-foreground tracking-wider uppercase underline-offset-4 hover:underline hover:text-foreground transition-all"
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

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-background mt-auto">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link to="/checkout" onClick={closeCart} className="w-full block">
                  <button className="w-full bg-foreground text-white py-4 font-medium uppercase tracking-wide hover:bg-primary transition-colors rounded-md">
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;