import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border-light">
          <h2 className="font-serif text-xl text-espresso">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-espresso hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-warm-gray mb-4" />
              <p className="font-serif text-lg text-espresso mb-2">Your cart is empty</p>
              <p className="text-sm text-warm-gray mb-6">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/collection"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-gold text-espresso font-sans text-sm font-medium tracking-wide uppercase px-8 py-3 hover:bg-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-warm-border-light last:border-0">
                  {/* Image */}
                  <div className="w-20 h-20 bg-espresso-light rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs uppercase tracking-product text-espresso truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-espresso mt-1">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-warm-border-light flex items-center justify-center text-espresso hover:border-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium text-espresso w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-warm-border-light flex items-center justify-center text-espresso hover:border-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-warm-gray hover:text-espresso transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-warm-border-light px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-warm-gray uppercase tracking-wide">Subtotal</span>
              <span className="font-serif text-xl text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-gray">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-espresso font-sans text-sm font-medium tracking-wide uppercase py-4 hover:bg-gold-light transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
