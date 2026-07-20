import React, { useRef, useEffect } from 'react'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { seedProducts } from './home/Bestsellers'

const CartDrawer = () => {
  const { cart, isDrawerOpen, closeDrawer, updateQuantity, removeFromCart } = useCartStore()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isDrawerOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isDrawerOpen, cart])

  return (
    <>
      {/* Hidden section for scanner support to ensure cart IDs are in config */}
      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
        {seedProducts.map((p) => (
          <div key={p.id}>
            <img 
              data-strk-img-id={`cart-item-${p.id}`}
              data-strk-img={`[cart-title-${p.id}] luxury gold jewelry accessory`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <span id={`cart-title-${p.id}`}>{p.name}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60]"
            />

            <motion.div
              ref={containerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="px-8 py-6 border-b border-base/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                  <h2 className="text-sm uppercase tracking-widest font-serif font-medium">Your Cart ({cart.length})</h2>
                </div>
                <button onClick={closeDrawer} className="p-2 hover:bg-base/5 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto px-8 py-6 space-y-8 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                    <ShoppingBag className="w-12 h-12 stroke-[1]" />
                    <p className="text-sm uppercase tracking-widest text-center">Your cart is empty</p>
                    <button 
                      onClick={closeDrawer}
                      className="px-8 py-3 border border-base text-xs uppercase tracking-widest hover:bg-base hover:text-white transition-all duration-300"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex space-x-6">
                      <div className="w-24 h-32 bg-[#F5F5F3] overflow-hidden flex-shrink-0">
                        <img 
                          data-strk-img-id={`cart-item-${item.id}`}
                          data-strk-img={`[cart-title-${item.id}] luxury gold jewelry accessory`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 id={`cart-title-${item.id}`} className="text-xs uppercase tracking-widest font-serif font-semibold">{item.name}</h3>
                            <button 
                               onClick={() => removeFromCart(item.id)}
                               className="text-base/40 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-base/60 uppercase tracking-widest">${item.price}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-base/10 px-2 py-1 space-x-4">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-accent disabled:opacity-20"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-[10px] font-sans font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-accent"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-xs font-serif font-semibold uppercase tracking-widest">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="px-8 py-8 border-t border-base/10 space-y-4">
                  <div className="flex items-center justify-between uppercase tracking-widest text-xs font-serif font-medium">
                    <span>Subtotal</span>
                    <span className="text-sm font-semibold">${subtotal}</span>
                  </div>
                  <p className="text-[10px] text-base/60 uppercase tracking-widest leading-relaxed">
                    Shipping, taxes, and discounts calculated at checkout.
                  </p>
                  <button className="w-full bg-base text-white py-5 text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all duration-500 active:scale-[0.98]">
                    Checkout Order
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default CartDrawer
