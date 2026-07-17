import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { getCartSubtotal } from '@/lib/cart'
import { useStrkImages } from '@/lib/useStrkImages'
import ProductImage from '@/components/product/ProductImage'

export default function CartDrawer({ open, items, onClose, onQuantityChange, onRemove }) {
  const subtotal = getCartSubtotal(items)
  const containerRef = useStrkImages([open, items.length])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 backdrop-blur-sm transition duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-2xl transition duration-500 sm:rounded-l-[2rem] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-velmora-linen p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Treasures selected</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-linen p-2 text-velmora-espresso hover:bg-velmora-porcelain" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-velmora-linen bg-velmora-porcelain p-8 text-center text-velmora-espresso">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-champagne" />
              <h3 className="font-serif text-2xl">Your cart is quietly waiting.</h3>
              <p className="mt-2 text-sm leading-6 text-velmora-cocoa">Add a bestselling piece to begin your Velmora ritual.</p>
              <Link to="/shop" onClick={onClose} className="mt-6 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-pearl transition hover:bg-velmora-bronze">
                Shop Jewelry
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[5.5rem_1fr] gap-4 rounded-[1.25rem] border border-velmora-linen bg-white/60 p-3 text-velmora-espresso">
                  <div className="aspect-square overflow-hidden rounded-[1rem] bg-velmora-porcelain">
                    <ProductImage product={item.product} imageId={`cart-${item.key}`} ratio="1x1" width="300" className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-sm uppercase leading-5 tracking-[0.18em] text-velmora-espresso">{item.product.name}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-velmora-cocoa">{item.tone} tone</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.key)} className="rounded-full p-1.5 text-velmora-cocoa hover:bg-velmora-porcelain hover:text-velmora-espresso" aria-label={`Remove ${item.product.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-pearl">
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)} className="p-2 text-velmora-espresso" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity + 1)} className="p-2 text-velmora-espresso" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-serif text-lg text-velmora-espresso">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-linen p-5">
          <div className="mb-4 flex items-center justify-between text-velmora-espresso">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-velmora-cocoa">Subtotal</span>
            <span className="font-serif text-3xl">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-black uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-bronze hover:text-velmora-pearl">
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-cocoa">Secure checkout can be connected when you are ready.</p>
        </div>
      </aside>
    </>
  )
}
