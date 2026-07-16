import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'

const CartDrawer = () => {
  const {
    cartItems,
    cartOpen,
    removeFromCart,
    setCartOpen,
    subtotalFormatted,
    updateQuantity,
  } = useStore()

  return (
    <>
      <div
        aria-hidden={!cartOpen}
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-sm transition-all duration-300 ${cartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setCartOpen(false)}
      />

      <aside
        aria-hidden={!cartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-stone">Shopping bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart drawer"
            className="rounded-full border border-velmora-line p-2 text-velmora-ink transition-all duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            onClick={() => setCartOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length ? (
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {cartItems.map((item) => (
                <article
                  key={item.lineId}
                  className="grid grid-cols-[88px,1fr] gap-4 rounded-[1.5rem] border border-velmora-line bg-white/70 p-3"
                >
                  <img
                    alt={item.product.name}
                    className="h-28 w-22 rounded-[1rem] object-cover"
                    data-strk-img-id={item.product.imageIds.primary}
                    data-strk-img={`[cart-${item.lineId}-desc] [cart-${item.lineId}-title] [cart-heading]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="320"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="flex flex-col justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${item.product.slug}`}
                            className="text-sm font-semibold uppercase tracking-velmora text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
                            id={`cart-${item.lineId}-title`}
                            onClick={() => setCartOpen(false)}
                          >
                            {item.product.name}
                          </Link>
                          <p id={`cart-${item.lineId}-desc`} className="mt-1 text-sm text-velmora-stone">
                            {item.tone} tone · {item.product.priceFormatted ?? formatCurrency(item.product.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-xs uppercase tracking-[0.2em] text-velmora-stone transition-colors duration-300 hover:text-velmora-ink"
                          onClick={() => removeFromCart(item.lineId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-velmora-line bg-white">
                        <button
                          type="button"
                          aria-label="Decrease item quantity"
                          className="rounded-full px-3 py-2 transition-colors duration-300 hover:bg-velmora-cream"
                          onClick={() =>
                            item.quantity === 1
                              ? removeFromCart(item.lineId)
                              : updateQuantity(item.lineId, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase item quantity"
                          className="rounded-full px-3 py-2 transition-colors duration-300 hover:bg-velmora-cream"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{item.linePriceFormatted}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line bg-velmora-cream/80 px-5 py-5">
              <p id="cart-heading" className="sr-only">
                Velmora shopping cart items
              </p>
              <div className="mb-4 flex items-center justify-between text-sm text-velmora-stone">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-velmora-ink">{subtotalFormatted}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-velmora-gold-deep hover:text-velmora-ivory"
              >
                Checkout Soon
              </button>
              <p className="mt-3 text-center text-xs text-velmora-stone">
                Checkout is visual-only for now. Your cart flow is ready to connect later.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 rounded-full border border-velmora-line bg-white/70 p-4">
              <ShoppingBag className="h-8 w-8 text-velmora-gold" />
            </div>
            <h3 className="font-serif text-3xl text-velmora-ink">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-velmora-stone">
              Start with the bestselling edit and build your own golden rotation.
            </p>
            <button
              type="button"
              className="mt-6 rounded-full border border-velmora-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-ink"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
