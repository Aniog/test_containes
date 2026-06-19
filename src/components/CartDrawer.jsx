import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#F8F4EE] shadow-xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DDD3]">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-[#2D2A24]" />
              <span className="font-sans text-sm font-medium text-[#2D2A24]">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={onClose} className="p-1 hover:text-[#C69C6D] transition-colors" aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag size={40} className="mx-auto text-[#C69C6D]/40 mb-4" />
                <p className="font-sans text-sm text-[#8C867C]">Your cart is empty</p>
                <p className="font-sans text-xs text-[#8C867C] mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-[#E5DDD3]/60">
                    <div className="w-20 h-20 bg-[#F0E9DF] rounded flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-[#2D2A24] uppercase tracking-[0.08em] truncate">
                        {item.name}
                      </h4>
                      {item.variant && (
                        <p className="font-sans text-xs text-[#8C867C] mt-0.5">{item.variant}</p>
                      )}
                      <p className="font-sans text-sm font-medium text-[#2D2A24] mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-[#E5DDD3] rounded">
                          <button
                            className="p-1.5 hover:text-[#C69C6D] transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-sans">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:text-[#C69C6D] transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          className="font-sans text-xs text-[#8C867C] hover:text-[#C69C6D] transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
          <div className="border-t border-[#E5DDD3] px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm font-medium text-[#2D2A24]">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-[#2D2A24]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-[#8C867C] mb-4">
              Free shipping on all orders
            </p>
            <button
              className="w-full bg-[#2D2A24] text-[#F8F4EE] py-3.5 font-sans text-sm font-medium tracking-[0.08em] uppercase hover:bg-[#C69C6D] transition-colors duration-300"
              disabled={items.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}