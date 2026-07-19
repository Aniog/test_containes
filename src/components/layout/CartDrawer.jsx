import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

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
            className="fixed inset-0 bg-black/40 z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-velmora-charcoal/10">
              <h2 className="serif-heading text-lg">Your Bag ({cart.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 -mr-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-muted-foreground font-serif italic">Your bag is currently empty.</p>
                  <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                      <div className="w-24 h-32 bg-velmora-cream flex-shrink-0">
                        <img
                          data-strk-img-id={`${item.imgId1}-cart`}
                          data-strk-img={`[cart-title-${item.id}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 id={`cart-title-${item.id}`} className="font-serif uppercase tracking-widest text-sm leading-tight">
                              {item.title}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id, item.variant)}
                              className="text-muted-foreground hover:text-velmora-charcoal"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                            {item.variant}
                          </p>
                          <p className="text-sm mt-2">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-4 border border-velmora-charcoal/10 w-fit">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="p-1 hover:bg-velmora-cream transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="p-1 hover:bg-velmora-cream transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-velmora-charcoal/10 bg-velmora-cream/30 space-y-4">
                <div className="flex justify-between items-center font-serif uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-[0.1em]">
                  Shipping & taxes calculated at checkout.
                </p>
                <Button className="w-full" variant="primary">
                  Checkout Now
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
