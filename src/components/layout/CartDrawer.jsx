import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCartStore();
  
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col border-l border-border"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-70">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                  <p className="text-lg">Your cart is empty.</p>
                  <button 
                    onClick={closeCart}
                    className="text-primary font-medium hover:underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 items-start">
                    <div className="w-24 h-24 bg-muted overflow-hidden">
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={item.product.image_prompt}
                        data-strk-img-id={`cart-img-${item.product.id}`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.product.id}`} 
                          onClick={closeCart}
                          className="font-serif uppercase tracking-wider text-sm hover:text-primary transition-colors pr-4"
                        >
                          {item.product.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm">${item.product.price.toFixed(2)}</p>
                      
                      <div className="flex items-center border border-border inline-flex rounded-md overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm text-sm py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-white space-y-4">
                <div className="flex justify-between items-center text-lg font-medium">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout.</p>
                <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-primary transition-colors">
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