import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, updateQuantity, removeItem } = useCart()
  const overlayRef = useRef(null)

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
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-card z-[70] shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
            <h2 className="font-serif text-xl font-semibold text-brand-charcoal">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:text-brand-stone transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-brand-stone">
                <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
                <p className="font-serif text-lg text-brand-charcoal mb-1">Your cart is empty</p>
                <p className="text-sm">Add some pieces to get started.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 text-xs tracking-widest uppercase text-brand-gold hover:text-brand-gold-dark underline underline-offset-4 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-brand-border last:border-0"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-brand-warm overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={closeCart}
                        className="block text-xs tracking-widest uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors truncate"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-brand-stone mt-1 capitalize">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-brand-charcoal mt-1">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 border border-brand-border hover:bg-brand-warm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 border border-brand-border hover:bg-brand-warm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="ml-auto text-xs text-brand-stone hover:text-brand-charcoal transition-colors"
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
            <div className="border-t border-brand-border px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-brand-charcoal">Subtotal</span>
                <span className="font-serif text-lg font-semibold text-brand-charcoal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-brand-stone">Free shipping on all orders</p>
              <button className="w-full bg-brand-charcoal text-white text-xs tracking-widest uppercase py-4 hover:bg-black transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs tracking-widest uppercase text-brand-stone hover:text-brand-charcoal py-2 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}