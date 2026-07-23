import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const {
    cartItems,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-obsidian/40 transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-parchment shadow-soft transition duration-500 ease-luxe ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart drawer"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div>
            <p className="eyebrow">Cart</p>
            <h2 className="mt-2 font-display text-3xl text-obsidian">Your Selection</h2>
          </div>
          <button type="button" onClick={closeCart} className="rounded-full border border-line bg-transparent p-3 text-ink">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="surface-card p-8 text-center">
              <p className="font-display text-3xl text-obsidian">Your cart is empty</p>
              <p className="mt-3 text-sm leading-7 text-taupe">
                Add a few Velmora favorites and they will appear here instantly.
              </p>
              <button type="button" onClick={closeCart} className="premium-button mt-6 w-full">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={item.key} className="rounded-3xl border border-line bg-mist p-4">
                  <div className="flex gap-4">
                    <div className="relative h-24 w-20 overflow-hidden rounded-2xl bg-gradient-to-b from-sand via-parchment to-sand">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(182,138,82,0.14),_transparent_60%)]" />
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <p className="text-xs uppercase tracking-button text-taupe">{item.tone}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p id={`cart-${item.key}-name`} className="font-display text-xl uppercase tracking-product text-obsidian">
                            {item.name.toUpperCase()}
                          </p>
                          <p id={`cart-${item.key}-tone`} className="mt-2 text-sm text-taupe">
                            {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-xs uppercase tracking-button text-taupe"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2 rounded-full border border-line px-3 py-2">
                          <button type="button" onClick={() => updateQuantity(item.key, item.quantity - 1)} className="bg-transparent p-0 text-ink">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-6 text-center text-sm text-ink">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.key, item.quantity + 1)} className="bg-transparent p-0 text-ink">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-base text-ink">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-line px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-button text-taupe">
            <span>Subtotal</span>
            <span className="text-ink">{formatPrice(subtotal)}</span>
          </div>
          <Link to="/shop" onClick={closeCart} className="premium-button w-full">
            View Collection
          </Link>
          <p className="mt-3 text-center text-xs leading-6 text-taupe">
            Checkout is not connected yet. This preview shows the storefront experience and cart state.
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
