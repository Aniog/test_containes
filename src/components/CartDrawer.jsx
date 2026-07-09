import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-velmora-ivory animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-warm-light">
          <h2 className="font-serif text-lg tracking-[0.15em] text-velmora-dark">
            YOUR BAG ({items.length})
          </h2>
          <button onClick={closeCart} className="p-2 hover:opacity-60 transition-opacity" aria-label="Close cart">
            <X className="w-5 h-5 text-velmora-slate" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
              <p className="text-velmora-taupe font-sans text-sm">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-xs uppercase tracking-[0.15em] text-velmora-gold hover:text-velmora-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-velmora-warm-light last:border-0">
                <div className="w-20 h-24 bg-velmora-warm-light rounded overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif-alt text-sm tracking-wider text-velmora-dark uppercase truncate">
                    {item.name}
                  </h3>
                  {item.variant && (
                    <p className="text-xs text-velmora-taupe mt-1">{item.variant}</p>
                  )}
                  <p className="text-sm font-sans text-velmora-slate mt-1">${item.price}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                      className="w-7 h-7 flex items-center justify-center border border-velmora-warm-light rounded hover:bg-velmora-warm-light transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-sans text-velmora-slate w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                      className="w-7 h-7 flex items-center justify-center border border-velmora-warm-light rounded hover:bg-velmora-warm-light transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="ml-auto text-xs text-velmora-taupe hover:text-velmora-slate transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-warm-light p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-sans text-velmora-slate uppercase tracking-wider">Total</span>
              <span className="font-serif text-lg text-velmora-dark">${totalPrice}</span>
            </div>
            <p className="text-xs text-velmora-taupe">Shipping calculated at checkout</p>
            <button className="w-full bg-velmora-gold hover:bg-velmora-gold-dark text-white text-xs uppercase tracking-[0.15em] py-3.5 transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-[0.15em] text-velmora-slate hover:text-velmora-gold py-2 transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}