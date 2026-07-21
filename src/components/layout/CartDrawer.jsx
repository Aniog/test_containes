import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

function getImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry?.results?.length) return null
  const picked = entry.picked
    ? entry.results.find(r => String(r.id) === String(entry.picked))
    : entry.results[0]
  return picked?.url || null
}

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-warm-black/40 z-50 transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-warm-black">Your Bag</h2>
          <button onClick={closeDrawer} className="p-1 text-warm-gray hover:text-warm-black transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-warm-gray font-sans text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-xs font-semibold tracking-wide-btn uppercase text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const imageUrl = getImageUrl(item.imgId)
                return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-cream rounded flex-shrink-0 overflow-hidden">
                      <img
                        src={imageUrl || ''}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-warm-black truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-warm-black mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-sand rounded text-warm-gray hover:text-warm-black transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-sans font-medium text-warm-black w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-sand rounded text-warm-gray hover:text-warm-black transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-warm-gray hover:text-warm-black underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-warm-gray">Subtotal</span>
              <span className="text-lg font-serif font-medium text-warm-black">${total}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-warm-black font-sans text-xs font-semibold tracking-wide-btn uppercase py-3.5 hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
