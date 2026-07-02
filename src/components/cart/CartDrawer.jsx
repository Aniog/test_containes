import { Gem, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const getMonogram = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

const CartDrawer = ({
  isOpen,
  items,
  subtotal,
  onClose,
  onRemove,
  onUpdateQuantity,
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!mounted) {
    return null
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close cart"
        aria-hidden={!isOpen}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[rgba(16,12,10,0.56)] backdrop-blur-sm transition ${
          isOpen ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      />

      <aside
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        aria-modal="true"
        role="dialog"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[28rem] flex-col border-l border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-[0_24px_60px_rgba(18,12,10,0.24)] transition-all duration-500 ${
          isOpen
            ? 'visible translate-x-0 pointer-events-auto'
            : 'invisible translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[color:var(--color-border)] px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Your cart</p>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-foreground)]">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart drawer"
            className="rounded-full border border-[color:var(--color-border)] p-3 text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="rounded-full border border-[color:var(--color-border)] p-5 text-[var(--color-accent)]">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-display text-3xl text-[var(--color-foreground)]">Your bag is empty</h3>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              Add a few Velmora favorites to build your daily stack or find a gift-ready set.
            </p>
            <Link to="/shop" onClick={onClose} className="btn-primary mt-2 w-full max-w-xs justify-center">
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => (
                <article
                  key={item.key}
                  className="grid grid-cols-[5.25rem_1fr] gap-4 rounded-[1.75rem] border border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] p-3"
                >
                  <div className="flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-[linear-gradient(145deg,#231917_0%,#3a2720_55%,#c9a25c_160%)] text-[var(--color-surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center">
                      <Gem className="h-4 w-4 text-[var(--color-accent)]" />
                      <span className="font-display text-2xl tracking-[0.18em] text-[var(--color-surface)]">
                        {getMonogram(item.name)}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="pr-2 text-sm uppercase tracking-[0.24em] text-[var(--color-foreground)]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.key)}
                        className="rounded-full p-2 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] p-1">
                        <button
                          type="button"
                          className="rounded-full p-2 text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-subtle)]"
                          onClick={() => onUpdateQuantity(item.key, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 px-2 text-center text-sm text-[var(--color-foreground)]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="rounded-full p-2 text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-subtle)]"
                          onClick={() => onUpdateQuantity(item.key, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <p className="text-sm font-medium text-[var(--color-foreground)]">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-[color:var(--color-border)] bg-[var(--color-surface)] px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-[var(--color-muted)]">
                <span>Subtotal</span>
                <span className="text-lg text-[var(--color-foreground)]">${subtotal}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Shipping and taxes calculated at checkout. Signature gift packaging is included with every order.
              </p>
              <button type="button" className="btn-primary mt-5 w-full justify-center">
                Checkout soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
