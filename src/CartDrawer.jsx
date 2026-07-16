import { useEffect } from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-softblack/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-warmwhite animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-mist/30">
            <h2 className="font-serif text-lg tracking-wide text-velmora-charcoal">
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-taupe hover:text-velmora-charcoal transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <p className="font-serif text-xl text-velmora-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-taupe mb-6">Discover our collection and find your next treasure.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.color}`}
                    className="flex gap-4 py-4 border-b border-velmora-mist/20"
                  >
                    {/* Product image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-velmora-blush rounded-sm overflow-hidden">
                      <div
                        className="w-full h-full"
                        data-strk-img-id={`cart-${item.id}-${item.color}`}
                        data-strk-img={`${item.name} ${item.color} jewelry`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xs tracking-wider uppercase text-velmora-charcoal mb-0.5">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-velmora-taupe mb-2 capitalize">
                        {item.color} tone
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-mist rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="p-1.5 text-velmora-taupe hover:text-velmora-charcoal"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-medium text-velmora-charcoal min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="p-1.5 text-velmora-taupe hover:text-velmora-charcoal"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-sm font-medium text-velmora-charcoal">
                            ${(item.price * item.quantity).toFixed(0)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id, item.color)}
                            className="text-velmora-taupe hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-mist/30 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-velmora-taupe">Subtotal</span>
                  <span className="font-serif text-lg text-velmora-charcoal">${subtotal.toFixed(0)}</span>
                </div>
                <p className="text-xs text-velmora-taupe">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full py-2 text-xs tracking-wide uppercase text-velmora-taupe hover:text-velmora-charcoal transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}