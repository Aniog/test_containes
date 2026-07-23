import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import ProductImage from '@/components/product/ProductImage.jsx'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsCartOpen(false)}
        aria-label="Close cart"
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-2xl transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-velmora-clay">Your cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Velmora Bag</h2>
          </div>
          <button type="button" onClick={() => setIsCartOpen(false)} className="rounded-full border border-velmora-ink/15 p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-clay" aria-label="Close cart drawer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
            <h3 className="font-serif text-3xl text-velmora-ink">Your bag is waiting</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-ink/70">Add an heirloom-inspired piece to begin your Velmora ritual.</p>
            <Link to="/shop" onClick={() => setIsCartOpen(false)} className="mt-7 bg-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-brass">
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
              {items.map(({ product, quantity, tone }) => (
                <div key={`${product.id}-${tone}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                  <div className="overflow-hidden bg-velmora-linen">
                    <ProductImage product={product} contextId="cart-title" className="aspect-square w-full object-cover" />
                  </div>
                  <div className="min-w-0 text-velmora-ink">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-base uppercase leading-tight tracking-[0.16em] text-velmora-ink">{product.name}</p>
                        <p className="mt-1 text-xs text-velmora-ink/60">{tone} tone · ${product.price}</p>
                      </div>
                      <button type="button" onClick={() => removeFromCart(product.id, tone)} className="p-1 text-velmora-ink/45 transition hover:text-velmora-clay" aria-label={`Remove ${product.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-ink/15 text-velmora-ink">
                        <button type="button" onClick={() => updateQuantity(product.id, tone, quantity - 1)} className="p-2 transition hover:bg-velmora-linen" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm">{quantity}</span>
                        <button type="button" onClick={() => updateQuantity(product.id, tone, quantity + 1)} className="p-2 transition hover:bg-velmora-linen" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-velmora-ink">${product.price * quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-ink/10 px-5 py-5">
              <div className="flex items-center justify-between text-velmora-ink">
                <span className="text-sm uppercase tracking-[0.18em]">Subtotal</span>
                <span className="font-serif text-3xl">${subtotal}</span>
              </div>
              <p className="mt-2 text-xs text-velmora-ink/60">Shipping and taxes calculated at checkout. This preview cart is ready for checkout integration later.</p>
              <button type="button" className="mt-5 w-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-gold hover:text-velmora-ink">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
        <span id="cart-title" className="sr-only">Velmora fine gold jewelry shopping bag</span>
      </aside>
    </div>
  )
}
