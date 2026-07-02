import { X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import QuantitySelector from '@/components/shared/QuantitySelector'
import { useCart } from '@/context/CartContext'
import { getStrkImageSource, strkPlaceholder } from '@/lib/strkImages'

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart()

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isCartOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-parchment text-velmora-ink shadow-velmora transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">Your bag</p>
            <h2 className="font-display text-3xl text-velmora-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ImageLoaderSection
          className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6"
          dependency={`${cartItems.length}-${isCartOpen}`}
        >
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <p className="font-display text-3xl text-velmora-ink">Your cart is feeling light.</p>
              <p className="max-w-sm text-sm leading-7 text-velmora-muted">
                Add one of our warm gold signatures and it will appear here instantly.
              </p>
              <Link to="/shop" onClick={() => setIsCartOpen(false)} className="btn-primary">
                Continue shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => {
              const variantId = item.variant.toLowerCase().replace(/[^a-z0-9]+/g, '-')
              const titleId = `cart-${item.id}-${variantId}-title`
              const categoryId = `cart-${item.id}-${variantId}-category`

              return (
                <article
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 rounded-[1.75rem] border border-velmora-line bg-velmora-mist p-4"
                >
                  <img
                    data-strk-img-id={`cart-${item.id}-${variantId}-image-slot`}
                    data-strk-img={`[${categoryId}] [${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="420"
                    src={getStrkImageSource(`cart-${item.id}-${variantId}-image-slot`) || strkPlaceholder}
                    alt={item.name}
                    className="h-28 w-24 rounded-[1.35rem] object-cover"
                  />

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p id={categoryId} className="text-xs uppercase tracking-luxury text-velmora-gold">
                          {item.category}
                        </p>
                        <h3 id={titleId} className="font-display text-xl uppercase tracking-luxury-tight text-velmora-ink">
                          {item.name}
                        </h3>
                        <p className="text-sm text-velmora-muted">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium text-velmora-ink">${item.price}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <QuantitySelector
                        value={item.quantity}
                        onDecrease={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        onIncrease={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="scale-90 origin-left"
                      />
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs uppercase tracking-luxury text-velmora-muted transition hover:text-velmora-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              )
            })
          )}
        </ImageLoaderSection>

        <div className="border-t border-velmora-line bg-velmora-sand px-5 py-5 sm:px-6">
          <div className="mb-4 flex items-center justify-between text-sm text-velmora-muted">
            <span>Subtotal</span>
            <span className="font-medium text-velmora-ink">${subtotal.toFixed(2)}</span>
          </div>
          <button type="button" className="btn-primary w-full">
            Proceed to checkout
          </button>
          <p className="mt-3 text-center text-xs uppercase tracking-luxury text-velmora-muted">
            Free shipping over $75
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
