import React from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '../../data/products'
import { getStockImageUrl } from '../../lib/image-url'

function CartItemImage({ product }) {
  const imageUrl = getStockImageUrl(product.imageId)

  if (!imageUrl) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-velmora-parchment text-center font-serif text-xl font-semibold tracking-velmora text-velmora-umber">
        V
      </div>
    )
  }

  return (
    <img
      alt={product.name}
      className="h-full w-full object-cover"
      src={imageUrl}
    />
  )
}

export default function CartDrawer({
  open,
  items,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const drawerRef = React.useRef(null)

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 transition duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora-soft transition duration-500 sm:w-[28rem] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-velmora text-velmora-umber">
              Your Selection
            </p>
            <h2 className="font-serif text-3xl font-semibold">Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-ink/10 p-2 text-velmora-ink transition hover:bg-velmora-parchment"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-velmora-parchment text-velmora-umber">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-velmora-ink">
                Your cart is quiet for now.
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-umber">
                Add a luminous staple or a gift-ready set to begin your Velmora edit.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => (
                <div key={item.product.id} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                  <div className="aspect-[4/5] overflow-hidden bg-velmora-parchment">
                    <CartItemImage product={item.product} />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg font-semibold uppercase tracking-velmora text-velmora-ink">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-velmora-umber">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.product.id)}
                        className="p-1 text-velmora-umber transition hover:text-velmora-ink"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 inline-flex items-center border border-velmora-ink/15 bg-velmora-ivory">
                      <button
                        type="button"
                        onClick={() => onDecrease(item.product.id)}
                        className="p-2 text-velmora-ink transition hover:bg-velmora-parchment"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-bold text-velmora-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onIncrease(item.product.id)}
                        className="p-2 text-velmora-ink transition hover:bg-velmora-parchment"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-ink/10 bg-velmora-parchment px-5 py-5">
          <div className="mb-4 flex items-center justify-between text-sm font-bold uppercase tracking-velmora text-velmora-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="w-full bg-velmora-ink px-5 py-4 text-sm font-bold uppercase tracking-velmora text-velmora-ivory transition hover:bg-velmora-espresso disabled:cursor-not-allowed disabled:bg-velmora-ink/30 disabled:text-velmora-ivory"
          >
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-umber">
            Secure checkout can be connected when you are ready to launch.
          </p>
        </div>
      </aside>
    </div>
  )
}
