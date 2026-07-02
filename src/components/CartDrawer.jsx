import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 transform transition-transform duration-400 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
            <h2 className="font-serif text-xl text-velmora-ink">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="text-velmora-stone hover:text-velmora-ink transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-stone/40 mb-4" />
                <p className="font-serif text-lg text-velmora-ink mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-stone mb-6">Discover our collection of demi-fine jewelry.</p>
                <Link to="/shop" onClick={closeCart} className="btn-primary">
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand/50">
                    {/* Thumb */}
                    <div className="w-20 h-20 flex-shrink-0 bg-velmora-blush flex items-center justify-center">
                      <span className="text-velmora-stone text-xs text-center px-2">{item.product.name}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-ink truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-velmora-stone mt-0.5">{item.variant} Tone</p>
                      <p className="text-sm text-velmora-gold font-medium mt-1">${item.price}</p>

                      {/* Qty controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-velmora-charcoal min-w-[20px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-velmora-stone/50 hover:text-velmora-ink transition-colors self-start mt-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg text-velmora-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button onClick={closeCart} className="w-full text-center text-xs text-velmora-stone hover:text-velmora-ink transition-colors underline underline-offset-4">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}