import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/Button'
import { cn, formatCurrency } from '@/lib/utils'

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-velmora-noir/55 backdrop-blur-sm transition duration-300',
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeCart}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora-card transition duration-500',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-brand text-velmora-taupe">Your Cart</p>
            <h2 className="font-display text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-3xl text-velmora-ink">Your bag is still waiting</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">
                Add a piece you love and enjoy free worldwide shipping on orders over $75.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 rounded-full bg-velmora-gold px-6 py-3 text-xs uppercase tracking-product text-velmora-noir transition hover:bg-velmora-gold-soft"
              >
                Shop Bestsellers
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="rounded-[1.75rem] border border-velmora-line bg-velmora-pearl p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-product text-velmora-taupe">
                        {item.category}
                      </p>
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="mt-2 block font-display text-2xl leading-none text-velmora-ink"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-2 text-sm text-velmora-taupe">{item.variant}</p>
                    </div>
                    <p className="text-sm uppercase tracking-product text-velmora-ink">
                      {formatCurrency(item.price)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-velmora-taupe transition hover:bg-velmora-champagne"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm text-velmora-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-velmora-taupe transition hover:bg-velmora-champagne"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs uppercase tracking-product text-velmora-taupe transition hover:text-velmora-gold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line px-6 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-product text-velmora-taupe">
            <span>Subtotal</span>
            <span className="text-velmora-ink">{formatCurrency(subtotal)}</span>
          </div>
          <p className="mt-3 text-sm text-velmora-taupe">
            Shipping and taxes are calculated at checkout.
          </p>
          <Button className="mt-5 w-full" size="lg">
            Checkout Soon
          </Button>
        </div>
      </aside>
    </>
  )
}
