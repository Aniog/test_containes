import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-surface border-l border-velmora-border/30 flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border/30">
          <h2 className="font-serif text-xl tracking-wider text-velmora-cream">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-1.5 text-velmora-muted hover:text-velmora-cream transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-border mb-4" />
              <p className="font-serif text-lg text-velmora-muted mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted/70 mb-6">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-6 py-2.5 bg-velmora-gold text-velmora-bg text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-border/20">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-velmora-bg rounded overflow-hidden flex-shrink-0">
                    <div
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[${item.id}-name] jewelry product`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      className="w-full h-full"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-widest-xl uppercase text-velmora-cream truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-muted mt-1 capitalize">{item.variant}</p>
                    <p className="text-sm text-velmora-gold mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border/40 flex items-center justify-center text-velmora-muted hover:text-velmora-cream hover:border-velmora-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-velmora-cream w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border/40 flex items-center justify-center text-velmora-muted hover:text-velmora-cream hover:border-velmora-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-muted hover:text-red-400 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border/30 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-velmora-muted">Subtotal</span>
              <span className="text-velmora-cream font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted/70">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-velmora-gold text-velmora-bg text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2.5 border border-velmora-gold/40 text-velmora-gold text-sm tracking-wider uppercase hover:bg-velmora-gold/10 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
