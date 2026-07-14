import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/CartContext'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-taupe/25 bg-velmora-ivory text-velmora-espresso shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/25 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/55">
              Your bag
            </p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-espresso">Cart</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-taupe/40 p-2 text-velmora-espresso transition hover:border-velmora-goldDeep hover:text-velmora-goldDeep"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="rounded-full bg-velmora-sand/70 p-4 text-velmora-goldDeep">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-velmora-espresso">
                  Your cart is empty
                </h3>
                <p className="text-sm leading-7 text-velmora-cacao/70">
                  Add a few Velmora favorites and they will appear here.
                </p>
              </div>
              <Link
                to="/shop"
                className="rounded-full bg-velmora-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.32em] text-velmora-espresso transition hover:bg-velmora-goldSoft"
                onClick={closeCart}
              >
                Shop now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="rounded-[24px] border border-velmora-taupe/30 bg-white/80 p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="h-24 w-20 flex-none overflow-hidden rounded-[18px] bg-velmora-sand/70">
                      <img
                        alt={item.name}
                        className="h-full w-full object-cover"
                        data-strk-img-id={item.imageId}
                        data-strk-img={item.description}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-serif text-lg uppercase tracking-[0.16em] text-velmora-espresso">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-velmora-cacao/55">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-sm text-velmora-cacao/55 transition hover:text-velmora-espresso"
                          onClick={() => removeItem(item.key)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-taupe/35 bg-velmora-ivory px-2 py-1">
                          <button
                            type="button"
                            className="rounded-full p-2 text-velmora-cacao/70 transition hover:text-velmora-espresso"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm text-velmora-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="rounded-full p-2 text-velmora-cacao/70 transition hover:text-velmora-espresso"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-velmora-espresso">
                          ${(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-taupe/25 bg-white/80 px-6 py-6">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-velmora-cacao/65">
            <span>Subtotal</span>
            <span className="text-base font-medium text-velmora-espresso">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-medium uppercase tracking-[0.35em] text-velmora-ivory transition hover:bg-velmora-espressoSoft"
          >
            Checkout soon
          </button>
          <p className="mt-3 text-center text-xs leading-6 text-velmora-cacao/60">
            Designed to be easy to connect to a real checkout later.
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
