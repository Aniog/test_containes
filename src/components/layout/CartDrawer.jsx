import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-drawer transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/40">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs text-muted font-sans">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors p-1"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone" />
              <p className="font-serif text-xl font-light text-ink">Your cart is empty</p>
              <p className="text-sm text-muted font-sans">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block border border-gold text-gold text-xs font-medium uppercase tracking-[0.15em] px-8 py-3 hover:bg-gold hover:text-ivory transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone/30 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-stone/50 flex items-center justify-center">
                      <span className="text-whisper text-xs font-sans uppercase tracking-wider">
                        {item.product.category.slice(0, 3)}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-medium uppercase tracking-[0.12em] text-ink leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-muted font-sans mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-sans font-medium text-ink mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-stone/60 h-8">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-full flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans font-medium text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-full flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-whisper hover:text-gold transition-colors p-1"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/40 bg-cream/50">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-sans uppercase tracking-[0.15em] text-muted">Subtotal</span>
              <span className="font-serif text-lg font-light text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-whisper font-sans mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory text-xs font-medium uppercase tracking-[0.15em] py-4 hover:bg-gold-light transition-all duration-300 font-sans">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-stone/60 text-muted text-xs font-medium uppercase tracking-[0.15em] py-3 hover:border-ink hover:text-ink transition-all duration-300 font-sans"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
