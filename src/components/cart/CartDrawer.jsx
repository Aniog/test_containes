import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart, useCartDispatch, useCartTotal, useCartCount } from '@/components/cart/CartContext'
import { formatPrice } from '@/lib/utils'

const CartDrawer = () => {
  const cart = useCart()
  const dispatch = useCartDispatch()
  const total = useCartTotal()
  const count = useCartCount()

  if (!cart.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <h2 className="font-serif text-lg tracking-widest uppercase text-stone-800">
            Your Bag ({count})
          </h2>
          <button
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            className="text-stone-500 hover:text-stone-800 transition-colors p-1"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="font-serif text-lg text-stone-600">Your bag is empty</p>
              <p className="font-sans text-sm text-stone-400 mt-2">Discover our collection and add something beautiful.</p>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="btn-outline mt-6"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-stone-200 flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-thumb-${item.id}-${item.tone}`}
                      data-strk-img={`[cart-item-name-${item.id}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p id={`cart-item-name-${item.id}`} className="product-name text-xs text-stone-800 truncate">
                      {item.name}
                    </p>
                    <p className="font-sans text-xs text-stone-400 mt-1">
                      {item.tone} tone
                    </p>
                    <p className="font-serif text-sm text-velmora-gold mt-2">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, tone: item.tone, quantity: item.quantity - 1 }
                        })}
                        className="w-6 h-6 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-stone-800 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, tone: item.tone, quantity: item.quantity + 1 }
                        })}
                        className="w-6 h-6 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => dispatch({
                      type: 'REMOVE_ITEM',
                      payload: { id: item.id, tone: item.tone }
                    })}
                    className="text-stone-400 hover:text-stone-700 transition-colors self-start p-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t border-stone-200 px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-stone-600 uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-stone-800">{formatPrice(total)}</span>
            </div>
            <p className="font-sans text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full text-center block">
              Checkout
            </button>
            <button
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="btn-outline w-full text-center block mt-3"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
