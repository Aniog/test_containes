import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'
import { formatPrice } from '@/lib/format'

const CartDrawer = () => {
  const {
    cartItems,
    cartCount,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useStore()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-velvet/50 backdrop-blur-sm transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velvet/10 bg-ivory text-velvet shadow-soft transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velvet/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-velvet/50">Shopping Bag</p>
            <h2 className="font-serif text-3xl">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full border border-velvet/15 p-2 text-velvet transition hover:border-gold hover:text-gold-deep"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-velvet/10 p-5 text-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-velvet">Your bag is empty</h3>
              <p className="text-sm leading-7 text-velvet/65">
                Add a few treasured pieces to begin your Velmora edit.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-eyebrow text-velvet transition hover:bg-gold-deep hover:text-ivory"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {cartItems.map((item) => (
                <article
                  key={item.key}
                  className="rounded-[24px] border border-velvet/10 bg-white px-4 py-4 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-lg uppercase tracking-product text-velvet"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs uppercase tracking-eyebrow text-velvet/45">
                        {item.category} · {item.variant}
                      </p>
                    </div>
                    <p className="text-sm text-velvet/70">{formatPrice(item.price)}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full border border-velvet/10 bg-ivory px-2 py-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="rounded-full p-1 text-velvet hover:text-gold-deep"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-velvet">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="rounded-full p-1 text-velvet hover:text-gold-deep"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.key)}
                      className="text-xs uppercase tracking-eyebrow text-velvet/55 transition hover:text-velvet"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="space-y-4 border-t border-velvet/10 px-6 py-5">
              <div className="flex items-center justify-between text-sm text-velvet/70">
                <span>{cartCount} items</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-gold px-5 py-4 text-xs uppercase tracking-eyebrow text-velvet transition hover:bg-gold-deep hover:text-ivory"
              >
                Checkout Coming Soon
              </button>
              <p className="text-center text-xs leading-6 text-velvet/50">
                Taxes and shipping are calculated at the next step.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
