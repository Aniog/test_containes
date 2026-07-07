import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { useStockImages } from '@/hooks/useStockImages'
import QuantitySelector from '@/components/shared/QuantitySelector'

export default function CartDrawer() {
  const { items, isCartOpen, subtotal, closeCart, removeFromCart, updateQuantity } = useCart()
  const containerRef = useStockImages([isCartOpen, items])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isCartOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-obsidian/45 transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-porcelain shadow-2xl shadow-obsidian/30 transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-mist/70 px-5 py-5 sm:px-6">
          <div>
            <p className="eyebrow">Your Cart</p>
            <h2 className="mt-2 font-serif text-3xl text-obsidian">Jewelry Edit</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-mist bg-porcelain text-espresso hover:bg-sand"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <p className="font-serif text-3xl text-obsidian">Your cart is still waiting.</p>
            <p className="max-w-sm text-sm leading-7 text-espresso/75">
              Add a few gold-toned favorites and they will appear here with easy quantity controls.
            </p>
            <Link to="/shop" className="premium-button" onClick={closeCart}>
              Browse the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => {
                const imageId = `cart-${item.key}-image`
                const titleId = `cart-${item.key}-title`
                const cueId = `cart-${item.key}-cue`

                return (
                  <article key={item.key} className="panel-surface flex gap-4 p-4">
                    <div className="h-28 w-24 shrink-0 overflow-hidden rounded-[1.5rem] bg-sand">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        role="img"
                        aria-label={item.name}
                        data-strk-bg-id={imageId}
                        data-strk-bg={`[${cueId}] [${titleId}]`}
                        data-strk-bg-ratio="3x4"
                        data-strk-bg-width="480"
                      />
                      <p id={cueId} className="sr-only">{item.imageCues.primary}</p>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 id={titleId} className="product-name text-base leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs uppercase tracking-[0.28em] text-rose">{item.tone}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.key)}
                          className="text-xs font-semibold uppercase tracking-[0.24em] text-espresso/55 transition duration-300 hover:text-espresso"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-espresso/75">{item.shortDescription}</p>
                      <div className="mt-auto flex items-end justify-between pt-4">
                        <QuantitySelector
                          compact
                          value={item.quantity}
                          onChange={(nextQuantity) => updateQuantity(item.key, nextQuantity)}
                        />
                        <p className="font-serif text-2xl text-obsidian">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="border-t border-mist/70 px-5 py-5 sm:px-6">
              <div className="mb-2 flex items-center justify-between text-sm uppercase tracking-[0.28em] text-espresso/70">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-sm leading-6 text-espresso/70">
                Taxes and shipping are calculated at checkout. Real checkout can be connected later.
              </p>
              <button type="button" className="premium-button w-full">
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
