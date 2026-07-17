import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

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
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeCart])

  return (
    <>
      <button
        type="button"
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!isOpen}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-surface shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-velmora-base" />
            <h2 className="font-serif text-xl font-medium uppercase tracking-widest text-velmora-base">
              Your Cart
            </h2>
            <span className="rounded-full bg-velmora-paper px-2.5 py-0.5 text-xs font-medium text-velmora-text-secondary">
              {count}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-velmora-text-secondary transition-colors hover:text-velmora-base"
            aria-label="Close cart"
          >
            <X size={22} className="pointer-events-none" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="mb-4 text-stone-300" />
            <p className="font-serif text-2xl text-velmora-base">Your cart is empty</p>
            <p className="mt-2 text-sm text-velmora-text-secondary">
              Discover something treasured to add.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-velmora-base px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-accent hover:text-velmora-base"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-6">
                {items.map((item) => {
                  const variant = item.product.variants.find((v) => v.id === item.variantId)
                  return (
                    <li key={`${item.product.id}-${item.variantId}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-stone-100">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-sm font-medium uppercase tracking-widest text-velmora-base">
                            {item.product.name}
                          </h3>
                          <p className="mt-0.5 text-xs text-velmora-text-secondary capitalize">
                            {variant?.label} Tone
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-stone-200">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.variantId, item.quantity - 1)
                              }
                              className="px-2 py-1 text-velmora-text-secondary hover:text-velmora-base"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 text-sm font-medium">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.variantId, item.quantity + 1)
                              }
                              className="px-2 py-1 text-velmora-text-secondary hover:text-velmora-base"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="text-sm font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id, item.variantId)}
                        className="self-start text-velmora-text-secondary transition-colors hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="border-t border-stone-200 px-6 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-velmora-text-secondary">Subtotal</span>
                <span className="font-serif text-xl font-medium text-velmora-base">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-5 text-xs text-velmora-text-secondary">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-velmora-accent py-4 text-xs font-semibold uppercase tracking-widest text-velmora-base transition-colors hover:bg-velmora-accent-dark hover:text-white"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full border border-stone-300 py-3 text-xs font-medium uppercase tracking-widest text-velmora-base transition-colors hover:border-velmora-base"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
