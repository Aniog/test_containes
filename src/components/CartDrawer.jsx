import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/utils'
import { getPlaceholderImage } from '@/lib/placeholders'

function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-ink/45 backdrop-blur-sm transition ${
          isCartOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-sand bg-ivory text-ink shadow-2xl transition-transform duration-300 sm:w-[430px] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-sand px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-ink/60">
              Shopping Bag
            </p>
            <h2 className="font-serif text-2xl">Your Cart</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="rounded-full border border-sand p-2 text-ink transition hover:border-gold hover:text-gold"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="rounded-full bg-pearl p-4 text-gold shadow-soft">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-ink">Your bag is empty</h3>
              <p className="text-sm leading-6 text-ink/65">
                Discover luminous demi-fine pieces designed for gifting and everyday wear.
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-6 text-sm font-medium text-ink transition hover:bg-gold-deep"
              to="/shop"
              onClick={() => setIsCartOpen(false)}
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {cartItems.map((item) => {
                const titleId = `cart-${item.id}-title`
                const categoryId = `cart-${item.id}-category`
                const fallbackSrc = getPlaceholderImage({
                  title: item.name,
                  subtitle: item.variant,
                  ratio: '3x4',
                  mood: 'product',
                })

                return (
                  <article
                    key={item.id}
                    className="grid grid-cols-[88px,1fr] gap-4 rounded-[1.5rem] border border-sand bg-pearl/60 p-3"
                  >
                    <div className="overflow-hidden rounded-[1.25rem] bg-sand">
                      <img
                        alt={item.name}
                        className="aspect-[3/4] h-full w-full object-cover"
                        src={fallbackSrc}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p
                            id={categoryId}
                            className="text-[11px] uppercase tracking-[0.3em] text-ink/55"
                          >
                            {item.category}
                          </p>
                          <h3
                            id={titleId}
                            className="font-serif text-lg uppercase tracking-[0.28em] text-ink"
                          >
                            {item.name}
                          </h3>
                          <p className="text-sm text-ink/65">{item.variant}</p>
                        </div>
                        <button
                          type="button"
                          className="text-xs uppercase tracking-[0.24em] text-ink/50 transition hover:text-ink"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-sand bg-ivory">
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="rounded-full p-2 text-ink transition hover:text-gold"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${item.name}`}
                            className="rounded-full p-2 text-ink transition hover:text-gold"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-ink">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="space-y-4 border-t border-sand px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-ink/65">
                <span>Subtotal</span>
                <span className="font-medium text-ink">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="text-xs leading-5 text-ink/55">
                Shipping and taxes are calculated at checkout. Checkout will be connected later.
              </p>
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-medium text-ink transition hover:bg-gold-deep"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
