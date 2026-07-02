import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { AnimatePresence, motion } from 'framer-motion';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, cartSubtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-serif font-medium">Your Cart ({items.length})</h2>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 -mr-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
                  <ShoppingBag className="w-12 h-12 stroke-1" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-6 py-2 border border-border rounded hover:border-primary transition-colors text-foreground"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-muted overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif uppercase tracking-widest text-sm text-foreground">{item.name}</h3>
                          {item.variant && <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>}
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-border rounded">
                          <button 
                            className="p-1.5 hover:bg-muted text-foreground transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            className="p-1.5 hover:bg-muted text-foreground transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex justify-between items-center mb-6 text-lg font-serif">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Shipping & taxes calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
