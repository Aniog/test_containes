import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import QuantitySelector from '@/components/shared/QuantitySelector.jsx'
import { formatPrice } from '@/data/store.js'
import { useCart } from '@/context/CartContext.jsx'

function CartDrawer() {
  const { items, isOpen, setIsOpen, subtotal, updateQuantity, removeItem } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-soft transition duration-500 ease-velmora ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-6 py-5">
          <div>
            <p className="velmora-eyebrow">Your Cart</p>
            <h2 className="mt-2 font-display text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="rounded-full border border-velmora-ink/10 p-3 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-4xl text-velmora-ink">Quietly empty</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-velmora-truffle">
              Add a few Velmora pieces to begin your curated edit.
            </p>
            <Link to="/shop" className="velmora-button-primary mt-8" onClick={() => setIsOpen(false)}>
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4 border-b border-velmora-ink/10 pb-6">
                  <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-[1.5rem] bg-velmora-mist/70 px-3 text-center">
                    <span className="font-display text-3xl text-velmora-ink">{item.name.charAt(0)}</span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="velmora-product-name text-sm">{item.name}</h3>
                        <p className="mt-2 text-sm text-velmora-truffle">{item.tone} tone</p>
                      </div>
                      <p className="text-sm font-medium text-velmora-ink">{formatPrice(item.price)}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                      <QuantitySelector
                        value={item.quantity}
                        onDecrease={() => updateQuantity(item.cartId, item.quantity - 1)}
                        onIncrease={() => updateQuantity(item.cartId, item.quantity + 1)}
                      />
                      <button
                        type="button"
                        className="text-sm uppercase tracking-[0.18em] text-velmora-truffle transition hover:text-velmora-gold"
                        onClick={() => removeItem(item.cartId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-ink/10 px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-velmora-truffle">
                <span>Subtotal</span>
                <span className="text-base text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-velmora-truffle">
                Shipping and taxes are calculated at checkout. Checkout can be connected later.
              </p>
              <button type="button" className="velmora-button-primary mt-6 w-full">
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
