import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'

export function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
  } = useCart()

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        aria-label="Close cart drawer"
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-velmora-ink/50 transition ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-2xl transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-truffle">Your Cart</p>
            <h2 className="font-display text-3xl text-velmora-espresso">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-line p-2 transition hover:border-velmora-gold hover:text-velmora-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
            {items.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-velmora-line bg-velmora-parchment px-6 py-10 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-truffle">Your cart is empty</p>
                <h3 className="mt-3 font-display text-3xl text-velmora-espresso">Choose your next signature piece.</h3>
                <Button as="link" href="/shop" className="mt-6" onClick={() => setIsCartOpen(false)}>
                  Shop Now
                </Button>
              </div>
            ) : (
              items.map((item) => {
                const titleId = `cart-${item.id}-${item.variant}-title`
                const descId = `cart-${item.id}-${item.variant}-desc`

                return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 rounded-[1.75rem] border border-velmora-line bg-white/60 p-3 shadow-soft">
                    <div className="flex h-28 w-24 flex-col justify-between rounded-[1.25rem] border border-velmora-line bg-velmora-parchment p-3 text-velmora-espresso">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-velmora-truffle">
                        {item.category}
                      </p>
                      <div>
                        <p className="font-display text-2xl uppercase tracking-[0.24em] text-velmora-espresso">
                          V
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-velmora-truffle">
                          Signature piece
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            id={titleId}
                            onClick={() => setIsCartOpen(false)}
                            className="font-display text-lg uppercase tracking-product text-velmora-espresso"
                          >
                            {item.name}
                          </Link>
                          <p id={descId} className="mt-1 text-sm text-velmora-truffle">
                            {item.variant}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-velmora-espresso">${item.price}</p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center rounded-full border border-velmora-line bg-velmora-porcelain">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-velmora-truffle"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-espresso">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-velmora-truffle"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs uppercase tracking-[0.22em] text-velmora-truffle transition hover:text-velmora-gold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        <div className="border-t border-velmora-line bg-velmora-porcelain px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between text-sm text-velmora-truffle">
            <span>Subtotal</span>
            <span className="font-medium text-velmora-espresso">${subtotal.toFixed(2)}</span>
          </div>
          <Button className="mt-4 w-full">Checkout Coming Soon</Button>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.24em] text-velmora-truffle">
            Shipping and taxes calculated at checkout
          </p>
        </div>
      </aside>
    </div>
  )
}
