import { useEffect, useRef } from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'
import Button from './ui/Button'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart()
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
    if (isOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-brand-warm-white z-[70] shadow-2xl transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-divider-light">
          <h2 className="font-serif text-xl tracking-wider uppercase">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-brand-muted-light text-sm mb-4">
                Your cart is empty
              </p>
              <Button variant="secondary" size="sm" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map(item => (
              <div
                key={`${item.product.id}-${item.variant}`}
                className="flex gap-4 pb-6 border-b border-brand-divider-light last:border-0"
              >
                {/* Product image placeholder */}
                <div className="w-20 h-24 bg-brand-cream rounded overflow-hidden flex-shrink-0">
                  <div
                    className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-cream"
                    data-strk-img-id={`cart-${item.product.id}-${item.variant}`}
                    data-strk-img={`[${item.product.titleId}] jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xs tracking-widest-xl uppercase text-brand-charcoal truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-brand-muted-light capitalize mt-1">
                    {item.variant}
                  </p>
                  <p className="text-sm font-medium text-brand-charcoal mt-2">
                    {formatPrice(item.product.price)}
                  </p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.variant,
                          item.quantity - 1
                        )
                      }
                      className="w-7 h-7 border border-brand-divider-light flex items-center justify-center hover:border-brand-gold transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.variant,
                          item.quantity + 1
                        )
                      }
                      className="w-7 h-7 border border-brand-divider-light flex items-center justify-center hover:border-brand-gold transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id, item.variant)}
                      className="ml-auto text-brand-muted-light hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-brand-warm-white border-t border-brand-divider-light">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium tracking-wider uppercase">
                Subtotal
              </span>
              <span className="text-lg font-medium">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-brand-muted-light mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <Button variant="primary" size="full">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
