import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X, Plus, Minus } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, getCartCount, getSubtotal } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-2xl">Your Cart ({getCartCount()})</h2>
              <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-full text-muted-foreground">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="font-serif text-xl">Your cart is empty.</p>
                  <p className="text-muted-foreground text-sm">Discover our latest fine jewelry collections.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                      <div className="w-24 h-24 bg-secondary rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start pt-1">
                            <h3 className="font-serif text-sm tracking-widest leading-tight w-2/3">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id, item.tone)}
                              className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
                            >
                              Remove
                            </button>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">{item.tone}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border rounded">
                            <button
                              onClick={() => updateQuantity(item.id, -1, item.tone)}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1, item.tone)}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-medium">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-lg">Subtotal</span>
                  <span className="font-medium text-lg">${getSubtotal()}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
