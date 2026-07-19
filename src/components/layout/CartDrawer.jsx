import { Minus, Plus, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'

export default function CartDrawer() {
  const { items, totals, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <button type="button" aria-label="Close cart overlay" onClick={() => setIsCartOpen(false)} className={`absolute inset-0 bg-velmora-espresso/45 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-editorial transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div><p className="text-xs uppercase tracking-luxury text-velmora-taupe">Your Bag</p><h2 className="font-serif text-3xl">Cart</h2></div>
          <button type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center"><div><p className="font-serif text-3xl">Your cart is quietly waiting.</p><p className="mt-3 text-sm text-velmora-taupe">Add a piece of everyday gold to begin.</p></div></div>
          ) : items.map((item) => (
            <div key={item.lineId} className="flex gap-4 border-b border-velmora-line py-5">
              <div className="grid h-24 w-20 shrink-0 place-items-center rounded-sm border border-velmora-line bg-velmora-stone text-velmora-antique"><span className="font-serif text-3xl">V</span></div>
              <div className="flex flex-1 flex-col"><Link to={`/products/${item.product.slug}`} onClick={() => setIsCartOpen(false)} className="font-serif text-lg uppercase tracking-product text-velmora-espresso">{item.product.name}</Link><p className="mt-1 text-sm text-velmora-taupe">{item.variant} tone · {formatPrice(item.product.price)}</p><div className="mt-auto flex items-center justify-between"><div className="flex items-center border border-velmora-line"><button type="button" className="p-2" onClick={() => updateQuantity(item.lineId, item.quantity - 1)}><Minus className="h-3 w-3" /></button><span className="min-w-8 text-center text-sm">{item.quantity}</span><button type="button" className="p-2" onClick={() => updateQuantity(item.lineId, item.quantity + 1)}><Plus className="h-3 w-3" /></button></div><button type="button" aria-label="Remove item" onClick={() => removeItem(item.lineId)} className="text-velmora-taupe hover:text-velmora-espresso"><Trash2 className="h-4 w-4" /></button></div></div>
            </div>
          ))}
        </div>
        <div className="border-t border-velmora-line px-6 py-6"><div className="mb-4 flex items-center justify-between text-sm uppercase tracking-luxury"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div><button type="button" className="w-full bg-velmora-espresso px-6 py-4 text-sm font-semibold uppercase tracking-luxury text-velmora-porcelain transition hover:bg-velmora-cocoa">Checkout Preview</button><p className="mt-3 text-center text-xs text-velmora-taupe">Shipping and taxes calculated at checkout.</p></div>
      </aside>
    </div>
  )
}
