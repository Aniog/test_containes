import { useEffect, useRef } from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import JewelryImage from './JewelryImage.jsx'
import { formatPrice, getCartSubtotal } from '@/lib/cart.js'

const CartDrawer = ({ isOpen, items, onClose, onUpdateQuantity, onRemove }) => {
  const drawerRef = useRef(null)
  const subtotal = getCartSubtotal(items)

  useEffect(() => {
    if (!isOpen) return undefined

    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-0 z-50 transition duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-espresso/55 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Close cart"
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-editorial transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-stone/70 p-5 sm:p-6">
          <div>
            <p className="text-[0.67rem] font-bold uppercase tracking-[0.28em] text-velmora-taupe">Velmora cart</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-velmora-espresso">Your pieces</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-stone p-2 text-velmora-espresso transition hover:bg-velmora-mist"
            aria-label="Close cart"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {items.length === 0 ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-velmora-stone/70 bg-velmora-parchment p-8 text-center text-velmora-espresso">
              <p className="font-serif text-4xl">Your jewelry box is empty.</p>
              <p className="mt-4 text-sm leading-7 text-velmora-taupe">
                Add a bestseller or a gift-ready piece to begin your Velmora edit.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const safeKey = item.key.replace(/[^a-z0-9-]/gi, '-').toLowerCase()
                const titleId = `cart-${safeKey}-title`
                const descId = `cart-${safeKey}-desc`

                return (
                  <article key={item.key} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-stone/70 pb-5">
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-velmora-mist">
                      <JewelryImage
                        imgId={`product-primary-${item.id}-a9f4`}
                        query={`[${descId}] [${titleId}]`}
                        ratio="4x3"
                        width="300"
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 text-velmora-espresso">
                      <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.16em] text-velmora-espresso">
                        {item.name}
                      </h3>
                      <p id={descId} className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-taupe">
                        {item.variant} · {formatPrice(item.price)}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-velmora-stone bg-velmora-ivory text-velmora-espresso">
                          <button
                            type="button"
                            className="p-2 text-velmora-espresso transition hover:text-velmora-goldDark"
                            aria-label={`Decrease ${item.name}`}
                            onClick={() => onUpdateQuantity(item.key, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                          <button
                            type="button"
                            className="p-2 text-velmora-espresso transition hover:text-velmora-goldDark"
                            aria-label={`Increase ${item.name}`}
                            onClick={() => onUpdateQuantity(item.key, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="rounded-full p-2 text-velmora-taupe transition hover:bg-velmora-mist hover:text-velmora-espresso"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => onRemove(item.key)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-stone/70 bg-velmora-ivory p-5 text-velmora-espresso sm:p-6">
          <div className="mb-4 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-5 text-xs leading-6 text-velmora-taupe">
            Shipping and taxes calculated at checkout. Frontend preview only; checkout connection can be added later.
          </p>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-goldDark focus:outline-none focus:ring-2 focus:ring-velmora-espresso focus:ring-offset-2 focus:ring-offset-velmora-ivory disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
