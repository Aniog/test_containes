import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-velvet z-[70] shadow-2xl shadow-black/50 transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-velvet-400/40">
            <h2 className="font-serif text-xl tracking-wider text-velvet-50">Your Cart</h2>
            <button onClick={closeCart} className="text-velvet-200 hover:text-velvet-50 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-200/40 mb-4" />
                <p className="text-velvet-200 text-sm">Your cart is empty</p>
                <p className="text-velvet-200/60 text-xs mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.material}`} className="flex gap-4 pb-6 border-b border-velvet-400/20 last:border-0">
                    <div className="w-20 h-20 bg-velvet-600 rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-widest text-velvet-50 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velvet-200 mt-0.5 capitalize">{item.material} tone</p>
                      <p className="text-gold text-sm mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                          className="w-7 h-7 border border-velvet-400/40 rounded-sm flex items-center justify-center text-velvet-200 hover:text-velvet-50 hover:border-velvet-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-velvet-50 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                          className="w-7 h-7 border border-velvet-400/40 rounded-sm flex items-center justify-center text-velvet-200 hover:text-velvet-50 hover:border-velvet-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.material)}
                          className="ml-auto text-xs text-velvet-200/60 hover:text-red-400 transition-colors"
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
            <div className="px-6 py-6 border-t border-velvet-400/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velvet-200">Subtotal</span>
                <span className="font-serif text-lg text-velvet-50">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velvet-200/60 mb-6">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-gold text-velvet font-medium uppercase tracking-widest text-xs py-4 hover:bg-gold-light transition-all duration-300 rounded-sm">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-xs text-velvet-200/60 hover:text-velvet-50 uppercase tracking-wider transition-colors py-2"
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