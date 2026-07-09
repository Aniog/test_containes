import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-ivory z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-muted" />
            <span className="font-manrope text-xs tracking-[0.14em] uppercase text-velmora-text">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-text transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-border" />
              <p className="font-cormorant text-xl text-velmora-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-subtle">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-[11px] tracking-[0.14em] uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-white transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-border last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-border flex items-center justify-center">
                      <span className="font-cormorant text-xs text-velmora-muted">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-velmora-text leading-tight">
                          {item.name}
                        </p>
                        <p className="font-manrope text-[10px] text-velmora-muted mt-0.5 capitalize">
                          {item.variant} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-subtle hover:text-velmora-text transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-text transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={10} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velmora-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-text transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={10} strokeWidth={2} />
                        </button>
                      </div>

                      <p className="font-cormorant text-base text-velmora-text">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-manrope text-xs tracking-[0.1em] uppercase text-velmora-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-text">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[10px] text-velmora-subtle">
              Shipping and taxes calculated at checkout. Free worldwide shipping.
            </p>
            <button className="w-full bg-velmora-gold text-white font-manrope text-[11px] tracking-[0.14em] uppercase py-4 hover:bg-velmora-gold-dark transition-colors flex items-center justify-center gap-2">
              Checkout
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-border text-velmora-muted font-manrope text-[11px] tracking-[0.14em] uppercase py-3 hover:border-velmora-text hover:text-velmora-text transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
