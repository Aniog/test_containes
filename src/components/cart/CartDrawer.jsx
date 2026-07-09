import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/formatters'

const CartDrawer = () => {
  const {
    cartItems,
    closeCart,
    isCartOpen,
    removeItem,
    subtotal,
    updateQuantity,
  } = useCart()

  return (
    <div className={`fixed inset-0 z-[60] ${isCartOpen ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-velmora-noir/50 transition duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-pearl text-velmora-ink shadow-soft transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-mist">
              Your bag
            </p>
            <h2 className="mt-2 font-display text-3xl">Cart</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-line p-2 text-velmora-mist transition hover:border-velmora-gold hover:text-velmora-ink"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full bg-velmora-ivory p-5 text-velmora-gold">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-velmora-ink">Your cart is empty</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-mist">
              Add a few forever pieces to start building your Velmora stack.
            </p>
            <Link to="/shop" onClick={closeCart} className="mt-8">
              <Button>Continue shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6 sm:px-6">
              {cartItems.map((item) => (
                <article
                  key={`${item.slug}-${item.variant}`}
                  className="rounded-[1.75rem] border border-velmora-line bg-white/70 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-product text-velmora-ink">
                        {item.name}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-velmora-mist">
                        {item.variant}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.24em] text-velmora-mist transition hover:text-velmora-ink"
                      onClick={() => removeItem(item.slug, item.variant)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-velmora-ink">
                      {formatPrice(item.price)}
                    </p>
                    <div className="inline-flex items-center gap-3 rounded-full border border-velmora-line px-3 py-2">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.slug, item.variant, item.quantity - 1)}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-4 text-center text-sm text-velmora-ink">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.slug, item.variant, item.quantity + 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line px-5 py-6 sm:px-6">
              <div className="flex items-center justify-between text-sm text-velmora-mist">
                <span>Estimated total</span>
                <span className="font-medium text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.26em] text-velmora-mist">
                Free shipping on orders over $75
              </p>
              <Button className="mt-6 w-full">Checkout coming soon</Button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
