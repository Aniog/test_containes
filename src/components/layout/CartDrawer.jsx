import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isOpen, items])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velvet/50 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blush">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-champagne" />
            <span className="font-sans text-xs tracking-widest uppercase text-velvet">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-blush" />
              <p className="font-serif text-xl text-velvet">Your cart is empty</p>
              <p className="font-sans text-xs text-stone">Add something beautiful</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-champagne text-champagne px-6 py-3 hover:bg-champagne hover:text-velvet transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-blush last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-${item.key}-name`}
                      className="font-serif text-sm tracking-wide text-velvet uppercase mb-1 truncate"
                    >
                      {item.product.name}
                    </p>
                    <p className="font-sans text-[11px] text-stone mb-2">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-velvet">
                      ${(item.product.price * item.qty).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-blush text-stone hover:border-champagne hover:text-champagne transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-xs text-velvet w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-blush text-stone hover:border-champagne hover:text-champagne transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-sans text-[10px] tracking-wider uppercase text-stone hover:text-velvet transition-colors"
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
          <div className="px-6 py-6 border-t border-blush bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-stone">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-[10px] text-stone mb-5">Shipping calculated at checkout</p>
            <button className="w-full bg-champagne text-velvet font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold transition-colors duration-300 font-semibold">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-mink text-stone font-sans text-xs tracking-widest uppercase py-3 hover:border-velvet hover:text-velvet transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
