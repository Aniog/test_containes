import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StrkImage from '@/components/ui/StrkImage'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, subtotal, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
            Your Cart {count > 0 && <span className="text-muted">({count})</span>}
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-2xl text-charcoal">Your cart is empty</p>
            <p className="mt-2 text-sm text-muted">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 bg-gold px-8 py-4 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((it) => (
                <div key={it.lineId} className="flex gap-4 border-b border-line py-4">
                  <Link to={`/product/${it.id}`} onClick={closeCart} className="shrink-0">
                    <StrkImage
                      imgId={`${it.imgId}-cart`}
                      queryRefs={[it.descId, it.titleId]}
                      ratio="3x4"
                      width={160}
                      alt={it.name}
                      className="h-24 w-20 object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-serif text-base uppercase tracking-widest3 text-charcoal">
                        {it.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(it.lineId)}
                        aria-label={`Remove ${it.name}`}
                        className="text-muted hover:text-gold"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-widest3 text-muted">{it.tone}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1 text-ink hover:text-gold"
                          onClick={() => setQty(it.lineId, it.qty - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-charcoal">{it.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1 text-ink hover:text-gold"
                          onClick={() => setQty(it.lineId, it.qty + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm text-charcoal">${(it.price * it.qty).toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest3 text-muted">Subtotal</span>
                <span className="font-serif text-2xl text-ink">${subtotal.toFixed(0)}</span>
              </div>
              <p className="mt-1 text-xs text-muted">Shipping and taxes calculated at checkout.</p>
              <button
                type="button"
                className="mt-4 w-full bg-gold px-8 py-4 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full text-[11px] uppercase tracking-widest3 text-muted hover:text-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
