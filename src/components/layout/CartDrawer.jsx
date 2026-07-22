import React from "react"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Link } from "react-router-dom"

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={closeCart} />
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="font-serif text-lg tracking-wide">Your Cart ({items.length})</h2>
          <button onClick={closeCart} className="p-2 -mr-2 text-stone-500 hover:text-stone-900" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-stone-300 mb-4" />
              <p className="text-stone-500 mb-6">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-stone-900 text-white text-xs uppercase tracking-[0.15em] hover:bg-stone-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide truncate">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 capitalize">{item.tone}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="p-1 border border-stone-200 hover:border-stone-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="p-1 border border-stone-200 hover:border-stone-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-stone-400 hover:text-stone-900 underline"
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

        {items.length > 0 && (
          <div className="border-t border-stone-100 p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-stone-600">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-500">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.15em] hover:bg-stone-800 transition-colors">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full py-3 text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
