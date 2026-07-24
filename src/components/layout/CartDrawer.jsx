import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'
import StrkImage from '@/components/ui/StrkImage'

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()
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
    const onKey = (e) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  // Load images for cart line items whenever the drawer opens or items change.
  useEffect(() => {
    if (!isOpen || items.length === 0) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-card flex flex-col transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag <span className="text-stone text-base">({count})</span>
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:text-champagne transition-colors"
            aria-label="Close cart"
          >
            <X width={22} height={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-5">
            <ShoppingBag width={40} height={40} className="text-sand" strokeWidth={1} />
            <div>
              <p className="font-serif text-2xl">Your bag is empty</p>
              <p className="text-sm text-stone mt-2">
                Discover pieces crafted to be treasured.
              </p>
            </div>
            <Button as={Link} to="/shop" onClick={closeCart}>
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {items.map((item) => {
                const cartTitleId = `cart-${item.id}-title`
                const cartDescId = `cart-${item.id}-desc`
                return (
                <div key={item.lineId} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="w-20 h-24 bg-cream shrink-0 overflow-hidden"
                  >
                    <StrkImage
                      imgId={item.imgId}
                      query={`[${cartDescId}] [${cartTitleId}] gold jewelry`}
                      ratio="4x5"
                      width="200"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <span id={cartTitleId} className="sr-only">{item.name}</span>
                    <span id={cartDescId} className="sr-only">{item.tagline}</span>
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-serif text-lg uppercase tracking-[0.1em] leading-tight hover:text-champagne transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                    <p className="text-sm text-ink mt-1.5 font-medium">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2.5 py-1.5 hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus width={13} height={13} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2.5 py-1.5 hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus width={13} height={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-xs text-stone hover:text-ink underline underline-offset-4 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-xs text-stone hover:text-ink underline underline-offset-4 transition-colors"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
