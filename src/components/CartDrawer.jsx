import { useCart } from '../context/CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

function getProductImageUrl(productId) {
  const key = `${productId}-bestseller`
  const entry = strkImgConfig[key]
  if (entry && entry.picked && entry.results) {
    const match = entry.results.find((r) => r.id === entry.picked)
    if (match) return match.url
  }
  // Fallback: try -shop key
  const shopKey = `${productId}-shop`
  const shopEntry = strkImgConfig[shopKey]
  if (shopEntry && shopEntry.picked && shopEntry.results) {
    const match = shopEntry.results.find((r) => r.id === shopEntry.picked)
    if (match) return match.url
  }
  return null
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()
  const cartItems = Object.entries(items)

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${isOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-elevated transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
          <h2 className="font-serif text-heading-3 tracking-wide text-charcoal">
            Your Bag
            <span className="text-body-sm font-sans text-warm-gray ml-2">
              ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </span>
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 220px)' }}>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag size={48} className="text-warm-gray-light mb-4" strokeWidth={1} />
              <p className="font-serif text-heading-3 text-charcoal mb-2">
                Your bag is empty
              </p>
              <p className="text-body-sm text-warm-gray mb-6">
                Discover our collection of handcrafted jewelry
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(([key, item]) => (
                <div
                  key={key}
                  className="flex gap-4 py-4 border-b border-charcoal/5 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-cream-dark rounded overflow-hidden flex-shrink-0">
                    {(() => {
                      const imageUrl = getProductImageUrl(item.productId)
                      return imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gold/10 to-gold/5" />
                      )
                    })()}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-product-name text-body-sm truncate">
                      {item.name}
                    </p>
                    <p className="text-body-sm text-warm-gray mt-0.5">
                      {item.variantLabel}
                    </p>
                    <p className="text-body font-semibold text-charcoal mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(key, item.quantity - 1)}
                        className="w-7 h-7 border border-charcoal/20 rounded-full flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-body-sm font-medium text-charcoal w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(key, item.quantity + 1)}
                        className="w-7 h-7 border border-charcoal/20 rounded-full flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(key)}
                        className="ml-auto text-body-sm text-warm-gray hover:text-charcoal underline transition-colors"
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
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-cream border-t border-charcoal/10 px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-body font-medium uppercase tracking-wide text-warm-gray">
                Subtotal
              </span>
              <span className="font-serif text-heading-3 text-charcoal">
                ${totalPrice}
              </span>
            </div>
            <p className="text-body-sm text-warm-gray mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-gold w-full text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
