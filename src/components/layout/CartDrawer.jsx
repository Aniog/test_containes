import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StrkImg from '@/components/ui/StrkImg'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { lines, subtotal, isCartOpen, setCartOpen, removeItem, setQty, lineKey } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isCartOpen) return
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    document.body.style.overflow = 'hidden'
    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = ''
    }
  }, [isCartOpen, lines.length])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setCartOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setCartOpen])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div
        className="anim-fade-in absolute inset-0 bg-espresso/50 backdrop-blur-[2px]"
        onClick={() => setCartOpen(false)}
      />
      <aside
        ref={drawerRef}
        className="anim-drawer-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-xl font-medium text-espresso">
            Your Cart{' '}
            <span className="text-sm text-mocha">({lines.reduce((s, l) => s + l.qty, 0)})</span>
          </h2>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="p-1 text-mocha transition-colors hover:text-espresso"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-taupe" strokeWidth={1.2} />
            <p className="font-display text-2xl text-espresso">Your cart is empty</p>
            <p className="max-w-xs text-sm leading-relaxed text-mocha">
              Discover pieces crafted to be treasured — warm gold, made for every day.
            </p>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="mt-2 bg-espresso px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {lines.map((line) => {
                const key = lineKey(line)
                return (
                  <div key={key} className="flex gap-4 border-b border-line py-5">
                    <Link
                      to={`/product/${line.id}`}
                      onClick={() => setCartOpen(false)}
                      className="h-28 w-24 shrink-0 overflow-hidden bg-sand"
                    >
                      <StrkImg
                        imgId={line.imgId}
                        query={`[${line.descId}] [${line.titleId}]`}
                        ratio="3x4"
                        width={300}
                        alt={line.name}
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/product/${line.id}`}
                            onClick={() => setCartOpen(false)}
                            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-espresso hover:text-gold-deep"
                          >
                            {line.name}
                          </Link>
                          <p className="mt-1 text-xs text-mocha">{line.variant} Tone</p>
                        </div>
                        <p className="text-sm font-medium text-cocoa">{formatPrice(line.price * line.qty)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(key, line.qty - 1)}
                            className="flex h-8 w-8 items-center justify-center text-mocha transition-colors hover:text-espresso"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-espresso">{line.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(key, line.qty + 1)}
                            className="flex h-8 w-8 items-center justify-center text-mocha transition-colors hover:text-espresso"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(key)}
                          className="text-[11px] uppercase tracking-[0.14em] text-taupe underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-line bg-cream px-6 py-6">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-mocha">Subtotal</span>
                <span className="font-display text-2xl font-medium text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-xs text-taupe">Shipping & taxes calculated at checkout. Free worldwide shipping.</p>
              <button
                type="button"
                className="w-full bg-espresso py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.2em] text-mocha underline-offset-4 transition-colors hover:text-espresso hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
