import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, itemCount, subtotal, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart()

  return (
    <div className={isCartOpen ? 'fixed inset-0 z-50' : 'pointer-events-none fixed inset-0 z-50'} aria-hidden={!isCartOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-velmora-ink/45 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-drawer transition duration-500 sm:w-[28rem] ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-label text-velmora-goldDark">Shopping Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart ({itemCount})</h2>
          </div>
          <button type="button" onClick={() => setIsCartOpen(false)} className="rounded-full border border-velmora-sand p-2 text-velmora-ink hover:bg-velmora-champagne" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-4xl text-velmora-ink">Your bag is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cocoa/75">Add a luminous piece for yourself or someone you love.</p>
              <Button to="/shop" className="mt-6" onClick={() => setIsCartOpen(false)}>Shop Jewelry</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border-b border-velmora-sand/80 pb-4">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link onClick={() => setIsCartOpen(false)} to={`/products/${item.slug}`} className="font-serif text-sm font-semibold uppercase tracking-product text-velmora-ink hover:text-velmora-goldDark">
                        {item.name}
                      </Link>
                      <p className="mt-2 text-xs uppercase tracking-label text-velmora-cocoa/70">{item.variant} tone · {item.category}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} className="self-start text-xs font-bold uppercase tracking-label text-velmora-cocoa/70 hover:text-velmora-ink">Remove</button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-porcelain text-velmora-ink">
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2" aria-label={`Decrease ${item.name} quantity`}><Minus className="h-4 w-4" /></button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2" aria-label={`Increase ${item.name} quantity`}><Plus className="h-4 w-4" /></button>
                    </div>
                    <p className="font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-velmora-sand bg-velmora-porcelain px-5 py-5">
          <div className="flex items-center justify-between text-velmora-ink">
            <span className="text-sm font-semibold uppercase tracking-label">Subtotal</span>
            <span className="font-serif text-3xl">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-cocoa/75">Shipping and taxes are calculated at checkout. Demo cart only.</p>
          <Button className="mt-4 w-full" disabled={items.length === 0}>Checkout</Button>
        </div>
      </aside>
    </div>
  )
}
