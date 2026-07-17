import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-ivory z-[80] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
            <h2 className="font-serif text-lg tracking-wide">Your Cart</h2>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart" className="p-1 hover:text-velmora-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <p className="font-serif text-lg text-velmora-muted mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-warm-gray">Add something beautiful.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-cream rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={`https://images.unsplash.com/${item.image.query}?w=${item.image.width}&h=${Math.round(item.image.width * 4 / 3)}&fit=crop&q=80`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm tracking-wide truncate">{item.name}</p>
                        <p className="text-xs text-velmora-warm-gray mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-warm-gray hover:text-velmora-charcoal transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border rounded-full">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-warm-gray">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-warm-gray mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-velmora-charcoal text-white py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-xs tracking-widest uppercase text-velmora-warm-gray hover:text-velmora-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
