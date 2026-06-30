import { useEffect, useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'
import { StockImage } from '@/components/ui/StockImage'
import { motion, AnimatePresence } from 'framer-motion'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    count,
  } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeCart])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-velmora-deep/40 z-40"
            onClick={closeCart}
            aria-hidden="true"
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-hairline">
              <h2 className="font-serif text-2xl">Your Cart ({count})</h2>
              <button
                onClick={closeCart}
                className="p-2 hover:text-velmora-gold transition-colors"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-velmora-hairline" />
                  <p className="font-serif text-xl text-velmora-deep">
                    Your cart is empty
                  </p>
                  <p className="text-velmora-taupe text-sm">
                    Discover something precious to add.
                  </p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                      <div className="w-20 h-24 bg-velmora-hairline/40 flex-shrink-0 overflow-hidden">
                        <StockImage
                          id={`product-card-${item.id}`}
                          query={`[product-title-${item.id}] gold jewelry editorial product photography warm neutral`}
                          ratio="3x4"
                          width={200}
                          alt={item.name}
                          containerRef={drawerRef}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="font-serif text-base uppercase tracking-widest-xl text-velmora-deep">
                            {item.name}
                          </p>
                          <p className="text-xs text-velmora-taupe mt-1 capitalize">
                            Tone: {item.tone}
                          </p>
                          <p className="text-sm font-medium mt-1">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-velmora-hairline">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.tone, item.quantity - 1)
                              }
                              className="p-1.5 hover:bg-velmora-hairline/30 transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-7 text-center text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.tone, item.quantity + 1)
                              }
                              className="p-1.5 hover:bg-velmora-hairline/30 transition-colors"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.tone)}
                            className="text-xs text-velmora-taupe underline hover:text-velmora-deep"
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
              <div className="border-t border-velmora-hairline px-6 py-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-velmora-taupe">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-velmora-taupe">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-velmora-deep text-velmora-cream py-4 uppercase text-xs tracking-widest-xl font-medium hover:bg-velmora-gold transition-colors">
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
