import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import JewelryArt from '@/components/common/VelmoraJewelView.jsx'
import { formatPrice } from '@/data/products'

const CartDrawer = ({ isOpen, items, onClose, onIncrease, onDecrease, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-pearl text-espresso shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-champagne/35 px-5 py-5 sm:px-7">
          <div>
            <p className="font-serif text-2xl tracking-wide">Your Cart</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-taupe">
              {itemCount} {itemCount === 1 ? 'piece' : 'pieces'} selected
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-champagne/45 p-2 text-espresso transition hover:border-espresso hover:bg-ivory"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-champagne" />
            <p className="mt-5 font-serif text-3xl">Your jewelry box is empty.</p>
            <p className="mt-3 text-sm leading-6 text-taupe">
              Add a demi-fine favorite and it will appear here for checkout.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-espresso px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ivory transition hover:bg-cocoa"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-3 sm:px-7">
              {items.map((item) => {
                const titleId = `cart-${item.id}-title`
                const descId = `cart-${item.id}-desc`

                return (
                  <article key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-champagne/25 py-5">
                    <div className="h-24 w-20 shrink-0 overflow-hidden rounded-t-full rounded-b-[1.2rem] bg-ivory">
                      <JewelryArt
                        id={item.id}
                        label={item.name}
                        variant="cart"
                        tone={item.variant}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 id={titleId} className="font-serif text-base uppercase tracking-[0.18em] text-espresso">
                        {item.name}
                      </h3>
                      <p id={descId} className="mt-1 text-xs uppercase tracking-[0.18em] text-taupe">
                        {item.variant} tone · {formatPrice(item.price)}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-champagne/45 bg-ivory text-espresso">
                          <button
                            type="button"
                            onClick={() => onDecrease(item.id, item.variant)}
                            className="p-2 transition hover:text-cocoa"
                            aria-label={`Decrease ${item.name}`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onIncrease(item.id, item.variant)}
                            className="p-2 transition hover:text-cocoa"
                            aria-label={`Increase ${item.name}`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id, item.variant)}
                          className="text-taupe transition hover:text-espresso"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="border-t border-champagne/35 bg-ivory px-5 py-5 sm:px-7">
              <div className="flex items-center justify-between font-serif text-2xl text-espresso">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-sm text-taupe">Shipping and taxes calculated at checkout.</p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-goldDeep"
              >
                Checkout Later
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
