import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button.jsx'
import { useCart } from './CartContext.jsx'
import { formatPrice } from '@/data/products.js'

const isGeneratedImageUrl = (value) => Boolean(value && !value.startsWith('data:image'))

const getCartImageSrc = (product) => {
  if (isGeneratedImageUrl(product.cartImageSrc)) return product.cartImageSrc
  const imageKeys = [`bestseller-${product.imageId}`, `shop-${product.imageId}`, `related-${product.imageId}`]
  const imageEntry = imageKeys.map((key) => strkImgConfig[key]).find((entry) => entry?.results?.[0]?.url)
  return imageEntry?.results?.[0]?.url || ''
}

const CartItemImage = ({ item }) => {
  const imageSrc = getCartImageSrc(item)

  return (
    <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-t-full rounded-b-2xl bg-velmora-cream text-velmora-gold">
      {imageSrc ? (
        <img alt={item.name} className="h-full w-full object-cover" src={imageSrc} />
      ) : (
        <span className="font-serif text-3xl" aria-hidden="true">V</span>
      )}
    </div>
  )
}


const CartDrawer = () => {
  const { items, itemCount, subtotal, isCartOpen, closeCart, removeFromCart, updateQuantity } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-drawer transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-velmora-clay">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-linen p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full bg-velmora-cream p-5 text-velmora-gold">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl">Your jewelry box is empty</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-clay">
                Add a piece from the collection and it will appear here instantly.
              </p>
              <Button className="mt-7" onClick={closeCart}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.tone}`} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-linen pb-5 text-velmora-ink">
                  <CartItemImage item={item} />
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-clay">{item.tone} tone</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-porcelain text-velmora-ink">
                        <button
                          type="button"
                          className="p-2 text-velmora-ink hover:text-velmora-gold"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          className="p-2 text-velmora-ink hover:text-velmora-gold"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs uppercase tracking-[0.18em] text-velmora-clay underline-offset-4 hover:text-velmora-ink hover:underline"
                        onClick={() => removeFromCart(item.id, item.tone)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <footer className="border-t border-velmora-linen bg-velmora-cream px-6 py-6 text-velmora-ink">
          <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span>Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <Button className="w-full" disabled={!items.length}>Checkout Preview</Button>
          <p className="mt-4 text-center text-xs leading-5 text-velmora-clay">
            Secure checkout connection can be added after the storefront design is approved.
          </p>
        </footer>
      </aside>
    </>
  )
}

export default CartDrawer
