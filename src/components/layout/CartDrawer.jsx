import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import ProductImage from '../product/ProductImage.jsx'

export default function CartDrawer() {
  const { items, subtotal, isOpen, setIsOpen, removeItem, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-espresso/55 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-cocoa shadow-glow transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-mist px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-antique">Your cart</p>
            <h2 className="font-serif text-3xl font-semibold">Velmora Bag</h2>
          </div>
          <button type="button" className="rounded-full border border-mist p-3 transition hover:border-champagne hover:text-antique" onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="grid flex-1 place-items-center px-8 text-center">
            <div>
              <ShoppingBag className="mx-auto h-12 w-12 text-antique" />
              <h3 className="mt-5 font-serif text-3xl font-semibold">Your bag is waiting</h3>
              <p className="mt-3 text-sm leading-6 text-stone">Add a piece of demi-fine gold jewelry to begin your edit.</p>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="mt-7 inline-flex bg-cocoa px-6 py-3 text-xs font-bold uppercase tracking-luxe text-ivory transition hover:bg-antique">Shop Velmora</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.key} className="grid grid-cols-[92px_1fr] gap-4 border-b border-mist/70 pb-6">
                    <div className="aspect-square overflow-hidden bg-linen">
                      <ProductImage product={item.product} imageId={`cart-${item.product.id}-${item.tone}`} contextId={item.product.titleId} ratio="1x1" width="240" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-base font-semibold uppercase tracking-product text-cocoa">{item.product.name}</h3>
                          <p className="mt-1 text-xs uppercase tracking-luxe text-stone">{item.tone} tone</p>
                        </div>
                        <span className="font-serif text-xl text-cocoa">${item.product.price * item.quantity}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-mist">
                          <button type="button" className="grid h-9 w-9 place-items-center text-cocoa transition hover:bg-linen" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                          <span className="grid h-9 w-9 place-items-center text-sm text-cocoa">{item.quantity}</span>
                          <button type="button" className="grid h-9 w-9 place-items-center text-cocoa transition hover:bg-linen" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <button type="button" className="text-xs font-semibold uppercase tracking-luxe text-stone underline-offset-4 transition hover:text-antique hover:underline" onClick={() => removeItem(item.key)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-mist bg-parchment px-6 py-6">
              <div className="flex items-center justify-between font-serif text-2xl text-cocoa"><span>Subtotal</span><span>${subtotal}</span></div>
              <p className="mt-2 text-xs leading-5 text-stone">Shipping and returns are calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="mt-5 w-full bg-cocoa px-6 py-4 text-xs font-bold uppercase tracking-luxe text-ivory transition hover:bg-antique">Checkout Preview</button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
