import { useEffect } from 'react'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, itemCount } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-warm-dark/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-dark/8">
          <h3 className="font-serif text-xl tracking-wider">
            Your Bag ({itemCount})
          </h3>
          <button onClick={closeCart} className="p-1.5 text-warm-dark/50 hover:text-warm-dark transition-colors">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag size={40} className="text-warm-dark/15 mb-4" />
            <p className="font-serif text-lg text-warm-dark/40">Your bag is empty</p>
            <button onClick={closeCart} className="mt-4 btn-outline text-xs">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-3 border-b border-warm-dark/5">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-sand/50 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm tracking-wider uppercase text-warm-dark">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted mt-0.5 font-sans">{item.variant}</p>
                    <p className="text-sm font-sans text-warm-dark mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-warm-dark/15">
                        <button
                          onClick={() => updateQty(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-warm-dark/60 hover:text-warm-dark"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-warm-dark/60 hover:text-warm-dark"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item)}
                        className="p-1 text-warm-dark/30 hover:text-rose transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-warm-dark/8 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium text-warm-dark">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted font-sans">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <button onClick={closeCart} className="w-full text-center text-xs tracking-wider uppercase text-warm-dark/50 hover:text-warm-dark transition-colors font-sans py-2">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}