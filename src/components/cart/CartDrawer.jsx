import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const CartDrawer = ({ isOpen, onClose, items, onIncrement, onDecrement, onRemove }) => {
  const drawerRef = useRef(null)
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  useEffect(() => {
    if (!isOpen || items.length === 0) return undefined
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])


  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-label="Close cart overlay"
      />
      <aside ref={drawerRef} className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velvet transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-sand/70 bg-velmora-espresso px-6 py-5 text-velmora-ivory">
          <div>
            <p className="text-xs uppercase tracking-luxe text-velmora-sand">Your bag</p>
            <h2 className="font-serif text-3xl">Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-sand/40 p-2 text-velmora-ivory transition hover:bg-velmora-ivory hover:text-velmora-ink" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
              <p className="font-serif text-3xl">Your cart is quiet.</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-velmora-smoke">Add a future heirloom and it will appear here, ready for gifting or keeping.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.product.id}-${item.variant}`} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-sand/60 pb-5 text-velmora-ink">
                  <div className="overflow-hidden rounded-2xl bg-velmora-champagne">
                    <img
                      alt={item.product.name}
                      className="aspect-square h-full w-full object-cover"
                      data-strk-img-id={item.product.imgId}
                      data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-sm uppercase tracking-luxe text-velmora-ink">{item.product.name}</h3>
                        <p className="mt-1 text-xs text-velmora-smoke">{item.variant} tone</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                        <button type="button" className="p-2 text-velmora-ink transition hover:text-velmora-gold" onClick={() => onDecrement(item.product.id, item.variant)} aria-label={`Decrease ${item.product.name}`}>
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button type="button" className="p-2 text-velmora-ink transition hover:text-velmora-gold" onClick={() => onIncrement(item.product.id, item.variant)} aria-label={`Increase ${item.product.name}`}>
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" className="text-xs uppercase tracking-[0.16em] text-velmora-smoke underline-offset-4 transition hover:text-velmora-ink hover:underline" onClick={() => onRemove(item.product.id, item.variant)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand bg-velmora-champagne px-6 py-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-4 text-xs leading-5 text-velmora-smoke">Shipping and taxes calculated at checkout. Free worldwide shipping applies automatically.</p>
          <button type="button" className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink">
            Checkout later
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
