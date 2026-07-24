import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice, getStrkImageUrl } from '@/lib/utils'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
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

  // Load strk images inside the drawer whenever it opens or items change
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      if (drawerRef.current) ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
            Your Cart {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X width={20} height={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag width={40} height={40} strokeWidth={1} className="text-stone/50" />
            <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <Button as={Link} to="/shop" variant="outline" size="md" className="mt-6" onClick={closeCart}>
              Shop the Collection
            </Button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div key={item.key} className="flex gap-4 border-b border-ink/10 py-5">
                <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                  <img
                    alt={item.name}
                    className="h-24 w-20 object-cover bg-sand"
                    src={getStrkImageUrl(item.imgId)}
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-2">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-widest3 text-ink hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-stone hover:text-ink"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X width={16} height={16} />
                    </button>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest2 text-stone">{item.tone}</p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-ink/20">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="px-2 py-1 text-ink hover:bg-sand"
                        aria-label="Decrease quantity"
                      >
                        <Minus width={12} height={12} />
                      </button>
                      <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="px-2 py-1 text-ink hover:bg-sand"
                        aria-label="Increase quantity"
                      >
                        <Plus width={12} height={12} />
                      </button>
                    </div>
                    <p className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest2 text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <Button variant="primary" size="lg" className="mt-4 w-full">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest2 text-stone hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
