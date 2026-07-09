import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../contexts/CartContext.jsx'
import strkImgConfig from '../strk-img-config.json'

function getCartItemImage(productId) {
  const config = strkImgConfig[`product-card-${productId}`]
  if (!config?.picked) return null
  const result = config.results?.find(r => r.id === config.picked)
  return result?.url || null
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg uppercase tracking-widest text-velmora-charcoal">
            Your Cart ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity">
            <X className="w-5 h-5 text-velmora-charcoal" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" strokeWidth={1} />
            <p className="font-serif text-lg text-velmora-muted">Your cart is empty</p>
            <p className="text-sm text-velmora-taupe mt-2 text-center">
              Discover our bestselling pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-8 bg-velmora-charcoal text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0 overflow-hidden">
                    <img
                      src={getCartItemImage(item.id) || 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-velmora-charcoal mt-1.5">${Number(item.price).toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-taupe underline hover:text-velmora-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-velmora-muted">Subtotal</span>
                <span className="font-serif text-lg text-velmora-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-velmora-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-velmora-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-velmora-charcoal text-velmora-charcoal py-3.5 text-xs uppercase tracking-widest hover:bg-velmora-charcoal hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}