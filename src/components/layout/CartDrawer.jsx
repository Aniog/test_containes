import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-drawer flex flex-col transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-whisper" />
              <p className="font-serif text-xl text-muted font-light">Your cart is empty</p>
              <p className="font-sans text-sm text-whisper">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-[11px] font-semibold uppercase tracking-widest text-obsidian border border-obsidian px-6 py-3 hover:bg-obsidian hover:text-parchment transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs text-whisper italic">✦</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm font-medium uppercase tracking-product text-ink leading-tight">
                          {item.product.name}
                        </p>
                        {item.variant && (
                          <p className="font-sans text-xs text-muted mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-whisper hover:text-ink transition-colors duration-300 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-semibold text-ink">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-muted uppercase tracking-wide">Subtotal</span>
              <span className="font-serif text-xl font-medium text-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-whisper">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-sans text-[11px] font-semibold uppercase tracking-widest py-4 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-obsidian text-obsidian font-sans text-[11px] font-semibold uppercase tracking-widest py-3.5 hover:bg-obsidian hover:text-parchment transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
