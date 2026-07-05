import { X, Minus, Plus } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="relative w-full max-w-md bg-cream h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl tracking-wide text-charcoal-950">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-2 hover:text-gold-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-charcoal-500 text-sm">Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="mt-4 text-sm text-gold-700 hover:text-gold-800 underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-20 h-20 bg-charcoal-100 rounded-md flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <img
                      src={`https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_400/unsplashcom/photo-${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-charcoal-400 uppercase tracking-wide">
                      Image
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-charcoal-900 truncate tracking-wide">{item.name}</p>
                  <p className="text-xs text-charcoal-500 mt-0.5 capitalize">{item.variant}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-charcoal-200 rounded-full">
                      <button
                        className="px-2 py-1 hover:text-gold-600 transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs w-6 text-center">{item.quantity}</span>
                      <button
                        className="px-2 py-1 hover:text-gold-600 transition-colors"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-charcoal-800">${item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.variant)}
                  className="text-charcoal-400 hover:text-charcoal-700 self-start mt-1"
                  aria-label="Remove item"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-charcoal-100 bg-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg text-charcoal-950">${totalPrice}</span>
            </div>
            <p className="text-xs text-charcoal-500 mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-charcoal-950 text-white py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-charcoal-800 transition-colors rounded-sm">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 text-xs text-charcoal-600 hover:text-charcoal-900 underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
