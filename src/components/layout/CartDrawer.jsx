import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-muted" />
            <span className="font-manrope text-xs uppercase tracking-widest text-velmora-text">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-text transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-subtle" />
              <p className="font-cormorant text-xl text-velmora-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-subtle">Discover our collection and find something beautiful.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-border last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full gold-shimmer" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest text-velmora-text leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-manrope text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-manrope text-sm text-velmora-text mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-manrope text-sm text-velmora-text w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-velmora-subtle hover:text-velmora-muted transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border bg-velmora-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-text">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-subtle mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-border text-velmora-muted font-manrope text-xs uppercase tracking-widest py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
