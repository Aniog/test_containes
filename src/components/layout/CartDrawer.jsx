import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import StrkImage from '@/components/common/StrkImage'
import AccentButton from '@/components/common/AccentButton'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart()
  const drawerRef = useImageLoader([isCartOpen, items.length])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button type="button" aria-label="Close cart" className="absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <aside ref={drawerRef} className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawer-in flex-col bg-velmora-porcelain text-velmora-espresso shadow-velvet">
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-umber">Your cart</p>
            <h2 className="font-serif text-3xl font-medium">Golden edits</h2>
          </div>
          <button type="button" onClick={() => setIsCartOpen(false)} className="rounded-full border border-velmora-sand p-2 text-velmora-espresso transition hover:border-velmora-champagne hover:bg-velmora-mist" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-velmora-sand bg-velmora-ivory p-8 text-center text-velmora-espresso">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-champagne" />
              <h3 className="font-serif text-3xl">Your cart is quiet</h3>
              <p className="mt-2 text-sm leading-6 text-velmora-umber">Add a piece from the collection to begin your Velmora edit.</p>
              <AccentButton to="/shop" className="mt-6" onClick={() => setIsCartOpen(false)}>Shop now</AccentButton>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-sand pb-5">
                  <StrkImage
                    id={`cart-${item.product.id}-${item.tone}`}
                    query={`[${item.product.descId}] [${item.product.titleId}]`}
                    ratio="1x1"
                    width="240"
                    alt={item.product.name}
                    className="h-22 w-22 rounded-2xl bg-velmora-mist object-cover"
                  />
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-base font-semibold uppercase tracking-[0.14em] text-velmora-espresso">{item.product.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-umber">{item.tone} tone</p>
                      </div>
                      <p className="font-bold text-velmora-espresso">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-sand bg-white text-velmora-espresso">
                        <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.key, item.quantity - 1)} className="p-2 text-velmora-espresso hover:text-velmora-champagne"><Minus className="h-4 w-4" /></button>
                        <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.key, item.quantity + 1)} className="p-2 text-velmora-espresso hover:text-velmora-champagne"><Plus className="h-4 w-4" /></button>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.key)} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-umber underline-offset-4 transition hover:text-velmora-espresso hover:underline">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand bg-velmora-ivory px-5 py-5 text-velmora-espresso">
          <div className="mb-4 flex items-center justify-between text-base font-bold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-4 text-sm leading-6 text-velmora-umber">Shipping and duties are calculated at checkout. Complimentary worldwide shipping is included.</p>
          <AccentButton className="w-full">Checkout later</AccentButton>
        </div>
      </aside>
    </div>
  )
}
