import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { getProductById } from '@/data/products'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, subtotal } = useCart()
  const drawerRef = useRef(null)

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

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream text-ink shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag{' '}
            <span className="text-muted text-base">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="hover:text-gold transition-colors"
          >
            <X width={20} height={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag width={40} height={40} strokeWidth={1} className="text-muted" />
            <p className="font-serif text-2xl">Your bag is empty</p>
            <p className="text-sm text-muted max-w-xs">
              Discover pieces crafted to be treasured — for yourself, or someone loved.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 bg-gold text-cream text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-gold-deep transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((it) => {
                const product = getProductById(it.id)
                const imgId = it.imgId || product?.imgId
                const imgUrl = resolveStrkImageUrl(imgId)
                return (
                <div key={it.lineId} className="flex gap-4">
                  <Link to={`/product/${it.id}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={it.name}
                      src={imgUrl}
                      className="w-20 h-24 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${it.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.12em] leading-tight hover:text-gold transition-colors"
                      >
                        {it.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(it.lineId)}
                        className="text-muted hover:text-ink transition-colors text-xs"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-muted mt-1">{it.tone} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          type="button"
                          onClick={() => setQty(it.lineId, it.qty - 1)}
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus width={13} height={13} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{it.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(it.lineId, it.qty + 1)}
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus width={13} height={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(it.price * it.qty)}
                      </span>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="border-t border-ink/10 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted">
                Shipping and taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button
                type="button"
                className="w-full bg-gold text-cream text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-deep transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-[11px] uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors"
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
