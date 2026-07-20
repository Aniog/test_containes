import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import ProductImage from '@/components/product/ProductImage'
import { products } from '@/data/products'
import { useCart } from '@/lib/cart'
import { useStrkImages } from '@/lib/useStrkImages'

function CartItemImage({ product }) {
  if (!product) return null

  const sharedProps = {
    titleId: `cart-${product.id}-title-ref`,
    captionId: `cart-${product.id}-caption-ref`,
    caption: product.searchText,
    alt: product.name,
    ratio: '1x1',
    width: '240',
  }

  return (
    <>
      <span id={`cart-${product.id}-title-ref`} className="sr-only">{product.name}</span>
      {product.id === 'vivid-aura-jewels' && <ProductImage id="cart-static-vivid-aura-jewels" {...sharedProps} />}
      {product.id === 'majestic-flora-nectar' && <ProductImage id="cart-static-majestic-flora-nectar" {...sharedProps} />}
      {product.id === 'golden-sphere-huggies' && <ProductImage id="cart-static-golden-sphere-huggies" {...sharedProps} />}
      {product.id === 'amber-lace-earrings' && <ProductImage id="cart-static-amber-lace-earrings" {...sharedProps} />}
      {product.id === 'royal-heirloom-set' && <ProductImage id="cart-static-royal-heirloom-set" {...sharedProps} />}
    </>
  )
}

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, subtotal, toCurrency } = useCart()
  const containerRef = useStrkImages([open, items.length])

  return (
    <div className={`fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        ref={containerRef}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-velmora transition-transform duration-500 sm:w-[28rem] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Edit</h2>
          </div>
          <button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-espresso/15 bg-transparent text-velmora-espresso transition hover:bg-velmora-espresso hover:text-white" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-ivory text-velmora-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velmora-espresso">Your cart is quiet.</h3>
            <p className="mt-3 text-sm leading-7 text-velmora-mocha">
              Add a bestselling piece to begin your Velmora ritual.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-5">
              {items.map((item) => {
                const product = products.find((entry) => entry.id === item.productId)
                const titleId = `cart-${item.key}-title`
                return (
                  <article key={item.key} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-espresso/10 pb-5">
                    <div className="overflow-hidden rounded-sm bg-velmora-ivory">
                      <CartItemImage product={product} />
                    </div>
                    <div className="min-w-0 text-velmora-espresso">
                      <h3 id={titleId} className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso">{item.name}</h3>
                      <p className="mt-1 text-xs text-velmora-mocha">{item.variant}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-velmora-espresso/15 text-velmora-espresso">
                          <button type="button" className="flex h-8 w-8 items-center justify-center bg-transparent text-velmora-espresso" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-7 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" className="flex h-8 w-8 items-center justify-center bg-transparent text-velmora-espresso" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-velmora-espresso">{toCurrency(item.price * item.quantity)}</span>
                      </div>
                      <button type="button" onClick={() => removeItem(item.key)} className="mt-3 inline-flex items-center gap-1 bg-transparent p-0 text-xs font-semibold uppercase tracking-luxury text-velmora-mocha transition hover:text-velmora-espresso">
                        <Trash2 className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}

        <div className="border-t border-velmora-espresso/10 bg-velmora-ivory px-5 py-5 text-velmora-espresso">
          <div className="flex items-center justify-between font-serif text-2xl">
            <span>Subtotal</span>
            <span>{toCurrency(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-6 text-velmora-mocha">Shipping and returns are complimentary. Checkout integration can be connected next.</p>
          <button
            type="button"
            className="velmora-checkout-button mt-5 w-full rounded-full px-6 py-4 text-sm font-bold uppercase tracking-luxury shadow-soft transition disabled:cursor-not-allowed disabled:shadow-none"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
