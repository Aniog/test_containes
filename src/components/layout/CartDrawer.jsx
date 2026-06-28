import { Minus, Plus, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/format'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'

export default function CartDrawer() {
  const containerRef = useRef(null)
  const location = useLocation()
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    removeFromCart,
    updateQuantity,
  } = useCart()

  useEffect(() => {
    setIsCartOpen(false)
  }, [location.hash, location.pathname, location.search, setIsCartOpen])

  useStrkImages(containerRef, [items, isCartOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-stone-950/40 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col border-l border-stone-200 bg-stone-50 shadow-2xl transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Shopping bag</p>
            <h2 className="mt-1 font-[Cormorant_Garamond] text-3xl text-stone-950">
              Your Cart
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="rounded-full border border-stone-300 p-2 text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div ref={containerRef} className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-stone-300 bg-stone-100 px-8 text-center text-stone-600">
              <p className="font-[Cormorant_Garamond] text-4xl text-stone-900">Your bag is empty</p>
              <p className="mt-3 text-sm leading-7">
                Discover softly sculpted demi-fine pieces designed to be worn every day.
              </p>
              <Link to="/shop" onClick={() => setIsCartOpen(false)}>
                <Button className="mt-6">Shop now</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="grid grid-cols-[84px,1fr] gap-4 rounded-[1.75rem] border border-stone-200 bg-white p-3 shadow-[0_16px_40px_rgba(28,25,23,0.06)]"
                >
                  <div className="overflow-hidden rounded-[1.4rem] bg-stone-100">
                    <img
                      alt={item.alt}
                      className="h-24 w-full object-cover"
                      data-strk-img-id={`product-cart-${item.id}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="320"
                      src={imagePlaceholder}
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-[Cormorant_Garamond] text-xl uppercase tracking-[0.18em] text-stone-950">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">
                          {item.variant}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-stone-900">
                        {formatCurrency(item.price)}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="rounded-full p-2 text-stone-700 transition hover:bg-stone-200"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-stone-900">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="rounded-full p-2 text-stone-700 transition hover:bg-stone-200"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-950"
                        onClick={() => removeFromCart(item.id, item.variant)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-stone-200 px-5 py-5 sm:px-6">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.22em] text-stone-600">
            <span>Subtotal</span>
            <span className="text-stone-950">{formatCurrency(subtotal)}</span>
          </div>
          <Button className="w-full">Checkout soon</Button>
          <p className="mt-3 text-center text-xs leading-6 text-stone-500">
            Cart is fully interactive and ready to connect to a real checkout next.
          </p>
        </div>
      </aside>
    </>
  )
}
