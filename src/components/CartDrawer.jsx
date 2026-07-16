import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/CartContext'
import { StrkImage, useStrkImages } from '@/components/StrkImage'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()
  const ref = useStrkImages([items, isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-espresso">
            Your Bag <span className="text-taupe text-sm align-middle">({count})</span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 text-cocoa hover:text-espresso">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1} />
              <p className="mt-4 font-serif text-xl text-espresso">Your bag is empty</p>
              <p className="mt-1 text-sm text-taupe">Discover pieces made to be treasured.</p>
              <button
                onClick={closeCart}
                className="mt-6 border border-espresso px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-espresso hover:text-ivory"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-sand/70">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <StrkImage
                      imgId={item.imgId}
                      query={`[cart-${item.key}-name]`}
                      ratio="3x4"
                      width={160}
                      alt={item.name}
                      className="h-24 w-20 bg-cream"
                    />
                    <span id={`cart-${item.key}-name`} className="sr-only">
                      {item.name} {item.tone} tone gold jewelry
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.12em] text-espresso hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-taupe hover:text-espresso"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-taupe">{item.tone}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-cocoa hover:text-espresso"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-espresso">{item.quantity}</span>
                        <button
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-cocoa hover:text-espresso"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
            <button className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold-deep">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] uppercase tracking-[0.2em] text-cocoa hover:text-espresso"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
