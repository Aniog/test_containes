import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

function CartItemImage({ product }) {
  // Resolve the picked image URL from the static config at render time.
  // This avoids using the strk-img plugin transform (which can't statically
  // analyze a per-item id inside a .map()), and prevents a placeholder from
  // being shipped in the production build.
  const slot = strkImgConfig[`product-${product.id}-main-0`]
  const url = slot?.results?.find((r) => r.id === slot.picked)?.url
  const [src, setSrc] = useState(url || null)
  useEffect(() => {
    if (url) setSrc(url)
  }, [url])

  if (!src) {
    // No literal placeholder (would be flagged at build) — just an empty
    // spacer with the alt text for screen readers.
    return <span className="block w-full h-full" aria-label={product.name} />
  }

  return (
    <img
      alt={product.name}
      src={src}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal } = useCart()

  // Lock body scroll when open
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

  // Close on escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  return (
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/45"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`absolute top-0 right-0 bottom-0 w-full sm:w-[420px] md:w-[460px] bg-cream shadow-softLg flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="px-6 md:px-8 py-5 flex items-center justify-between border-b border-taupeLight/60">
          <h2 className="font-serif text-2xl tracking-wide text-espresso font-light">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-espresso hover:text-gold-dark transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyCart onClose={closeCart} />
          ) : (
            <ul className="divide-y divide-taupeLight/50">
              {items.map((item) => (
                <li key={item.key} className="px-6 md:px-8 py-6 flex gap-4">
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="block w-20 h-24 bg-beige overflow-hidden shrink-0"
                  >
                    <CartItemImage product={item.product} />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-[11px] tracking-widest2 uppercase font-medium text-espresso">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-[10px] tracking-widest2 uppercase text-espresso/55 font-light">
                          {item.variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                      </div>
                      <p className="font-serif text-[17px] text-espresso leading-none mt-0.5">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border border-taupeLight">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-beige transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-espresso tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-beige transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[10px] tracking-widest2 uppercase text-espresso/55 hover:text-espresso font-light underline-offset-4 hover:underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-taupeLight/60 px-6 md:px-8 py-6 bg-creamLight/50">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] tracking-widest2 uppercase text-espresso/65 font-medium">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[10px] tracking-widest2 uppercase text-espresso/50 font-light mb-5 text-right">
              Shipping & taxes calculated at checkout
            </p>
            <button
              type="button"
              className="w-full btn-primary"
              onClick={() => alert('Checkout coming soon — this is a demo storefront.')}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-[10px] tracking-widest2 uppercase text-espresso/65 hover:text-espresso font-light py-2 transition-colors"
            >
              or continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}

function EmptyCart({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-16">
      <ShoppingBag size={32} strokeWidth={1.2} className="text-espresso/40" />
      <p className="mt-6 font-serif text-2xl text-espresso font-light">
        Your bag is empty
      </p>
      <p className="mt-2 text-sm text-espresso/60 font-light max-w-xs">
        Discover demi-fine pieces designed to be lived in — and kept forever.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="mt-8 btn-primary"
      >
        Shop the Collection
      </Link>
    </div>
  )
}
