import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { getImageUrl } from '@/lib/images'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

export function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal, count } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-velmora-text/30 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-velmora-bg shadow-soft transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-border px-6 py-5">
            <h2 className="font-serif text-xl uppercase tracking-widest text-velmora-text">
              Your Cart ({count})
            </h2>
            <button onClick={() => setIsOpen(false)} aria-label="Close cart">
              <X size={22} className="text-velmora-text" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={40} className="mb-4 text-velmora-border-strong" />
              <p className="font-serif text-xl text-velmora-text mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-muted mb-6">Discover pieces crafted to be treasured.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-velmora-accent px-8 py-3 text-xs font-sans font-medium uppercase tracking-widest text-white hover:bg-velmora-accent-hover transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.product.id}-${item.variant.id}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-bg-warm">
                        <img
                          alt={item.product.name}
                          src={getImageUrl(item.product.imgId)}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p
                            id={`cart-category-${item.product.id}`}
                            className="text-[10px] font-sans uppercase tracking-widest text-velmora-muted"
                          >
                            {item.product.category}
                          </p>
                          <h3
                            id={`cart-title-${item.product.id}`}
                            className="font-serif text-sm uppercase tracking-widest text-velmora-text"
                          >
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-velmora-muted mt-0.5">{item.variant.label}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-velmora-border">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.variant.id, item.quantity - 1)
                              }
                              className="px-2 py-1 text-velmora-text hover:bg-velmora-bg-warm"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 text-xs font-sans text-velmora-text min-w-[1.5rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.variant.id, item.quantity + 1)
                              }
                              className="px-2 py-1 text-velmora-text hover:bg-velmora-bg-warm"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-sans text-velmora-text">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                            <button
                              onClick={() => removeItem(item.product.id, item.variant.id)}
                              className="text-velmora-muted hover:text-velmora-accent"
                              aria-label="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-border px-6 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-sm text-velmora-muted">Subtotal</span>
                  <span className="font-serif text-lg text-velmora-text">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-velmora-muted mb-5">Shipping & taxes calculated at checkout.</p>
                <button className="w-full bg-velmora-accent py-4 text-xs font-sans font-medium uppercase tracking-widest text-white hover:bg-velmora-accent-hover transition-colors">
                  Checkout
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-full border border-velmora-border py-3 text-xs font-sans font-medium uppercase tracking-widest text-velmora-text hover:bg-velmora-bg-warm transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
