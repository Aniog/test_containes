import React from 'react'
import { X } from 'lucide-react'
import Button from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import { IMAGE_PLACEHOLDER, formatCurrency, productLookup } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQuantity, removeItem } = useCart()
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeCart, isOpen])

  useStrkImages(containerRef, [isOpen, items.length])

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-stone-950/45 transition ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        ref={containerRef}
        aria-hidden={!isOpen}
        aria-labelledby="cart-drawer-title"
        aria-modal="true"
        role="dialog"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Your Bag</p>
            <h2 id="cart-drawer-title" className="mt-2 font-display text-2xl text-stone-950">Cart</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
            onClick={closeCart}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-3xl text-stone-950">Your cart is empty</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-stone-600">
              Add a few polished favorites and they’ll appear here instantly.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-4">
              {items.map((item) => {
                const product = productLookup[item.productId]
                const titleId = `cart-${product.id}-${item.variant}-title`

                return (
                  <article
                    key={`${item.productId}-${item.variant}`}
                    className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-4"
                  >
                    <div className="overflow-hidden rounded-[1rem] bg-stone-200">
                      <img
                        alt={product.name}
                        className="aspect-square h-full w-full object-cover"
                        data-strk-img-id={`cart-${product.id}-${item.variant}`}
                        data-strk-img={`[${titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="320"
                        src={IMAGE_PLACEHOLDER}
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 id={titleId} className="font-display text-lg uppercase tracking-[0.22em] text-stone-950">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">
                            {item.variant}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-stone-900">
                          {formatCurrency(product.price * item.quantity)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <QuantitySelector
                          value={item.quantity}
                          decreaseLabel={`Decrease quantity for ${product.name} in ${item.variant}`}
                          increaseLabel={`Increase quantity for ${product.name} in ${item.variant}`}
                          onChange={(value) =>
                            updateQuantity(item.productId, item.variant, value)
                          }
                        />
                        <button
                          type="button"
                          aria-label={`Remove ${product.name} in ${item.variant}`}
                          className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-950"
                          onClick={() => removeItem(item.productId, item.variant)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}

        <div className="border-t border-stone-200 bg-stone-100 px-5 py-5">
          <div className="flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span className="font-medium text-stone-950">{formatCurrency(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-stone-500">
            Shipping and duties calculated at checkout
          </p>
          <Button className="mt-5 w-full">Proceed to Checkout</Button>
        </div>
      </aside>
    </>
  )
}
