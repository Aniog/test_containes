import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/store'
import { cn } from '@/lib/utils'

const CartDrawer = () => {
  const {
    closeCart,
    isCartOpen,
    items,
    removeItem,
    subtotal,
    updateQuantity,
  } = useCart()

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] transition-all duration-300',
        isCartOpen ? 'visible' : 'invisible pointer-events-none',
      )}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        className={cn(
          'absolute inset-0 bg-velmora-ink/40 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0',
        )}
        aria-label="Close cart"
        onClick={closeCart}
      />

      <aside
        className={cn(
          'absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl shadow-soft transition-transform duration-500 ease-luxe',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/70 px-5 py-5 md:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              Cart
            </p>
            <h2 className="font-heading text-3xl text-velmora-ink">Your Edit</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ink/10"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-velmora-mist text-velmora-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-3xl">Your cart is empty</h3>
              <p className="text-sm leading-7 text-velmora-ink/70">
                Add a few Velmora favorites and we’ll keep them ready here.
              </p>
            </div>
            <Link to="/shop" className="button-primary" onClick={closeCart}>
              Shop Bestsellers
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 md:px-7">
              {items.map((item) => (
                <article
                  key={item.lineId}
                  className="rounded-[1.75rem] border border-velmora-sand/70 bg-velmora-mist p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-2xl uppercase tracking-product text-velmora-ink">
                        {item.name}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-velmora-ink/55">
                        {item.variant}
                      </p>
                      <p className="mt-4 text-sm font-medium text-velmora-ink">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.24em] text-velmora-ink/55 transition-colors hover:text-velmora-gold"
                      onClick={() => removeItem(item.lineId)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-velmora-ink/10 bg-velmora-pearl p-1">
                      <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-velmora-ink transition-colors hover:bg-velmora-mist"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-9 text-center text-sm text-velmora-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-velmora-ink transition-colors hover:bg-velmora-mist"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-velmora-ink">
                      {formatPrice(item.quantity * item.price)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-sand/70 px-5 py-5 md:px-7">
              <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-ink/60">
                <span>Subtotal</span>
                <span className="text-base text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <button type="button" className="button-primary w-full">
                Checkout Coming Soon
              </button>
              <p className="mt-3 text-center text-xs leading-6 text-velmora-ink/55">
                Shipping and taxes are calculated at checkout.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
