import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

function getProductImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (entry && entry.results && entry.picked) {
    const picked = entry.results.find(r => r.id === entry.picked)
    if (picked) return picked.url
  }
  return ''
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button onClick={() => setIsOpen(false)} className="text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto cart-scroll px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-[0.15em] uppercase font-medium text-gold hover:text-gold-hover transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-sand flex-shrink-0">
                    <img
                      src={getProductImageUrl(item.product.imgId)}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{item.tone}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-hairline flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-hairline flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-stone hover:text-gold transition-colors underline underline-offset-2"
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
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-stone mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
