import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isOpen, setIsOpen } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velvet/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-off-white z-50 slide-in-right flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-serif text-lg text-velvet">Your Cart</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mink hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl text-velvet">Your cart is empty</p>
              <p className="font-sans text-xs text-mink">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors border-b border-gold pb-0.5"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold-light/30 to-parchment flex items-center justify-center">
                      <ShoppingBag size={20} strokeWidth={1} className="text-gold/50" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs uppercase tracking-widest text-velvet font-medium leading-tight mb-1 truncate">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-mink mb-1">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-velvet">${item.product.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-mink hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-velvet w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-mink hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-linen hover:text-mink transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <Trash2 size={15} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs uppercase tracking-widest text-mink">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-mink">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velvet text-cream font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold hover:text-velvet transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-sans text-xs uppercase tracking-widest text-mink hover:text-gold transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
