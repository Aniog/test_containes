import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import { getStrkImageSrc } from '@/lib/strkImage'
import { useStrkImages } from '@/lib/useStrkImages'

function getCartImageRefBase(key) {
  return `cart-${String(key).toLowerCase().replace(/[^a-z0-9_-]+/g, '-')}`
}

function getCartImageSlotId(item) {
  const imageId = item.image?.id || 'front'
  return `product-card-primary-${item.slug}-${imageId}-image`
}

function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, removeItem, updateQuantity } = useCart()
  const drawerRef = useRef(null)

  useStrkImages(drawerRef, [isCartOpen, items])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-stone-950/40 transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl shadow-stone-950/20 transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Your bag</p>
            <h2 className="mt-2 font-serif-display text-2xl text-stone-950">Cart</h2>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-900 transition hover:bg-stone-100"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-stone-300 bg-white px-8 text-center">
              <p className="font-serif-display text-2xl text-stone-950">Your cart is empty</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Add a few Velmora favorites and they will appear here.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full border border-stone-300 px-5 py-3 text-xs uppercase tracking-[0.3em] text-stone-900 transition hover:bg-stone-100"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const imageRefBase = getCartImageRefBase(item.key)

                return (
                  <div key={item.key} className="rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm shadow-stone-950/5">
                    <div className="flex gap-4">
                      <img
                        src={getStrkImageSrc(getCartImageSlotId(item))}
                        alt={item.image?.alt || item.name}
                        className="h-24 w-20 rounded-[1.2rem] bg-stone-100 object-cover"
                        data-strk-img-id={getCartImageSlotId(item)}
                        data-strk-img={`[${imageRefBase}-desc] [${imageRefBase}-title]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="400"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p id={`${imageRefBase}-title`} className="font-serif-display text-base uppercase tracking-[0.26em] text-stone-950">
                              {item.name}
                            </p>
                            <p className="mt-2 text-sm text-stone-500">{item.variant}</p>
                            <span id={`${imageRefBase}-desc`} className="sr-only">
                              {item.image?.note || `${item.name} product image`}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-stone-900">${item.price}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <QuantitySelector value={item.quantity} onChange={(nextValue) => updateQuantity(item.key, nextValue)} />
                          <button
                            type="button"
                            className="text-xs uppercase tracking-[0.3em] text-stone-500 transition hover:text-stone-900"
                            onClick={() => removeItem(item.key)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-stone-200 px-5 py-5">
          <div className="flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span className="font-medium text-stone-950">${subtotal.toFixed(2)}</span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-stone-500">
            Taxes and shipping calculated at checkout
          </p>
          <Button className="mt-5 w-full" variant="dark">
            Checkout Coming Soon
          </Button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
