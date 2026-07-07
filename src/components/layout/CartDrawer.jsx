import React from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-truffle-900/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-cream shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-truffle-200/40">
          <h3 className="font-serif text-lg tracking-wide">Your Cart ({itemCount})</h3>
          <button onClick={closeCart} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag size={48} className="text-truffle-300 mb-4" />
            <p className="text-truffle-500 text-sm">Your cart is empty.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-4 btn-outline text-xs"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5 thin-scrollbar">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 animate-fade-in">
                  <div className="w-20 h-24 shrink-0 bg-truffle-100 rounded-sm overflow-hidden">
                    <img
                      src={item.images?.[0]?.src || item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="product-name text-xs tracking-wider">{item.name}</h4>
                        <p className="text-xs text-truffle-400 mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-truffle-300 hover:text-truffle-800 transition-colors ml-2 shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-truffle-200/60">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-truffle-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-truffle-200/40 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-truffle-500">Subtotal</span>
                <span className="font-medium text-truffle-800">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-truffle-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-xs tracking-wider">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-truffle-500 hover:text-truffle-800 transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
