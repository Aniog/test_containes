import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { currency } from '@/data/products'
import { placeholderSrc } from '@/data/storefront'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, subtotal, removeItem, updateQuantity } = useCart()
  const location = useLocation()

  useEffect(() => {
    closeCart()
  }, [closeCart, location.pathname])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-stone-900/45 transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Shopping bag</p>
            <h2 className="mt-2 font-serif text-3xl">Your Cart</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-stone-900">Your cart is empty</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-stone-600">
                Add a Velmora favorite and it will appear here for a seamless checkout later.
              </p>
              <Button variant="accent" className="mt-6" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const cartTitleId = `${item.cartKey}-title`
                const cartDescId = `${item.cartKey}-desc`

                return (
                  <article
                    key={item.cartKey}
                    className="flex gap-4 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm shadow-stone-200/40"
                  >
                    <img
                      src={placeholderSrc}
                      alt={item.name}
                      data-strk-img-id={item.imageId}
                      data-strk-img={`[${cartDescId}] [${cartTitleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="320"
                      className="h-24 w-20 rounded-2xl bg-stone-100 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            id={cartTitleId}
                            className="font-serif text-base uppercase leading-snug tracking-[0.18em] text-stone-900 sm:text-lg sm:tracking-[0.22em]"
                          >
                            {item.name}
                          </p>
                          <p id={cartDescId} className="mt-1 text-sm text-stone-500">
                            {item.variant}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-stone-900">
                          {currency.format(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-stone-300">
                          <button
                            type="button"
                            className="h-9 w-9 text-stone-900"
                            onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="h-9 w-9 text-stone-900"
                            onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-xs uppercase tracking-[0.28em] text-stone-500 transition-colors hover:text-stone-900"
                          onClick={() => removeItem(item.cartKey)}
                        >
                          Remove
                        </button>
                      </div>
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="mt-4 inline-block text-xs uppercase tracking-[0.28em] text-amber-700"
                      >
                        View product
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-stone-200 px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span className="font-medium text-stone-900">{currency.format(subtotal)}</span>
          </div>
          <Button variant="accent" size="lg" className="mt-4 w-full">
            Secure Checkout Soon
          </Button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
