import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/60 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-velmora-linen z-50 flex flex-col shadow-[-8px_0_40px_rgba(26,23,20,0.25)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-mist" />
              <p className="font-cormorant text-xl text-velmora-text-mid italic">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-text-muted">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-widest uppercase border border-velmora-gold text-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-stone/15">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-cormorant text-2xl text-velmora-gold">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm tracking-widest uppercase text-velmora-text-dark leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-manrope text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-manrope text-sm font-medium text-velmora-text-dark mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 border border-velmora-stone/30">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-manrope text-xs w-5 text-center text-velmora-text-dark">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-text-muted hover:text-red-400 transition-colors"
                        aria-label="Remove item"
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
          <div className="px-6 py-5 border-t border-velmora-stone/20 bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-mid">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-text-dark">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-stone/40 text-velmora-text-mid font-manrope text-xs tracking-widest uppercase py-3 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
