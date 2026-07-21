import React from 'react'
import { useCart } from '@/context/CartContext'
import { X, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

function getProductImageUrl(product) {
  const entry = strkImgConfig[product.imgId]
  if (entry?.picked && entry.results) {
    const picked = entry.results.find(r => r.id === entry.picked)
    if (picked?.url) return picked.url
    if (entry.results[0]?.url) return entry.results[0].url
  }
  return ''
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-charcoal/10">
          <h2 className="font-serif text-warm-black text-lg tracking-[0.1em] uppercase">
            Your Bag
          </h2>
          <button onClick={closeCart} className="text-warm-gray hover:text-warm-black transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-warm-gray text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs uppercase tracking-[0.2em] text-muted-gold hover:text-bright-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream flex-shrink-0 rounded-sm overflow-hidden">
                    <img
                      src={getProductImageUrl(item.product)}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-warm-black text-sm uppercase tracking-[0.1em]">
                      {item.product.name}
                    </h3>
                    <p className="text-warm-gray text-xs mt-1">{item.tone}</p>
                    <p className="text-warm-black text-sm mt-2">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-warm-charcoal/20 flex items-center justify-center text-warm-gray hover:text-warm-black transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-warm-black text-sm min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-warm-charcoal/20 flex items-center justify-center text-warm-gray hover:text-warm-black transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-warm-gray hover:text-warm-black text-xs uppercase tracking-wider transition-colors"
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
          <div className="border-t border-warm-charcoal/10 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-warm-gray text-sm uppercase tracking-wider">Subtotal</span>
              <span className="text-warm-black font-serif text-lg">${totalPrice}</span>
            </div>
            <p className="text-warm-gray text-xs mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-muted-gold text-warm-black py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-bright-gold transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
