import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from './storefront-utils.jsx'

function getProductMonogram(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity, subtotal } = useCart()

  useEffect(() => {
    if (!isCartOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isCartOpen])

  if (!isCartOpen) {
    return null
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[70] bg-stone-950/45 transition"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl transition-transform duration-300 translate-x-0"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Shopping bag</p>
            <h2 id="cart-drawer-title" className="mt-2 font-serif text-3xl text-stone-950">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-700">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <p className="font-serif text-3xl text-stone-950">Your bag is empty</p>
              <p className="text-sm leading-7 text-stone-600">
                Discover everyday icons and gift-ready favorites from the latest Velmora edit.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-amber-700 px-6 py-3 text-xs font-medium uppercase tracking-[0.28em] text-white transition hover:bg-amber-800"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6 sm:px-6">
              {cartItems.map((item) => {
                const titleId = `cart-${item.lineId}-title`
                const descId = `cart-${item.lineId}-desc`
                return (
                  <article key={item.lineId} className="grid grid-cols-[92px,1fr] gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-sm">
                    <div className="relative flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-[1.1rem] border border-amber-200/70 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <div className="absolute inset-3 rounded-full border border-amber-300/20" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.2),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_36%)]" />
                      <div className="relative text-center">
                        <p className="text-[10px] uppercase tracking-[0.34em] text-amber-200/80">Velmora</p>
                        <p className="mt-2 font-serif text-3xl tracking-[0.16em] text-amber-50">{getProductMonogram(item.name)}</p>
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-col justify-between gap-3">
                      <div>
                        <p id={titleId} className="font-serif text-lg uppercase tracking-[0.18em] text-stone-950">
                          {item.name}
                        </p>
                        <p id={descId} className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-500">
                          {item.variant} tone · {item.category}
                        </p>
                        <p className="mt-3 text-sm text-stone-800">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-2 py-1 text-stone-900">
                          <button
                            type="button"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.lineId)}
                          className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-900"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="border-t border-stone-200 bg-white px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="font-medium text-stone-950">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Taxes and duties calculated at checkout
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-stone-900 px-6 py-3 text-xs font-medium uppercase tracking-[0.28em] text-stone-50 transition hover:bg-stone-800"
              >
                Checkout coming soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
