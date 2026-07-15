import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatCurrency } from '@/lib/formatters'
import Button from '@/components/ui/Button.jsx'

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart()

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <>
      <button
        aria-label="Close cart"
        className={`fixed inset-0 z-40 bg-velmora-obsidian/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        type="button"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-mist/20 bg-velmora-obsidian text-velmora-ivory shadow-velmora transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-mist/15 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-velmora-gold" />
            <div>
              <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
                Cart
              </p>
              <h2 className="font-serif text-2xl">Your selection</h2>
            </div>
          </div>
          <button
            aria-label="Close cart"
            className="rounded-full border border-velmora-mist/20 p-2 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={closeCart}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-3xl text-velmora-ivory">Your bag is empty</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-velmora-ivory/70">
              Add a few quiet-luxury pieces to start building your Velmora stack.
            </p>
            <Button as={Link} className="mt-8" onClick={closeCart} to="/shop">
              Shop all pieces
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.tone}`}
                  className="rounded-3xl border border-velmora-mist/15 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl leading-none text-velmora-ivory">
                        {item.shortName}
                      </h3>
                      <p className="mt-2 text-sm text-velmora-ivory/70">
                        {item.material} · {item.tone} tone
                      </p>
                    </div>
                    <button
                      aria-label={`Remove ${item.shortName}`}
                      className="rounded-full border border-velmora-mist/15 p-2 text-velmora-ivory/70 transition hover:border-velmora-gold hover:text-velmora-gold"
                      onClick={() => removeItem(item.id, item.tone)}
                      type="button"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-product text-velmora-ivory">
                      {formatCurrency(item.price)}
                    </p>
                    <div className="flex items-center rounded-full border border-velmora-mist/15">
                      <button
                        aria-label={`Decrease quantity of ${item.shortName}`}
                        className="p-3 text-velmora-ivory/70 transition hover:text-velmora-gold"
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        type="button"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-velmora-ivory">
                        {item.quantity}
                      </span>
                      <button
                        aria-label={`Increase quantity of ${item.shortName}`}
                        className="p-3 text-velmora-ivory/70 transition hover:text-velmora-gold"
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        type="button"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-mist/15 px-6 py-6">
              <div className="flex items-center justify-between text-sm text-velmora-ivory/70">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-eyebrow text-velmora-gold">
                Shipping and taxes calculated at checkout later
              </p>
              <Button className="mt-5 w-full">Proceed to checkout</Button>
              <button
                className="mt-3 w-full text-sm uppercase tracking-product text-velmora-ivory/75 transition hover:text-velmora-gold"
                onClick={clearCart}
                type="button"
              >
                Clear bag
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
