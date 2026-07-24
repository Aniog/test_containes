import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext.jsx'

const IMAGE_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="

const getCartImageId = (slug) => `product-${slug}-main-c1a`

const getCartImageSrc = (slug) => {
  const configEntry = strkImgConfig?.[getCartImageId(slug)]
  const pickedResult = configEntry?.results?.find((result) => result.id === configEntry?.picked)
  return pickedResult?.url || configEntry?.results?.[0]?.url || IMAGE_PLACEHOLDER
}

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    itemCount,
    subtotal,
    shipping,
    total,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart()

  const closeDrawer = () => setIsCartOpen(false)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/50 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-line/20 bg-velmora-cream shadow-velmora transition duration-500 ease-luxe ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
        inert={!isCartOpen}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between border-b border-velmora-line/30 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            className="rounded-full border border-velmora-line/40 p-2 text-velmora-espresso transition hover:bg-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="rounded-full border border-velmora-line/40 bg-white/60 p-5">
              <ShoppingBag className="h-8 w-8 text-velmora-gold" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-velmora-espresso">Your cart is empty</h3>
              <p className="text-sm text-velmora-espresso/70">
                Add a few pieces to build your everyday gold rotation.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeDrawer}
              className="rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.25em] text-velmora-cream transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={item.key}
                  className="rounded-3xl border border-velmora-line/40 bg-velmora-ivory p-4 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <img
                      alt={item.name}
                      className="h-24 w-20 rounded-2xl object-cover"
                      src={getCartImageSrc(item.slug)}
                    />

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            id={`cart-${item.slug}-category`}
                            className="text-[0.68rem] uppercase tracking-[0.28em] text-velmora-gold"
                          >
                            {item.category}
                          </p>
                          <Link
                            id={`cart-${item.slug}-title`}
                            to={`/product/${item.slug}`}
                            onClick={closeDrawer}
                            className="mt-1 block font-serif text-lg uppercase tracking-[0.18em] text-velmora-espresso transition hover:text-velmora-gold"
                          >
                            {item.name}
                          </Link>
                          <p
                            id={`cart-${item.slug}-tone`}
                            className="mt-1 text-sm text-velmora-espresso/70"
                          >
                            {item.tone} tone
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="rounded-full p-2 text-velmora-espresso/60 transition hover:bg-velmora-champagne hover:text-velmora-espresso"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex items-center rounded-full border border-velmora-line/50 bg-white/70 px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-champagne"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-champagne"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="text-sm font-medium text-velmora-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-5 border-t border-velmora-line/30 bg-white/40 px-6 py-6">
              <div className="space-y-3 text-sm text-velmora-espresso">
                <div className="flex items-center justify-between">
                  <span>Items ({itemCount})</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-velmora-line/30 pt-3 font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm uppercase tracking-[0.25em] text-velmora-cream transition hover:bg-velmora-gold hover:text-velmora-ink"
              >
                Checkout soon
              </button>
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-velmora-espresso/65">
                <button type="button" onClick={closeDrawer} className="transition hover:text-velmora-gold">
                  Continue shopping
                </button>
                <button type="button" onClick={clearCart} className="transition hover:text-velmora-gold">
                  Clear cart
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
