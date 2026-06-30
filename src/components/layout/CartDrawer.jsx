import { Minus, Plus, X, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { StrkImg } from '@/components/Image'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeFromCart, subtotal, count } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-velmora-ink/40" onClick={closeCart} />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-velmora-surface shadow-2xl transition-transform duration-300 flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-velmora-hairline relative z-20 bg-velmora-surface">
            <h2 className="font-serif text-2xl text-velmora-ink">Your Cart ({count})</h2>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-2 text-velmora-ink hover:text-velmora-accent transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <p className="font-serif text-xl text-velmora-ink mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-ink-muted mb-6">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={closeCart}
                className="bg-velmora-ink text-white px-8 py-3 uppercase tracking-widest text-xs font-sans font-medium hover:bg-velmora-accent transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-bg-alt flex-shrink-0 overflow-hidden">
                      <StrkImg
                        id={`cart-${item.id}-${item.tone}`}
                        query={item.imageQuery}
                        ratio="4x5"
                        width={200}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm uppercase tracking-velmora text-velmora-ink truncate">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.tone)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="text-velmora-ink-muted hover:text-velmora-error transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="font-sans text-xs text-velmora-ink-muted mt-1">
                        Tone: {item.tone.charAt(0).toUpperCase() + item.tone.slice(1)}
                      </p>
                      <p className="font-sans text-sm text-velmora-ink mt-2">${item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center border border-velmora-hairline text-velmora-ink hover:border-velmora-accent transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans text-sm text-velmora-ink w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center border border-velmora-hairline text-velmora-ink hover:border-velmora-accent transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-velmora-hairline bg-velmora-bg">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-sm text-velmora-ink-muted uppercase tracking-widest">
                    Subtotal
                  </span>
                  <span className="font-sans text-lg text-velmora-ink">${subtotal}</span>
                </div>
                <p className="font-sans text-xs text-velmora-ink-muted mb-4">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="w-full bg-velmora-accent text-white py-4 uppercase tracking-widest text-xs font-sans font-medium hover:bg-velmora-accent-hover transition-colors">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 border border-velmora-ink text-velmora-ink py-3 uppercase tracking-widest text-xs font-sans font-medium hover:bg-velmora-ink hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  )
}
