import { X, Minus, Plus, Trash2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import ProductImage from '@/components/products/ProductImage'

export default function CartDrawer({ open, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 text-velmora-espresso" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button type="button" className="absolute inset-0 h-full w-full cursor-default bg-velmora-espresso/45 backdrop-blur-sm" onClick={onClose} aria-label="Close cart" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory shadow-editorial">
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Velmora Pieces</h2>
          </div>
          <button type="button" className="rounded-full bg-transparent p-2 text-velmora-espresso hover:text-velmora-champagne" onClick={onClose} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-velmora-espresso">Your jewelry box is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">Add a bestselling cuff, huggie, or necklace to begin your Velmora collection.</p>
              <Button className="mt-7" onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-mist pb-5">
                  <ProductImage product={item} imageId={`cart-${item.id}`} queryId={`cart-${item.id}`} className="aspect-square border border-velmora-mist" ratio="1x1" width="300" />
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg uppercase tracking-luxury text-velmora-espresso">{item.name}</h3>
                        <p className="mt-1 text-xs text-velmora-taupe">{item.material}</p>
                      </div>
                      <button type="button" className="bg-transparent p-1 text-velmora-taupe hover:text-velmora-espresso" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-mist bg-velmora-porcelain">
                        <button type="button" className="bg-transparent p-2 text-velmora-espresso" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-8 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                        <button type="button" className="bg-transparent p-2 text-velmora-espresso" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <span className="text-sm font-semibold text-velmora-espresso">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist bg-velmora-porcelain px-5 py-5">
          <div className="flex items-center justify-between text-sm text-velmora-taupe">
            <span>Subtotal</span>
            <span className="font-serif text-2xl font-semibold text-velmora-espresso">${subtotal}</span>
          </div>
          <p className="mt-2 text-xs text-velmora-taupe">Shipping and taxes are calculated at checkout.</p>
          <Button className="mt-5 w-full" variant="accent">Checkout Preview</Button>
        </div>
      </aside>
    </div>
  )
}
