import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart()

  React.useEffect(() => {
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
        onClick={closeDrawer}
        className={cn(
          'fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md z-[70] bg-[#111111] border-l border-[#2A2A2A]',
          'transform transition-transform duration-300 ease-out',
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A]">
            <h2 className="font-serif text-xl text-[#F5F0EB] tracking-wider">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeDrawer}
              className="text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#2A2A2A] mb-4" />
                <p className="text-[#A0988E] text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-4 text-sm text-[#C9A96E] hover:text-[#D4B878] transition-colors uppercase tracking-wider"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-[#2A2A2A] last:border-0"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-[#1A1A1A] rounded-sm overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm text-[#F5F0EB] tracking-[0.1em] uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#A0988E] mt-0.5">{item.variant}</p>
                      <p className="text-sm text-[#C9A96E] mt-1">${item.price}</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#2A2A2A] rounded-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="px-2 py-1 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-xs text-[#F5F0EB] min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="px-2 py-1 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-[#A0988E] hover:text-[#E45757] transition-colors"
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
            <div className="border-t border-[#2A2A2A] px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#A0988E]">Subtotal</span>
                <span className="text-lg font-serif text-[#F5F0EB]">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#A0988E]">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-[#C9A96E] text-black py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#D4B878] transition-colors rounded-sm">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
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