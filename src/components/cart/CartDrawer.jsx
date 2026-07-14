import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { currency } from '@/data/products.js'

const CartDrawer = () => {
  const { items, isOpen, closeCart, subtotal, updateQuantity, removeItem } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-obsidian/40 transition ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col border-l border-mist bg-ivory text-ink shadow-panel transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-mist px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-brand text-bronze">Your Cart</p>
            <h2 className="font-serif text-3xl text-ink">Collected Pieces</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-mist bg-white px-6 text-center shadow-soft">
              <ShoppingBag className="h-10 w-10 text-bronze" />
              <h3 className="mt-5 font-serif text-3xl text-ink">Your cart is empty</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-ink/70">
                Add a few demi-fine pieces to build your everyday jewelry wardrobe.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full bg-champagne px-6 py-3 text-xs font-semibold uppercase tracking-brand text-obsidian transition hover:bg-bronze hover:text-ivory"
              >
                Shop now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.cartKey} className="rounded-3xl border border-mist bg-white p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-brand text-bronze">{item.tone}</p>
                      <h3 className="mt-2 font-serif text-2xl uppercase tracking-[0.18em] text-ink">{item.name}</h3>
                      <p className="mt-2 text-sm text-ink/70">{currency.format(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.cartKey)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist text-ink/70 transition hover:border-bronze hover:text-bronze"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-mist bg-ivory px-2 py-1">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-ink">{currency.format(item.price * item.quantity)}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-mist bg-white px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between text-sm text-ink/70">
            <span>Subtotal</span>
            <span className="font-semibold text-ink">{currency.format(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-brand text-ink/55">Taxes and duties calculated at checkout</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-champagne px-6 py-4 text-xs font-semibold uppercase tracking-brand text-obsidian transition hover:bg-bronze hover:text-ivory"
          >
            Checkout later
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
