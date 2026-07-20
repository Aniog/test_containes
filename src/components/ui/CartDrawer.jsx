import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

const TRANSPARENT_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

function getCartImageUrl(item) {
  const key = `product-${item.id}`
  const entry = strkImgConfig[key]
  if (!entry) return TRANSPARENT_PIXEL
  const picked = entry.results?.find((r) => r.id === entry.picked)
  return picked?.url || entry.results?.[0]?.url || TRANSPARENT_PIXEL
}

function CartItemImg({ item }) {
  return (
    <img
      src={getCartImageUrl(item)}
      alt={item.name}
      className="h-full w-full object-cover"
    />
  )
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-velmora-dark/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-velmora-hairline px-6 py-5">
              <h2 className="font-serif text-2xl text-velmora-dark">Your Bag</h2>
              <button
                onClick={closeCart}
                className="text-velmora-muted transition hover:text-velmora-dark"
                aria-label="Close cart"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <ShoppingBag size={40} className="mb-4 text-velmora-hairline" strokeWidth={1.5} />
                <p className="font-serif text-lg text-velmora-dark">Your bag is empty</p>
                <p className="mt-1 text-sm text-velmora-muted">
                  Discover something beautiful today.
                </p>
                <button
                  onClick={closeCart}
                  className="btn-primary mt-6 w-full max-w-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <p className="mb-4 text-xs uppercase tracking-widest text-velmora-muted">
                    {count} {count === 1 ? 'item' : 'items'}
                  </p>
                  <ul className="space-y-6">
                    {items.map((item) => (
                      <li key={item.cartItemId} className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-velmora-light">
                          <CartItemImg item={item} />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-product">{item.name}</p>
                            <p className="mt-0.5 text-xs text-velmora-muted">
                              {item.variant}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="inline-flex items-center border border-velmora-hairline">
                              <button
                                onClick={() =>
                                  updateQuantity(item.cartItemId, item.quantity - 1)
                                }
                                className="px-2 py-1.5 text-velmora-muted hover:text-velmora-dark"
                                aria-label="Decrease"
                              >
                                <Minus size={12} strokeWidth={1.5} />
                              </button>
                              <span className="w-6 text-center text-xs text-velmora-dark">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.cartItemId, item.quantity + 1)
                                }
                                className="px-2 py-1.5 text-velmora-muted hover:text-velmora-dark"
                                aria-label="Increase"
                              >
                                <Plus size={12} strokeWidth={1.5} />
                              </button>
                            </div>
                            <span className="text-sm font-medium text-velmora-dark">
                              ${item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartItemId)}
                          className="self-start text-velmora-muted transition hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-velmora-hairline px-6 py-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-velmora-muted">Subtotal</span>
                    <span className="font-serif text-xl text-velmora-dark">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="mb-5 text-xs text-velmora-muted">
                    Shipping & taxes calculated at checkout.
                  </p>
                  <button className="btn-primary w-full">Checkout</button>
                  <button
                    onClick={closeCart}
                    className="mt-3 w-full py-3 text-center text-xs uppercase tracking-widest text-velmora-dark transition hover:text-velmora-gold"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
