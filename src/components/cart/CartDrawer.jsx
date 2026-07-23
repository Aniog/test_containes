import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isDrawerOpen, closeDrawer } = useCart()

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-ink/40 z-50 transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-sand">
            <h2 className="font-serif text-xl tracking-product">YOUR BAG</h2>
            <button onClick={closeDrawer} className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-muted">
                <ShoppingBag className="w-12 h-12 mb-4" />
                <p className="font-sans text-sm">Your bag is empty</p>
                <button
                  onClick={closeDrawer}
                  className="mt-4 font-sans text-sm tracking-product text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand/50">
                    <div className="w-20 h-20 bg-velmora-warm rounded-sm flex-shrink-0 flex items-center justify-center">
                      <span className="font-serif text-xs tracking-product text-velmora-gold/80 uppercase">
                        {item.product.name.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 id={`cart-title-${item.key}`} className="font-serif text-sm tracking-product uppercase text-velmora-charcoal truncate">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-velmora-muted mt-1">
                        {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                      </p>
                      <p className="font-sans text-sm text-velmora-charcoal mt-2">${item.product.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 border border-velmora-sand rounded-sm flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 border border-velmora-sand rounded-sm flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto font-sans text-xs text-velmora-muted hover:text-velmora-charcoal transition-colors"
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
            <div className="px-6 py-4 border-t border-velmora-sand">
              <div className="flex justify-between mb-4">
                <span className="font-sans text-sm text-velmora-muted">Subtotal ({totalItems} items)</span>
                <span className="font-serif text-lg text-velmora-charcoal">${totalPrice}</span>
              </div>
              <button className="w-full bg-velmora-gold text-white font-sans text-sm tracking-product py-3 rounded hover:bg-velmora-gold-light transition-colors duration-200">
                CHECKOUT
              </button>
              <p className="font-sans text-xs text-velmora-muted text-center mt-2">Free shipping on all orders</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
