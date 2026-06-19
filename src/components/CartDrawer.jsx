import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="text-taupe hover:text-charcoal transition-colors" aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-taupe font-sans text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs tracking-widest uppercase font-sans font-medium text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-warm-gray/50">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-cream rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-taupe font-sans text-center px-1">{item.name}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-taupe font-sans mt-1 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-warm-gray flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-warm-gray flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-taupe hover:text-charcoal transition-colors font-sans underline"
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
          <div className="border-t border-warm-gray px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-taupe">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-taupe font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white text-xs tracking-widest uppercase font-sans font-medium py-4 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
