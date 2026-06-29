import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-50 transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-surface z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-muted-light">
          <h2 className="font-serif text-xl tracking-wider">Your Bag</h2>
          <button onClick={closeDrawer} className="p-1 text-velmora-muted hover:text-velmora-deep transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-velmora-muted text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-accent hover:text-velmora-accent-hover transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-cream rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}-${item.variant}`}
                      data-strk-img={`[cart-item-${item.id}-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`cart-item-${item.id}-name`} className="font-serif text-sm tracking-wider uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-muted-light text-velmora-muted hover:text-velmora-deep transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-muted-light text-velmora-muted hover:text-velmora-deep transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-muted hover:text-velmora-accent transition-colors underline"
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
          <div className="border-t border-velmora-muted-light px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="text-lg font-serif">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-velmora-accent text-white py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-accent-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
