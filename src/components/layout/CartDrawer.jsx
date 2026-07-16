import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { isOpen, items, subtotal, closeCart, removeItem, updateQuantity } = useCart()

  return (
    <>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-truffle/45 transition duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-truffle text-pearl shadow-soft transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-pearl/10 px-6 py-5">
          <div>
            <p className="eyebrow text-champagne">Cart</p>
            <h2 className="font-serif text-3xl">Your cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-pearl/20 p-3 text-pearl transition duration-300 hover:border-champagne"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col justify-between">
            <div className="space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={item.key}
                  className="rounded-3xl border border-pearl/10 bg-pearl/5 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-serif text-2xl uppercase tracking-luxe text-pearl">
                        {item.name}
                      </p>
                      <p className="text-sm text-pearl/70">{item.variant}</p>
                      <p className="text-sm text-champagne">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs uppercase tracking-[0.18em] text-pearl/60 transition hover:text-champagne"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-pearl/20 px-3 py-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="p-1 text-pearl/80"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="p-1 text-pearl/80"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-pearl">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-pearl/10 px-6 py-6">
              <div className="mb-5 flex items-center justify-between text-sm">
                <span className="text-pearl/70">Subtotal</span>
                <span className="text-lg font-medium text-pearl">{formatPrice(subtotal)}</span>
              </div>
              <div className="space-y-3">
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="flex w-full items-center justify-center rounded-full border border-champagne px-5 py-4 text-sm font-medium uppercase tracking-[0.18em] text-pearl transition duration-300 hover:bg-pearl hover:text-truffle"
                >
                  Continue shopping
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-full bg-gold px-5 py-4 text-sm font-medium uppercase tracking-[0.18em] text-pearl transition duration-300 hover:bg-champagne hover:text-truffle"
                >
                  Checkout soon
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="rounded-full border border-pearl/15 p-5 text-champagne">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-pearl">Your cart is empty</h3>
              <p className="text-sm leading-7 text-pearl/70">
                Start with a bestselling pair of huggies or a gifting-ready set.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-pearl transition duration-300 hover:bg-champagne hover:text-truffle"
            >
              Shop now
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
