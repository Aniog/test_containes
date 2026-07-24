import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/helpers'

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    subtotal,
    clearCart,
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[70] transition duration-300 ${
        isCartOpen ? 'pointer-events-auto bg-velmora-ink/50 backdrop-blur-[2px]' : 'pointer-events-none bg-velmora-ink/0'
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        className="absolute inset-0 z-0 h-full w-full cursor-default"
        onClick={() => setIsCartOpen(false)}
        aria-label="Close cart overlay"
      />
      <aside
        className={`absolute right-0 top-0 z-10 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-white text-velmora-ink shadow-[0_24px_80px_rgba(40,26,18,0.28)] transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line bg-white px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">Shopping Bag</p>
            <h2 className="mt-2 font-display text-3xl">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line bg-velmora-pearl"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-pearl text-velmora-bronze">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-velmora-ink">Nothing here yet</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-mist">
              Add a piece you love and it will appear here for checkout later.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => (
                <article
                  key={`${item.productId}-${item.tone}`}
                  className="flex gap-4 rounded-[1.5rem] border border-velmora-line bg-white p-4 shadow-sm"
                >
                  <div className="flex h-28 w-24 flex-col justify-between rounded-[1.25rem] border border-velmora-line bg-gradient-to-b from-velmora-cloud to-velmora-pearl p-4 text-velmora-ink">
                    <span className="font-display text-2xl leading-none">V</span>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-velmora-mist">
                      {item.product.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-[0.18em] text-velmora-ink">
                        {item.product.name}
                      </h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-velmora-mist">
                        {item.tone} Tone
                      </p>
                    </div>
                    <p className="text-sm font-medium text-velmora-ink">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-line bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.tone, item.quantity - 1)}
                          className="inline-flex h-10 w-10 items-center justify-center text-velmora-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center text-sm text-velmora-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.tone, item.quantity + 1)}
                          className="inline-flex h-10 w-10 items-center justify-center text-velmora-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.tone)}
                        className="text-xs uppercase tracking-[0.24em] text-velmora-mist transition hover:text-velmora-ink"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line px-6 py-6">
              <div className="flex items-center justify-between text-sm text-velmora-mist">
                <span>Subtotal</span>
                <span className="font-medium text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="mt-5 h-12 w-full rounded-full bg-velmora-ink text-xs font-medium uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-bronze"
              >
                Checkout Soon
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-[0.24em] text-velmora-mist transition hover:text-velmora-ink"
                aria-label="Clear bag"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
