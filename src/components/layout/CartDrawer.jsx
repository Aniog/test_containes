import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
            <h2 className="font-serif text-xl tracking-wide text-espresso">Your Bag</h2>
            <button onClick={closeDrawer} className="p-1 text-warm-500 hover:text-espresso transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-warm-400">
                <p className="font-serif text-lg">Your bag is empty</p>
                <p className="text-sm mt-2">Add something beautiful</p>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-warm-100 flex-shrink-0 flex items-center justify-center">
                      <span className="font-serif text-lg text-warm-300">{item.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p id={`cart-item-name-${item.id}`} className="font-serif text-sm tracking-product uppercase text-espresso truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-warm-400 mt-0.5 capitalize">{item.tone} tone</p>
                      <p className="text-sm font-sans font-medium text-espresso mt-1">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="w-6 h-6 border border-warm-300 flex items-center justify-center text-warm-500 hover:border-gold hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-espresso w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="w-6 h-6 border border-warm-300 flex items-center justify-center text-warm-500 hover:border-gold hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="ml-auto text-xs text-warm-400 hover:text-espresso underline transition-colors"
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
            <div className="border-t border-warm-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-warm-500">Subtotal</span>
                <span className="font-serif text-lg text-espresso">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-warm-400">Shipping calculated at checkout</p>
              <button className="w-full bg-gold hover:bg-gold-hover text-white font-sans text-xs tracking-product uppercase py-3.5 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
