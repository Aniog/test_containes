import { ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from './CartContext'
import QuantitySelector from '../ui/QuantitySelector'
import Button from '../ui/Button'
import { formatPrice } from '../../lib/utils'

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
  } = useCart()

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-obsidian/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-mist px-6 pb-6 pt-5 shadow-velvet transition-transform duration-300 md:px-8 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-parchment pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-bronze">Your cart</p>
            <h2 className="font-serif text-3xl text-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-parchment p-2 text-stone transition hover:text-ink"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-shell p-5 text-bronze">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-ink">Your bag is empty</h3>
              <p className="text-sm leading-6 text-stone">
                Add a few pieces to begin your Velmora collection.
              </p>
            </div>
            <Button onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto py-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[28px] border border-parchment bg-shell p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-2xl uppercase tracking-luxe text-ink">
                        {item.product.name}
                      </p>
                      <p className="mt-2 text-sm text-stone">{item.tone}</p>
                      <p className="mt-1 text-sm text-stone">{formatPrice(item.product.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs uppercase tracking-[0.18em] text-stone transition hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <QuantitySelector
                      quantity={item.quantity}
                      onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                    <p className="text-sm font-medium text-ink">
                      {formatPrice(item.quantity * item.product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t border-parchment pt-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-stone">
                <span>Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-sm leading-6 text-stone">
                Checkout can be connected later. For now, the cart state is fully interactive.
              </p>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
