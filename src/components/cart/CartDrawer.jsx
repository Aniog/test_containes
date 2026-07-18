import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStorefront } from '@/context/StorefrontContext'

const CartDrawer = () => {
  const {
    cartItems,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useStorefront()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/35 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-panel text-velmora-ink shadow-soft transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist/60 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
              Your Cart
            </p>
            <h2 className="font-display text-3xl text-velmora-ink">Selected Pieces</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-mist/70 p-2 text-velmora-ink transition-colors duration-300 hover:border-velmora-gold hover:text-velmora-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-velmora-mist bg-velmora-cream px-8 text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-gold" />
              <p className="font-display text-3xl text-velmora-ink">Your cart is empty</p>
              <p className="mt-3 text-sm leading-7 text-velmora-muted">
                Begin with a signature pair of huggies or a gift-ready necklace.
              </p>
            </div>
          ) : (
            cartItems.map((item) => {
              const titleId = `cart-${item.product.id}-title`
              const descId = `cart-${item.product.id}-desc`

              return (
                <div
                  key={`${item.productId}-${item.tone}`}
                  className="rounded-[1.75rem] border border-velmora-mist/60 bg-velmora-cream p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-28 w-24 flex-col justify-between rounded-[1.25rem] bg-velmora-ink p-3 text-velmora-cream">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-velmora-cream/60">
                        {item.product.category}
                      </span>
                      <span className="font-display text-3xl leading-none text-velmora-gold">
                        {item.product.name
                          .split(' ')
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join('')}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.28em] text-velmora-cream/60">
                        {item.tone}
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
                            {item.product.category}
                          </p>
                          <Link to={`/product/${item.product.id}`} onClick={closeCart}>
                            <h3
                              id={titleId}
                              className="font-display text-xl uppercase tracking-[0.22em] text-velmora-ink"
                            >
                              {item.product.name}
                            </h3>
                          </Link>
                          <p id={descId} className="text-sm text-velmora-muted">
                            Tone: {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.productId, item.tone)}
                          className="text-xs uppercase tracking-[0.24em] text-velmora-muted transition-colors duration-300 hover:text-velmora-gold"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-mist/80 px-2 py-1">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.tone, item.quantity - 1)
                            }
                            className="rounded-full p-2 text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.tone, item.quantity + 1)
                            }
                            className="rounded-full p-2 text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-base text-velmora-ink">${item.total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className="border-t border-velmora-mist/60 px-5 py-5">
          <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-muted">
            <span>Subtotal</span>
            <span className="text-velmora-ink">${subtotal}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-gold px-5 py-4 text-sm uppercase tracking-[0.28em] text-velmora-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            Checkout Soon
          </button>
          <p className="mt-3 text-center text-xs leading-6 text-velmora-muted">
            Frontend preview only. Checkout can be connected later.
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
