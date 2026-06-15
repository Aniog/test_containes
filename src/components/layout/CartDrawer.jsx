import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [setIsOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <h2 className="font-serif text-lg font-light text-obsidian tracking-wide">Your Cart</h2>
            {count > 0 && (
              <span className="font-manrope text-xs text-muted">({count} {count === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-obsidian transition-colors duration-200 p-1"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-divider" strokeWidth={1} />
              <p className="font-serif text-xl font-light text-obsidian">Your cart is empty</p>
              <p className="font-manrope text-sm text-muted">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-widest border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-divider">
              {items.map(item => (
                <li key={`${item.id}-${item.variant}`} className="py-5 flex gap-4">
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[cart-item-${item.id}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p id={`cart-item-${item.id}-name`} className="font-manrope text-xs tracking-widest text-obsidian font-medium truncate">{item.name}</p>
                    <p className="font-manrope text-xs text-muted mt-0.5">{item.variant} Tone</p>
                    <p className="font-serif text-base text-obsidian mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.variant, item.qty - 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-muted hover:border-obsidian hover:text-obsidian transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                      <span className="font-manrope text-sm text-obsidian w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.variant, item.qty + 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-muted hover:border-obsidian hover:text-obsidian transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    aria-label="Remove item"
                    className="text-muted hover:text-obsidian transition-colors duration-200 self-start mt-1"
                  >
                    <X className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-widest text-muted">SUBTOTAL</span>
              <span className="font-serif text-xl text-obsidian">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-manrope text-xs tracking-widest py-4 hover:bg-gold transition-colors duration-300">
              PROCEED TO CHECKOUT
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-divider text-obsidian font-manrope text-xs tracking-widest py-3 hover:border-obsidian transition-colors duration-300"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
