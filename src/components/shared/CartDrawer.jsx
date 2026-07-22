import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isDrawerOpen, closeDrawer } = useCart()

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-divider">
            <h2 className="font-serif text-lg tracking-product uppercase text-charcoal">Your Bag</h2>
            <button onClick={closeDrawer} className="text-text-muted-dark hover:text-charcoal transition-colors duration-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-text-muted-dark mb-4" />
                <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
                <p className="font-sans text-sm text-text-muted-dark">Discover something you love.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => {
                  const product = products.find(p => p.id === item.productId)
                  return (
                    <div key={item.key} className="flex gap-4">
                      <div className="w-20 h-24 bg-charcoal/5 overflow-hidden flex items-center justify-center">
                        {product ? (
                          <span className="font-serif text-xs tracking-product uppercase text-gold/60 text-center leading-tight px-1">
                            {product.name.split(' ').slice(0, 2).join('\n')}
                          </span>
                        ) : (
                          <ShoppingBag className="w-6 h-6 text-text-muted-dark" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-sm tracking-product uppercase text-charcoal truncate">{item.name}</h3>
                        <p className="font-sans text-xs text-text-muted-dark mt-1">Tone: {item.tone}</p>
                        <p className="font-sans text-sm font-medium text-charcoal mt-2">${item.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-divider text-text-muted-dark hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-sm text-charcoal">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border border-divider text-text-muted-dark hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.key)}
                            className="ml-auto font-sans text-xs text-text-muted-dark hover:text-charcoal underline transition-colors duration-300"
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
            <div className="border-t border-divider px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-text-muted-dark">Subtotal</span>
                <span className="font-sans text-lg font-medium text-charcoal">${totalPrice}</span>
              </div>
              <p className="font-sans text-xs text-text-muted-dark mb-4">Shipping calculated at checkout</p>
              <button className="w-full bg-gold text-charcoal font-sans text-xs tracking-ui uppercase py-3 hover:bg-gold-light transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
