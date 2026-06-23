import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { getStrkImageUrl } from '@/lib/strkImages'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-brand-umber/35 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-brand-line bg-brand-ivory text-brand-espresso shadow-soft transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-brand-line px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5" />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Your cart</p>
              <h2 className="font-serif text-2xl">Velmora Bag</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-brand-line p-2 text-brand-espresso transition hover:border-brand-bronze"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-brand-espresso">A little room for something lovely</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-brand-mink">
                Your cart is empty. Browse the collection and add a piece to make it yours.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 rounded-full bg-brand-bronze px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-umber transition hover:opacity-90"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const titleId = `cart-item-${item.itemKey}-title`
                const descId = `cart-item-${item.itemKey}-desc`

                return (
                  <article
                    key={item.itemKey}
                    className="grid grid-cols-[96px_1fr] gap-4 rounded-[1.5rem] border border-brand-line bg-brand-surface p-4"
                  >
                    <img
                      alt={item.name}
                      className="h-28 w-24 rounded-2xl object-cover"
                      src={getStrkImageUrl(item.imageId)}
                    />
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            id={titleId}
                            className="font-serif text-lg uppercase tracking-[0.2em] text-brand-espresso"
                          >
                            {item.name}
                          </h3>
                          <p id={descId} className="mt-1 text-sm text-brand-mink">
                            {item.category} · {item.tone} tone
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.itemKey)}
                          className="text-xs uppercase tracking-[0.18em] text-brand-mink transition hover:text-brand-espresso"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-brand-line bg-brand-ivory">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                            className="p-2 text-brand-espresso"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-medium text-brand-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                            className="p-2 text-brand-espresso"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-base font-medium text-brand-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-brand-line px-6 py-5">
          <div className="flex items-center justify-between text-sm text-brand-mink">
            <span>Subtotal</span>
            <span className="text-lg font-medium text-brand-espresso">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-6 text-brand-mink">
            Shipping and taxes calculated at checkout. Checkout can be connected later.
          </p>
          <Link
            to="/shop"
            onClick={() => setIsCartOpen(false)}
            className="mt-5 block rounded-full bg-brand-bronze px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-brand-umber transition hover:opacity-90"
          >
            Continue to shop
          </Link>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
