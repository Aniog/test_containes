import { useEffect, useRef } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'
import { Sheet, SheetHeader, SheetTitle, SheetBody, SheetFooter } from '@/components/ui/Sheet'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!isOpen || !bodyRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, bodyRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <Sheet open={isOpen} onClose={closeCart}>
      <SheetHeader>
        <SheetTitle>Your Cart ({items.length})</SheetTitle>
        <button
          type="button"
          aria-label="Close cart"
          onClick={closeCart}
          className="rounded-full p-2 text-taupe transition-colors hover:bg-champagne"
        >
          <X className="h-5 w-5" />
        </button>
      </SheetHeader>

      <SheetBody ref={bodyRef} className="flex flex-col">
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-champagne" />
            <p className="font-serif text-xl text-espresso">Your cart is empty</p>
            <p className="mt-2 max-w-xs text-sm text-taupe">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 bg-espresso px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-light transition-colors hover:bg-mocha"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <ul className="flex flex-col gap-6">
            {items.map((item) => (
              <li key={`${item.productId}-${item.tone}`} className="flex gap-4">
                <Link
                  to={`/product/${item.productId}`}
                  onClick={closeCart}
                  className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-cream-dark"
                >
                  <ResponsiveImage
                    imgId={`product-card-${item.productId}`}
                    query={`${item.name} ${item.category || 'jewelry'}`}
                    ratio="4x5"
                    width={200}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="font-serif text-base tracking-wide text-espresso transition-colors hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-taupe">
                      {item.tone === 'gold' ? 'Gold' : 'Silver'} Tone
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-champagne bg-cream-light">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.tone, item.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center text-taupe transition-colors hover:bg-champagne"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="flex h-7 w-8 items-center justify-center text-xs font-medium text-espresso">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.tone, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center text-taupe transition-colors hover:bg-champagne"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.tone)}
                        className="text-warm-gray transition-colors hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </SheetBody>

      {items.length > 0 && (
        <SheetFooter>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-espresso">
              <span className="text-sm uppercase tracking-wide">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-cream-light transition-colors hover:bg-gold-dark"
            >
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block w-full border border-espresso py-3 text-center text-xs font-medium uppercase tracking-[0.15em] text-espresso transition-colors hover:bg-espresso hover:text-cream-light"
            >
              Continue Shopping
            </Link>
          </div>
        </SheetFooter>
      )}
    </Sheet>
  )
}
