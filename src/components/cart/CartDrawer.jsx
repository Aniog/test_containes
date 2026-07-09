import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, drawerOpen, setDrawerOpen, removeItem, updateQty, cartTotal } = useCart()

  if (!drawerOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-velmora-deep/30" onClick={() => setDrawerOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h3 className="font-serif text-xl tracking-[0.08em]">Your Bag</h3>
          <button onClick={() => setDrawerOpen(false)} className="p-1" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-taupe">
            <ShoppingBag className="w-12 h-12 opacity-30" />
            <p className="text-sm">Your bag is empty</p>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-xs tracking-[0.1em] uppercase underline underline-offset-4 hover:text-velmora-deep transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
            {items.map((item) => (
              <div key={item.key} className="flex gap-4">
                <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 rounded-sm" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm tracking-[0.06em] uppercase">{item.name}</h4>
                  <p className="text-xs text-velmora-taupe mt-0.5">
                    {item.variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </p>
                  <p className="text-sm font-medium mt-1">${item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-velmora-sand">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="p-1.5 hover:bg-velmora-sand transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-medium tabular-nums">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="p-1.5 hover:bg-velmora-sand transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-[10px] tracking-[0.08em] uppercase text-velmora-taupe hover:text-velmora-deep underline underline-offset-2 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-velmora-taupe leading-relaxed">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-velmora-deep text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-charcoal transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
