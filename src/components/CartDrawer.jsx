import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, count, increment, decrement, removeItem } =
    useCart()
  const drawerRef = useRef(null)

  // Re-scan for images whenever the drawer opens or its contents change,
  // because line items are conditionally rendered.
  useEffect(() => {
    if (!isOpen) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, lines])

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso-deep/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-stone shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-deep/10 px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-stone-deep" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl text-stone-deep">
              Your Cart
              <span className="ml-2 align-middle font-sans text-xs tracking-[0.2em] text-stone-muted">
                ({count})
              </span>
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-stone-deep transition-colors hover:bg-stone-deep/5"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Lines */}
        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-stone-muted" strokeWidth={1} />
            <p className="font-serif text-2xl text-stone-deep">Your cart is empty</p>
            <p className="text-sm text-stone-muted">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-block border border-gold-deep bg-gold px-8 py-3 text-xs uppercase tracking-[0.18em] text-espresso transition-all duration-300 hover:bg-gold-soft"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-stone-deep/10">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      alt={line.name}
                      data-strk-img-id={line.imgId}
                      data-strk-img={`[${line.descId}] ${line.name} gold jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="h-24 w-24 bg-stone-deep/5 object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${line.productId}`}
                          onClick={closeCart}
                          className="font-serif text-lg uppercase tracking-[0.1em] text-stone-deep hover:text-gold-deep"
                        >
                          {line.name}
                        </Link>
                        <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-stone-muted">
                          {line.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(line.key)}
                        className="self-start p-1 text-stone-muted transition-colors hover:text-gold-deep"
                        aria-label={`Remove ${line.name}`}
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-stone-deep/15">
                        <button
                          onClick={() => decrement(line.key)}
                          className="px-2.5 py-1.5 text-stone-deep transition-colors hover:bg-stone-deep/5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="min-w-[2rem] text-center text-sm text-stone-deep">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => increment(line.key)}
                          className="px-2.5 py-1.5 text-stone-deep transition-colors hover:bg-stone-deep/5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-serif text-lg text-stone-deep">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-stone-deep/10 px-6 py-5">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-stone-muted">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-stone-deep">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="pb-4 text-xs text-stone-muted">
              Shipping & taxes calculated at checkout. Free worldwide shipping.
            </p>
            <button className="w-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.18em] text-espresso transition-all duration-300 hover:bg-gold-soft">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="mt-3 w-full text-xs uppercase tracking-[0.18em] text-stone-muted underline-offset-4 transition-colors hover:text-stone-deep hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
