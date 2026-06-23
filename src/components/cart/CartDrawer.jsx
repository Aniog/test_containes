import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'
import QuantitySelector from '@/components/common/QuantitySelector.jsx'

const CartDrawer = () => {
  const { items, isOpen, subtotal, closeCart, removeFromCart, updateQuantity } = useCart()

  useEffect(() => {
    if (!isOpen) return undefined

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] bg-overlay-scrim backdrop-blur-md">
      <div className="ml-auto flex h-full w-full max-w-xl flex-col bg-base px-5 pb-6 pt-5 text-foreground shadow-editorial sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline-dark pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent">Shopping Bag</p>
            <h2 className="mt-2 text-3xl">Your cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark text-foreground transition hover:border-accent"
            aria-label="Close cart drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="hide-scrollbar flex-1 space-y-5 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="rounded-[1.75rem] border border-hairline-dark bg-base-muted px-6 py-8 text-center">
              <p className="font-display text-3xl text-foreground">Your bag is empty</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Discover polished pieces designed for gifting and everyday glow.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition hover:bg-accent hover:text-ink"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartKey} className="rounded-[1.5rem] border border-hairline-dark bg-base-muted p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <Link to={`/product/${item.slug}`} onClick={closeCart}>
                      <h3 className="font-display text-2xl uppercase tracking-[0.22em] text-foreground transition hover:text-accent">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted">{item.cardDescription}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">{item.tone}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-foreground">{formatPrice(item.price)}</p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(value) => updateQuantity(item.cartKey, value)}
                    tone="dark"
                  />
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.cartKey)}
                    className="text-xs uppercase tracking-[0.22em] text-muted transition hover:text-accent"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-hairline-dark pt-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-foreground">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-muted">
            Shipping and taxes calculated at checkout. Checkout can be connected later to your preferred platform.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              onClick={closeCart}
              className="flex h-14 flex-1 items-center justify-center rounded-full border border-hairline-dark text-xs uppercase tracking-[0.22em] text-foreground transition hover:border-accent hover:text-accent"
            >
              Continue Shopping
            </Link>
            <button
              type="button"
              className="flex h-14 flex-1 items-center justify-center rounded-full border border-accent bg-accent px-6 text-xs uppercase tracking-[0.22em] text-ink transition hover-lift hover:brightness-105"
            >
              Checkout Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
