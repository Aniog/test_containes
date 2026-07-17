import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../lib/utils'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/45 transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-velmora-parchment text-velmora-ink shadow-float transition-all duration-500 ease-velvet ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none invisible translate-x-full opacity-0'
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen ? '' : undefined}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-5 py-5 md:px-7">
          <div>
            <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Your Cart</p>
            <h2 className="font-display text-3xl text-velmora-ink">Shopping Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-ink/10 text-velmora-ink"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-velmora-sand/80 text-velmora-cocoa">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <p className="font-display text-3xl text-velmora-ink">Your bag is empty</p>
              <p className="text-sm leading-7 text-velmora-cocoa">
                Add a few quietly luminous pieces and they will appear here.
              </p>
            </div>
            <Link to="/shop" onClick={closeCart} className="button-primary">
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 md:px-7">
              {items.map((item) => (
                <div
                  key={item.lineId}
                  className="rounded-[24px] border border-velmora-ink/10 bg-white/70 p-4 shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-display text-xl uppercase tracking-luxe text-velmora-ink">
                        {item.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.22em] text-velmora-truffle">
                        {item.variant}
                      </p>
                      <p className="text-sm text-velmora-cocoa">{formatCurrency(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ink/10 text-velmora-cocoa transition-colors hover:text-velmora-ink"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-velmora-ink/10 bg-velmora-parchment px-2 py-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-cocoa"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium text-velmora-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-cocoa"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-velmora-cocoa">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 border-t border-velmora-ink/10 px-5 py-6 md:px-7">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-velmora-cocoa">
                <span>Subtotal</span>
                <span className="text-velmora-ink">{formatCurrency(subtotal)}</span>
              </div>
              <p className="text-sm leading-6 text-velmora-truffle">
                Checkout is not connected yet, but the cart state is fully working and ready for a real checkout integration.
              </p>
              <button type="button" className="button-primary w-full">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
