import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-luxury transition duration-500 sm:w-[28rem] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button type="button" onClick={() => setIsCartOpen(false)} className="rounded-full p-2 text-velmora-ink hover:bg-velmora-sand/50" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-gold" />
            <h3 className="mt-5 font-serif text-3xl text-velmora-ink">Your jewelry box is waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a demi-fine piece for everyday glow or a ready-to-gift moment.</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="mt-8 rounded-full bg-velmora-espresso px-7 py-3 text-xs font-semibold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso"
            >
              Shop Bestsellers
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-5">
                {items.map((item) => {
                  const titleId = `cart-${item.product.id}-${item.tone}-title`
                  const descId = `cart-${item.product.id}-${item.tone}-desc`
                  return (
                    <div key={`${item.id}-${item.tone}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-sand/80 pb-5">
                      <div className="flex aspect-square w-full items-center justify-center bg-velmora-sand/50 text-velmora-gold">
                        <ShoppingBag className="h-7 w-7" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 id={titleId} className="font-serif text-lg uppercase tracking-luxury text-velmora-ink">{item.product.name}</h3>
                            <p id={descId} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.tone} tone · {item.product.material}</p>
                          </div>
                          <p className="text-sm font-semibold text-velmora-ink">${item.product.price * item.quantity}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                            <button type="button" className="p-2" onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} aria-label="Decrease quantity">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                            <button type="button" className="p-2" onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} aria-label="Increase quantity">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button type="button" className="text-xs font-semibold uppercase tracking-widest text-velmora-taupe underline-offset-4 hover:text-velmora-gold hover:underline" onClick={() => removeItem(item.id, item.tone)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="border-t border-velmora-sand bg-velmora-ivory px-6 py-6 text-velmora-ink">
              <div className="flex items-center justify-between font-serif text-2xl">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="mt-5 w-full rounded-full bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-champagne">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
