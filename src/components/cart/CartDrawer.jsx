import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { placeholderSvg } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isCartOpen || items.length === 0) return undefined
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [isCartOpen, items.length])

  return (
    <div className={`fixed inset-0 z-50 transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
      <aside ref={drawerRef} className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-2xl transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">Your bag</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Cart</h2>
          </div>
          <button type="button" className="rounded-full border border-velmora-espresso/15 p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-6 h-12 w-12 text-velmora-gold" />
            <h3 className="font-serif text-3xl text-velmora-espresso">Your bag is waiting</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a demi-fine piece for gifting, layering, or a little everyday ceremony.</p>
            <Link to="/shop" onClick={() => setIsCartOpen(false)} className="mt-8 inline-flex items-center justify-center bg-velmora-gold px-7 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">
              Shop jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 border-b border-velmora-espresso/10 pb-6">
                    <Link to={`/product/${item.product.slug}`} onClick={() => setIsCartOpen(false)} className="h-24 w-20 shrink-0 overflow-hidden bg-velmora-champagne">
                      <img alt={item.product.name} className="h-full w-full object-cover" data-strk-img-id={`cart-${item.variant.toLowerCase()}-${item.product.imageId}`} data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`} data-strk-img-ratio="3x4" data-strk-img-width="240" src={placeholderSvg} />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link to={`/product/${item.product.slug}`} onClick={() => setIsCartOpen(false)} className="font-serif text-xl uppercase tracking-[0.18em] text-velmora-espresso transition hover:text-velmora-gold">{item.product.name}</Link>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.variant} tone</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center border border-velmora-espresso/15 text-velmora-espresso">
                          <button type="button" className="p-2 transition hover:text-velmora-gold" aria-label="Decrease quantity" onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}><Minus className="h-3.5 w-3.5" /></button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button type="button" className="p-2 transition hover:text-velmora-gold" aria-label="Increase quantity" onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <p className="text-sm font-semibold text-velmora-espresso">${item.product.price * item.quantity}</p>
                      </div>
                    </div>
                    <button type="button" className="self-start text-velmora-taupe transition hover:text-velmora-gold" aria-label={`Remove ${item.product.name}`} onClick={() => removeFromCart(item.productId, item.variant)}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-espresso/10 px-6 py-6">
              <div className="mb-5 flex items-center justify-between font-semibold text-velmora-espresso"><span>Subtotal</span><span>${subtotal}</span></div>
              <button type="button" className="w-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">Checkout coming soon</button>
              <p className="mt-3 text-center text-xs text-velmora-taupe">Taxes and shipping calculated at checkout.</p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
