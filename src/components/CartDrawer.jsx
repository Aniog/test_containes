import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { X, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'
import StockImage from './StockImage'
import QuantitySelector from './QuantitySelector'

function CartDrawer() {
  const { items, isCartOpen, subtotal, closeCart, updateQuantity, removeItem } =
    useCart()
  const containerRef = useRef(null)
  const itemSignature = items
    .map((item) => `${item.id}:${item.variant}:${item.quantity}:${item.imageId}`)
    .join('|')

  const loadCartImages = useCallback(() => {
    if (!containerRef.current) return () => {}
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    if (!isCartOpen || !containerRef.current) return undefined

    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = loadCartImages()
    })
    const timeoutId = window.setTimeout(() => {
      cleanup()
      cleanup = loadCartImages()
    }, 360)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      cleanup()
    }
  }, [isCartOpen, itemSignature, loadCartImages])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-cream/10 bg-velmora-mocha text-velmora-cream shadow-2xl transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-cream/10 px-5 py-5 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
              Your selection
            </p>
            <h2 className="font-display text-3xl tracking-editorial text-velmora-cream">
              Cart
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-cream/15 p-3 text-velmora-cream transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-velmora-cream/10 p-5 text-velmora-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl tracking-editorial text-velmora-cream">
                Your cart is empty
              </h3>
              <p className="text-sm leading-7 text-velmora-cream/70">
                Discover refined demi-fine pieces designed for everyday wear and gifting.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full border border-velmora-gold bg-velmora-gold px-6 py-3 text-xs uppercase tracking-product text-velmora-ink transition hover:border-velmora-gold-deep hover:bg-velmora-gold-deep hover:text-velmora-cream"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 md:px-6">
              {items.map((item) => {
                const variantKey = item.variant.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                const titleId = `cart-${item.id}-${variantKey}-title`
                const categoryId = `cart-${item.id}-${variantKey}-category`
                const descId = `cart-${item.id}-${variantKey}-desc`

                return (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="rounded-3xl border border-velmora-cream/10 bg-velmora-espresso/70 p-4"
                  >
                    <div className="flex gap-4">
                      <div className="h-28 w-24 flex-none overflow-hidden rounded-2xl bg-velmora-ivory/10">
                        {item.imageSrc ? (
                          <img
                            alt={item.name}
                            src={item.imageSrc}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <StockImage
                            alt={item.name}
                            imgId={`${item.imageId}-${variantKey}-cart`}
                            query={`[${descId}] [${titleId}] [${categoryId}]`}
                            ratio="3x4"
                            width="400"
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-3">
                        <div className="space-y-2">
                          <p
                            id={categoryId}
                            className="text-[11px] uppercase tracking-product text-velmora-gold"
                          >
                            {item.category}
                          </p>
                          <h3
                            id={titleId}
                            className="font-display text-2xl uppercase leading-none tracking-product text-velmora-cream"
                          >
                            {item.name}
                          </h3>
                          <p id={descId} className="sr-only">{item.shortDescription || item.category}</p>
                          <p className="text-sm text-velmora-cream/75">{item.variant}</p>
                          <p className="text-sm tracking-wide text-velmora-cream">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <QuantitySelector
                            dark
                            value={item.quantity}
                            onChange={(quantity) =>
                              updateQuantity(item.id, item.variant, quantity)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.variant)}
                            className="rounded-full border border-velmora-cream/10 p-3 text-velmora-cream/70 transition hover:border-velmora-gold hover:text-velmora-gold"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-5 border-t border-velmora-cream/10 px-5 py-5 md:px-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-product text-velmora-cream/70">
                <span>Subtotal</span>
                <span className="text-base text-velmora-cream">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm leading-7 text-velmora-cream/70">
                Taxes and shipping are calculated at checkout. Checkout can be connected later.
              </p>
              <button
                type="button"
                className="w-full rounded-full border border-velmora-gold bg-velmora-gold px-6 py-4 text-xs uppercase tracking-product text-velmora-ink transition hover:border-velmora-gold-deep hover:bg-velmora-gold-deep hover:text-velmora-cream"
              >
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
