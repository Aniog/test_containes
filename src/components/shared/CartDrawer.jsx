import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import StoreImage from './StoreImage'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, subtotal, updateQuantity, removeItem } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-stone-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-stone-800 bg-stone-950 text-stone-50 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-800 px-5 py-5 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Your Cart</p>
            <h2 className="mt-2 font-serif text-2xl text-stone-50">Collected Pieces</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-stone-700 p-2 text-stone-200 transition-colors hover:border-stone-500 hover:text-stone-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full border border-stone-800 bg-stone-900 p-4 text-amber-200">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-stone-50">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">
              Add a few polished pieces to begin building your Velmora edit.
            </p>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="mt-6 rounded-full bg-amber-200 px-6 py-3 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-100"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 md:px-6">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 rounded-[1.5rem] border border-stone-800 bg-stone-900/80 p-4"
                >
                  <div className="h-28 w-24 shrink-0 overflow-hidden rounded-[1.25rem] bg-stone-800">
                    <StoreImage
                      alt={item.name}
                      imgId={item.imageId}
                      query={`[${item.descId}] [${item.titleId}]`}
                      ratio="3x4"
                      width="500"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={item.titleId} className="font-serif text-base uppercase tracking-[0.22em] text-stone-50">
                          {item.name}
                        </h3>
                        <p id={item.descId} className="mt-2 text-sm leading-5 text-stone-400">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs uppercase tracking-[0.24em] text-stone-400 transition-colors hover:text-stone-50"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <div className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/80 p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="rounded-full p-2 text-stone-200 transition-colors hover:bg-stone-800"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center text-sm text-stone-50">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="rounded-full p-2 text-stone-200 transition-colors hover:bg-stone-800"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-stone-50">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-stone-800 px-5 py-5 md:px-6">
              <div className="flex items-center justify-between text-sm text-stone-400">
                <span>Subtotal</span>
                <span className="text-base font-medium text-stone-50">${subtotal}</span>
              </div>
              <p className="mt-3 text-xs leading-5 text-stone-500">
                Shipping and taxes are calculated at checkout. Frontend preview only.
              </p>
              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  className="w-full rounded-full bg-amber-200 px-5 py-3.5 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-100"
                >
                  Checkout Preview
                </button>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full rounded-full border border-stone-700 px-5 py-3.5 text-center text-sm font-medium text-stone-100 transition-colors hover:border-stone-500 hover:text-stone-50"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
