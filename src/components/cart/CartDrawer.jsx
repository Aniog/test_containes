import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatCurrency } from '@/lib/format'
import strkImgConfig from '@/strk-img-config.json'

const getCartImageUrl = (product) =>
  strkImgConfig?.[`velmora-${product.id}-card-a`]?.results?.[0]?.url

export default function CartDrawer({ isOpen, items, onClose, onRemove, onQuantityChange }) {
  const drawerRef = useRef(null)
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-soft transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        ref={drawerRef}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5 sm:px-7">
          <div>
            <p className="eyebrow">Velmora</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-sand p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-gold" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-velmora-ink">Your jewelry box is empty</h3>
            <p className="mt-3 text-sm leading-7 text-velmora-clay">Discover polished gold pieces made for gifting, stacking, and everyday glow.</p>
            <Link to="/shop" onClick={onClose} className="btn-primary mt-7">Shop Collection</Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <div className="space-y-5">
                {items.map((item) => (
                  <article key={item.key} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-sand pb-5">
                    <div className="aspect-square overflow-hidden bg-velmora-mist">
                      <img src={getCartImageUrl(item.product)} alt={item.product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 text-velmora-ink">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={`cart-${item.product.id}-title`} className="product-title text-xs">{item.product.name}</h3>
                          <p id={`cart-${item.product.id}-desc`} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.tone} tone</p>
                          <span id={`cart-${item.product.id}-material`} className="sr-only">{item.product.material}</span>
                        </div>
                        <button type="button" onClick={() => onRemove(item.key)} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-taupe transition hover:text-velmora-ink">
                          Remove
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-pearl text-velmora-ink">
                          <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)} className="p-2 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                          <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button type="button" onClick={() => onQuantityChange(item.key, item.quantity + 1)} className="p-2 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <p className="font-serif text-xl font-semibold text-velmora-ink">{formatCurrency(item.product.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-sand bg-velmora-porcelain px-5 py-5 text-velmora-ink sm:px-7">
              <div className="flex items-center justify-between font-semibold">
                <span className="uppercase tracking-[0.18em] text-velmora-clay">Subtotal</span>
                <span className="font-serif text-3xl text-velmora-ink">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-clay">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="btn-primary mt-5 w-full">Checkout Later</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
