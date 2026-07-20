import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'

function CartLine({ item }) {
  const { removeFromCart, updateQuantity } = useCart()
  const titleId = `cart-title-${item.id}-${item.variant.toLowerCase()}`
  const descId = `cart-desc-${item.id}-${item.variant.toLowerCase()}`

  return (
    <article className="grid grid-cols-[5rem_1fr] gap-4 border-b border-velmora-taupe/30 py-5 text-velmora-espresso">
      <div className="grid h-20 w-20 place-items-center rounded-full border border-velmora-taupe/30 bg-velmora-ivory text-velmora-gold">
        <ShoppingBag className="h-7 w-7" />
      </div>
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 id={titleId} className="font-serif text-lg uppercase tracking-velmora text-velmora-espresso">
              {item.name}
            </h3>
            <p id={descId} className="mt-1 text-xs uppercase tracking-wideLuxury text-velmora-umber">
              {item.variant} tone · {item.material}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(item.id, item.variant)}
            className="rounded-full p-1 text-velmora-umber transition hover:bg-velmora-ivory hover:text-velmora-espresso"
            aria-label={`Remove ${item.name}`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center rounded-full border border-velmora-taupe/40 text-velmora-espresso">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
              className="p-2 transition hover:text-velmora-gold"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
              className="p-2 transition hover:text-velmora-gold"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="font-semibold text-velmora-espresso">${item.price * item.quantity}</p>
        </div>
      </div>
    </article>
  )
}

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-velmora transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-velmora-taupe/30 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-wideLuxury text-velmora-gold">Your Selection</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Velmora Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-taupe/40 p-2 text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length ? (
            items.map((item) => <CartLine key={`${item.id}-${item.variant}`} item={item} />)
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <ShoppingBag className="h-12 w-12 text-velmora-gold" />
              <h3 className="mt-6 font-serif text-3xl">Your cart is quietly waiting.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-umber">
                Add demi-fine pieces made for gifting, layering, and everyday gold rituals.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-8 rounded-full bg-velmora-gold px-7 py-3 text-sm font-bold uppercase tracking-velmora text-velmora-espresso transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
              >
                Shop Jewelry
              </Link>
            </div>
          )}
        </div>

        <footer className="border-t border-velmora-taupe/30 p-6">
          <div className="flex items-center justify-between text-lg font-semibold text-velmora-espresso">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-sm text-velmora-umber">Shipping and taxes calculated at checkout.</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-bold uppercase tracking-velmora text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            Checkout Preview
          </button>
        </footer>
      </aside>
    </>
  )
}
