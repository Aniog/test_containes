import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../data/products.js'
import { getCartItemCount, getCartSubtotal } from '../lib/cart.js'

function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const count = getCartItemCount(items)
  const subtotal = getCartSubtotal(items)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-[0_0_80px_rgba(36,25,20,0.22)] transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-line p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-antique">Velmora Cart</p>
            <h2 className="mt-1 font-serif text-3xl text-velmora-ink">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-line p-2 text-velmora-ink transition hover:border-velmora-antique hover:text-velmora-antique"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex min-h-[55vh] flex-col items-center justify-center text-center text-velmora-cocoa">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-antique" strokeWidth={1.2} />
              <h3 className="font-serif text-3xl text-velmora-ink">Your cart is quiet.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6">Add a piece you love and it will appear here, ready for checkout.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-line pb-5">
                  <div className="aspect-square overflow-hidden bg-velmora-blush/30">
                    <ProductImage
                      product={item}
                      context="cart"
                      variant="main"
                      className="h-full w-full object-cover"
                      titleId={`cart-title-${item.id}`}
                      descId={item.descId}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.id}`} className="font-serif text-base uppercase tracking-luxury text-velmora-ink">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-velmora-cocoa">{item.variant} tone</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id, item.variant)}
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-antique hover:text-velmora-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-line text-velmora-ink">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 transition hover:bg-velmora-cream"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 transition hover:bg-velmora-cream"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line p-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-velmora-cocoa">
            <span>Subtotal · {count} item{count === 1 ? '' : 's'}</span>
            <span className="font-semibold text-velmora-ink">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-antique disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-cocoa">Secure checkout can be connected when you are ready.</p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
