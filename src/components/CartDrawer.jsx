import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { getProductBySlug } from '@/data/products'
import QuantitySelector from './QuantitySelector'

function CartDrawer() {
  const { items, isCartOpen, closeCart, removeFromCart, subtotal, updateQuantity } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-stone-950/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-stone-300/60 bg-stone-50 shadow-2xl transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-300/60 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">Your cart</p>
            <h2 className="mt-2 font-serif text-3xl text-stone-950">Velmora Bag</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-stone-300 p-2 text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center text-stone-600">
            <div className="rounded-full bg-stone-200 p-4 text-stone-700">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-stone-950">Your bag is empty</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Add a few forever pieces and your selection will appear here.
              </p>
            </div>
            <Link
              className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-100 transition hover:bg-amber-200 hover:text-stone-950"
              to="/shop"
              onClick={closeCart}
            >
              Browse the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => {
                const fallbackProduct = getProductBySlug(item.slug)
                const previewImage = item.imageUrl || fallbackProduct?.cardImage || fallbackProduct?.galleryImages?.[0] || ''

                return (
                  <article key={item.id} className="rounded-[1.5rem] border border-stone-300/60 bg-white p-4">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-20 overflow-hidden rounded-[1rem] bg-stone-200">
                        <img alt={item.name} className="h-full w-full object-cover" src={previewImage} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              className="text-xs uppercase tracking-[0.3em] text-stone-950"
                              onClick={closeCart}
                              to={`/product/${item.slug}`}
                            >
                              {item.name}
                            </Link>
                            <p className="mt-2 text-sm text-stone-500">{item.tone}</p>
                          </div>
                          <button
                            type="button"
                            className="text-sm text-stone-500 transition hover:text-stone-950"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <QuantitySelector
                            quantity={item.quantity}
                            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                          />
                          <p className="text-sm font-medium text-stone-900">
                            ${(item.price * item.quantity).toFixed(0)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="space-y-4 border-t border-stone-300/60 bg-stone-100 px-6 py-6">
              <div className="flex items-center justify-between text-sm text-stone-700">
                <span>Subtotal</span>
                <span className="font-medium text-stone-950">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs leading-6 text-stone-500">
                Shipping and taxes are calculated at checkout. Checkout can be connected later.
              </p>
              <button
                type="button"
                className="w-full rounded-full bg-stone-950 px-5 py-4 text-sm font-medium text-stone-100 transition hover:bg-amber-200 hover:text-stone-950"
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
