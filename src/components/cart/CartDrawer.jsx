import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-pale z-50 transform transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
            <h2 className="font-serif text-xl text-brand-charcoal">Your Bag</h2>
            <button onClick={closeDrawer} className="text-brand-warm-gray hover:text-brand-charcoal transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-soft-gray mb-4" />
                <p className="font-serif text-lg text-brand-charcoal mb-2">Your bag is empty</p>
                <p className="font-sans text-sm text-brand-warm-gray">Add something beautiful to get started.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-brand-warm rounded flex-shrink-0 flex items-center justify-center">
                      <span className="font-serif text-xs text-brand-warm-gray">{item.name.split(' ')[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wide text-brand-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-brand-warm-gray mt-0.5 capitalize">{item.tone} tone</p>
                      <p className="font-sans text-sm text-brand-charcoal mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="w-6 h-6 border border-brand-sand rounded flex items-center justify-center text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm text-brand-charcoal w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="w-6 h-6 border border-brand-sand rounded flex items-center justify-center text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="ml-auto font-sans text-[10px] uppercase tracking-wide text-brand-warm-gray hover:text-brand-charcoal transition-colors"
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
            <div className="border-t border-brand-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-wide text-brand-warm-gray">Subtotal</span>
                <span className="font-serif text-lg text-brand-charcoal">${total}</span>
              </div>
              <p className="font-sans text-xs text-brand-warm-gray">Shipping calculated at checkout</p>
              <button className="w-full bg-brand-gold text-white font-sans text-xs uppercase tracking-extra-wide py-3.5 hover:bg-brand-gold-dark transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
