import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

function CartItemImage({ item }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-stone-700/70 bg-stone-900">
      <img
        alt={item.name}
        className="h-28 w-24 object-cover"
        data-strk-img={`[cart-item-${item.id}-type] [cart-item-${item.id}-name] [cart-title]`}
        data-strk-img-id={`cart-${item.imageId}`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="500"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <span className="sr-only" id={`cart-item-${item.id}-type`}>
        {item.category}
      </span>
    </div>
  )
}

function CartDrawer() {
  const drawerRef = useRef(null)
  const { closeCart, isCartOpen, items, removeItem, subtotal, updateQuantity } = useCart()

  useStrkImages(drawerRef, [isCartOpen, items])

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <div
      className={`fixed inset-0 z-[70] transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      ref={drawerRef}
    >
      <div
        className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        aria-label="Shopping cart"
        className={`absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-stone-800 bg-stone-950/95 px-5 pb-8 pt-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-300 sm:px-7 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between border-b border-stone-800/80 pb-5">
          <div>
            <p className="eyebrow text-amber-200">Shopping bag</p>
            <h2 className="font-display text-3xl text-stone-100" id="cart-title">
              Your Cart
            </h2>
          </div>
          <button
            aria-label="Close cart"
            className="icon-button"
            onClick={closeCart}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-stone-700/70 bg-stone-900 text-stone-200">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-4xl text-stone-100">Your bag is still empty.</h3>
              <p className="mx-auto max-w-sm text-sm leading-7 text-stone-300">
                Discover polished everyday pieces and gift-ready sets designed to be treasured.
              </p>
            </div>
            <Link className="button-primary" onClick={closeCart} to="/shop">
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto pr-1">
              {items.map((item) => (
                <article className="flex gap-4 border-b border-stone-800/80 pb-5" key={item.itemKey}>
                  <CartItemImage item={item} />

                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.22em] text-stone-400">
                        {item.category}
                      </p>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            className="font-display text-2xl uppercase tracking-[0.2em] text-stone-100"
                            id={`cart-item-${item.id}-name`}
                          >
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-stone-300">{item.tone}</p>
                        </div>
                        <span className="text-sm text-stone-100">${item.price}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-stone-700/70 bg-stone-900 px-2 py-1 text-stone-100">
                        <button
                          aria-label={`Decrease quantity for ${item.name}`}
                          className="rounded-full p-2 transition hover:bg-stone-800"
                          onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                          type="button"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          aria-label={`Increase quantity for ${item.name}`}
                          className="rounded-full p-2 transition hover:bg-stone-800"
                          onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                          type="button"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        className="text-xs uppercase tracking-[0.22em] text-stone-400 transition hover:text-stone-100"
                        onClick={() => removeItem(item.itemKey)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 space-y-5 border-t border-stone-800/80 pt-5">
              <div className="flex items-center justify-between text-sm text-stone-300">
                <span>Subtotal</span>
                <strong className="text-lg font-medium text-stone-100">${subtotal.toFixed(2)}</strong>
              </div>
              <p className="text-sm leading-7 text-stone-400">
                Shipping and taxes are calculated at checkout. Complimentary worldwide shipping on orders over $75.
              </p>
              <button className="button-primary w-full justify-center" type="button">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
