import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart()
  const drawerRef = useRef(null)

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
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/50 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl shadow-obsidian/30 transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/20">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-champagne" />
            <span className="font-serif text-lg tracking-widest uppercase text-ink">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-champagne/40" />
              <p className="font-serif text-xl text-ink/60 font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-warm-gray tracking-wide">
                Discover our collection and find something beautiful.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-xs tracking-widest uppercase text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(qty) => updateQuantity(item.key, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-champagne/20 px-6 py-6 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-warm-gray">Subtotal</span>
              <span className="font-serif text-xl text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-warm-gray mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-champagne-dark transition-all duration-300 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-champagne/40 text-ink font-sans text-xs tracking-widest uppercase py-3 hover:border-champagne transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item
  return (
    <div className="flex gap-4 py-4 border-b border-champagne/10 last:border-0">
      {/* Hidden text anchors scoped inside the drawer so ImageHelper can resolve [id] references */}
      <span id={product.cartTitleId} className="sr-only">{product.name}</span>
      <span id={product.cartDescId} className="sr-only">{product.shortDesc}</span>

      <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={product.cartImgId}
          data-strk-img={`[${product.cartDescId}] [${product.cartTitleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-sm tracking-widest uppercase text-ink leading-tight">
              {product.name}
            </p>
            {variant && (
              <p className="font-sans text-xs text-warm-gray mt-0.5">{variant}</p>
            )}
          </div>
          <button
            onClick={onRemove}
            className="text-warm-gray hover:text-ink transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-champagne/30">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-ink transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-ink transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-sans text-sm font-medium text-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
