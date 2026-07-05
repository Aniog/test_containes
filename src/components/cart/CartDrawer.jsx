import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import QuantitySelector from '@/components/ui/QuantitySelector'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/data/store'
import strkImgConfig from '@/strk-img-config.json'

const IMAGE_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const getPickedImageUrl = (configEntry) => {
  if (!configEntry) {
    return ''
  }

  const pickedId = configEntry.picked
  const pickedResult = configEntry.results?.find((result) => result.id === pickedId)

  return pickedResult?.url || configEntry.results?.[0]?.url || ''
}

const getCartImageUrl = (slug) => {
  const configEntry =
    strkImgConfig[`product-primary-shop-${slug}`] ||
    strkImgConfig[`product-primary-home-${slug}`]

  return getPickedImageUrl(configEntry) || IMAGE_PLACEHOLDER
}

function CartDrawer() {
  const {
    cartItems,
    closeCart,
    isCartOpen,
    removeItem,
    subtotal,
    updateQuantity,
  } = useCart()

  return (
    <div
      className={[
        'fixed inset-0 z-[70] transition duration-300',
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
      aria-hidden={!isCartOpen}
    >
      <div
        className={[
          'absolute inset-0 bg-velvet/50 backdrop-blur-sm transition duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
        onClick={closeCart}
      />

      <aside
        className={[
          'absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-pearl shadow-luxe transition duration-300',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5 md:px-7">
          <div>
            <p className="eyebrow">Your cart</p>
            <h2 className="mt-2 font-serif text-3xl text-ink">Curated for you</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition duration-300 hover:border-champagne hover:text-champagne-deep"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-4xl text-ink">A little space for something beautiful.</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-truffle">
              Your cart is empty. Browse demi-fine pieces designed for everyday gifting and self-purchase.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-velvet px-6 py-3 text-sm uppercase tracking-[0.18em] text-ivory transition duration-300 hover:bg-velvet-soft"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 md:px-7">
              {cartItems.map((item) => (
                <article key={item.key} className="grid grid-cols-[96px_1fr] gap-4 rounded-[24px] border border-line bg-ivory p-3 md:p-4">
                  <div className="overflow-hidden rounded-[20px] bg-pearl">
                    <img
                      alt={item.product.name}
                      className="aspect-[4/5] h-full w-full object-cover"
                      src={getCartImageUrl(item.product.slug)}
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={`cart-title-${item.key}`} className="font-serif text-xl uppercase tracking-[0.18em] text-ink">
                            {item.product.name}
                          </h3>
                          <p id={`cart-tone-${item.key}`} className="mt-1 text-sm text-truffle">
                            {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-xs uppercase tracking-[0.18em] text-truffle transition duration-300 hover:text-champagne-deep"
                          onClick={() => removeItem(item.key)}
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm text-ink">{formatCurrency(item.product.price)}</p>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(value) => updateQuantity(item.key, value)}
                      />
                      <p className="text-sm font-medium text-ink">{formatCurrency(item.lineTotal)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-line px-5 py-5 md:px-7">
              <div className="flex items-center justify-between text-sm text-truffle">
                <span>Subtotal</span>
                <span className="text-lg font-medium text-ink">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-truffle">
                Taxes and duties calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-[0.2em] text-velvet transition duration-300 hover:bg-champagne-deep"
              >
                Checkout coming soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
