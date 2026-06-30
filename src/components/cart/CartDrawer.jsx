import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, totalItems } = useCart()

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
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-hairline">
          <h2 className="font-serif text-lg tracking-widest flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            Your Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="hover:text-velmora-gold transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag className="w-12 h-12 text-velmora-muted mb-4" />
            <p className="text-velmora-muted text-sm">Your bag is empty</p>
            <Link to="/shop" onClick={closeCart} className="mt-4 text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variant}`} className="flex gap-4 py-3 border-b border-velmora-hairline">
                  <div className="w-20 h-20 bg-velmora-sand rounded-sm overflow-hidden shrink-0">
                    <img
                      data-strk-img-id={`cart-${item.productId}`}
                      data-strk-img={`[cart-name-${item.productId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-name-${item.productId}`} className="hidden">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-widest uppercase font-serif truncate">{item.name}</p>
                    <p className="text-[11px] text-velmora-muted mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 border border-velmora-hairline rounded">
                        <button
                          className="w-7 h-7 flex items-center justify-center hover:text-velmora-gold transition-colors"
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-5 text-center">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center hover:text-velmora-gold transition-colors"
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</span>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="text-[10px] text-velmora-muted hover:text-red-500 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-hairline px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-[11px] text-velmora-muted text-center">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-velmora-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <button onClick={closeCart} className="w-full text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-deep transition-colors">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slide-in { animation: slideIn 0.3s ease-out; }
      `}</style>
    </div>
  )
}
