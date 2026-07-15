import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import { productImages } from '@/components/ui/ProductCard'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 transition-all duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div
          className={cn(
            'absolute top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl transition-transform duration-300 flex flex-col',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-100">
            <h2 className="font-serif text-xl text-velmora-800">
              Cart ({totalItems})
            </h2>
            <button onClick={onClose} aria-label="Close cart">
              <X className="w-5 h-5 text-velmora-500 hover:text-velmora-800 transition-colors" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-velmora-400 text-sm">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 text-xs tracking-wider uppercase text-velmora-gold hover:text-velmora-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item, index) => {
                  const imgKey = item.image
                  const imgSrc = productImages[imgKey] || ''
                  return (
                    <li key={index} className="flex gap-4 pb-5 border-b border-velmora-100 last:border-0">
                      <div className="w-20 h-24 bg-velmora-50 flex-shrink-0 overflow-hidden">
                        {imgSrc && (
                          <img
                            src={imgSrc}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-product text-velmora-800 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-velmora-500 mt-0.5">
                          ${item.price}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-velmora-200">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="p-1.5 text-velmora-500 hover:text-velmora-800 disabled:opacity-30 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs text-velmora-800 font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="p-1.5 text-velmora-500 hover:text-velmora-800 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-velmora-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-600">Subtotal</span>
                <span className="font-serif text-lg text-velmora-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-400">
                Free shipping on orders over $100
              </p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}