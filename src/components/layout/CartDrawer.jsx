import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/60 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-champagne" />
            <span className="font-serif text-lg text-obsidian tracking-wider">Your Cart</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-champagne/40" />
              <p className="font-serif text-xl text-obsidian/60 italic">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-champagne border border-champagne px-6 py-2.5 hover:bg-champagne hover:text-obsidian transition-all duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-champagne/15">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-blush flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p
                          id={`cart-${item.key}-name`}
                          className="font-serif text-sm uppercase tracking-wider text-obsidian leading-tight"
                        >
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-stone mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone/60 hover:text-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-champagne/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian hover:bg-blush transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian hover:bg-blush transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-sans text-sm font-500 text-obsidian">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-champagne/20 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-stone uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/70">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest py-4 hover:bg-champagne-dark transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-champagne/40 text-stone font-sans text-xs uppercase tracking-widest py-3 hover:border-champagne hover:text-obsidian transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
