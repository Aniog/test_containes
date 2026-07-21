import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

const CartDrawer = ({
  open,
  items,
  subtotal,
  onClose,
  onUpdateQuantity,
  onRemove,
}) => {
  const [mounted, setMounted] = useState(open)

  useEffect(() => {
    if (open) {
      setMounted(true)
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setMounted(false)
    }, 500)

    return () => window.clearTimeout(timeoutId)
  }, [open])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-noir/45 backdrop-blur-sm transition ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-noir px-5 pb-6 pt-5 text-ivory shadow-2xl transition duration-500 sm:px-6 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-brand text-ivory/60">Your bag</p>
            <h2 className="font-display text-3xl text-ivory">Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-ivory transition hover:bg-white/10"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="rounded-full border border-white/10 p-5 text-gold">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <p className="mt-6 font-display text-3xl text-ivory">Your cart is empty</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-ivory/65">
              Start with a piece you will wear on repeat, or choose a gift-worthy set.
            </p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-brand text-noir transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Browse the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto py-6">
              {items.map((item) => (
                <div key={item.cartKey} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl uppercase tracking-brand text-ivory">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ivory/55">{item.variant}</p>
                      <p className="mt-3 text-sm text-gold">${item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.cartKey)}
                      className="text-xs uppercase tracking-brand text-ivory/55 transition hover:text-ivory"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center overflow-hidden rounded-full border border-white/10">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartKey, Math.max(1, item.quantity - 1))}
                        className="flex h-10 w-10 items-center justify-center transition hover:bg-white/10"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartKey, item.quantity + 1)}
                        className="flex h-10 w-10 items-center justify-center transition hover:bg-white/10"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-[0.16em] text-ivory">${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.16em] text-ivory/70">
                <span>Subtotal</span>
                <span className="text-ivory">${subtotal}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-gold px-5 py-4 text-sm uppercase tracking-brand text-noir transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                Checkout Coming Soon
              </button>
              <p className="text-center text-xs leading-6 text-ivory/50">
                This storefront is ready for a real checkout integration later.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
