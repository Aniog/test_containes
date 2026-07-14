import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'
import { imagePlaceholder } from '@/lib/imagePlaceholder'
import { useImageLoader } from '@/hooks/useImageLoader'
import QuantitySelector from '@/components/product/QuantitySelector'

const CartDrawer = () => {
  const { items, isCartOpen, closeCart, removeFromCart, updateQuantity, subtotal } = useCart()
  const drawerRef = useRef(null)
  useImageLoader(drawerRef, [items.length, isCartOpen])

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div className={`absolute inset-0 bg-velmora-ink/50 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeCart} />
      <aside
        ref={drawerRef}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-editorial transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-5 py-5">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-widerLuxury text-velmora-bronze">Your edit</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Shopping Bag</h2>
          </div>
          <button type="button" onClick={closeCart} className="flex h-10 w-10 items-center justify-center border border-velmora-espresso/15 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-velmora-ink">Your bag is waiting.</p>
              <p className="mt-3 text-sm leading-6 text-velmora-espresso/70">Add a keepsake, a gift, or an everyday gold piece to begin.</p>
              <Link to="/shop" onClick={closeCart} className="mt-7 bg-velmora-ink px-7 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ivory transition hover:bg-velmora-espresso">
                Shop Jewelry
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const titleId = `cart-${item.id}-${item.variant}-title`
                const descId = `cart-${item.id}-${item.variant}-desc`
                return (
                  <article key={`${item.id}-${item.variant}`} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-espresso/10 pb-5">
                    <div className="aspect-[4/5] overflow-hidden bg-velmora-parchment">
                      <img
                        className="h-full w-full object-cover"
                        alt={item.name}
                        data-strk-img-id={`cart-${item.id}-${item.variant}-image`}
                        data-strk-img={`[${descId}] [${titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="300"
                        src={imagePlaceholder}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-luxe text-velmora-ink">{item.name}</h3>
                          <p id={descId} className="mt-1 text-xs font-semibold uppercase tracking-luxe text-velmora-bronze">{item.variant} Tone</p>
                        </div>
                        <button type="button" onClick={() => removeFromCart(item.id, item.variant)} className="text-velmora-espresso/55 transition hover:text-velmora-ink" aria-label={`Remove ${item.name}`}>
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <QuantitySelector compact value={item.quantity} onChange={(next) => updateQuantity(item.id, item.variant, next)} />
                        <p className="font-serif text-xl font-semibold text-velmora-espresso">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-espresso/10 bg-velmora-pearl px-5 py-5">
            <div className="flex items-center justify-between font-serif text-2xl font-semibold text-velmora-ink">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-velmora-espresso/65">Shipping and taxes are calculated at checkout.</p>
            <button type="button" className="mt-5 w-full bg-velmora-champagne px-6 py-4 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory">
              Continue to Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
