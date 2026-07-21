import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'
import { useCart } from './CartContext'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function CartDrawer() {
  const { enrichedItems, isCartOpen, removeFromCart, setIsCartOpen, subtotal, updateQuantity } = useCart()
  const cartRef = useStrkImages([isCartOpen, enrichedItems.length])

  return (
    <div ref={cartRef} className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-obsidian/55 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Close cart overlay"
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-obsidian shadow-editorial transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">Your edit</p>
            <h2 className="font-serifDisplay text-3xl text-velmora-obsidian">Cart</h2>
          </div>
          <button type="button" className="rounded-full border border-velmora-espresso/10 p-2 text-velmora-obsidian" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {enrichedItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-obsidian">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-gold" strokeWidth={1.3} />
              <p className="font-serifDisplay text-2xl">Your cart is waiting.</p>
              <p className="mt-2 font-sansBody text-sm leading-6 text-velmora-muted">Add a favorite piece and it will appear here.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {enrichedItems.map(({ product, quantity, tone }) => {
                const titleId = `cart-${product.id}-${tone}-title`.toLowerCase()
                return (
                  <article key={`${product.id}-${tone}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-espresso/10 pb-5">
                    <ImagePlaceholder alt={product.name} className="h-24 w-22 rounded-2xl object-cover" imgId={`cart-${product.id}-${tone}-img`} query={`[${titleId}]`} ratio="1x1" width="300" />
                    <div>
                      <h3 id={titleId} className="font-serifDisplay text-lg uppercase tracking-product text-velmora-obsidian">{product.name}</h3>
                      <p className="mt-1 font-sansBody text-xs uppercase tracking-nav text-velmora-muted">{tone} tone · {formatPrice(product.price)}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-espresso/10 bg-velmora-silk text-velmora-obsidian">
                          <button type="button" className="p-2" onClick={() => updateQuantity(product.id, tone, quantity - 1)} aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                          <span className="min-w-8 text-center font-sansBody text-sm">{quantity}</span>
                          <button type="button" className="p-2" onClick={() => updateQuantity(product.id, tone, quantity + 1)} aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <button type="button" className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-bronze" onClick={() => removeFromCart(product.id, tone)}>Remove</button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-espresso/10 bg-velmora-silk px-6 py-6 text-velmora-obsidian">
          <div className="flex justify-between font-sansBody text-sm font-bold uppercase tracking-nav"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <p className="mt-2 font-sansBody text-xs leading-5 text-velmora-muted">Shipping and taxes calculated at checkout.</p>
          <button type="button" className="mt-5 w-full rounded-full bg-velmora-gold px-6 py-4 font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-obsidian shadow-softGold transition hover:bg-velmora-bronze hover:text-velmora-cream">Checkout later</button>
        </div>
      </aside>
    </div>
  )
}
