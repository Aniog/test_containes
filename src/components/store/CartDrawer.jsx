import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const CartDrawer = () => {
  const { items, subtotal, isCartOpen, closeCart, updateQuantity, removeItem } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-noir/45 backdrop-blur-sm transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-sand bg-velmora-ivory shadow-velmora transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/80 px-5 py-5 sm:px-6">
          <div>
            <p className="eyebrow-label mb-2">Your selection</p>
            <h2 className="text-3xl leading-none text-velmora-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-sand p-2 text-velmora-ink transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.7} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full bg-velmora-rose p-5 text-velmora-gold">
              <ShoppingBag className="h-10 w-10" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-3xl text-velmora-ink">Your cart is empty</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mocha">
              Start with our bestselling demi-fine pieces and build a gift-worthy stack.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 rounded-full bg-velmora-gold px-5 py-3 text-sm font-medium text-velmora-ivory transition duration-300 hover:bg-velmora-gold-deep"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => {
                const titleId = `cart-${item.cartId}-title`
                const toneId = `cart-${item.cartId}-tone`
                return (
                  <div
                    key={item.cartId}
                    className="flex gap-4 rounded-[24px] border border-velmora-sand/80 bg-white/80 p-4"
                  >
                    <div className="h-28 w-24 rounded-[18px] border border-velmora-sand/70 bg-velmora-rose/70 shadow-inner" />
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                      <div>
                        <h3 id={titleId} className="product-wordmark text-sm leading-snug text-velmora-ink">
                          {item.name}
                        </h3>
                        <p id={toneId} className="mt-2 text-sm text-velmora-mocha">
                          {item.tone} tone · {item.category}
                        </p>
                        <p className="mt-2 text-base font-medium text-velmora-ink">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-rose/50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-2 text-velmora-ink"
                          >
                            <Minus className="h-4 w-4" strokeWidth={1.8} />
                          </button>
                          <span className="min-w-10 text-center text-sm text-velmora-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-2 text-velmora-ink"
                          >
                            <Plus className="h-4 w-4" strokeWidth={1.8} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.cartId)}
                          className="text-sm font-medium text-velmora-mocha underline-offset-4 transition hover:text-velmora-gold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-velmora-sand/80 bg-white/70 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-velmora-mocha">
                <span>Subtotal</span>
                <span className="text-lg font-medium text-velmora-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-mocha">
                Shipping and taxes are calculated at checkout. Real checkout can be connected later.
              </p>
              <div className="mt-5 grid gap-3">
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="rounded-full bg-velmora-gold px-5 py-3 text-center text-sm font-medium text-velmora-ivory transition duration-300 hover:bg-velmora-gold-deep"
                >
                  Continue to Shop
                </Link>
                <button
                  type="button"
                  className="rounded-full border border-velmora-ink px-5 py-3 text-sm font-medium text-velmora-ink transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
                >
                  Secure Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
