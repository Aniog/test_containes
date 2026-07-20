import React, { useRef, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { productsDb } from '../../data/products';

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCartStore();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
        let frameId = requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        });
        return () => cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-serif">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="p-2 transition-colors hover:bg-muted rounded-full"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">Your cart is currently empty.</p>
                  <button 
                    onClick={closeCart}
                    className="text-primary underline underline-offset-4 hover:text-accent-foreground"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-24 h-32 bg-muted relative overflow-hidden flex-shrink-0">
                        {productsDb.map(p => p.id === item.id && (
                           <img 
                             key={p.id}
                             data-strk-img-id={`item-${p.id}-cart-thumb`}
                             data-strk-img={`${p.desc} ${p.name} cart thumbnail`}
                             data-strk-img-ratio="3x4"
                             data-strk-img-width="150"
                             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                             alt={p.name}
                             className="object-cover w-full h-full"
                           />
                        ))}
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                            {item.variant && (
                              <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                            )}
                          </div>
                          <p className="font-medium">${item.price}</p>
                        </div>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-border">
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-2 hover:bg-muted text-muted-foreground transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-2 hover:bg-muted text-muted-foreground transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-destructive transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-background/50 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg uppercase tracking-wider">Subtotal</span>
                  <span className="text-xl font-serif">${cartTotal()}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}