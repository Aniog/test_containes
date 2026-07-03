import { useCart } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer({ children }) {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, total } = useCart()
  const itemsList = Object.entries(items).map(([key, item]) => ({ key, ...item }))

  return (
    <>
      {children}
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[60] transition-opacity" onClick={closeCart} />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-surface z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
            <h2 className="font-serif text-xl tracking-wide text-brand-text-dark">Your Bag</h2>
            <button onClick={closeCart} className="text-brand-muted hover:text-brand-text-dark transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {itemsList.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-border mb-4" />
                <p className="font-serif text-lg text-brand-text-dark mb-2">Your bag is empty</p>
                <p className="text-sm text-brand-muted font-light mb-6">Discover something you love.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="bg-brand-accent text-white uppercase tracking-[0.15em] text-xs font-medium px-8 py-3 hover:bg-brand-accent-hover transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {itemsList.map((item) => (
                  <div key={item.key} className="flex gap-4">
                    <div className="w-20 h-24 bg-brand-card flex-shrink-0">
                      <img
                        data-strk-img-id={item.image?.imgId ? `${item.image.imgId}-cart` : `cart-${item.key}`}
                        data-strk-img={item.image ? `[${item.image.descId}] [${item.image.titleId}]` : `[${item.name}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-brand-text-dark truncate">{item.name}</h3>
                      <p className="text-xs text-brand-muted mt-1">{item.variant}</p>
                      <p className="text-sm font-medium text-brand-text-dark mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-6 h-6 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium text-brand-text-dark w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-6 h-6 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto text-xs text-brand-muted hover:text-brand-accent transition-colors underline"
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
          {itemsList.length > 0 && (
            <div className="border-t border-brand-border px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-brand-muted font-light">Subtotal</span>
                <span className="text-lg font-serif text-brand-text-dark">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-brand-muted font-light mb-4">Shipping calculated at checkout</p>
              <button className="w-full bg-brand-accent text-white uppercase tracking-[0.15em] text-xs font-medium py-3 hover:bg-brand-accent-hover transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
