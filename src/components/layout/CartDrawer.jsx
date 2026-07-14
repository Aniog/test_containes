import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { cartItems, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-[60] ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-editorial transition duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">Your Cart</p>
            <h2 className="font-serif text-3xl">Curated pieces</h2>
          </div>
          <button type="button" onClick={() => setIsCartOpen(false)} className="rounded-full border border-velmora-linen p-2 transition hover:border-velmora-champagne" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-velmora-ink">Your jewelry box is empty.</p>
              <p className="mt-3 text-sm leading-6 text-velmora-sage">Discover demi-fine gold pieces made for everyday radiance.</p>
              <Link to="/shop" onClick={() => setIsCartOpen(false)} className="mt-6 rounded-full bg-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-cream transition hover:bg-velmora-champagne hover:text-velmora-ink">Shop now</Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => {
                const { product } = item
                return (
                  <div key={`${product.id}-${item.variant}`} className="grid grid-cols-[96px_1fr] gap-4 border-b border-velmora-linen pb-5">
                    <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-velmora-linen px-3 text-center shadow-soft">
                      <span className="font-serif text-base uppercase leading-6 tracking-luxury text-velmora-bronze">{product.category}</span>
                    </div>
                    <div className="min-w-0 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-lg uppercase tracking-luxury text-velmora-ink">{product.name}</h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-velmora-sage">{item.variant}</p>
                        </div>
                        <p className="font-semibold text-velmora-ink">${product.price * item.quantity}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-linen bg-white/50">
                          <button type="button" onClick={() => updateQuantity(product.id, item.variant, item.quantity - 1)} className="p-2 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                          <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(product.id, item.variant, item.quantity + 1)} className="p-2 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                        </div>
                        <button type="button" onClick={() => removeFromCart(product.id, item.variant)} className="rounded-full p-2 text-velmora-sage transition hover:text-velmora-ink" aria-label={`Remove ${product.name}`}><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className="border-t border-velmora-linen px-6 py-6">
          <div className="mb-4 flex items-center justify-between text-velmora-ink">
            <span className="text-sm uppercase tracking-[0.18em] text-velmora-sage">Subtotal</span>
            <span className="font-serif text-3xl">${subtotal}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-cream">Checkout later</button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-sage">Checkout integration ready. Free shipping applies over $50.</p>
        </div>
      </aside>
    </div>
  )
}
