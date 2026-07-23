import React from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import Button from './Button'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isDrawerOpen, closeDrawer } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-surface-950/60 transition-opacity duration-300',
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory-light z-50 shadow-2xl transition-transform duration-400 ease-out flex flex-col',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-surface-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          </div>
          <button onClick={closeDrawer} className="p-2 hover:bg-surface-100 rounded-full transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-surface-300 mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-surface-700 mb-2">Your cart is empty</p>
              <p className="text-body-sm text-surface-400 mb-6">Discover our collection and find something you love.</p>
              <Button variant="outline" size="md" onClick={closeDrawer}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 p-3 bg-white rounded-lg border border-surface-100">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-surface-100 rounded-md flex-shrink-0 overflow-hidden">
                    <div
                      className="w-full h-full bg-gradient-to-br from-surface-200 to-surface-100 flex items-center justify-center"
                    >
                      <span className="text-caption text-surface-400 uppercase tracking-wider">
                        {item.product.category === 'huggies' ? 'Huggie' : item.product.category.slice(0, 3)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name-text text-body-sm text-surface-900 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-body-sm text-surface-500 capitalize mt-0.5">
                      {item.color}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 border border-surface-200 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 hover:bg-surface-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-body-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 hover:bg-surface-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-body-sm font-medium text-surface-900">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start p-1 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4 text-surface-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-surface-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-surface-600 uppercase tracking-wider">Subtotal</span>
              <span className="text-body-lg font-medium text-surface-900">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-body-sm text-surface-400">Shipping and taxes calculated at checkout</p>
            <Button variant="gold" size="full">
              Checkout
            </Button>
            <Button variant="outline" size="full" onClick={closeDrawer}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
