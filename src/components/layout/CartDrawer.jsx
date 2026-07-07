import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, X } from 'lucide-react'
import { formatPrice, getProductImageUrl, products } from '@/data/products.js?velmora=20260707'
import { useCart } from '@/context/CartContext'
import QuantitySelector from '@/components/common/QuantitySelector'
import { cn } from '@/lib/utils'

function getProductDescription(id) {
  return products.find((product) => product.id === id)?.shortDescription ?? 'Velmora signature piece'
}

export default function CartDrawer() {
  const { closeCart, isCartOpen, items, removeItem, subtotal, updateQuantity } = useCart()

  useEffect(() => {
    if (!isCartOpen || typeof document === 'undefined') {
      return undefined
    }

    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = original
    }
  }, [isCartOpen])

  return (
    <div
      hidden={!isCartOpen}
      aria-hidden={!isCartOpen}
      className={cn('fixed inset-0 z-50 transition', isCartOpen ? 'pointer-events-auto' : 'pointer-events-none')}
    >
      <div className={cn('absolute inset-0 bg-velmora-noir/45 transition', isCartOpen ? 'opacity-100' : 'opacity-0')} onClick={closeCart} />
      <aside
        aria-hidden={!isCartOpen}
        className={cn('absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-velmora-parchment text-velmora-noir shadow-velvet transition duration-500', isCartOpen ? 'translate-x-0' : 'translate-x-full')}
      >
        <div className="flex items-center justify-between border-b hairline-divider px-6 py-5 md:px-8">
          <div>
            <p className="section-eyebrow">Your bag</p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-noir">Cart</h2>
          </div>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-espresso/10" onClick={closeCart} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6 md:px-8">
              {items.map((item) => {
                const titleId = `cart-${item.id}-${item.variant}-title`
                const descId = `cart-${item.id}-${item.variant}-desc`
                return (
                  <article key={`${item.id}-${item.variant}`} className="flex gap-4 rounded-[1.75rem] border border-velmora-espresso/10 bg-white/70 p-4">
                    <img
                      alt={item.name}
                      className="h-28 w-24 rounded-[1.25rem] object-cover"
                      data-strk-img-id={`cart-${item.id}-${item.variant.toLowerCase().replace(/\s+/g, '-')}`}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src={getProductImageUrl(products.find((product) => product.id === item.id), 'primary')}
                    />
                    <div className="flex flex-1 flex-col justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 id={titleId} className="font-serif text-lg uppercase tracking-luxe text-velmora-noir">{item.name}</h3>
                            <p className="mt-1 text-xs uppercase tracking-luxe text-velmora-espresso/60">{item.variant}</p>
                          </div>
                          <span className="text-sm font-semibold text-velmora-noir">{formatPrice(item.price)}</span>
                        </div>
                        <p id={descId} className="text-sm leading-6 text-velmora-espresso/72">{getProductDescription(item.id)}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <QuantitySelector value={item.quantity} onChange={(quantity) => updateQuantity(item.id, item.variant, quantity)} />
                        <button type="button" className="text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/65 transition hover:text-velmora-gold" onClick={() => removeItem(item.id, item.variant)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="border-t hairline-divider bg-white/55 px-6 py-6 md:px-8">
              <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-luxe text-velmora-espresso/75">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-velmora-noir">{formatPrice(subtotal)}</span>
              </div>
              <button type="button" className="premium-button w-full">Proceed to Checkout</button>
              <p className="mt-4 text-center text-sm leading-6 text-velmora-espresso/68">
                Taxes and shipping are calculated at checkout. Real checkout can be connected here later.
              </p>
              <Link to="/shop" className="mt-4 block text-center text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/70 transition hover:text-velmora-gold" onClick={closeCart}>
                Continue shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-velmora-noir shadow-card">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-velmora-noir">Your bag is empty</h3>
              <p className="max-w-sm text-sm leading-7 text-velmora-espresso/72">
                Discover elevated everyday jewelry made for gifting and self-purchase moments.
              </p>
            </div>
            <Link to="/shop" className="premium-button" onClick={closeCart}>
              Shop the Collection
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}
