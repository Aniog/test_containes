import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/CartContext'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeFromCart, updateQuantity, subtotal, itemCount } = useCart()

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-velvet-950 border-l border-velvet-800 transform transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-gold-400" />
              <h3 className="text-sm tracking-super-wide uppercase text-velvet-50 font-semibold">
                Cart ({itemCount})
              </h3>
            </div>
            <button onClick={closeDrawer} className="p-1 text-velvet-400 hover:text-velvet-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-700 mb-4" />
                <p className="text-velvet-400 text-sm">Your cart is empty</p>
                <button
                  onClick={closeDrawer}
                  className="mt-4 text-xs tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="flex flex-col gap-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 pb-5 border-b border-velvet-800 animate-fade-in">
                    {/* Product image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-800 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-velvet-700 flex items-center justify-center">
                        <span className="text-velvet-500 text-[10px]">IMG</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs tracking-wider text-velvet-100 font-medium uppercase">
                            {item.product.shortName}
                          </h4>
                          <p className="text-[10px] text-velvet-500 mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.key)}
                          className="text-velvet-600 hover:text-red-400 transition-colors p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velvet-700 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-velvet-400 hover:text-velvet-200 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center text-xs text-velvet-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-velvet-400 hover:text-velvet-200 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-gold-400 font-medium">
                          ${(item.product.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-velvet-800">
              <div className="flex justify-between items-center mb-5">
                <span className="text-sm text-velvet-400">Subtotal</span>
                <span className="text-lg font-medium text-velvet-50">${subtotal.toFixed(0)}</span>
              </div>
              <button className="btn-primary w-full mb-3">Checkout</button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs tracking-wider uppercase text-velvet-400 hover:text-gold-400 transition-colors py-2"
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