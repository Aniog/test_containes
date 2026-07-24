import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-surface z-50 shadow-xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-divider">
          <h2 className="font-serif text-xl tracking-[0.05em] text-velmora-textPrimary">
            YOUR CART ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-1 hover:text-velmora-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-textSecondary">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <p className="text-sm mt-2">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-divider">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-velmora-cream rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs uppercase tracking-[0.1em] text-velmora-gold opacity-60">
                      {item.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-textPrimary truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-textSecondary mt-1">
                      {item.shortDescription} — {item.tone === 'gold' ? 'Gold' : 'Silver'} tone
                    </p>
                    <p className="font-serif text-sm text-velmora-gold mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-divider rounded-sm hover:border-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-divider rounded-sm hover:border-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-velmora-textSecondary hover:text-velmora-gold transition-colors underline"
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
          <div className="px-6 py-4 border-t border-velmora-divider">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-velmora-textSecondary">Subtotal</span>
              <span className="font-serif text-lg text-velmora-textPrimary">${totalPrice}</span>
            </div>
            <p className="text-xs text-velmora-textSecondary mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-base py-3 font-sans text-sm uppercase tracking-[0.1em] hover:bg-velmora-goldLight transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
