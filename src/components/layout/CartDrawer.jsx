import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { useEffect } from 'react'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory-cream z-50 flex flex-col animate-cart-slide shadow-2xl"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold-dust" />
            <span className="font-cormorant text-xl font-medium text-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-muted">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors duration-300"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-whisper" />
              <p className="font-cormorant text-2xl text-muted font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-whisper">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-widest uppercase border border-gold-dust text-gold-dust px-8 py-3 hover:bg-gold-dust hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-divider">
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
          <div className="px-6 py-6 border-t border-divider bg-warm-white">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs text-muted uppercase tracking-widest">Subtotal</span>
              <span className="font-cormorant text-2xl text-ink font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold-dust text-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-gold-deep transition-colors duration-300 font-semibold">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-manrope text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-300 py-2"
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
    <div className="flex gap-4 py-5">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-surface flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.key}-img`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
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
            <p className="font-cormorant text-sm uppercase tracking-widest text-ink font-medium leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-xs text-muted mt-0.5">{variant} Tone</p>
          </div>
          <button
            onClick={onRemove}
            aria-label="Remove item"
            className="text-whisper hover:text-ink transition-colors duration-300 flex-shrink-0"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-divider">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              aria-label="Decrease quantity"
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors duration-300"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-manrope text-xs text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              aria-label="Increase quantity"
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors duration-300"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-cormorant text-lg text-ink font-medium">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
