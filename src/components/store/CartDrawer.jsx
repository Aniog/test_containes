import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext.jsx'
import { StockImage } from '@/components/store/ImageSlot.jsx'
import { formatPrice } from '@/lib/format.js'

const CartDrawer = () => {
  const drawerRef = useRef(null)
  const { isCartOpen, items, subtotal, setCartOpen, updateQuantity, removeItem } = useCart()

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, drawerRef.current) || (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [isCartOpen, items.map((item) => `${item.key}:${item.quantity}`).join('|')])

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-velmora-noir/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setCartOpen(false)}
      />

      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-velmora-mist/20 bg-velmora-noir text-velmora-ivory shadow-velvet transition-transform duration-300 ease-luxe ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist/15 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-brand text-velmora-mist">Your cart</p>
            <h2 className="mt-1 font-serif text-3xl text-velmora-ivory">Bag</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-ivory/15"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length ? (
            <div className="space-y-5">
              {items.map((item) => {
                const titleId = `cart-${item.key}-title`
                const descId = `cart-${item.key}-desc`

                return (
                  <article
                    key={item.key}
                    className="flex gap-4 rounded-3xl border border-velmora-ivory/10 bg-velmora-truffle/55 p-4"
                  >
                    <div className="h-28 w-24 overflow-hidden rounded-2xl bg-velmora-ivory/5">
                      <StockImage
                        alt={item.name}
                        className="h-full w-full object-cover"
                        descId={descId}
                        imageId={item.image.id}
                        ratio="3x4"
                        titleId={titleId}
                        width="300"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <h3 id={titleId} className="font-serif text-sm uppercase tracking-brand text-velmora-ivory">
                        {item.name}
                      </h3>
                      <p id={descId} className="mt-2 text-sm text-velmora-mist">
                        {item.variant}
                      </p>
                      <p className="mt-2 text-sm font-medium text-velmora-ivory">
                        {formatPrice(item.price)}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center rounded-full border border-velmora-ivory/15">
                          <button
                            type="button"
                            className="inline-flex h-9 w-9 items-center justify-center"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            className="inline-flex h-9 w-9 items-center justify-center"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-xs uppercase tracking-brand text-velmora-mist transition-colors duration-300 hover:text-velmora-champagne"
                          onClick={() => removeItem(item.key)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-velmora-ivory/15 bg-velmora-truffle/35 px-8 py-12 text-center">
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-velmora-ivory/10 bg-velmora-noir/50">
                <ShoppingBag className="h-6 w-6 text-velmora-champagne" />
              </div>
              <h3 className="font-serif text-3xl text-velmora-ivory">Your bag is empty</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-velmora-mist">
                Add a few timeless pieces and they will appear here instantly.
              </p>
              <Link className="luxury-button-primary mt-8" to="/shop" onClick={() => setCartOpen(false)}>
                Shop now
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist/15 px-6 py-6">
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-mist">
            <span>Subtotal</span>
            <span className="text-lg font-medium text-velmora-ivory">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="luxury-button-primary w-full">
            Continue to checkout
          </button>
          <button
            type="button"
            className="mt-3 w-full rounded-full border border-velmora-ivory/15 px-6 py-3 text-xs font-semibold uppercase tracking-brand text-velmora-ivory transition-colors duration-300 hover:border-velmora-champagne hover:text-velmora-champagne"
            onClick={() => setCartOpen(false)}
          >
            Keep browsing
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
