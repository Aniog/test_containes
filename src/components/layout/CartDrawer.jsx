import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  React.useEffect(() => {
    if (!isCartOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isCartOpen, closeCart])

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-noir/50 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory text-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-gold">Your Cart</p>
            <h2 className="font-display text-3xl text-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-gold hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-3xl text-ink">Your bag is empty</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-ink/65">
                Add a few luminous pieces and build your everyday jewelry wardrobe.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-noir px-6 py-3 text-xs uppercase tracking-[0.26em] text-cream transition hover:bg-gold hover:text-noir"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.tone}`} className="rounded-[1.5rem] border border-line bg-white px-4 py-4 shadow-[0_10px_30px_rgba(22,17,14,0.08)]">
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 items-center justify-center rounded-[1rem] bg-stone text-[10px] uppercase tracking-[0.28em] text-ink/55">
                      {item.category}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={item.titleId} className="font-display text-xl uppercase tracking-[0.2em] text-ink">
                            {item.name}
                          </h3>
                          <p id={item.descId} className="mt-1 text-xs uppercase tracking-[0.22em] text-ink/55">
                            {item.category} · {item.tone}
                          </p>
                        </div>
                        <p className="text-sm uppercase tracking-[0.2em] text-ink">{currency.format(item.price)}</p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-line bg-ivory p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent p-0 text-ink hover:bg-stone"
                            aria-label={`Decrease quantity for ${item.shortName}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent p-0 text-ink hover:bg-stone"
                            aria-label={`Increase quantity for ${item.shortName}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="bg-transparent p-0 text-xs uppercase tracking-[0.24em] text-ink/55 hover:text-gold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-line bg-white px-5 py-5 md:px-6">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-ink">
            <span>Subtotal</span>
            <span>{currency.format(subtotal)}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-ink/60">Taxes and shipping calculated at checkout.</p>
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-noir px-6 py-4 text-xs uppercase tracking-[0.26em] text-cream transition hover:bg-gold hover:text-noir"
          >
            Checkout Soon
          </button>
        </div>
      </aside>
    </>
  )
}
