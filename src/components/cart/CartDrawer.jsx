import { useCart } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-warm-dark" />
            <h2 className="font-sans text-sm tracking-section uppercase text-warm-dark font-medium">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button onClick={closeCart} className="text-warm-dark/60 hover:text-warm-dark transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted mb-4" />
              <p className="font-serif text-lg text-warm-dark">Your bag is empty</p>
              <p className="font-sans text-sm text-muted mt-2">Discover something beautiful to add.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 font-sans text-xs tracking-btn uppercase bg-gold text-cream px-8 py-3 hover:bg-gold-light transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-warm-white rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs tracking-product uppercase text-muted text-center leading-tight px-1">
                      {item.product.name}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="font-serif text-sm tracking-product uppercase text-warm-dark hover:text-gold transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-sans text-xs text-muted mt-1">
                      Tone: {item.tone === 'gold' ? 'Gold' : 'Silver'}
                    </p>
                    <p className="font-sans text-sm text-warm-dark font-medium mt-2">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 border border-warm-border rounded flex items-center justify-center text-warm-dark/60 hover:text-warm-dark hover:border-warm-dark/40 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm text-warm-dark w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 border border-warm-border rounded flex items-center justify-center text-warm-dark/60 hover:text-warm-dark hover:border-warm-dark/40 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-muted hover:text-warm-dark font-sans transition-colors"
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
          <div className="border-t border-warm-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg text-warm-dark">${totalPrice}</span>
            </div>
            <p className="font-sans text-xs text-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full font-sans text-xs tracking-btn uppercase bg-gold text-cream py-4 hover:bg-gold-light transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
