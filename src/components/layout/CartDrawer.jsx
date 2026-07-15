import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { calculateCartTotal, formatPrice } from '@/lib/cart'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const drawerRef = useRef(null)
  const subtotal = calculateCartTotal(items)

  useEffect(() => {
    if (!isOpen) return undefined
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-velmora-ink/55 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside ref={drawerRef} className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-2xl transition-transform duration-500 sm:w-[28rem] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-sage">Your Bag</p>
            <h2 className="font-serifDisplay text-3xl text-velmora-ink">Velmora Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-linen p-2 text-velmora-ink transition hover:bg-velmora-cream" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-champagne" />
              <p className="font-serifDisplay text-3xl text-velmora-ink">Your bag is quiet for now.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-espresso/75">Add demi-fine favorites and they will appear here for a future checkout connection.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.cartKey} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-linen pb-5">
                  <div className="flex aspect-square w-full items-center justify-center bg-velmora-cream text-velmora-champagne">
                    <ShoppingBag className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-sage">{item.tone} tone</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-linen bg-velmora-cream text-velmora-ink">
                        <button type="button" onClick={() => onUpdateQuantity(item.cartKey, item.quantity - 1)} className="p-2 transition hover:bg-velmora-linen/50" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.cartKey, item.quantity + 1)} className="p-2 transition hover:bg-velmora-linen/50" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.cartKey)} className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-antique transition hover:text-velmora-ink">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-velmora-linen bg-velmora-cream px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-velmora-ink">
            <span className="text-sm font-semibold uppercase tracking-[0.24em]">Subtotal</span>
            <span className="font-serifDisplay text-2xl">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="w-full bg-velmora-champagne px-5 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-antique hover:text-velmora-cream">
            Checkout Preview
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-espresso/70">Taxes and checkout can be connected later.</p>
        </div>
      </aside>
    </div>
  )
}
