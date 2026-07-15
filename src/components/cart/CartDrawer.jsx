import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { formatPrice, getStrkImageUrl } from '@/data/store'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCart()

  useEffect(() => {
    document.body.classList.toggle('drawer-open', isCartOpen)

    return () => {
      document.body.classList.remove('drawer-open')
    }
  }, [isCartOpen])

  if (!isCartOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-stone-950/50 backdrop-blur-sm"
      onClick={closeCart}
    >
      <aside
        aria-modal="true"
        className="ml-auto flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
              Your cart
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl text-stone-950">
              Selected Pieces
            </h2>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700"
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-['Cormorant_Garamond'] text-4xl text-stone-950">
              Your cart is empty.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-stone-600">
              Add a few Velmora favorites to begin building your everyday jewelry wardrobe.
            </p>
            <Link
              className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm uppercase tracking-[0.24em] text-amber-200 transition duration-300 hover:bg-stone-900"
              to="/shop"
              onClick={closeCart}
            >
              Shop pieces
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => {
                const titleId = `${item.itemKey}-title`
                const captionId = `${item.itemKey}-caption`
                const variantId = `${item.itemKey}-variant`

                return (
                  <article
                    key={item.itemKey}
                    className="rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <span className="sr-only" id={captionId}>
                        {item.image.caption}
                      </span>
                      <img
                        alt={item.name}
                        className="h-28 w-24 rounded-2xl bg-stone-200 object-cover"
                        src={getStrkImageUrl(item.image.id)}
                      />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              className="font-['Cormorant_Garamond'] text-2xl uppercase tracking-[0.18em] text-stone-950"
                              id={titleId}
                              to={`/product/${item.slug}`}
                              onClick={closeCart}
                            >
                              {item.name}
                            </Link>
                            <p
                              className="mt-2 text-xs uppercase tracking-[0.28em] text-stone-500"
                              id={variantId}
                            >
                              {item.variant}
                            </p>
                          </div>
                          <button
                            className="text-xs uppercase tracking-[0.24em] text-stone-500 transition duration-300 hover:text-stone-900"
                            type="button"
                            onClick={() => removeItem(item.itemKey)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-auto flex items-end justify-between pt-6">
                          <div className="flex items-center rounded-full border border-stone-200 bg-stone-50 px-2 py-1">
                            <button
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border-0 bg-transparent p-0 text-stone-700"
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium text-stone-900">
                              {item.quantity}
                            </span>
                            <button
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full border-0 bg-transparent p-0 text-stone-700"
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-base font-medium text-stone-950">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="border-t border-stone-200 bg-white px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="text-xl font-medium text-stone-950">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                className="mt-5 w-full rounded-full bg-stone-950 px-5 py-4 text-sm uppercase tracking-[0.24em] text-amber-200 transition duration-300 hover:bg-stone-900"
                type="button"
              >
                Checkout soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
