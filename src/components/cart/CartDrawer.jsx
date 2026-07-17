import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useEffect } from 'react'

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && drawerOpen) {
        closeDrawer()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [drawerOpen, closeDrawer])

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[60]"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-black z-[70]"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2 className="font-serif text-lg tracking-wider text-warm-cream">Your Bag</h2>
            <button onClick={closeDrawer} className="text-warm-cream/60 hover:text-warm-cream transition-colors p-1 -mr-1" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-warm-gray">
                <p className="font-serif text-lg mb-2">Your bag is empty</p>
                <p className="text-sm">Add something beautiful.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-warm-charcoal flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <span className="font-serif text-gold/40 text-2xl">V</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-warm-cream truncate">{item.name}</h3>
                      <p className="text-xs text-warm-gray mt-1">{item.tone}</p>
                      <p className="text-sm text-gold mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="text-warm-cream/60 hover:text-warm-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-warm-cream font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="text-warm-cream/60 hover:text-warm-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="ml-auto text-xs text-warm-gray hover:text-gold transition-colors uppercase tracking-wider"
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
            <div className="border-t border-divider px-6 py-5">
              <div className="flex justify-between mb-4">
                <span className="text-sm text-warm-gray uppercase tracking-wider">Subtotal</span>
                <span className="text-lg font-serif text-warm-cream">${total}</span>
              </div>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <p className="text-xs text-warm-gray text-center mt-3">Free shipping on orders over $75</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
