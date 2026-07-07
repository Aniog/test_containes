import { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal, itemCount } =
    useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, setIsOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-warm-white shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <h2 className="font-serif text-2xl">Your Bag</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-stone hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="mb-4 text-line" />
              <p className="font-serif text-xl">Your bag is empty</p>
              <p className="mt-2 text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <Button
                variant="primary"
                className="mt-8"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.cartItemId} className="flex gap-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-champagne">
                        <div className="flex h-full w-full items-center justify-center bg-champagne">
                          <ShoppingBag size={24} className="text-line" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="text-product text-xs font-medium text-ink">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs capitalize text-stone">
                            {item.tone} tone
                          </p>
                          <p className="mt-1 text-sm text-ink">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center border border-line">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.cartItemId, item.quantity - 1)
                              }
                              className="h-7 w-7 flex items-center justify-center text-stone hover:text-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="h-7 w-7 flex items-center justify-center text-xs text-ink">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.cartItemId, item.quantity + 1)
                              }
                              className="h-7 w-7 flex items-center justify-center text-stone hover:text-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-stone hover:text-red-600 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line px-6 py-6">
                <div className="mb-4 flex items-center justify-between text-ink">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-6 text-xs text-stone">
                  Shipping and taxes calculated at checkout.
                </p>
                <Button variant="primary" className="w-full">
                  Checkout
                </Button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full text-center text-xs uppercase tracking-widest text-stone hover:text-ink transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
