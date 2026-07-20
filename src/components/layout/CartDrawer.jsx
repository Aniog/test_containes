import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import { Link, useLocation } from 'react-router-dom'

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore()
  const drawerRef = useRef(null)

  // Subtotal calculation
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const location = useLocation()

  // Close cart on route change
  useEffect(() => {
    closeCart()
  }, [location, closeCart])

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart()
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      // Prevent body scrolling
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeCart])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[60]"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="font-serif text-2xl">Your Bag</h2>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-secondary-foreground space-y-4">
                  <ShoppingBag size={48} className="text-secondary opacity-50" />
                  <p>Your bag is currently empty.</p>
                  <button 
                    onClick={closeCart}
                    className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b pb-6 last:border-0 last:pb-0">
                    <div className="w-24 h-24 bg-secondary shrink-0 overflow-hidden group">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center text-xs text-secondary-foreground">Image</div>
                      )}
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg leading-tight">
                            <Link to={`/products/${item.slug}`} onClick={closeCart} className="hover:text-primary transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          {item.variant && (
                            <p className="text-xs text-secondary-foreground mt-1 capitalize">{item.variant}</p>
                          )}
                        </div>
                        <p className="font-medium">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border">
                          <button 
                            className="p-1.5 hover:bg-secondary transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            className="p-1.5 hover:bg-secondary transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button 
                          className="text-xs text-secondary-foreground underline hover:text-destructive transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t bg-background mt-auto">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-lg">Subtotal</span>
                  <span className="font-medium text-lg">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-secondary-foreground mb-6">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
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
