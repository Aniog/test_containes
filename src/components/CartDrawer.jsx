import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, setQuantity, subtotal, count } = useCart()
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
    if (!isOpen || items.length === 0) return
    const frameId = window.requestAnimationFrame(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-[70] flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
          <h2 className="font-serif text-xl tracking-widest2 uppercase text-ink">
            Your Bag {count > 0 && <span className="text-muted text-sm">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold transition-colors">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} className="text-gold/40" strokeWidth={1} />
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-muted">Discover pieces crafted to be treasured.</p>
            <button
              onClick={closeCart}
              className="mt-2 bg-gold text-cream text-xs uppercase tracking-widest2 px-8 py-3 hover:bg-gold-soft transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div key={item.key} className="flex gap-4 py-5 border-b border-gold/10">
                <Link to={`/product/${item.id}`} onClick={closeCart} className="w-20 h-24 bg-sand flex-shrink-0 overflow-hidden">
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.titleId}] [${item.descId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between gap-2">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-wider text-ink hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-muted hover:text-ink text-xs"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-muted mt-1">{item.tone}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-gold/30">
                      <button
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        className="px-2 py-1 text-ink hover:text-gold"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-sm text-ink">{item.quantity}</span>
                      <button
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        className="px-2 py-1 text-ink hover:text-gold"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/15 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest2 text-muted">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-cream text-xs uppercase tracking-widest2 py-4 hover:bg-gold-soft transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
