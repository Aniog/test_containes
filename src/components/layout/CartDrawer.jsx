import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, cartTotal, removeItem, updateQuantity } = useCart()

  React.useEffect(() => {
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
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#FDF8F3] shadow-2xl transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8DFD3]">
            <h2 className="font-heading text-xl tracking-wide text-[#1C1814]">Your Cart</h2>
            <button onClick={onClose} className="text-[#8A8278] hover:text-[#1C1814] transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#E8DFD3] mb-4" />
                <p className="font-body text-[#8A8278]">Your cart is empty</p>
                <Link to="/shop" onClick={onClose} className="mt-4 btn-primary text-xs">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-[#E8DFD3] last:border-0">
                    <div className="w-20 h-24 bg-[#F5EFE6] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="product-name text-xs text-[#1C1814]">{item.name}</h3>
                          <p className="product-price text-xs mt-1">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#8A8278] hover:text-[#1C1814] transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-[#E8DFD3] flex items-center justify-center text-[#8A8278] hover:text-[#1C1814] hover:border-[#1C1814] transition-all"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-body text-sm text-[#1C1814] w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-[#E8DFD3] flex items-center justify-center text-[#8A8278] hover:text-[#1C1814] hover:border-[#1C1814] transition-all"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-[#E8DFD3] px-6 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-[#1C1814]">Subtotal</span>
                <span className="font-heading text-lg text-[#1C1814]">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="font-body text-xs text-[#8A8278]">Shipping & taxes calculated at checkout</p>
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